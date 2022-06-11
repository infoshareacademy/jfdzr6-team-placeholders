// import { useHistory } from "react-router-dom";

import { useOutletContext } from "react-router-dom";

export const Form2 = () => {
  const { formData } = useOutletContext();
  // const history = useHistory();
  console.log("Stan z kontekstu", formData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { vehicleBrand, vin } = e.target;
    //const {checkboxes} = e.checkboxes;

    /* fetch("https://heal-my-car.appspot.com", {
      method: "POST",
      headers: {},
      body: JSON.stringify(vehicleBrand, vin,)// checkboxes, opis),
    }).then(() => {
      console.log("New object added");
      // History redirect
      // history.go(-1)
      // przekierowanie wstępnie do strony głównej
      // tutaj utworzona musi zostać nowa strona potwierdzająca wysyłkę 
      // formularza lub przekierowanie do panelu klienta gdzie zobaczymy umieszczone nowe zapytanie "do wyceny".
      history.puh("/");
    }); */

    setFormData({
      vehicleBrand: vehicleBrand.value,
      vin: vin.value,
    });
    navigate("/");
  };

  return (
    <div>
      <h1>Formularz 2</h1>
      <form onSubmit={handleSubmit}></form>
      <div className="nadwozie">
        <label>Blacharka</label>
        <input type="checkbox" />
        Nadwozie
      </div>
    </div>
  );
};

{
  /* <div className="nadwozie">
          <input type="checkbox" />Wymiana szyby

        </div> */
}
