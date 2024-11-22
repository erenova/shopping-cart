import { FaArrowLeft } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-white">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <Link to={"/"} className="flex justify-center items-center p-8 ">
        <FaArrowLeft className="text-4xl mr-20 absolute -translate-x-[150%]" />
        <div className="flex flex-col justify-center items-center gap-5">
          <FiAlertTriangle className="text-yellow-400 text-6xl " />
          <span className="">404 - No Page</span>
        </div>
      </Link>
    </div>
  );
};

export default Error;
