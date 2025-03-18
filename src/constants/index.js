import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    uts,
    vue,
    next,
    linux,
    burp,
    smk,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Pentester",
      icon: mobile,
    },
    {
      title: "Bug Hunter",
      icon: backend,
    },
    {
      title: "Cyber Security Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "uts",
      icon: uts,
    },
    {
      name: "next",
      icon: next,
    },
    {
      name: "vue",
      icon: vue,
    },
    {
      name: "burp",
      icon: burp,
    },
    {
      name: "smk",
      icon: smk,
    },
  ];
  
  const experiences = [
    {
      title: "Staff IT at UTS(Universitas Teknologi Sumbawa)",
      company_name: "Universitas Teknologi Sumbawa",
      icon: uts,
      iconBg: "#383E56",
      date: "January 2022 - Mei 2022",
      points: [
        "Maintaining web applications using wordpress and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers.",
        "Maintaining admin page for rector and other staffs.",
        "Maintaining Network Infrastructure at PSTI Departement of UTS.",
      ],
    },
    {
      title: "Codeigniter Developer",
      company_name: "UKK(Ujian Kompetensi Keahlian) SMK Negeri 1 Lopok",
      icon: smk,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2023",
      points: [
        "Developing and maintaining web applications using PHP,JS, Codeigniter Framework and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Impelementing MVC(Model View Controller) design pattern.",
      ],
    },
    {
      title: "Express JS Maintainer",
      company_name: "CSUC(Cyber Security Unram Comunity) UNRAM(UNiversitas Mataram)",
      icon: shopify,
      iconBg: "#383E56",
      date: "October  2023",
      points: [
        "Maintaining web applications using Express.js and other related technologies.",
        "Impelementing MVC(Model View Controller) design pattern.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Pentester & Bug Hunter",
      company_name: "Freelance",
      icon: burp,
      iconBg: "#E6DEDD",
      date: "January 2025 - Present",
      points: [
        "Search And Exploit Vulnerabilities Using Burp Suite.",
        "Reporting Vulnerabilities To Security Teams.",
        "Implementing High severity vulnerabilities.",
        "Participating in fixing bugs and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };