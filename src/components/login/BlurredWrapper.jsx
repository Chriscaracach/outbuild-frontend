import PropTypes from "prop-types";
import "../../App.css";

const BlurredWrapper = ({ children }) => {
  return <div className="blurred-wrapper">{children}</div>;
};

BlurredWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlurredWrapper;
