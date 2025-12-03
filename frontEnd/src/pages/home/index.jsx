import { Header } from "../../components/layout/header/index.jsx";
import { Main } from "../../components/layout/main/index.jsx";
import { SectionOurBreads } from "../../components/layout/sectionOurBreads/index.jsx";
import { PresentationSection } from "../../components/layout/presentationSection/index.jsx";

export const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <SectionOurBreads />
      <PresentationSection />
    </>
  );
};
