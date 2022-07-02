export const getResetData = (e) => {
  const form = e.target;
  const { email } = form;

  const formData = {
    email: email.value,
  };

  return formData;
};
