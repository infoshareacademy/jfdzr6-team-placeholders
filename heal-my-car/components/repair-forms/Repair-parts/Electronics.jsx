import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Electronics = (props) => {
  return (
    <div className="electronics">
      <Paper elevation={2} style={{ padding: "10px" }}>
        <FormGroup>
          <h3>Elektryka i elektronika</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola czujników"
                onChange={props.handleFormUpdate}
              />
            }
            label="Kontrola czujników"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kontrola bezpieczników"
                onChange={props.handleFormUpdate}
              />
            }
            label="Kontrola bezpieczników"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Kasowanie błędów"
                onChange={props.handleFormUpdate}
              />
            }
            label="Kasowanie błędów"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Serwis klimatyzacji"
                onChange={props.handleFormUpdate}
              />
            }
            label="Serwis klimatyzacji"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
