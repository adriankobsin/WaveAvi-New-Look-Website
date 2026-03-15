import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";

const offices = [
  {
    entity: "Wave-AVI Ltd.",
    city: "London",
    country: "United Kingdom",
    address: "Room 105, The Oast, Business Centre, New Road, West Malling, East Malling, ME196BJ",
    mapQuery: "The+Oast,+New+Road,+East+Malling,+West+Malling,+Kent+ME19+6BJ",
  },
  {
    entity: "Wave-AVI B.V.",
    city: "Haarlem",
    country: "Netherlands",
    address: "Tappersweg 6 F, 2031ET Haarlem, Nederland",
    mapQuery: "Tappersweg+6F,+2031ET+Haarlem,+Netherlands",
  },
  {
    entity: "Wave-AVI Co. Ltd.",
    city: "Phuket",
    country: "Thailand",
    address: "100 22 M.5 Srisoonthorn Rd, Tambon Choeng Thale, Phuket, 83110",
    mapQuery: "Srisoonthorn+Rd,+Choeng+Thale,+Phuket+83110,+Thailand",
  },
  {
    entity: "Wave-AVI Pte. Ltd.",
    city: "Singapore",
    country: "Singapore",
    address: "68 Circular Road, #02-01, 049422, Singapore",
    mapQuery: "68+Circular+Road,+Singapore+049422",
  },
];

const GlobalPresence = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selected = offices[selectedIndex];

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

        <div className="relative max-w-5xl mx-auto">
          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-[2/1] rounded-lg overflow-hidden border border-border/50"
          >
            <iframe
              key={selected.mapQuery}
              title={`Map - ${selected.city}`}
              src={`https://www.google.com/maps?q=${selected.mapQuery}&output=embed&z=15`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>

          {/* Office cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {offices.map((office, i) => (
              <motion.button
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                onClick={() => setSelectedIndex(i)}
                className={`glass-card rounded-lg p-6 text-center transition-all duration-300 cursor-pointer ${
                  selectedIndex === i
                    ? "ring-1 ring-ocean shadow-[0_0_20px_hsl(210_80%_55%/0.2)]"
                    : "hover:ring-1 hover:ring-border"
                }`}
              >
                <MapPin
                  className={`w-5 h-5 mx-auto mb-3 transition-colors ${
                    selectedIndex === i ? "text-ocean" : "text-muted-foreground"
                  }`}
                  strokeWidth={1.2}
                />
                <p className="text-sm font-display font-semibold text-foreground mb-1">
                  {office.entity}
                </p>
                <p className={`text-xs font-body font-medium mb-3 transition-colors ${
                  selectedIndex === i ? "text-ocean" : "text-muted-foreground"
                }`}>
                  {office.city}, {office.country}
                </p>
                <p className="text-xs font-body text-muted-foreground leading-relaxed">
                  {office.address}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
