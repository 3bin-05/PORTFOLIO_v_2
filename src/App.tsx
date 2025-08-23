import ParticleBackground from "./components/ParticleBackground"; // Adjust path if needed
import React, { useState, useEffect , useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  User,
  GraduationCap,
  Users,
  MessageSquare,
  Download,
  ArrowRight,
  Star,
  BookOpen,
  Award,
  Coffee,
  Figma,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
// Profile picture stays local (can replace with URL if you want)
import profilePic from "@/assets/pfp.jpg";
import resumePDF from "@/assets/Ebin_Resume.pdf"
import emailjs from "@emailjs/browser";


const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("Sending...");

    emailjs
      .sendForm(
        "service_ryhms4q",  // Paste your Service ID from EmailJS
        "template_v6ksm2i", // Paste your Template ID from EmailJS
        form.current,
        "kFYH_oh7eseTb5uzI"   // Paste your Public Key from EmailJS
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setStatusMessage("✅ Message sent successfully!");
          e.target.reset(); // Clear form fields
          setTimeout(() => setStatusMessage(""), 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatusMessage("❌ Failed to send message. Please try again.");
          setTimeout(() => setStatusMessage(""), 4000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  // --- END OF NEW CODE ---

  // Initialize theme
  useEffect(() => {
    setMounted(true);
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "about", label: "About", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "community", label: "Community", icon: Users },
    { id: "projects", label: "Projects", icon: Code },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  const skills = [
    "React",
    "Node.js",
    "Python",
    "AI creations",
    "TailwindCSS",
    "Figma",
  ];

  const education = [
    {
      degree: "Higher Secondary Examination",
      school: "CBSE",
      year: "2021-2023",
      description: "Computer Science with Maths",
      gpa: "7.46/10",
    },
    {
      degree: "Bachelor of Computer science and engineering",
      school: "APJ Abdul Kalam Technology University",
      year: "2023-2027 (On-Going)",
      description: "Currently an aspiring computer engineer",
      gpa: "7.55/10",
    },
  ];

  const communities = [
    {
      name: "IEEE SB SBCE",
      role: "Sub-Execom Program Coordination Team",
      description: "Contributing by organising technical programs",
      contributions: "",
      image:
        "https://cdn.brandfetch.io/ieee.org/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
    },
    {
      name: "MuLearn SBC",
      role: "UI/UX Campus IG Lead ",
      description: '"Design smarter, not heavier #LeanUI"',
      contributions: "",
      image:
        "https://media.licdn.com/dms/image/v2/D4D0BAQExmEhEDVd4sg/company-logo_200_200/B4DZdAXz4RHwAI-/0/1749131674600/mulearn_logo?e=2147483647&v=beta&t=THqDrUtUFzywKv5gRDnPa_bj5hzFPhQxV3S_cS8KaOA",
    },
    {
      name: "TinkerHub",
      role: "Member",
      description: "Currently learning from Study Jams",
      contributions: "",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQH9dEfxje6v3w/company-logo_200_200/company-logo_200_200/0/1703247862296/tinkerhub_logo?e=2147483647&v=beta&t=94Rp5cM8JHjH3cPT0rIPzGX10VAWVS3K9S5Wi04cfng",
    },
    {
      name: "Coding Club SBCE",
      role: "Volunteer",
      description: "Encouraging students to lean towards Coding",
      contributions: "",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/004/909/777/small_2x/coding-logo-design-template-vector.jpg",
    },
  ];

  const projects = [
    {
      title: "UI/UX Fault analysis",
      description:
        "I analysed My college website and found faults and made a report on it.",
      tech: ["Figma","UI/UX"],
      // github: '#', // We remove this line
      figma:
        "https://www.figma.com/design/Q0ktgbwA2LrveTp4WiS3Va/UX--fault?node-id=0-1&t=osdaff9GLE4wUle8-1", // <-- Add this property
      demo: "https://www.figma.com/design/Q0ktgbwA2LrveTp4WiS3Va/UX--fault?node-id=0-1&t=osdaff9GLE4wUle8-1",
      demoLabel: "View on Figma",
      featured: true,
      image: "https://www.kandasoft.com/images/2023/01/UX_analysist.jpg",
    },
    {
      title: "My Old Portfolio website",
      description:
        "This is my first porfolio website it was plain and with amny lacking features but still close to my heart",
      tech: ["Node.js", "Html", "CSS", "React"],
      github: "https://github.com/3bin-05/PORTFOLIO",
      demo: "https://portfolioebin.netlify.app",
      demoLabel: "Live Demo",
      featured: true,
      image:
        "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-736x414.webp",
    },
    {
      title: "G-pay Redesign",
      description: "I made slight changes to G-pay.",
      tech: ["Figma","UI/UX"],
      figma:
        "https://www.figma.com/design/iCro6clVrG8LhanHkxHZ1G/GPAY?node-id=0-1&t=E93jiEWt4tYuMlhk-1", // <-- Add this property
      demo: "https://www.figma.com/proto/iCro6clVrG8LhanHkxHZ1G/GPAY?page-id=0%3A1&node-id=2-19&p=f&viewport=278%2C166%2C0.25&t=pGY2Z5p8BhH0Refz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2",
      demoLabel: "View on Figma",
      featured: true,
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/77/48/6e/77486e11-ee0c-2b6f-60e6-e5c81f581043/GPayAppIcon-0-1x_U007ephone-0-0-0-1-0-0-0-85-220-0.png/1200x600wa.png",
    },
     {
      title: "YouTube UI",
      description: "I made UI High fidality design of YouTube.",
      tech: ["Figma","UI/UX"],
      figma:
        "https://www.figma.com/design/Ptr6ItOAz4XK482665z7bO/YOUTUBE?node-id=0-1&t=bi70tLoAp90bJPLZ-1", // <-- Add this property
      demo: "https://www.figma.com/proto/Ptr6ItOAz4XK482665z7bO/YOUTUBE?page-id=0%3A1&node-id=1-3&p=f&viewport=717%2C23%2C0.28&t=vLWMEWoPpGIjftCb-1&scaling=scale-down&content-scaling=fixed",
      demoLabel: "View on Figma",
      featured: false,
      inProgress: true,
      image:
        "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000014303/13ab52d526ec8f98d3084eadc51d29665010c8eb9a3035aa0b04dbd6fdb8d50b",
    },
    {
      title: "Certificates",
      description: "I have uploaded my certificates.",
      tech: ["Cyber security","NPTEL"],
      demo: "https://drive.google.com/drive/u/0/folders/1HUM5zgWz5jslxVi4ibblgBO9V8wSesnh",
      demoLabel: "Drive Link",
      featured: true,
      inProgress: false,
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0d/ec/39/0dec398f-cb6b-6d2c-76c0-053fdbc07bce/logo_drive_universal-0-1x_U007epad-0-0-0-1-0-0-0-0-85-220-0.png/1200x630wa.png",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-effect bg-background/80 border-b border-border shadow-navbar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            ></motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-smooth relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth" />
                </motion.button>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center space-x-3 px-3 py-2 text-muted-foreground hover:text-foreground transition-smooth w-full text-left"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
         <ParticleBackground />
        <motion.div
          style={{ y }}
          className="absolute inset-0 hero-gradient opacity-10"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="w-40 h-40 mx-auto rounded-full shadow-elegant overflow-hidden"
            >
              <img
                src={profilePic}
                alt="Profile Picture of Ebin Reji"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
              >
                Hi, I'm <span className="text-gradient">Ebin Reji</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-muted-foreground"
              >
                UI/UX Enthusiast
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-muted-foreground max-w-2xl mx-auto"
              >
                Building UI/UX interfaces with modern and creative design
                thinking.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="group shadow-elegant hover:shadow-primary/50 bg-primary hover:bg-primary/90 w-full sm:w-52"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
<a
              href={resumePDF}
              download="Ebin_Resume.pdf" 
              className="w-full sm:w-52"
            >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/20 hover:border-primary/40 w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate UI/UX developer whos constantly tryin to improve.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed">
                Hi, I’m Ebin, an aspiring computer engineer and BTech Computer
                Science student with a strong interest in UI/UX design, web
                development, and modern digital experiences. I enjoy creating
                clean, user-friendly interfaces and bringing ideas to life
                through thoughtful design and efficient code.
              </p>

              <p className="text-lg leading-relaxed">
                I have a foundation in Python, React, and web technologies,
                along with hands-on experience working on projects like
                Instagram-inspired prototypes and personal portfolio websites.
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="px-3 py-1">
                  <Star className="w-3 h-3 mr-1" />
                  UI/UX
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <BookOpen className="w-3 h-3 mr-1" />
                  Continuous Learner
                </Badge>
                <Badge variant="secondary" className="px-3 py-1">
                  <Users className="w-3 h-3 mr-1" />
                  Team Player
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="skill-gradient rounded-lg p-3 text-center font-medium hover:scale-105 transition-smooth shadow-card"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-muted-foreground text-lg">
              Academic journey that shaped my technical foundation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="card-gradient shadow-card hover:shadow-elegant transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {edu.school}
                        </CardDescription>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{edu.year}</span>
                          <Badge variant="outline">SGPA: {edu.gpa}</Badge>
                        </div>
                      </div>
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{edu.description}</p>
                    <div className="space-y-2"></div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Community Involvement
            </h2>
            <p className="text-muted-foreground text-lg">
              Contributing to the developer community and giving back
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="card-gradient shadow-card hover:shadow-elegant transition-smooth h-full">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center mx-auto mb-4 overflow-hidden">
                      <img
                        src={community.image}
                        alt={`${community.name} logo`}
                        className="w-10 h-10 object-contain rounded-full"
                      />
                    </div>
                    <CardTitle className="text-lg">{community.name}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto">
                      {community.role}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {community.description}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {community.contributions}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Some of my recent work that I'm proud of
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  className={`card-gradient shadow-card hover:shadow-elegant transition-smooth h-full overflow-hidden ${
                    project.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                  
                >
                  {/* Project Image */}
                  {/* Inside the Project Image div */}
<div className="relative h-48 overflow-hidden">
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
  
  {/* New container for all badges */}
  <div className="absolute top-3 right-3 flex flex-wrap gap-2">
    {project.featured && (
      <Badge className="bg-primary border-primary-foreground/20">
        Featured
      </Badge>
    )}
    {project.inProgress && (
      <Badge className="bg-amber-500 text-amber-950 border-amber-600/50">
        In Progress
      </Badge>
    )}
  </div>
</div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                      <Briefcase className="h-6 w-6 text-primary flex-shrink-0" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {/* ===== CORRECTED CODE BLOCK STARTS HERE ===== */}

                    <div className="flex space-x-3">
                      {/* Check for a Figma link first */}
                      {project.figma ? (
                        <a
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            <Figma className="w-4 h-4 mr-2" />
                            Figma File
                          </Button>
                        </a>
                      ) : (
                        /* Otherwise, fall back to the GitHub link */
                        project.github &&
                        project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1"
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full"
                            >
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </Button>
                          </a>
                        )
                      )}

                      {/* The Demo button logic remains the same */}
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button size="sm" className="w-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {project.demoLabel || "Demo"}
                          </Button>
                        </a>
                      )}
                    </div>
                    {/* ===== CORRECTED CODE BLOCK ENDS HERE ===== */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="py-20 bg-accent/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Let's Work Together
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
        Have a project in mind or just want to get in touch? I'd love to hear from you.
      </p>
    </motion.div>

    {/* Two-Column Layout */}
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      
      {/* Left Column: Contact Form (Unchanged) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card className="card-gradient shadow-card hover:shadow-elegant transition-smooth">
          <CardHeader>
            <CardTitle className="text-2xl">Send Me a Message</CardTitle>
            <CardDescription>
              Fill out the form and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <Label htmlFor="from_name">Name</Label>
                <Input
                  id="from_name" type="text" name="from_name"
                  placeholder="Your Name" required className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="from_email">Email</Label>
                <Input
                  id="from_email" type="email" name="from_email"
                  placeholder="your.email@example.com" required className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message" name="message"
                  placeholder="Your message here..."
                  required rows={5} className="mt-1"
                />
              </div>
              <div className="flex flex-col items-center">
                <Button type="submit" size="lg" className="shadow-elegant group w-full" disabled={isSubmitting}>
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                {statusMessage && (
                  <p className="mt-4 text-center text-sm">{statusMessage}</p>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Right Column: Social Links (Updated Styling) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-semibold text-center lg:text-left">
          Or Reach Me Directly
        </h3>
        <div className="space-y-9"> {/* This controls the spacing between cards */}
          
          {/* Email Card */}
          <a href="mailto:ebin05reji@gmail.com" aria-label="Email Ebin Reji">
            <Card className="p-4 hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center">
                <Mail className="w-7 h-7 mr-4 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    ebin05reji@gmail.com
                  </p>
                </div>
              </div>
            </Card>
          </a>
          <div className="space-y-9"></div>
          {/* GitHub Card */}
          <a href="https://github.com/3bin-05" target="_blank" rel="noopener noreferrer" aria-label="Ebin Reji's GitHub Profile">
            <Card className="p-4 hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center">
                <Github className="w-7 h-7 mr-4 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    View my projects and code
                  </p>
                </div>
              </div>
            </Card>
          </a>
          <div className="space-y-9"></div>
          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/ebin-reji/" target="_blank" rel="noopener noreferrer" aria-label="Ebin Reji's LinkedIn Profile">
            <Card className="p-4 hover:bg-accent/50 hover:border-primary/30 transition-all duration-300 group">
              <div className="flex items-center">
                <Linkedin className="w-7 h-7 mr-4 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                    Connect with me professionally
                  </p>
                </div>
              </div>
            </Card>
          </a>
          
        </div>
      </motion.div>

    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-muted-foreground">
            {/* I've also made the year dynamic for you */}©{" "}
            {new Date().getFullYear()} Ebin Reji. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
