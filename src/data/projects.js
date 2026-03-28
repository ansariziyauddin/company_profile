import inventoryImg from '../assets/mobile/inventory_management.jpg';
import magicalImg from '../assets/mobile/magical_community.jpg';
import vaultImg from '../assets/mobile/secureVault.jpg';
import societyImg from '../assets/mobile/soceity_managemet.jpg';

// Web images
import webFashionImg from '../assets/mobile/web_fashion_world.jpg';
import webSocialImg from '../assets/mobile/web_social_service.jpg';
import webEcommerceImg from '../assets/mobile/web_e_commerce.jpg';
import webPortfolioImg from '../assets/mobile/web_portfolio_todo.jpg';
import webMagicalImg from '../assets/mobile/web_magical_community.jpg';

export const webProjects = [
  {
    id: 1,
    title: "Fashion World",
    description: "A modern e-commerce fashion platform with elegant product browsing, cart management, and seamless checkout flow.",
    tags: ["React", "E-Commerce", "UI/UX"],
    link: "https://grace-adorn-shop.onrender.com/",
    image: webFashionImg,
    type: "web"
  },
  {
    id: 2,
    title: "Social Service",
    description: "A platform dedicated to connecting individuals with volunteers and organizations to support community needs, promote welfare, and create a positive social impact.",
    tags: ["React", "Node.js", "Full Stack"],
    link: "https://khidmat-frontend-backend.onrender.com/",
    image: webSocialImg,
    type: "web"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "A scalable multi-product e-commerce system with admin dashboard and order management.",
    tags: ["React", "Redux", "REST API"],
    link: "https://e-commerce-plhj.onrender.com/",
    image: webEcommerceImg,
    type: "web"
  },
  {
    id: 4,
    title: "Portfolio + Todo Manager",
    description: "A combined personal portfolio and productivity app showcasing seamless UX with integrated task management.",
    tags: ["React", "Firebase", "SPA"],
    link: "https://portfolio-todo-combo-mi4g.onrender.com/#/",
    image: webPortfolioImg,
    type: "web"
  },
  {
    id: 5,
    title: "Magical Community",
    description: "A community platform to bring people together, fostering active engagement and smooth communications.",
    tags: ["React", "Community", "Web"],
    link: "#",
    image: webMagicalImg,
    type: "web"
  }
];

export const mobileProjects = [
  {
    id: 'm1',
    title: "Inventory Management",
    description: "A comprehensive solution for tracking assets and managing stock efficiently.",
    tags: ["Mobile", "Utility"],
    image: inventoryImg,
    type: "mobile"
  },
  {
    id: 'm2',
    title: "Magical Community",
    description: "A mobile application designed to connect users and foster community engagement.",
    tags: ["Mobile", "Community"],
    image: magicalImg,
    type: "mobile"
  },
  {
    id: 'm3',
    title: "Secure Vault",
    description: "A secure and reliable personal vault app for sensitive data and operations.",
    tags: ["Mobile", "Security"],
    image: vaultImg,
    type: "mobile"
  },
  {
    id: 'm4',
    title: "Society Management",
    description: "A residential society management platform for easier administration and communication.",
    tags: ["Mobile", "Management"],
    image: societyImg,
    type: "mobile"
  }
];
