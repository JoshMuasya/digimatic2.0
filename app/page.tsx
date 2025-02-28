import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import { FaCloud, FaCode, FaGlobe, FaMobileAlt, FaPaintBrush, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  const solutionsData = [
    {
      title: "Custom Software",
      description: "Tailored solutions for tomorrow’s challenges.",
      icon: <FaCode size={32} />,
      link: "/services/custom",
    },
    {
      title: "Website Development",
      description: "Modern, responsive websites to elevate your brand.",
      icon: <FaGlobe size={32} />,
      link: "/services/website",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform applications for Android & iOS.",
      icon: <FaMobileAlt size={32} />,
      link: "/services/mobile",
    },
    {
      title: "Graphics Design",
      description: "Creative visual solutions that make an impact.",
      icon: <FaPaintBrush size={32} />,
      link: "/services/graphics",
    },
    {
      title: "Cybersecurity",
      description: "Protecting your data and digital infrastructure.",
      icon: <FaShieldAlt size={32} />,
      link: "/services/cybersecurity",
    },
    {
      title: "Digital Marketing",
      description: "Boost your online presence and customer reach.",
      icon: <FaCloud size={32} />,
      link: "/services/marketing",
    },
  ];

  return (
    <div className="">
      <HeroSection />
      <SolutionsSection
        title="Our Solutions"
        solutions={solutionsData}
        primaryColor="#6AA4D9"
        accentColor="#683695"
        backgroundGradient="linear-gradient(180deg, #1A1A1A, #2A2A57)"
        ctaText="Explore Services"
        ctaLink="/services"
      />
    </div>
  );
}
