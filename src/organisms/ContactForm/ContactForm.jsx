import { useState } from "react";
import FormSubmitButton from "../../atoms/FormSubmitButton/FormSubmitButton";
import Input from "../../atoms/Input/Input";
import "./ContactForm.scss";
import Alert from "../../atoms/Alert/Alert";

export default function ContactForm() {
  const [contact, setContact] = useState({
    message: "",
    name: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);

  function formatEmailMessage() {
    return `
      Uma nova pessoa entrou em contato!
      Seguem informações:\n
      Telefone: ${contact.phoneNumber}\n
      Mensagem: ${contact.message}\n
    `;
  }

  async function submit() {
    setIsSubmitting(true);

    await fetch("https://formsubmit.co/ajax/9134f5699246e801b9b19d45c453ece4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contact.name,
        message: formatEmailMessage(),
      }),
    });
    setSuccessAlertVisible(true);
    setIsSubmitting(false);
  }

  function contactFieldChange(key, value) {
    setContact({
      ...contact,
      [key]: value,
    });
  }

  function isFormValid() {
    return !!contact.name && !!contact.phoneNumber;
  }

  return (
    <div className="contact-form">
      {successAlertVisible ? (
        <Alert
          text="Recebemos suas informações e em breve entraremos em contato :)"
          type="success"
        />
      ) : null}
      <Input
        label="Nome"
        name="name"
        placeholder="Digite seu nome"
        required={true}
        value={contact.name}
        valueChange={(value) => contactFieldChange("name", value)}
      />
      <Input
        placeholder="Digite seu celular"
        mask="99 99999 9999"
        name="phone-number"
        label="Celular"
        value={contact.phoneNumber}
        required={true}
        valueChange={(value) => contactFieldChange("phoneNumber", value)}
      />
      <Input
        label="Mensagem"
        multiline={true}
        lines={4}
        name="message"
        placeholder="Digite sua Mensagem"
        value={contact.message}
        valueChange={(value) => contactFieldChange("message", value)}
      />
      <FormSubmitButton
        text="Enviar"
        disabled={!isFormValid()}
        isLoading={isSubmitting}
        onClick={() => submit()}
      />
    </div>
  );
}
