import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export interface IShareData {
  Icon: any;
  link: (url: string, title: string) => string;
  name: string;
}

export const shareData: IShareData[] = [
  {
    Icon: faFacebookF,
    link: (url: string, title: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        url
      )}&t=${title}`,
    name: "Facebook",
  },
  {
    Icon: faInstagram,
    link: (url: string, title: string) =>
      `https://www.instagram.com/?url=${encodeURIComponent(
        title
      )}&url=${encodeURIComponent(url)}`,
    name: "Instagram",
  },
  {
    Icon: faLinkedin,
    link: (url: string, title: string) =>
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        url
      )}&title=${encodeURIComponent(title)}`,
    name: "Linkedin",
  },
  {
    Icon: faEnvelope,
    link: (url: string, title: string) =>
      `mailto:?subject=${encodeURIComponent(title)}&body=${url}`,
    name: "Mail",
  },
];

export default shareData;
