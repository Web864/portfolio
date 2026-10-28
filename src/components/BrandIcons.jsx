import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export function Github({ size = 18, ...props }) {
  return <FontAwesomeIcon icon={faGithub} style={{ width: size, height: size }} {...props} />;
}

export function Linkedin({ size = 18, ...props }) {
  return <FontAwesomeIcon icon={faLinkedinIn} style={{ width: size, height: size }} {...props} />;
}
