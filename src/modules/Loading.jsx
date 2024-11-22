import { VscLoading } from "react-icons/vsc";

const Loading = () => {
  return (
    <div className="absolute left-2/4 top-2/4 flex justify-center items-center text-5xl">
      <VscLoading className="animate-spin border border-black-500 rounded-full absolute" />
    </div>
  );
};

export default Loading;
