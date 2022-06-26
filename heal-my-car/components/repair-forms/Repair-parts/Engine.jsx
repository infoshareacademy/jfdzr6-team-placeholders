import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Engine = (props) => {
  return (
    <div className="engine">
      <Paper elevation={2} style={{ padding: "10px", marginRight: "15px" }}>
        <FormGroup>
          <h3>Silnik</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana oleju"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana oleju"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana rozrządu"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana rozrządu"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Diagnoza pracy silnik"
                onChange={props.handleFormUpdate}
              />
            }
            label="Diagnoza pracy silnik"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana rozrządu"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana rozrządu"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana rozrusznika"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana rozrusznika"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Akumulator/bateria"
                onChange={props.handleFormUpdate}
              />
            }
            label="Akumulator/bateria"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Sprzęgło"
                onChange={props.handleFormUpdate}
              />
            }
            label="Sprzęgło"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Mycie silnika"
                onChange={props.handleFormUpdate}
              />
            }
            label="Mycie silnika"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
