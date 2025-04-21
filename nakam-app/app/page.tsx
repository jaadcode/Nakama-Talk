import TalkingIcon from "./components/TalkingIcon";

export default function Home() {
  return (
    <>
    <div className="flex-col">
      <div className="flex justify-center items-center h-screen w-screen relative -top-40">
        <TalkingIcon></TalkingIcon>
      </div>
      <div className="flex">
        <div className="icons w-[67px] h-[67px] rounded-full"></div>
        <div className="icons w-[67px] h-[67px] rounded-full"></div>
      </div>
    </div>
      
    </>   
  );
}
