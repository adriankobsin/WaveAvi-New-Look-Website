import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const offices = [
  {
    entity: "Wave-AVI Ltd.",
    city: "London",
    country: "United Kingdom",
    address: "Room 105, The Oast, Business Centre, New Road, West Malling, East Malling, ME196BJ",
    x: "47%",
    y: "28%",
    labelSide: "right" as const,
  },
  {
    entity: "Wave-AVI B.V.",
    city: "Haarlem",
    country: "Netherlands",
    address: "Tappersweg 6 F, 2031ET Haarlem, Nederland",
    x: "49%",
    y: "24%",
    labelSide: "right" as const,
  },
  {
    entity: "Wave-AVI Co. Ltd.",
    city: "Phuket",
    country: "Thailand",
    address: "100 22 M.5 Srisoonthorn Rd, Tambon Choeng Thale, Phuket, 83110",
    x: "72%",
    y: "52%",
    labelSide: "left" as const,
  },
  {
    entity: "Wave-AVI Pte. Ltd.",
    city: "Singapore",
    country: "Singapore",
    address: "68 Circular Road, #02-01, 049422, Singapore",
    x: "74%",
    y: "60%",
    labelSide: "left" as const,
  },
];

// Simplified SVG world map paths (continents outline)
const WorldMapSVG = () => (
  <svg
    viewBox="0 0 1000 500"
    className="w-full h-full"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Grid lines */}
    {[...Array(9)].map((_, i) => (
      <line
        key={`h-${i}`}
        x1="0" y1={(i + 1) * 50}
        x2="1000" y2={(i + 1) * 50}
        stroke="hsl(210 80% 55% / 0.06)"
        strokeWidth="0.5"
      />
    ))}
    {[...Array(19)].map((_, i) => (
      <line
        key={`v-${i}`}
        x1={(i + 1) * 50} y1="0"
        x2={(i + 1) * 50} y2="500"
        stroke="hsl(210 80% 55% / 0.06)"
        strokeWidth="0.5"
      />
    ))}

    {/* North America */}
    <path
      d="M 80 80 Q 120 60 180 70 Q 220 65 240 80 Q 260 70 280 75 Q 290 85 270 100 Q 260 110 250 120 Q 240 140 220 160 Q 200 180 180 200 Q 170 210 150 200 Q 130 190 120 170 Q 100 150 90 130 Q 80 110 80 80 Z"
      fill="hsl(210 80% 55% / 0.08)"
      stroke="hsl(210 80% 55% / 0.25)"
      strokeWidth="1"
    />
    {/* Central America */}
    <path
      d="M 180 200 Q 190 210 200 220 Q 210 240 220 250 Q 215 260 205 255 Q 195 245 185 235 Q 175 220 180 200 Z"
      fill="hsl(210 80% 55% / 0.08)"
      stroke="hsl(210 80% 55% / 0.25)"
      strokeWidth="1"
    />
    {/* South America */}
    <path
      d="M 220 260 Q 240 250 260 260 Q 280 280 290 310 Q 295 340 290 370 Q 280 400 260 420 Q 250 430 240 420 Q 230 400 225 370 Q 220 340 215 310 Q 210 280 220 260 Z"
      fill="hsl(210 80% 55% / 0.08)"
      stroke="hsl(210 80% 55% / 0.25)"
      strokeWidth="1"
    />
    {/* Europe */}
    <path
      d="M 440 70 Q 460 60 480 65 Q 510 70 520 80 Q 530 90 520 110 Q 510 120 500 130 Q 490 140 470 145 Q 450 140 440 130 Q 430 110 435 90 Q 440 80 440 70 Z"
      fill="hsl(210 80% 55% / 0.12)"
      stroke="hsl(210 80% 55% / 0.35)"
      strokeWidth="1"
    />
    {/* UK / British Isles */}
    <path
      d="M 430 85 Q 435 80 440 82 Q 442 90 438 95 Q 433 92 430 85 Z"
      fill="hsl(210 80% 55% / 0.15)"
      stroke="hsl(210 80% 55% / 0.35)"
      strokeWidth="1"
    />
    {/* Africa */}
    <path
      d="M 460 170 Q 490 160 520 170 Q 540 190 550 220 Q 560 260 555 300 Q 545 340 520 370 Q 500 380 480 370 Q 460 340 455 300 Q 450 260 455 220 Q 455 190 460 170 Z"
      fill="hsl(210 80% 55% / 0.08)"
      stroke="hsl(210 80% 55% / 0.25)"
      strokeWidth="1"
    />
    {/* Asia */}
    <path
      d="M 540 60 Q 580 50 640 55 Q 700 60 750 70 Q 790 85 810 110 Q 820 130 810 150 Q 800 170 780 180 Q 760 190 730 195 Q 700 200 670 195 Q 640 185 620 170 Q 600 155 580 140 Q 560 120 545 100 Q 535 80 540 60 Z"
      fill="hsl(210 80% 55% / 0.08)"
      stroke="hsl(210 80% 55% / 0.25)"
      strokeWidth="1"
    />
    {/* Southeast Asia / Indonesia */}
    <path
      d="M 700 220 Q 720 210 740 215 Q 760 225 780 235 Q 790 245 780 255 Q 760 260 740 255 Q 720 245 710 235 Q 700 230 700 220 Z"
      fill="hsl(210 80% 55% / 0.12)"
      stroke="hsl(210 80% 55% / 0.35)"
      strokeWidth="1"
    />
    {/* Thailand / Indochina */}
    <path
      d="M 680 180 Q 700 170 720 180 Q 730 200 725 220 Q 710 225 695 215 Q 680 200 680 180 Z"
      fill="hsl(210 80% 55% / 0.12)"
      stroke="hsl(210 80% 55% / 0.35)"
      strokeWidth="1"
    />
    {/* Australia */}
    <path
      d="M 760 310 Q 800 295 840 300 Q 870 310 880 340 Q 875 370 855 385 Q 830 395 800 390 Q 775 380 765 355 Q 755 330 760 310 Z"
      fill="hsl(210 80% 55% / 0.08)"
      stroke="hsl(210 80% 55% / 0.25)"
      strokeWidth="1"
    />
    {/* Japan */}
    <path
      d="M 820 100 Q 830 90 835 100 Q 838 115 832 125 Q 825 120 820 110 Q 818 105 820 100 Z"
      fill="hsl(210 80% 55% / 0.1)"
      stroke="hsl(210 80% 55% / 0.3)"
      strokeWidth="1"
    />
  </svg>
);

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
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden glass-card">
            {/* SVG World Map */}
            <div className="absolute inset-0">
              <WorldMapSVG />
            </div>

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
                {/* Pulse ring */}
                <div className="absolute -inset-4 rounded-full bg-ocean/20 animate-pulse" />
                <div className="absolute -inset-2 rounded-full bg-ocean/10 animate-ping" style={{ animationDuration: '3s' }} />
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

            {/* Connection lines between offices */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <motion.line
                x1="47%" y1="28%" x2="49%" y2="24%"
                stroke="hsl(210 80% 55% / 0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.line
                x1="49%" y1="24%" x2="72%" y2="52%"
                stroke="hsl(210 80% 55% / 0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.line
                x1="72%" y1="52%" x2="74%" y2="60%"
                stroke="hsl(210 80% 55% / 0.15)"
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
