import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Dane pojazdu", "Naprawy", "Informacje", "Zatwierdzanie"];

export const HorizontalLabelPositionBelowStepper = () => {
  return (
    <div
      style={{
        width: "100%",
        border: "2px solid #ba58e6",
        //borderRadius: "70px",
        padding: "25px",
        backgroundColor: "rgb(204, 0, 204, .3)",
      }}
    >
      <Stepper activeStep={0} alternativeLabel >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};
