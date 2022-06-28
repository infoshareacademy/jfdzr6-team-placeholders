import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";

export const Chassis = (props) => {
  return (
    <div className="chassis">
      <Paper elevation={2} style={{ padding: "35px", marginRight: "35px" }}>
        <FormGroup>
          <h3>Podwozie</h3>
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana zawieszenia przedniego"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana zawieszenia przedniego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana zawieszenia tylnego"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana zawieszenia tylnego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tłumika tylnego"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana tłumika tylnego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tłumika środkowego"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana tłumika środkowego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tarcz i klocków"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana tarcz i klocków"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana przednie tarcze i klocki"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana przednie tarcze i klocki"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tylne tarcze i klocki"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana tylne tarcze i klocki"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana wymiana płynu hamulcowego"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Wymiana wymiana płynu hamulcowego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa hamulców"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Naprawa hamulców"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa hamuca ręcznego"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Naprawa hamulca ręcznego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa zacisków hamulcowych"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Naprawa zacisków hamulcowych"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa systemu ABS"
                onChange={props.handleFormUpdate}
                color="secondary"
              />
            }
            label="Naprawa systemu ABS"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
