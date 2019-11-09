import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CheckoutForm from "../components/CheckoutForm";
import Payment from "../components/Payment";
import Finish from '../components/Finish';
import { positions } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    width: "80%",
    marginLeft: '10%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  content: {
    marginLeft: "40%",
    justifyContent: "center",
    height: "100%"
  }
}));

function getSteps() {
  return ["Shipping address", "Payment", "Finish"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "Step 1: Enter shipping address ...";
    case 1:
      return "Step 2: Payment";
    case 2:
      return "Step 3: Download";
    default:
      return "Unknown step";
  }
}

export default function HorizontalNonLinearAlternativeLabelStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const totalSteps = () => {
    return getSteps().length;
  };

  const skippedSteps = () => {
    return skipped.size;
  };

  const completedSteps = () => {
    return completed.size;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps();
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const handleNext = () => {
    handleComplete();
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const layout = [
    <CheckoutForm handleNext={handleNext} />,
    <Payment handleNext={handleNext} />,
    <Finish/>
  ];

  const handleBack = () => {
    if (isStepComplete(activeStep - 1)) completed.delete(activeStep - 1);
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStep = step => () => {
    if (isStepComplete(activeStep - 1)) completed.delete(activeStep - 1);
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(activeStep);
    setCompleted(newCompleted);

    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted(new Set());
    setSkipped(new Set());
  };

  const isStepSkipped = step => {
    return skipped.has(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                completed={isStepComplete(index)}
                {...buttonProps}
              >
                {label}
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div class={classes.content}>
        <Grid lg={6}>
          <Typography className={classes.instructions}>
            {layout[activeStep]}
          </Typography>
        </Grid>
      </div>
    </div>
  );
}
