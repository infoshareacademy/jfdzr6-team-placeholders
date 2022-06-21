import { sendPasswordResetEmail } from "firebase/auth";
import { firebaseErrors } from "../../src/utils/firebaseErrors";
import { auth } from "./Firebase";
import { Form } from "./Form";

export const ForgotPassword = () => {
  const handelPasswordReset = (e) => {
    e.preventDefaul();
    sendPasswordResetEmail(auth, e.target.email.value).catch((e) => {
      console.log(e.code);
      alert(firebaseErrors[e.doce]);
    });
  };

  return (
    <Form
      submitText="Ask for password reminder"
      onSubmit={handelPasswordReset}
      isPasswordHidden
    />
  );
};
