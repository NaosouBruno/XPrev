import ContactForm from "./organisms/ContactForm/ContactForm";
import NavHeader from "./organisms/NavHeader/Nav";
import Intro from "./organisms/Intro/Intro";
import Services from "./organisms/Services/Services";
import About from "./organisms/About/about";

function App() {
  return (
    <>
      <NavHeader />
      <Intro />
      <About />
      <Services />
      <ContactForm />
    </>
  );
}

export default App;
