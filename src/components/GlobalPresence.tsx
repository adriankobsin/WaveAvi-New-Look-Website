import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const offices = [
  {
    entity: "Wave-AVI Ltd.",
    city: "London",
    country: "United Kingdom",
    address: "Room 105, The Oast, Business Centre, New Road, West Malling, East Malling, ME196BJ",
    x: "48.5%",
    y: "25%",
    labelSide: "right" as const,
  },
  {
    entity: "Wave-AVI B.V.",
    city: "Haarlem",
    country: "Netherlands",
    address: "Tappersweg 6 F, 2031ET Haarlem, Nederland",
    x: "50%",
    y: "23%",
    labelSide: "right" as const,
  },
  {
    entity: "Wave-AVI Co. Ltd.",
    city: "Phuket",
    country: "Thailand",
    address: "100 22 M.5 Srisoonthorn Rd, Tambon Choeng Thale, Phuket, 83110",
    x: "73%",
    y: "55%",
    labelSide: "left" as const,
  },
  {
    entity: "Wave-AVI Pte. Ltd.",
    city: "Singapore",
    country: "Singapore",
    address: "68 Circular Road, #02-01, 049422, Singapore",
    x: "74.5%",
    y: "60%",
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
          <div className="relative w-full aspect-[2/1] rounded-lg overflow-hidden glass-card">
            {/* World map image from natural earth / dotted style */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                viewBox="0 0 1200 600"
                className="w-full h-full opacity-40"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Dot grid world map - each dot represents a landmass point */}
                {generateWorldDots().map((dot, i) => (
                  <circle
                    key={i}
                    cx={dot.x}
                    cy={dot.y}
                    r="1.8"
                    fill="hsl(210 80% 55%)"
                    opacity={dot.opacity}
                  />
                ))}
              </svg>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]">
              {[...Array(12)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute w-full h-px bg-ocean"
                  style={{ top: `${(i + 1) * 7.7}%` }}
                />
              ))}
              {[...Array(20)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute h-full w-px bg-ocean"
                  style={{ left: `${(i + 1) * 4.8}%` }}
                />
              ))}
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
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="48.5%"
                y1="25%"
                x2="50%"
                y2="23%"
                stroke="hsl(210 80% 55% / 0.2)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.line
                x1="50%"
                y1="23%"
                x2="73%"
                y2="55%"
                stroke="hsl(210 80% 55% / 0.15)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.line
                x1="73%"
                y1="55%"
                x2="74.5%"
                y2="60%"
                stroke="hsl(210 80% 55% / 0.2)"
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
                <MapPin
                  className="w-5 h-5 text-ocean mx-auto mb-3"
                  strokeWidth={1.2}
                />
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

