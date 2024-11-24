import Footer from "./components/Footer";
import MainSection from "./components/MainSection"
import NewsSection from "./components/NewsSection";

import VideoHeading from "./components/VideoHeading";

export default function Home() {
  return (
    <>
      <MainSection/>
      {/* <VideoHeading/> */}
      <NewsSection/>
      <Footer/>
      </>
  );
}