import PropTypes from "prop-types";
import Navbar from "../modules/Navbar";

const Homepage = ({ navs, setPageState }) => {
  return (
    <div>
      <Navbar navs={navs} setPageState={setPageState} />

      <div className="">homepage</div>
    </div>
  );
};

Homepage.propTypes = {
  navs: PropTypes.object.isRequired,
};
export default Homepage;
