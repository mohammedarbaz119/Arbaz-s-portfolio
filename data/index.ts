export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Dedicated to Team Collaboration and Effective Communication",
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
    title: "Currently Learning a lot of things!",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to Hire me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// name: "MovieReviews",
// description:
//   "MovieReviews is a web app where users can see the reviews of the movies and can also add their reviews.",
// imageUrl: "/reviewsapp.png",
// tech: ["React.js", "Spring boot", "MongoDB"],
// github: "https://github.com/mohammedarbaz119/Spring-Boot",
// },

// {
// name: "cropSmart",
// description:
// "Project uses ML for crop and fertilizer recommendations with plant disease recogniton for crop diagnosis, boosting agricultural productivity.",
// imageUrl: "/cropsmaart.png",
// tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Scikit-learn"],
// github: "https://github.com/nihal3000/harvestify",
// link: "https://cropsmart-r9fx.onrender.com/",
// },
// {
// name: "Blog App",
// description:
//   "Blog App is a web app where users can share their posts and follow others to see their content.",
// imageUrl: "/bloglite.jpg",
// tech: ["HTML", "Jinja2", "Flask", "Bootstrap", "SQLite"],
// github: "https://github.com/asdsyd/bloglite",
// },
// {
// name: "Portfolio",
// description: "This is my portfolio website",
// imageUrl: "/portfolio2.png",
// tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
// github: "https://github.com/mohammedarbaz119/portfolio",
// link: "https://portfolio-mohammedarbaz119.vercel.app/",
// },

// {
// name: "TicketShow",
// description:
//   "TicketShow is a web app where users can book tickets for movies and can also see the reviews of the movies.",
// tech: ["Vue.js", "CSS","Flask", "SqlLite", "HTML","Redis"],
// github: "https://github.com/asdsyd/appdev2",
// imageUrl: "/TicketShow.jpeg",
// },

type Projects = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  github?: string;
  link?: string;
};

export const projects: Projects[] = [
  {
    id: 1,
    title: "DreamEstate",
    des: " a full-stack real estate platform leveraging modern web technologies. Built robust backend APIs with Express.js and Node.js for efficient data handling and server-side operations. Crafted dynamic, responsive user interfaces using React, ensuring a smooth and interactive property browsing experience.",
    img: "/DreamEstate.JPG",
    iconLists: ["html.png", "/js.png", "/node.png", "react.png", "mongo.png"],
    link: "https://dreamestate.vercel.app/",
  },
  {
    id: 2,
    title: "ChemBot",
    des: "ChemBot is a CRAG-based LLM chatbot that answers users' queries related to chemistry, providing accurate and detailed information.",
    img: "/chembot.png",
    iconLists: ["flask.jpg", "html.png", "css.png", "react.png", "node.png"],
    link: "https://chembot-ui.vercel.app/",
  },
  {
    id: 3,
    title: "MovieReviews",
    des: "MovieReviews is a web app where users can see the reviews of the movies and can also add their reviews.",
    img: "/reviewsapp.png",
    iconLists: ["/re.svg", "spbt.jpg", "css.png", "java.png", "mongo.png"],
    github: "https://github.com/mohammedarbaz119/Review-App",
  },
  {
    id: 4,
    title: "CropSmart",
    des: "Project uses ML for crop and fertilizer recommendations with plant disease recogniton for crop diagnosis, boosting agricultural productivity.",
    img: "/cropsmaart.svg",
    iconLists: ["flask.jpg", "html.png", "css.png", "/js.png"],
    github: "https://github.com/nihal3000/Harvestify",
  },
  {
    id: 5,
    title: "TicketShow",
    des: "TicketShow is a web app where users can book tickets for movies and can also see the reviews of the movies.",
    img: "/TicketShow.jpeg",
    iconLists: [
      "flask.jpg",
      "html.png",
      "css.png",
      "boots.png",
      "vue.png",
      "redis.png",
    ],
    github: "https://github.com/asdsyd/appdev2",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/mohammedarbaz119",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/@mda835856",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/mohammed-arbazuddin-qureshi-551a51243/",
  },
];
