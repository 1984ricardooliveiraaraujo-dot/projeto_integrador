import { Header } from "../../components/layout/header/index.jsx";
import { Main } from "../../components/layout/main/index.jsx";
import { SectionOurBreads } from "../../components/layout/sectionOurBreads/index.jsx";
import { PresentationSection } from "../../components/layout/presentationSection/index.jsx";
import { CommentSection } from "../../components/layout/commentSection/index.jsx";
import { BreadCalculator } from "../../components/layout/breadCalculator/index.jsx";
import { SectionFormulary } from "../../components/layout/sectionFormulary/index.jsx";
import { Footer } from "../../components/layout/footer/index.jsx";

export const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <SectionOurBreads />
      <PresentationSection />
      <CommentSection />
      <BreadCalculator />
      <SectionFormulary />
      <Footer />
    </>
  );
};
