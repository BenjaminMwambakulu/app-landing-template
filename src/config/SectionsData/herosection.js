import { getImage } from "./utils/getImage";

export const heroSectionData = {
  title: "Supercharge Your Productivity with TaskMaster",
  description: "TaskMaster helps you manage your tasks, track progress, and stay organized effortlessly. Available for web, iOS, and Android.",
  primaryButton: {
    label: "Download App",
    link: "#download"
  },
  secondaryButton: {
    label: "Watch Video",
    link: "#video"
  },
  image: {
    src: getImage("heroSection.jpg"),
    alt: "TaskMaster app on web and mobile"
  }  
};
