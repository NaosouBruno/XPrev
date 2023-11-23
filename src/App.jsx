import ContactForm from "./organisms/ContactForm/ContactForm";
import NavHeader from "./organisms/NavHeader/Nav";

function App() {
  return (
    <>
      <NavHeader />
      <div style={{ padding: 16, display: "flex", justifyContent: "center" }}>
        <div style={{ width: "50vw" }}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default App;
