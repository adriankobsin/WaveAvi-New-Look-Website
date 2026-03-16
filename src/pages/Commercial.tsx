import {
  Hotel,
  MonitorPlay,
  Video,
  Network,
  Lightbulb,
  Phone,
  Cpu,
  Presentation,
  PenTool,
  Package,
  Wrench,
  HeadsetIcon,
} from "lucide-react";
import SectorPage from "@/components/SectorPage";
import type { SubService } from "@/components/SectorPage";

const services: SubService[] = [
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Our hospitality audio visual solutions are designed to enhance guest experience while supporting efficient operations. From background music and digital displays to in-room entertainment and control systems, we create seamless, reliable technology environments for hotels, restaurants, bars, and leisure venues. Every system is designed to complement the space, elevate ambiance, and deliver consistent performance day after day.",
  },
  {
    icon: MonitorPlay,
    title: "Signage",
    description:
      "We design and install digital signage solutions that communicate clearly and engage audiences effectively. From single displays to large-scale video walls, our signage systems deliver dynamic content for branding, information, and wayfinding. Easy-to-manage content platforms allow updates in real time, ensuring your message remains relevant, impactful, and visually compelling.",
  },
  {
    icon: Video,
    title: "Conferencing",
    description:
      "Our conferencing solutions enable clear communication and collaboration in meeting rooms of any size. We deliver fully integrated systems combining video conferencing, presentation technology, audio reinforcement, and intuitive control. Designed for reliability and ease of use, our solutions support modern hybrid meetings, ensuring participants can connect effortlessly whether they are in the room or joining remotely.",
  },
  {
    icon: Network,
    title: "Networking",
    description:
      "A robust and secure network is essential for modern commercial environments. We design and deploy high-performance wired and wireless networking infrastructure that supports audio visual systems, data, voice, and cloud services. Built for reliability and scalability, our networks ensure consistent performance while accommodating future growth and evolving technologies.",
  },
  {
    icon: Lightbulb,
    title: "Lights & Shading",
    description:
      "Smart lighting and shading systems enhance functionality, comfort, and energy efficiency in commercial spaces. Automated lighting control creates the right atmosphere for different activities, while motorized shading optimizes natural light and reduces energy consumption. Fully integrated with control and building systems, lighting and shading solutions support both operational efficiency and design intent.",
  },
  {
    icon: Phone,
    title: "Telephony",
    description:
      "Our commercial telephony solutions provide reliable, flexible communication for modern businesses. From VoIP phone systems to unified communications platforms, we design solutions that integrate seamlessly with your network and collaboration tools. These systems support efficient internal communication while ensuring clear, professional interaction with clients and customers.",
  },
  {
    icon: Cpu,
    title: "Control Systems",
    description:
      "Centralized control systems simplify the management of complex commercial environments. By integrating audio visual, lighting, climate, signage, and communication systems into a single interface, we provide intuitive control and automation. Custom workflows and scheduling improve operational efficiency while reducing the need for manual intervention.",
  },
  {
    icon: Presentation,
    title: "Auditoriums",
    description:
      "Our auditorium audio visual solutions deliver powerful, clear communication for presentations, performances, and events. We design and install professional-grade sound reinforcement, large-format displays or projection systems, stage lighting, and control systems. Every auditorium is engineered to provide exceptional sightlines, intelligibility, and reliability, ensuring a polished experience for both presenters and audiences.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Our design process is driven by functionality, performance, and long-term reliability. We develop fully engineered audio visual and technology designs that support communication, collaboration, and operational efficiency across commercial environments. Working closely with consultants, architects, and stakeholders, we ensure every system is purpose-built, standards-compliant, and scalable to meet both current and future business requirements.",
  },
  {
    icon: Package,
    title: "Supply",
    description:
      "We supply proven, enterprise-grade audio visual and communication technologies from leading manufacturers. Every component is selected for reliability, compatibility, and long-term support, ensuring consistent performance in demanding commercial environments. Through established vendor partnerships, we provide solutions that meet technical, operational, and budgetary objectives without compromising quality.",
  },
  {
    icon: Wrench,
    title: "Build",
    description:
      "Our installation teams deliver structured, professional builds that align with commercial standards and project timelines. Systems are installed with attention to cable management, documentation, and serviceability, ensuring ease of operation and maintenance. We coordinate closely with project teams to minimize disruption, maintain quality control, and deliver fully tested and commissioned systems ready for immediate use.",
  },
  {
    icon: HeadsetIcon,
    title: "Support",
    description:
      "We provide ongoing support services designed to keep commercial systems operating reliably and efficiently. From remote monitoring and preventative maintenance to on-site support and system upgrades, our services are tailored to reduce downtime and protect business continuity. As long-term technology partners, we ensure systems continue to perform as operational demands evolve.",
  },
];

const Commercial = () => (
  <SectorPage
    sectorLabel="Commercial"
    sectorTitle="Commercial & Hospitality"
    subtitle="Enterprise AV, conferencing, and smart building systems for hospitality, resorts, and commercial environments."
    services={services}
  />
);

export default Commercial;
