import { Formik } from "formik";
import { useState } from "react";
import Alert from "../../atoms/Alert/Alert";
import FormSubmitButton from "../../atoms/FormSubmitButton/FormSubmitButton";
import Input from "../../atoms/Input/Input";
import {
  contactFormInitialValues,
  contactFormSchema,
} from "../../constants/contact-form-constants";
import { formatEmailMessage } from "../../utilities/contact-form-utilities";
import "./ContactForm.scss";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type: null, message: "" });

  async function submit(formValues) {
    setIsSubmitting(true);

    try {
      await fetch(
        `${import.meta.env.VITE_FORMSUBMIT_URL}/${
          import.meta.env.VITE_FORMSUBMIT_ID
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formValues.name,
            message: formatEmailMessage(formValues),
          }),
        }
      );

      setAlertMessage({
        type: "success",
        message:
          "Recebemos suas informações e em breve entraremos em contato :)",
      });
    } catch (error) {
      setAlertMessage({
        type: "error",
        message:
          "Ocorreu um erro ao enviar seu formulário. Por favor tente novamente.",
      });
    }

    setIsSubmitting(false);
  }

  return (
    <div className="contact-form" id="contact">
      <h2 className="contact-title">Envie sua dúvida</h2>
      {alertMessage.message ? (
        <Alert text={alertMessage.message} type={alertMessage.type} />
      ) : null}
      <Formik
        initialValues={contactFormInitialValues}
        validationSchema={contactFormSchema}
        validateOnChange
        validateOnMount
        onSubmit={(values) => submit(values)}
      >
        {({
          errors,
          values,
          setFieldValue,
          isValid,
          submitForm,
          touched,
          setFieldTouched,
        }) => (
          <>
            <Input
              label="Nome"
              name="name"
              placeholder="Digite seu nome"
              error={touched.name ? errors.name : null}
              onBlur={() => setFieldTouched("name")}
              required={true}
              value={values.name}
              valueChange={(value) => setFieldValue("name", value)}
            />
            <Input
              label="Celular"
              mask="99 99999 9999"
              name="phone-number"
              placeholder="Digite seu celular"
              error={touched.phoneNumber ? errors.phoneNumber : null}
              onBlur={() => setFieldTouched("phoneNumber")}
              value={values.phoneNumber}
              required={true}
              valueChange={(value) => setFieldValue("phoneNumber", value)}
            />
            <Input
              label="Mensagem"
              name="message"
              placeholder="Digite sua Mensagem"
              error={touched.message ? errors.message : null}
              lines={4}
              multiline={true}
              onBlur={() => setFieldTouched("message")}
              value={values.message}
              valueChange={(value) => setFieldValue("message", value)}
            />
            <FormSubmitButton
              text="Enviar"
              disabled={!isValid || alertMessage.type === "success"}
              isLoading={isSubmitting}
              onClick={() => submitForm()}
            />
          </>
        )}
      </Formik>
    </div>
  );
}
