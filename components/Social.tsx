import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/monbondoc", label: "GitHub" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/raymondbondoc/", label: "LinkedIn" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/MonBondoc28/", label: "Facebook" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/momonbondoc/", label: "Instagram" },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer" aria-label={item.label}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
