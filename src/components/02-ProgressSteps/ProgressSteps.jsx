import React from "react";
//mui
import Divider from "@mui/material/Divider";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProgressSteps = () => {
  const steps = [1, 2, 3, 4];
  const [activeStep, setActiveStep] = React.useState(0);
  function handleClick(action) {
    action === "next"
      ? setActiveStep(activeStep + 1)
      : setActiveStep(activeStep - 1);
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((step) => {
          return (
            <Step
              key={step}
              sx={{
                marginBottom: 5,
                marginTop: 5,
                width: "10vw",
              }}
            >
              <StepLabel />
            </Step>
          );
        })}
      </Stepper>
      <Box
        sx={{ display: "flex", flexDirection: "row", pt: 2, float: "right" }}
      >
        <Button
          variant='contained'
          sx={{ mr: 1 }}
          onClick={handleClick}
          disabled={activeStep === 0}
        >
          BACK
        </Button>
        <Button
          variant='contained'
          sx={{
            marginLeft: 1,
          }}
          onClick={() => handleClick("next")}
          disabled={activeStep === steps.length - 1}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

export default ProgressSteps;
