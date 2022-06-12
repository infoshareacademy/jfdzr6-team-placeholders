import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Body = (props) => {
  return (
    <div className="body">
      <Paper elevation={2} style={{ padding: "10px", marginRight: "15px" }}>
        <FormGroup>
          <h3>Nadwozie</h3>
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
        </FormGroup>
      </Paper>
    </div>
  );
};
