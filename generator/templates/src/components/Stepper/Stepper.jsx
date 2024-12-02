import { IfxStepper, IfxStep } from '@infineon/infineon-design-system-react';
import './stepper.scss';

function Stepper( { activeStep, showStepNumber, variant }) {
  return (
    <IfxStepper active-step={activeStep} show-step-number={showStepNumber} variant={variant}>
      <IfxStep>Step Label 1</IfxStep>
      <IfxStep>Step Label 2</IfxStep>
      <IfxStep>Step Label 3</IfxStep>
    </IfxStepper>
  );
}

export default Stepper;