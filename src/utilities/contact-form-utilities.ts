export function formatEmailMessage(formValues) {
  return `
    Uma nova pessoa entrou em contato!
    Seguem informações:\n
    Telefone: ${formValues.phoneNumber}\n
    Mensagem: ${formValues.message}\n
  `;
}
