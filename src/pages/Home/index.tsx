import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ProductContent1 from "../../content/ProductContent1.json";
import ProductContent2 from "../../content/ProductContent2.json";
import ProductContent3 from "../../content/ProductContent3.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        id="intro"
        bgImg="alpha-1.webp"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <ContentBlock
        direction="right"
        title={ProductContent1.title}
        content={ProductContent1.text}
        icon="product3.webp"
        id="product1"
      />
      <ContentBlock
        direction="left"
        title={ProductContent2.title}
        content={ProductContent2.text}
        icon="product2.webp"
        id="product2"
      />
      <ContentBlock
        direction="right"
        title={ProductContent3.title}
        content={ProductContent3.text}
        icon="product3.webp"
        id="product3"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        // section={AboutContent.section}
        // icon="about.webp"
        id="about"
        bgImg="about.webp"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
