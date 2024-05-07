import Image from "next/image";
import Header from "./Header";
import WeOffer from "./WeOffer";
import { MainPageData } from "../../interfaces";
import Socials from "./Socials";
import OnePerson from "./QuotesList/OnePerson";
import QuotesList from "./QuotesList";

const MainPage = ({ data }: { data: MainPageData }) => {
  const { main } = data.languages.ru;
  const { weOffer } = data.languages.ru;
  const { quotesList } = data.languages.ru.quotes;

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
      <Socials />
      <QuotesList quotesList={quotesList}/>
    </div>

    // </div>
  );
};
export default MainPage;
