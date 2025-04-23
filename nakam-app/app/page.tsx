import TalkingIcon from "./components/TalkingIcon";

export default function Home() {
  return (
    <>
    <div className="flex-col h-[calc(100vh-36px)]">
      <div className="flex justify-center items-center w-screen mt-[150px]">
        <TalkingIcon></TalkingIcon>
      </div>
      <div className="flex px-[60px] justify-between mt-[100px]">
        <div className="icons w-[67px] h-[67px] rounded-full"></div>
        <div className="icons w-[67px] h-[67px] rounded-full"></div>
      </div>
    </div>
      
    </>   
  );
}
