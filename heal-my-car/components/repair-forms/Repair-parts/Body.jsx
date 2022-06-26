import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Body = (props) => {
  return (
    <div className="body">
      <Paper elevation={2} style={{ padding: "10px", marginRight: "15px" }}>
        <FormGroup>
          <h3>Ogólne</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Wiosenny przegląd auta"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wiosenny przegląd auta"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Zimowy przegląd auta"
                onChange={props.handleFormUpdate}
              />
            }
            label="Zimowy przegląd auta"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Inspekcja auta przed zakupem"
                onChange={props.handleFormUpdate}
              />
            }
            label="Inspekcja auta przed zakupem"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola silnika"
                onChange={props.handleFormUpdate}
              />
            }
            label="Kontrola silnika"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Samochód nie odpala"
                onChange={props.handleFormUpdate}
              />
            }
            label="Samochód nie odpala"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Inne usługi"
                onChange={props.handleFormUpdate}
              />
            }
            label="Inne usługi"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Lakierowanie, poprawki, rysy"
                onChange={props.handleFormUpdate}
              />
            }
            label="Lakierowanie, poprawki, rysy"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana reflektorów"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana reflektorów"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana szyby"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana szyby"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Renowacja felg aluminiowych"
                onChange={props.handleFormUpdate}
              />
            }
            label="Renowacja felg aluminiowych"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
