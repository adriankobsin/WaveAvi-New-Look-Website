import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import worldMap from "@/assets/world-map.jpg";

// Positions calibrated to the uploaded world map image (Mercator-style)
// The image shows a standard world map ~centered, with continents visible
const offices = [
  {
    entity: "Wave-AVI Ltd.",
    city: "London",
    country: "United Kingdom",
    address: "Room 105, The Oast, Business Centre, New Road, West Malling, East Malling, ME196BJ",
    x: "47.8%",
    y: "30.5%",
    labelSide: "right" as const,
  },
  {
    entity: "Wave-AVI B.V.",
    city: "Haarlem",
    country: "Netherlands",
    address: "Tappersweg 6 F, 2031ET Haarlem, Nederland",
    x: "49.2%",
    y: "29%",
    labelSide: "right" as const,
  },
  {
    entity: "Wave-AVI Co. Ltd.",
    city: "Phuket",
    country: "Thailand",
    address: "100 22 M.5 Srisoonthorn Rd, Tambon Choeng Thale, Phuket, 83110",
    x: "73.5%",
    y: "56%",
    labelSide: "left" as const,
  },
  {
    entity: "Wave-AVI Pte. Ltd.",
    city: "Singapore",
    country: "Singapore",
    address: "68 Circular Road, #02-01, 049422, Singapore",
    x: "74.8%",
    y: "61%",
    labelSide: "left" as const,
  },
];

const GlobalPresence = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="global" className="relative py-32 md:py-44" ref={ref}>
      <div className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-ocean mb-4 block">
            Worldwide
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground">
            Global Presence
          </h2>
          <div className="luxury-divider mt-8" />
        </motion.div>

        {/* Map visualization */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden">
            {/* World map background image */}
            <img
              src={worldMap}
              alt="World map"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Office markers */}
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="absolute group cursor-pointer"
                style={{ left: office.x, top: office.y }}
              >
                <div className="absolute -inset-4 rounded-full bg-ocean/20 animate-pulse" />
                <div
                  className="absolute -inset-2 rounded-full bg-ocean/10 animate-ping"
                  style={{ animationDuration: "3s" }}
                />
                <div className="relative w-3 h-3 rounded-full bg-ocean shadow-[0_0_16px_hsl(210_80%_55%/0.7)]" />
                {/* Hover label */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 ${
                    office.labelSide === "left" ? "right-6" : "left-6"
                  }`}
                >
                  <div className="glass-card px-3 py-2 rounded">
                    <p className="text-sm font-body font-medium text-foreground">
                      {office.city}
                    </p>
                    <p className="text-xs font-body text-muted-foreground">
                      {office.entity}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                x1="47.8%" y1="30.5%" x2="49.2%" y2="29%"
                stroke="hsl(210 80% 55% / 0.25)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.line
                x1="49.2%" y1="29%" x2="73.5%" y2="56%"
                stroke="hsl(210 80% 55% / 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.line
                x1="73.5%" y1="56%" x2="74.8%" y2="61%"
                stroke="hsl(210 80% 55% / 0.25)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </svg>
          </div>

          {/* Office cards with addresses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {offices.map((office, i) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-lg p-6 text-center"
              >
                <MapPin className="w-5 h-5 text-ocean mx-auto mb-3" strokeWidth={1.2} />
                <p className="text-sm font-display font-semibold text-foreground mb-1">
                  {office.entity}
                </p>
                <p className="text-xs font-body font-medium text-ocean mb-3">
                  {office.city}, {office.country}
                </p>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
                  {office.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
