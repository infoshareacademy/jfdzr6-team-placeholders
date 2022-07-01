import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";

export const Body = (props) => {
  return (
    <div className="body">
      <Paper elevation={0} style={{ padding: "35px", marginRight: "35px", height: "600px" }}>
        <FormGroup>
          <div style={{display:"flex"}}>
            <Icon style={{marginRight:"15px"}} color="secondary">
              <DirectionsCarIcon />
            </Icon>
            <h3>Ogólne</h3>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                name="Wiosenny przegląd auta"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wiosenny przegląd auta"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Zimowy przegląd auta"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Zimowy przegląd auta"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Inspekcja auta przed zakupem"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Inspekcja auta przed zakupem"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola silnika"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Kontrola silnika"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Samochód nie odpala"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Samochód nie odpala"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Inne usługi"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Inne usługi"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Lakierowanie, poprawki, rysy"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Lakierowanie, poprawki, rysy"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana reflektorów"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana reflektorów"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana szyby"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana szyby"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Renowacja felg aluminiowych"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Renowacja felg aluminiowych"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
