import React, { useState } from "react";
import Input from "../../atoms/Input/Input";

type Contact = {
  message?: string;
  name: string;
  phoneNumber: string;
};

export default function ContactForm() {
  const [contact, setContact] = useState({
    message: "",
    name: "",
    phoneNumber: "",
  } as Contact);

  async function submit(): Promise<void> {
    await fetch("https://formsubmit.co/ajax/9134f5699246e801b9b19d45c453ece4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contact.name,
        message: `
            Uma nova pessoa entrou em contato!\n
            Seguem informações:\n\n
            Telefone: ${contact.phoneNumber}\n\n
            Mensagem: ${contact.message}
        `,
      }),
    });
  }

  function contactFieldChange<T extends keyof Contact>(
    key: T,
    value: Contact[T]
  ) {
    setContact({
      ...contact,
      [key]: value,
    });
  }

  return (
    <div>
      <Input
        placeholder="Digite seu nome"
        value={contact.name}
        valueChange={(value) => contactFieldChange("name", value)}
      />
      <Input
        placeholder="Telefone"
        value={contact.phoneNumber}
        valueChange={(value) => contactFieldChange("phoneNumber", value)}
      />
      <Input
        placeholder="Digite sua Mensagem"
        value={contact.message as string}
        valueChange={(value) => contactFieldChange("message", value)}
      />
      <button onClick={() => submit()}>Enviar</button>
    </div>
  );
}
