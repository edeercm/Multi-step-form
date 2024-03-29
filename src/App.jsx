import React, { useState } from 'react';
import styled from 'styled-components'
import StepsButtons from './components/StepsButtons'
import Info from './components/StepOne/Info'
import Plan from './components/StepTwo/Plan'
import Addons from './components/StepThree/Addons'
import Summary from './components/StepFour/Summary'
import BackgroundImage from './components/BgImage';
import StepsNavBtns from './components/StepsNavBtns'
import './App.css'

const Section = styled.section`
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
`

const Card = styled.div`
  padding: 1rem 0.75rem;
  width: 55%;
  height: auto;
  background-color:hsl(0, 0%, 100%);

  @media (max-width: 991.98px) {
    padding: 0;
    width: 100%;
  }
`

const FormsCont = styled.div`
  margin-right: 2.25rem;
  width: 75%;
  height: 62.5svh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    padding: 2.5rem 0;
    margin: 0;
    width: 80%;
    height: 60svh;
  }

  @media (max-width: 575.97px) {
    padding: 1rem 0;
    margin: 0;
    width: 90%;
    height: 65svh;
  }
`

function App() {

  const [currentStep, setCurrentStep] = useState(1);

  const handleStepChange = (step) => {
    setCurrentStep(step);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleConfirm = () => {
    // Add logic for confirming or submitting the form
    console.log('Form confirmed!');
  };

  return (
    <Section>
      <Card className="container">
        <div className="row">
          <div className="col-12 col-xl-4 d-flex justify-content-center align-items-center align-items-xl-start">
            <BackgroundImage />
            <StepsButtons handleStepChange={handleStepChange} currentStep={currentStep} />
          </div>
          <div className="col-12 col-xl-8 d-flex align-items-center justify-content-center">
            <FormsCont>
              {currentStep === 1 && <Info />}
              {currentStep === 2 && <Plan />}
              {currentStep === 3 && <Addons />}
              {currentStep === 4 && <Summary />}
              <StepsNavBtns
                handleNextStep={handleNextStep}
                handlePreviousStep={handlePreviousStep}
                handleConfirm={handleConfirm}
                currentStep={currentStep}
              />
            </FormsCont>
          </div>
        </div>
      </Card>
    </Section>
  )
}

export default App
