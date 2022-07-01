import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, FormControlLabel } from "@mui/material";
import Paper from "@mui/material/Paper";
import Icon from "@mui/material/Icon";
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

export const Electronics = (props) => {
  return (
    <div className="electronics">
      <Paper elevation={0} style={{ padding: "35px", height: "600px" }}>
        <FormGroup>
        <div style={{ display: "flex" }}>
            <Icon style={{ marginRight: "15px" }} color="secondary">
              <ElectricCarIcon />
            </Icon>
            <h3>Elektryka i elektronika</h3>
          </div>
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
