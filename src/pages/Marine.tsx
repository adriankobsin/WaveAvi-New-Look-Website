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
      "Our home cinema solutions deliver a true cinematic experience in even the most demanding marine environments. Designed specifically for yachts and luxury residences, each system combines stunning ultra-high-definition visuals, immersive surround sound, and carefully engineered acoustics. Every cinema space is tailored to the vessel's layout, ensuring exceptional performance, comfort, and ease of use while seamlessly integrating lighting, shading, and control systems for a fully immersive experience.",
  },
  {
    icon: Music,
    title: "Audio Visual",
    description:
      "We design and install premium audio visual systems that enhance entertainment, communication, and lifestyle onboard. From multi-zone audio throughout cabins and exterior areas to high-performance video displays and concealed screens, our solutions are engineered for reliability in marine conditions. All systems are carefully integrated to preserve interior design aesthetics while delivering powerful, crystal-clear sound and exceptional picture quality wherever you are.",
  },
  {
    icon: Cpu,
    title: "Control Systems",
    description:
      "Our intelligent control systems bring simplicity to complex technology by unifying all onboard systems into one intuitive interface. Audio, video, lighting, climate, and security can be managed effortlessly from touch panels, mobile devices, or custom keypads. Personalized scenes allow multiple systems to respond instantly to a single command, creating a seamless and user-friendly experience for both guests and crew.",
  },
  {
    icon: Lightbulb,
    title: "Lights & Shading",
    description:
      "Lighting and shading systems are designed to enhance comfort, ambiance, and efficiency throughout the vessel. Automated lighting control allows for precise mood creation, while motorized shading optimizes natural light and privacy. Fully integrated with the control system, lighting and shading can respond automatically to time of day, activities, or entertainment modes, elevating both functionality and design.",
  },
  {
    icon: Thermometer,
    title: "Climate Control",
    description:
      "Our climate control solutions ensure optimal comfort in every environment, regardless of external conditions. Integrated HVAC control allows temperature, airflow, and humidity to be adjusted seamlessly alongside other onboard systems. Intelligent automation improves energy efficiency while providing guests and crew with easy, responsive control of their onboard climate.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Advanced security systems provide peace of mind without compromising convenience. Integrated surveillance, access control, and monitoring solutions are designed for both onboard and remote viewing. By incorporating security into the central control system, users can monitor and manage their vessel with confidence, whether at sea or docked.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "A robust and secure network is the foundation of every modern audio visual system. We design and install high-performance networking infrastructure capable of supporting streaming media, control systems, communications, and future technologies. Marine-grade networking solutions ensure reliability, speed, and scalability, even in the most challenging environments.",
  },
  {
    icon: Phone,
    title: "Communications",
    description:
      "Our communication systems keep guests and crew connected at all times. Integrated intercoms, phone systems, and onboard communication solutions provide clear, reliable connectivity throughout the vessel. When combined with network and control systems, communications become an effortless part of the overall onboard technology experience.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Our design process begins with a deep understanding of the vessel, its environment, and the way it will be used. We create fully engineered audio visual, control, and technology designs that account for space constraints, marine regulations, vibration, humidity, and long-term reliability at sea. Working closely with management companies, shipyards, and interior designers, we ensure every system is thoughtfully planned, discreetly integrated, and optimized for performance and usability.",
  },
  {
    icon: Package,
    title: "Supply",
    description:
      "We supply proven, marine-grade technology from leading manufacturers, carefully selected for durability, performance, and compatibility. Every component is specified to withstand the challenges of the marine environment, including moisture, corrosion, and movement. Through trusted partnerships and global logistics experience, we ensure timely delivery of equipment that meets both technical and aesthetic requirements.",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "Our build and installation teams deliver precision workmanship to the highest marine standards. Systems are installed with careful attention to cable management, redundancy, and serviceability, ensuring reliable operation throughout the vessel's lifecycle. We coordinate seamlessly with shipyards and project teams to maintain schedules, quality control, and compliance with marine regulations. Every system is thoroughly tested, calibrated, and commissioned before handover.",
  },
  {
    icon: HeadsetIcon,
    title: "Support",
    description:
      "We provide ongoing support to ensure systems continue to perform flawlessly wherever the vessel operates. From remote diagnostics and software updates to onboard service and preventative maintenance, our support services are designed for the realities of marine operations. We act as long-term technology partners, offering responsive assistance and proactive system care to protect your investment and maintain a seamless onboard experience.",
  },
];

const Marine = () => (
  <SectorPage
    sectorLabel="Marine"
    sectorTitle="Superyacht Technology"
    subtitle="Advanced AV, IT, and control systems engineered for the world's most exceptional vessels."
    services={services}
  />
);

export default Marine;
