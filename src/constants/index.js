import {
	backend,
	creator,
	web,
	nodejs,
	meta,
	starbucks,
	tesla,
	shopify,
	codex,
	dalle,
	generator,
	TVSNext,
	TCube,
	HDLabs,
	Exeter,
	Billiontags,
	Freelancer
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
		title: "Frontend Developer",
		icon: creator,
	},
	{
		title: "Backend Developer",
		icon: backend,
	  },
	{
	  title: "AI Enthusiast",
	  icon: web,
	},
	
  ];
  
  const experiences = [
	{
	  "title": "Software Developer",
	  "company_name": "TCube Solutions",
	  "icon": TCube,
	  "iconBg": "#E6DEDD",
	  "date": "Dec 2015 - Nov 2016",
	  "points": [
		"Build a complete application from design to deployment called Aegis, which is an employee management application built using Laravel and Bootstrap",
		"Supported an in house product which is an HMS and resolved bugs",
		"Programmed multiple scripts to scrape websites for data using python",
		"Build an application to predict the stock market using the “moving average algorithm”"
	  ]
	},
	{
	  "title": "Frontend Developer",
	  "company_name": "Billiontags",
	  "icon": Billiontags,
	  "iconBg": "#FFF",
	  "date": "Jan 2017 - July 2017",
	  "points": [
		"Integrated UI with APIs for the Beautiful Matrimony product using vanillaJS, enhancing frontend functionality and user experience.",
		"Developed an in-house employee attendance management system using Laravel, streamlining attendance tracking and management.",
		"Integrated APIs and frontend for multiple products using ReactJS, ensuring seamless data flow and improved user interfaces."
	  ]	  
	},
	{
	  "title": "Software Developer",
	  "company_name": "Exeter Premedia Services",
	  "icon": Exeter,
	  "iconBg": "#FFF",
	  "date": "Sep 2017 - Mar 2020",
	  "points": [
		"Led the development of the Content Structuring project using Node.js and Express.js microservices, automating the pre-editing process by up to 50% through Regex-based content tagging.",
		"Built multiple custom microservices and a CI/CD pipeline using Node.js and Fastify to streamline product deployment and support the copy editing process.",
		"Designed and implemented a phylogenetic tree analysis project with Node.js, Express, and Socket.io, integrating external APIs, web scraping from NCBI and PubMed, and efficient state management through sockets."
	  ]	  
	},
	{
	  "title": "Freelance Software Developer",
	  "company_name": "Freelancer",
	  "icon": Freelancer,
	  "iconBg": "#FFF",
	  "date": "Apr 2020 - Nov 2021",
	  "points": [
		"Developed a comprehensive doctor management application using Node.js and Angular, and led the creation of 'docmagic,' a document workflow automation tool built with Node.js and ReactJS.",
		"Engineered various web applications, including a mobile-responsive e-commerce platform (PWA) with Laravel, a matrimonial website for a specific religious caste, and an event-based WordPress site for learning and conference enrollment.",
		"Restored a crashed application using archive.org, contributed to buyadsonbigfm.com for managing radio ad slots, and leveraged Puppeteer for web scraping regional company data for client projects."
	  ]	  
	},
	{
	  "title": "Senior Software Engineer",
	  "company_name": "HD Labs",
	  "icon": HDLabs,
	  "iconBg": "#FFF",
	  "date": "Dec 2021 - June 2022",
	  "points": [
		"Redesigned and developed responsive, mobile-first user interfaces for an online test and learning platform using VueJS, Bootstrap, and SCSS, enhancing user experience and adaptability across devices.",
		"Optimized API performance to handle increased demand, ensuring smooth functionality and improved system efficiency.",
		"Collaborated with cross-functional teams to implement and test VueJS-based components, aligning with best practices and design standards for UI improvements and responsiveness."
	  ]	  
	},
	{
	  "title": "Lead Software Analyst",
	  "company_name": "TVSNext",
	  "icon": TVSNext,
	  "iconBg": "#ccc",
	  "date": "July 2022 - Present",
	  "points": [
		"Developed reusable Vue.js components and complex frontend interfaces for high-visibility projects, enhancing code efficiency, team collaboration, and user experience.",
		"Expanded team capabilities by adopting new technologies (C#, Razor, Alpine.js) and improving project outcomes through custom Alpine.js plugins and automated API documentation for large-scale applications.",
		"Recognized with multiple awards for exceptional dedication and leadership, including the 'Extra Miler Award' and 'Super Squad Award' for outstanding team contributions and project delivery."
	  ]	  
	}
  ];
  
  const testimonials = [
	{
	  testimonial:
	  "I thought it was impossible to make a website as beautiful as our product, but Name? proved me wrong.",
	  name: "Sara Lee",
	  designation: "CFO",
	  company: "Acme Co",
	  image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
	  testimonial:
		"I've never met a web developer who truly cares about their clients' success like Name? does.",
	  name: "Chris Brown",
	  designation: "COO",
	  company: "DEF Corp",
	  image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
	  testimonial:
		"After Name? optimized our website, our traffic increased by 50%. We can't thank them enough!",
	  name: "Lisa Wang",
	  designation: "CTO",
	  company: "456 Enterprises",
	  image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
  ];
  
  const projects = [
	{
	  name: "3D Customizer With ChatGPT",
	  description:
		"This project allows you to make your own t-shirt, customize it, choose a color and image upload and ask ChatGPT to make your own t-shirt by the prompt.",
	  tags: [
		{
		  name: "react",
		  color: "blue-text-gradient",
		},
		{
		  name: "javascript",
		  color: "green-text-gradient",
		},
		{
		  name: "tailwind",
		  color: "pink-text-gradient",
		},
	  ],
	  image: dalle,
	  source_code_link: "https://github.com/ElonMusk2002/T-Shirt_3D__Customizer_With_ChatGPT",
	},
	{
	  name: "CodeX",
	  description:
		"A powerfull web application that allows user to chat with chatGPT to help with code. No needed vpn or logging ",
	  tags: [
		{
		  name: "express",
		  color: "blue-text-gradient",
		},
		{
		  name: "NodeJS",
		  color: "green-text-gradient",
		},
		{
		  name: "openAiAPI",
		  color: "pink-text-gradient",
		},
	  ],
	  image: codex,
	  source_code_link: "https://github.com/ElonMusk2002/Codex-ChatGPT",
	},
	{
	  name: "Image Generator by DALL-E",
	  description:
		"A repository that generates images using OpenAI API key written in Python using Django1. DALL·E is a 12-billion parameter version of GPT-3 trained to generate images from text descriptions",
	  tags: [
		{
		  name: "openAiAPI",
		  color: "blue-text-gradient",
		},
		{
		  name: "Python",
		  color: "green-text-gradient",
		},
		{
		  name: "Django",
		  color: "pink-text-gradient",
		},
	  ],
	  image: generator,
	  source_code_link: "https://github.com/ElonMusk2002/Image_Generator_DALL-E",
	},
  ];
  
  export { services, experiences, testimonials, projects };