// Generate dot positions that form recognizable world continents
function generateWorldDots() {
  const dots: { x: number; y: number; opacity: number }[] = [];

  // Helper: fill a region with dots
  const fillRegion = (
    points: [number, number][],
    density: number = 8,
    opacity: number = 0.6
  ) => {
    // Get bounding box
    const minX = Math.min(...points.map((p) => p[0]));
    const maxX = Math.max(...points.map((p) => p[0]));
    const minY = Math.min(...points.map((p) => p[1]));
    const maxY = Math.max(...points.map((p) => p[1]));

    for (let x = minX; x <= maxX; x += density) {
      for (let y = minY; y <= maxY; y += density) {
        if (isPointInPolygon(x, y, points)) {
          dots.push({
            x: x + (Math.sin(x * y) * 2),
            y: y + (Math.cos(x * y) * 2),
            opacity: opacity + Math.sin(x + y) * 0.15,
          });
        }
      }
    }
  };

  // North America
  fillRegion([
    [80, 60], [120, 45], [180, 50], [240, 55], [280, 50],
    [310, 65], [300, 80], [280, 100], [260, 120],
    [240, 145], [220, 170], [200, 190], [175, 195],
    [155, 185], [140, 170], [120, 150], [100, 130],
    [85, 110], [75, 85], [80, 60],
  ]);

  // Central America
  fillRegion([
    [175, 195], [195, 200], [215, 220], [225, 245],
    [215, 250], [200, 240], [185, 225], [175, 210], [175, 195],
  ]);

  // South America
  fillRegion([
    [225, 255], [255, 245], [280, 255], [300, 275],
    [310, 305], [315, 340], [310, 375], [295, 405],
    [275, 430], [260, 440], [250, 435], [240, 415],
    [235, 385], [228, 350], [222, 315], [218, 285],
    [220, 265], [225, 255],
  ]);

  // Europe
  fillRegion([
    [480, 55], [500, 48], [530, 50], [555, 55], [570, 65],
    [575, 80], [570, 100], [555, 115], [540, 125],
    [520, 135], [500, 140], [485, 138], [470, 130],
    [460, 115], [455, 95], [460, 75], [470, 60], [480, 55],
  ]);

  // British Isles
  fillRegion([
    [450, 65], [460, 58], [465, 65], [468, 80],
    [462, 90], [455, 88], [448, 78], [450, 65],
  ]);

  // Scandinavia
  fillRegion([
    [500, 25], [515, 20], [525, 25], [530, 40],
    [525, 55], [515, 50], [505, 42], [500, 30], [500, 25],
  ]);

  // Africa
  fillRegion([
    [485, 155], [510, 145], [540, 150], [565, 160],
    [580, 180], [590, 210], [595, 250], [590, 290],
    [580, 330], [565, 365], [545, 385], [520, 390],
    [500, 380], [485, 355], [475, 320], [470, 280],
    [468, 240], [470, 200], [475, 170], [485, 155],
  ]);

  // Middle East
  fillRegion([
    [575, 125], [610, 120], [640, 130], [650, 150],
    [640, 170], [620, 175], [600, 170], [585, 155],
    [575, 140], [575, 125],
  ]);

  // India
  fillRegion([
    [660, 155], [690, 145], [715, 155], [725, 180],
    [720, 215], [710, 245], [695, 265], [680, 260],
    [670, 240], [660, 210], [655, 180], [660, 155],
  ]);

  // Russia / Northern Asia
  fillRegion([
    [575, 45], [620, 35], [680, 30], [740, 25],
    [800, 30], [850, 40], [880, 55], [870, 75],
    [840, 85], [800, 90], [740, 85], [680, 80],
    [620, 75], [590, 65], [575, 55], [575, 45],
  ], 10);

  // China / East Asia
  fillRegion([
    [730, 95], [770, 85], [810, 90], [840, 100],
    [850, 120], [845, 145], [830, 165], [810, 175],
    [785, 178], [760, 170], [740, 155], [730, 135],
    [725, 115], [730, 95],
  ]);

  // Southeast Asia (Thailand, Vietnam, etc.)
  fillRegion([
    [730, 180], [755, 175], [770, 185], [775, 210],
    [770, 235], [755, 250], [740, 255], [730, 240],
    [725, 215], [725, 195], [730, 180],
  ]);

  // Japan
  fillRegion([
    [860, 95], [870, 88], [878, 95], [880, 115],
    [875, 130], [868, 135], [860, 125], [855, 110],
    [858, 100], [860, 95],
  ]);

  // Indonesia / Malay Archipelago
  fillRegion([
    [760, 260], [790, 255], [820, 260], [850, 270],
    [845, 285], [820, 290], [790, 288], [765, 280],
    [755, 270], [760, 260],
  ]);

  // Australia
  fillRegion([
    [820, 325], [860, 310], [900, 310], [935, 320],
    [950, 345], [945, 375], [930, 400], [900, 410],
    [870, 405], [845, 390], [825, 365], [815, 340],
    [820, 325],
  ]);

  // New Zealand
  fillRegion([
    [965, 385], [972, 378], [978, 385], [980, 405],
    [975, 418], [968, 415], [963, 400], [965, 385],
  ]);

  return dots;
}

// Ray-casting point-in-polygon test
function isPointInPolygon(
  x: number,
  y: number,
  polygon: [number, number][]
): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0],
      yi = polygon[i][1];
    const xj = polygon[j][0],
      yj = polygon[j][1];
    const intersect =
      yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

export default GlobalPresence;
