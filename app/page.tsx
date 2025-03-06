import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectSection";
import SolutionsSection from "@/components/SolutionsSection";
import TeamSection from "@/components/TeamSection";
import TestimonialsSection from "@/components/TestimonialsSection";
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

  const projects = [
    {
      title: "Techify E-Commerce Platform",
      description: "A seamless multi-vendor e-commerce platform built with Next.js and integrated payment gateways.",
      thumbnail: "/projects/techify.png",
      link: "/projects/techify",
    },
    {
      title: "Crypto Wallet App",
      description: "A secure cryptocurrency wallet app with real-time exchange rates and user-friendly UI.",
      thumbnail: "/projects/crypto-wallet.png",
      link: "/projects/crypto-wallet",
    },
    {
      title: "LegalTech CRM System",
      description: "A digital solution for law firms to manage clients, appointments, and case files efficiently.",
      thumbnail: "/projects/legaltech-crm.png",
      link: "/projects/legaltech-crm",
    }
  ];

  const team = [
    {
      name: "Joshua Muasya",
      role: "Founder & Lead Developer",
      photo: "/team/joshua.png",
      bio: "Passionate full-stack developer with expertise in web and mobile applications, bringing ideas to life through code and innovation.",
    },
    {
      name: "Faith Njeri",
      role: "UI/UX Designer",
      photo: "/team/faith.png",
      bio: "Creative designer with a keen eye for user-centered designs, transforming concepts into stunning digital experiences.",
    },
    {
      name: "Kevin Maina",
      role: "Cybersecurity Specialist",
      photo: "/team/kevin.png",
      bio: "Expert in digital security and data protection, ensuring the safety and privacy of client applications and systems.",
    },
  ];

  const testimonials = [
    {
      quote: "Digimatic Marketers transformed our online presence with a stunning website. The team's attention to detail and dedication was outstanding!",
      name: "Jane Wambui",
      role: "CEO, Wambui Tours",
      avatar: "/testimonials/jane.png",
    },
    {
      quote: "Working with Digimatic Marketers was an amazing experience. They delivered our mobile app on time with exceptional quality.",
      name: "John Mwangi",
      role: "Founder, TechWave Solutions",
      avatar: "/testimonials/john.png",
    },
    {
      quote: "Their cybersecurity solutions helped secure our business data, giving us peace of mind. Highly recommend their services!",
      name: "Cynthia Achieng",
      role: "IT Manager, SecureNet Ltd.",
      avatar: "/testimonials/cynthia.png",
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

      <ProjectsSection
        projects={projects}
      />

      <TeamSection
        team={team}
      />

      <TestimonialsSection
        testimonials={testimonials}
      />

      <ContactSection />
    </div>
  );
}
