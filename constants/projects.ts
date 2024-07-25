
export type Project = {
    img: string;
    title: string;
    description: string;
    techIconPath: string[];
    gitRepo:string;
  };
  
  export const projects: Project[] = [
    {
      img: "/food.png",
      title: "Food Ordering Application",
      description: "Food Order App is a user-friendly mobile application designed to simplify the food ordering and delivery process.",
      techIconPath: ["/tech_svg/flutter.svg", "/tech_svg/firebase.svg"],
      gitRepo:"https://github.com/dineshxo/food_order_app_flutter_firebase"
    },
    {
      img: "/homecare.png",
      title: "Home Care ",
      description: "Mobile application to manage and keep track of warranty information and service center contact numbers.",
      techIconPath: ["/tech_svg/flutter.svg","/tech_svg/firebase.svg"],
      gitRepo:"https://github.com/dineshxo/bmi_cal_flutter"
    },
    {
      img: "/todo.png",
      title: "ToDoEase 2.0",
      description: "ToDoEase is a Flutter-based mobile application designed to help users manage their daily tasks efficiently.",
      techIconPath: [
        "/tech_svg/flutter.svg",
        "/tech_svg/nodejs.svg",
        "/tech_svg/express.svg",
        "/tech_svg/mongodb.svg",
      ],
      gitRepo:"https://github.com/dineshxo/ToDoEase-2.0"
    },
    {
      img: "/portfolio.png",
      title: "Portfolio",
      description: "Portfolio website of me. Created with NEXT.JS",
      techIconPath: ["/tech_svg/nextjs.svg", "/tech_svg/typescript.svg"],
      gitRepo:"https://github.com/dineshxo/dineshxo.github.io"
    },
    {
      img: "/camp.png",
      title: "Camp Area",
      description: "Promotional Website for Camping area.",
      techIconPath: ["/tech_svg/nextjs.svg", "/tech_svg/typescript.svg"],
      gitRepo:"https://github.com/dineshxo/camping-site-nextjs-test"
    },
   

   
  ];
  