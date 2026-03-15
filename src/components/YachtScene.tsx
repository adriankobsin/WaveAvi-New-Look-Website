import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import { motion, useInView } from "framer-motion";
import * as THREE from "three";

const OceanPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      (meshRef.current.material as any).distort = 0.3 + Math.sin(clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]} scale={[20, 20, 1]}>
      <planeGeometry args={[1, 1, 64, 64]} />
      <MeshDistortMaterial
        color="#1a3a5c"
        emissive="#0a1f3c"
        emissiveIntensity={0.3}
        roughness={0.2}
        metalness={0.8}
        distort={0.3}
        speed={1.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const YachtHull = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.15 + 0.3;
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Hull body */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.3, 3, 8, 16]} />
        <meshStandardMaterial color="#e8e8e8" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Superstructure */}
      <mesh position={[0, 0.5, -0.3]}>
        <boxGeometry args={[0.5, 0.4, 1.5]} />
        <meshStandardMaterial color="#f0f0f0" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Bridge */}
      <mesh position={[0, 0.85, -0.1]}>
        <boxGeometry args={[0.45, 0.3, 0.8]} />
        <meshStandardMaterial color="#d0e8ff" metalness={0.5} roughness={0.1} transparent opacity={0.6} />
      </mesh>
      {/* Radar mast */}
      <mesh position={[0, 1.2, -0.2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5]} />
        <meshStandardMaterial color="#cccccc" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Glow accent line */}
      <mesh position={[0, 0.15, 0]}>
        <capsuleGeometry args={[0.31, 3.02, 4, 8]} />
        <meshStandardMaterial 
          color="#2d7dd2" 
          emissive="#2d7dd2" 
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffd4a0" />
      <pointLight position={[-5, 3, -5]} intensity={0.4} color="#2d7dd2" />
      <Stars radius={100} depth={50} count={1500} factor={3} saturation={0} fade speed={0.5} />
      <Float speed={0.5} rotationIntensity={0} floatIntensity={0.3}>
        <YachtHull />
      </Float>
      <OceanPlane />
      <Environment preset="night" />
      <fog attach="fog" args={["#070d1a", 5, 25]} />
    </>
  );
};

const YachtScene = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-44 overflow-hidden" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Interactive Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Engineering in 3D
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full h-[500px] md:h-[600px] glass-card overflow-hidden"
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground animate-pulse">
                Loading 3D Scene...
              </div>
            </div>
          }>
            <Canvas
              camera={{ position: [0, 2, 6], fov: 45 }}
              gl={{ antialias: true, alpha: true }}
            >
              <Scene />
            </Canvas>
          </Suspense>
          
          {/* Overlay info */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
            <div>
              <p className="text-xs font-body tracking-[0.2em] uppercase text-ocean mb-1">
                Interactive 3D Model
              </p>
              <p className="text-sm font-body text-muted-foreground">
                Drag to rotate • Scroll to zoom
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground">
                Wave-AVI Technology
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YachtScene;
