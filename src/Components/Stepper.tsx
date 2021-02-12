import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Personal_Detail } from './Personal_Detail';
import { ThemeProps } from '../Global/Types';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Payment_Detail } from './Payment_Detail';
import { Review } from './Review';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: 'auto',
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Personal Detail', 'Payment Detail', 'Review'];
}

function getStepContent(stepIndex: number, setStep: React.Dispatch<React.SetStateAction<number>>, formValues: {} , setFormValues: React.Dispatch<React.SetStateAction<{}>>) {
  switch (stepIndex) {
    case 0:
      return <Personal_Detail step={setStep} initValues={formValues} setValues={setFormValues} />;
    case 1:
      return <Payment_Detail step={setStep} initValues={formValues} setValues={setFormValues} />;
    case 2:
      return <Review step={setStep} initValues={formValues} setValues={setFormValues} />;
    default:
      return 'Unknown stepIndex';
  }
}

export const Steppers: React.FC<ThemeProps> = ({ islit }) => {
  const theme = createMuiTheme({
    palette: {
      type: islit ? "light" : "dark",
    },
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({});
  const steps = getSteps();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Stepper style={{ backgroundColor: 'transparent' }} activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {
          getStepContent(activeStep, setActiveStep, formValues, setFormValues)
        }
      </div>
    </ThemeProvider>
  );
}
