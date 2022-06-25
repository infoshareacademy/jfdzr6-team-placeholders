export const getFormData = (e) => {
  const form = e.target;
  const { email, password } = form;

  const formData = {
    email: email.value,
    password: password.value,
  };

  return formData;
};
