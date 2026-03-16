import {
  Monitor,
  Music,
  Cpu,
  Lightbulb,
  Thermometer,
  Shield,
  Network,
  Phone,
  PenTool,
  Package,
  Wrench,
  HeadsetIcon,
} from "lucide-react";
import SectorPage from "@/components/SectorPage";
import type { SubService } from "@/components/SectorPage";

const services: SubService[] = [
  {
    icon: Monitor,
    title: "Home Cinema",
    description:
      "Our home cinema solutions transform private spaces into immersive entertainment environments. Each cinema is carefully designed to deliver exceptional picture quality, powerful surround sound, and refined acoustics tailored to the room. From dedicated cinema rooms to multipurpose media spaces, every detail is considered to provide a cinematic experience that is intuitive to use and perfectly integrated with lighting, shading, and control systems.",
  },
  {
    icon: Music,
    title: "Audio Visual",
    description:
      "We design and install bespoke audio visual systems that enhance everyday living and entertainment. From whole-home audio and high-definition video distribution to discreetly integrated displays, our solutions are crafted to deliver outstanding performance while blending seamlessly into your home's interior design. Every system is tailored to your lifestyle, ensuring effortless access to music, television, and streaming throughout the property.",
  },
  {
    icon: Cpu,
    title: "Control Systems",
    description:
      "Our intelligent control systems simplify the way you interact with your home. By bringing audio, video, lighting, climate, and security into a single, easy-to-use interface, we make advanced technology accessible and intuitive. Custom scenes allow multiple systems to work together at the touch of a button, creating a smart home experience that is both powerful and effortless.",
  },
  {
    icon: Lightbulb,
    title: "Lights & Shading",
    description:
      "Smart lighting and shading solutions enhance comfort, ambiance, and efficiency throughout your home. Automated lighting allows you to create the perfect atmosphere for any occasion, while motorized blinds and curtains provide precise control over natural light and privacy. Fully integrated with the home control system, lighting and shading can respond automatically to time of day, activity, or personal preference.",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description:
      "Our climate control solutions ensure consistent comfort in every room of your home. Integrated HVAC and temperature control systems allow you to manage heating, cooling, and ventilation effortlessly. Intelligent automation improves energy efficiency while giving you simple, responsive control over your home's environment.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Advanced residential security systems provide peace of mind while remaining discreet and easy to manage. Integrated surveillance, access control, and monitoring systems allow you to keep an eye on your home locally or remotely. When connected to the central control system, security becomes a seamless part of your overall smart home experience.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "A reliable, high-performance network is the foundation of a modern smart home. We design and install robust wired and wireless networking solutions that support streaming media, smart home control, security, and future technologies. Our networks are built for speed, stability, and scalability, ensuring dependable performance throughout the home.",
  },
  {
    icon: Phone,
    title: "Communications",
    description:
      "Our residential communication systems keep everyone connected within the home and beyond. Integrated intercoms, door entry systems, and phone solutions provide clear and convenient communication across the property. Seamlessly connected to the home network and control system, communications become an effortless part of everyday living.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Our design process begins with understanding how you live and how your home is intended to function. We create carefully engineered audio visual and smart home designs that complement the architecture and interior design while delivering exceptional performance. Working closely with architects, designers, and homeowners, we ensure every system is thoughtfully planned, discreetly integrated, and tailored to your lifestyle, both today and in the future.",
  },
  {
    icon: Package,
    title: "Supply",
    description:
      "We supply premium technology from industry-leading manufacturers, selected for performance, reliability, and long-term support. Every component is chosen to integrate seamlessly within the home environment, delivering refined aesthetics and dependable operation. Through trusted partnerships, we provide solutions that meet the highest standards of quality while supporting elegant, future-ready smart living.",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "Our installation teams deliver meticulous craftsmanship at every stage of the build. Systems are installed with precision, clean cable management, and careful attention to detail to ensure reliability and ease of maintenance. We coordinate seamlessly with the wider project team to maintain timelines, protect design intent, and ensure every system is professionally commissioned and optimized before handover.",
  },
  {
    icon: HeadsetIcon,
    title: "Support",
    description:
      "Our relationship continues long after installation. We provide ongoing support, system maintenance, and upgrades to ensure your technology performs flawlessly over time. From remote assistance and software updates to on-site service, our support services are designed to deliver peace of mind and protect your investment as your home and technology evolve.",
  },
];

const Residential = () => (
  <SectorPage
    sectorLabel="Residential"
    sectorTitle="Luxury Residences"
    subtitle="Smart home technology for ultra-prime properties, engineered for elegance and effortless living."
    services={services}
  />
);

export default Residential;
