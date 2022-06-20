import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Chassis = (props) => {
  return (
    <div className="chassis">
      <Paper elevation={2} style={{ padding: "10px", marginRight: "15px" }}>
        <FormGroup>
          <h3>Podwozie</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa zawieszenia przedniego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa zawieszenia przedniego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa zawieszenia tylnego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa zawieszenia tylnego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa hamulców"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa hamulców"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa tłumika"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa tłumika"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
