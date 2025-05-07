import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Karthick Perumal",
  initials: "Perumal",
  url: "https://karthickperumal.vercel.app",
  location: "Dharmapuri, Tamil Nadu, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I'm passionate about building products end-to-end and helping people through technology. I specialize in React.js and Next.js, with a strong foundation in full-stack development.",
  summary:
    "I'm a passionate Full-Stack Developer with a strong focus on frontend development using React.js and Next.js. I hold a B.Sc. in Computer Science from Periyar University and have continuously upskilled myself through hands-on learning and self-driven projects, To sharpen my frontend expertise, I completed the Udemy course React – The Complete Guide, which deepened my understanding of modern React concepts like Hooks, React Router, and Redux. I love turning complex problems into simple, elegant web solutions and have a solid foundation in backend technologies as well, making me confident across the full stack.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "MongoDB",
    "React Native",
    "Android Studio",
    "Tailwind CSS",
    "Material UI",
    "GitHub",
   
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    
  ],
  contact: {
    email: "karthickperumal.vp@gmail.com",
    tel: "+91 9500790694",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/imkarthickperumal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imkarthickperumal/",
        icon: Icons.linkedin,
        navbar: true,
      },
      WhatApp: {
        name: "WhatApp",
        url: "https://wa.me/9500790694",
        icon: Icons.whatapp,
        navbar: true,
      },
     
     email: {
        name: "Send Email",
        url: "mailto:karthickperumal.vp@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Xentrix Hi-Tech (P) LTD",
      href: "https://www.xentrix-hitech.com/",
      badges: [],
      location: "Coimbatore, Tamil Nadu",
      title: "Full Stack Developer",
      logoUrl: "/xentrix.png",
      start: "Mar 2025",
      end: "Current",
      description:
        "Developed and maintained a healthcare application featuring doctor appointment scheduling, comprehensive in-app examination modules for all body parts, and automated report generation. Built and integrated role-based multi-user functionality on both frontend and backend, including modular component development and API consumption using scalable architecture.",
    },
    {
      company: "CODD Technology",
      href: "https://www.codd.com.au/",
      badges: [],
      location: "Remote, Coimbatore, Tamil Nadu",
      title: "React Js Developer",
      logoUrl: "/coddtech.png",
      start: "Nov 2022",
      end: "Mar 2025",
      description:
        "Executed medical practice management software including views, fragments, and UI components. Contributed to formulating application requirements and provided advisory support for UI solutions and API integrations. Developed and integrated online appointment booking features, enabling users to view available consultation times, next available slots, and select appointment types, with complete UI component development and API integration.",
    },
    {
      company: "Cockatoo Infotech",
      badges: [],
      href: "https://www.cockatoo.in/",
      location: "Coimbatore, Tamil Nadu",
      title: "Android Application Developer",
      logoUrl: "/cockatooinfotech.png",
      start: "Jan 2019",
      end: "Oct 2019",
      description:
        "Designed and developed UI for a Taxi Dispatch software, implementing user-friendly screens for booking, tracking, and driver management, along with complete API integration for real-time data handling. Built UI components for a School Management Android application, covering modules like attendance, student profiles, and academic tracking, with seamless REST API integration for dynamic content and functionality.",
    },
    {
      company: "Ardhas technology",
      href: "https://www.ardhas.com/",
      badges: [],
      location: "Coimbatore, Tamil Nadu",
      title: "Trainee Android Application Developer",
      logoUrl: "/ardhas.png",
      start: "Feb 2018",
      end: "Aug 2018",
      description:
        "Completed internship as an Android Application Developer, working on UI design for an Environmental Health and Safety (EHS) software application. Contributed to developing screens and layouts for key EHS modules such as incident reporting, audits, and safety checklists, while gaining practical experience in Android app development.",
    },
   
  ],
  education: [
    {
      school: "Government Arts College, Dharmapuri - Periyar University",
      href: "https://www.gacdpi.ac.in/",
      degree: "Bachelor of Science in Computer Science",
      logoUrl: "/Periyar_University_logo.png",
      start: "2014",
      end: "2017",
    },
 
  ],
  certification: [
    {
      school: "React Native - The Practical Guide (Push Notifications, Hooks, Redux)",
      href: "https://udemy-certificate.s3.amazonaws.com/image/UC-64bdf967-c490-485a-837b-984c2fcbd486.jpg",
      logoUrl: "/Udemy_logo.svg",
      start: "Oct 22, 2024",
      
    },
    {
      school: "React - The Complete Guide (Hooks, React Router, Redux)",
      href: "https://udemy-certificate.s3.amazonaws.com/image/UC-48068912-841d-42b8-ad31-447f704d0430.jpg",
      logoUrl: "/Udemy_logo.svg",
      start: "Aug 13, 2022",
      
    },
    {
      school: "Node.JS and ExpressJs Bootcamp",
      href: "https://drive.google.com/file/d/13t3Mc0f4knntmVXgyBColGfG2bCkF3Ef/view",
      logoUrl: "/Scaler_logo.svg",
      start: "Jan 09, 2022",
      
    },
    {
      school: "Mongo DB Bootcamp",
      href: "https://moonshot.scaler.com/s/sl/L8VdoB7bPu",
      logoUrl: "/Scaler_logo.svg",
      start: "Aug 25, 2022",
      
    },
    {
      school: "React Bootcamp",
      href: "https://moonshot.scaler.com/s/sl/UZ9tHb7TvY",
      logoUrl: "/Scaler_logo.svg",
      start: "May 19, 2022",
      
    },
 
  ],
  projects: [
    
    {
      title: "Doctor Portfolio Website",
      href: "https://dr-dev.vercel.app/",
      dates: "October 2024",
      active: true,
      description:
        "Developed a modern and responsive portfolio website for a medical professional using Next.js, tailored to showcase their expertise, services, achievements, and contact details.",
      technologies: [
        "Next.js",
        "MUI",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://dr-dev.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/drdev.png",
     
    },
    {
      title: "General Practice Doctor Appointment Website",
      href: "https://perthgp.vercel.app/",
      dates: "April 2024",
      active: true,
      description:
        "Developed a responsive and user-friendly web application for a General Practice clinic using Next.js. The platform displays detailed doctor profiles, practice information, and allows patients to book appointments online.",
      technologies: [
        "Next.js",
        "MUI",
        "Bootstrap",
        "axios"
      ],
      links: [
        {
          type: "Website",
          href: "https://perthgp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/perthgp.png",
     
    },
    {
      title: "Quiz Management Application",
      href: "https://adhiyan-academy-admin.vercel.app/",
      dates: "April 2024",
      active: true,
      description:
        "Developed a Quiz Management Application in React.js for TN TRB (Tamil Nadu Teachers Recruitment Board) test batch series, including regular weekly quizzes and a comprehensive admin panel for managing questions, users, and results.",
      technologies: [
        "React.js",
        "MUI",
        "Bootstrap",
        "axios"
    ],
      links: [
        {
          type: "Website",
          href: "https://adhiyan-academy-admin.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/adhiyan.png",
     
    },
    {
      title: "Adhiyan Academy",
      href: "https://adhiyanacademy.vercel.app/",
      dates: "April 2024",
      active: true,
      description:
        "Developed a Landing page for Adhiyan Academy PG TRB coaching center.",
      technologies: [
        "Javascript",
        "HTML, CSS",
        "Bootstrap",
       ],
      links: [
        {
          type: "Website",
          href: "https://adhiyanacademy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/adhiyan-ui.png",
     
    },

  ],
 
} as const;
