import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Electronics = (props) => {
  return (
    <div className="electronics">
      <Paper elevation={2} style={{ padding: "35px" }}>
        <FormGroup>
          <h3>Elektryka i elektronika</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola czujników"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Kontrola czujników"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola bezpieczników"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Kontrola bezpieczników"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kasowanie błędów"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Kasowanie błędów"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Serwis klimatyzacji"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Serwis klimatyzacji"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
