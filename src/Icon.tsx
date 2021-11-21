import { FaGithub, FaLinkedin, FaRegEnvelope, FaGlobe } from "react-icons/fa";

const Icon = ({ url }) => {
  const size = 20;
  const style = { marginRight: 4 };
  const u = url.toLowerCase();
  if (u.indexOf("github") >= 0) {
    return <FaGithub size={size} color="black" style={style} />;
  } else if (u.indexOf("linkedin") >= 0) {
    return <FaLinkedin size={size} color="black" style={style} />;
  } else if (u.indexOf("mail") >= 0) {
    return <FaRegEnvelope size={size} color="black" style={style} />;
  } else if (u.indexOf("vanrijn.dev") >= 0) {
    return <FaGlobe size={size} color="black" style={style} />;
  }
  return null;
};

export default Icon;
