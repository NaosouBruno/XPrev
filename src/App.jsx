import ContactForm from "./organisms/ContactForm/ContactForm";
import NavHeader from "./organisms/NavHeader/Nav";
import Intro from "./organisms/Intro/Intro";
import Services from "./organisms/Services/Services";

function App() {
  return (
    <>
      <NavHeader />
      <Intro />
      <Services />
      <ContactForm />
    </>
  );
}

export default App;
