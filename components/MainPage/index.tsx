import Image from "next/image";
import Header from "./Header";
import WeOffer from "./WeOffer";
import { MainPageData } from "../../interfaces";

const MainPage = ({ data }: { data: MainPageData }) => {
  const { main } = data.languages.ru;
  const { weOffer } = data.languages.ru;

  return (

    // <div
    //   style={{
    //     zIndex: 1,
    //     minWidth: "100vw",
    //     minHeight: "100vh",
    //   }}
    // >
    //   <div
    //     style={{
    //       position: "absolute",
    //       zIndex: -1,
    //       left: "20%",
    //       top: 0,
    //     }}
    //   >
    //     <Image
    //       src="/mainPage/ellipse-4.svg"
    //       width={1700}
    //       height={1700}
    //       alt="ellipse-right"
    //     />
    //   </div>
    //   <div
    //     style={{
    //       position: "absolute",
    //       zIndex: -1,
    //       right: "75%",
    //       top: "75vh",
    //     }}
    //   >
    //     <Image
    //       src="/mainPage/ellipse-4.svg"
    //       width={800}
    //       height={800}
    //       alt="ellipse-left"
    //     />
    //   </div>
    <div>
      <Header main={main} />
      <WeOffer weOffer={weOffer} />
    </div>

    // </div>
  );
};
export default MainPage;
