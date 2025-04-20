export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Respiratory Monitoring System using a Gyroscope",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-160 w-96 opacity-70", // Increased size and reduced opacity
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/resHealth.png",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Acai Messaging App - Real-time Chat Platform",
    des: "A modern messaging platform built with real-time chat, media sharing, and a sleek UI — perfect for communities and conversations.",
    img: "/Acai.png",
    iconLists: [
      "/re.svg",         // Frontend
      "/nodejs.svg",        // Backend
      "/socketio.svg",     // Real-time communication
      "/mongodb.svg",       // Database
      "/tail.svg",   // Styling
    ],
    link: "/ui.aiimg.com",
  },
  {
    id: 2,
    title: "fNIR Brain Imaging",
    des: "Efficient Jacobian matrix reduction for fNIR-DOT imaging.",
    img: "/3D_mesh_xy_plane.png",
    iconLists: ["/matlab.svg"],
    link: "https://github.com/hritikvalluvar/masters-dissertation",
  },
  {
    id: 3,
    title: "FresherServe",
    des: "Streamlined order management for catering businesses.",
    img: "/p1.png",
    iconLists: [
      "/django.svg",
      "/vercel-icon-light.svg",
      "/supabase.svg",
      "/javascript.svg",
      "/python.svg",
    ],
    link: "http://tanujasbatterhouse.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/uob.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Researcher | University of Birmingham",
    desc: "Reduced memory requirements by 90% in Diffuse Optical Tomography (DOT) using PCA and accelerated reconstruction by 80%, improving efficiency in medical imaging.",
    className: "md:col-span-2",
    thumbnail: "/uob.svg",
  },
  {
    id: 2,
    title: "Research Intern | Nanyang Technological University",
    desc: "Built a data pipeline to process top documents and sentences for search queries on AWS, leveraging PySpark and advanced NLP frameworks like SimCSE.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ntu.svg",
  },
  {
    id: 3,
    title: "Samsung PRISM Researcher | Samsung India",
    desc: "Developed an ASR model for English-Tamil code-switching language identification, achieving over 80% accuracy with reduced class error rates.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/srib.jpg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/hritikvalluvar",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/HritikValluvar",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/hvalluvar/",
  },
];
