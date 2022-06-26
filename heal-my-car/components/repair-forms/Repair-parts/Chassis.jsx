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
                name="Wymiana zawieszenia przedniego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana zawieszenia przedniego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana zawieszenia tylnego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana zawieszenia tylnego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tłumika tylnego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana tłumika tylnego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tłumika środkowego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana tłumika środkowego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tarcz i klocków"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana tarcz i klocków"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana przednie tarcze i klocki"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana przednie tarcze i klocki"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana tylne tarcze i klocki"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana tylne tarcze i klocki"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Wymiana wymiana płynu hamulcowego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Wymiana wymiana płynu hamulcowego"
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
                name="Naprawa hamuca ręcznego"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa hamulca ręcznego"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa zacisków hamulcowych"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa zacisków hamulcowych"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="Naprawa systemu ABS"
                onChange={props.handleFormUpdate}
              />
            }
            label="Naprawa systemu ABS"
          />
        </FormGroup>
      </Paper>
    </div>
  );
};
