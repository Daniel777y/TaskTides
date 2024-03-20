import NavBar from "../components/NavBar.jsx";
import PropTypes from "prop-types";

const BaseBody = (props) => {
  return (
    <>
      <NavBar activePage={props.activePage} />
      {props.children}
    </>
  );
};

BaseBody.propTypes = {
  children: PropTypes.node.isRequired,
};

BaseBody.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default BaseBody;
