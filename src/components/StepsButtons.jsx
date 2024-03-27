import React from 'react'
import styled from 'styled-components'

const stepsData = [
  { number: 1, title: 'Step 1', subtitle: 'Your info' },
  { number: 2, title: 'Step 2', subtitle: 'Select Plan' },
  { number: 3, title: 'Step 3', subtitle: 'Add-ons' },
  { number: 4, title: 'Step 4', subtitle: 'Summary' }
];

const StepsCont = styled.div`
  position: absolute;
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 991.98px) {
    margin: 0;
    flex-direction: row;
  }
`

const Circle = styled.button`
  width: 2.175rem;
  height: 2.175rem;
  border-radius: 50%;
  font-weight: bold;
  color: hsl(0, 0%, 100%);
  border: 0.125rem solid hsl(0, 0%, 100%);
  color: ${props => props.$active ? 'hsl(213, 96%, 18%)' : 'hsl(0, 0%, 100%)'};
  background-color: ${props => props.$active ? 'hsl(217, 100%, 97%)' : 'transparent'};

  @media (min-width: 575.98px) and (max-width: 991.98px) {
    width: 4rem;
    height: 4rem;
    font-size: 1.5rem;
  }

  @media (max-width: 575.98px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
`

const Title = styled.h1`
  line-height: 1;
  font-size: 0.725rem;
  color: hsl(229, 24%, 87%);

  @media (max-width: 991.98px) {
   display: none;
  }
`

const Subtitle = styled.h2`
  font-weight: bold;
  font-size: 0.825rem;
  color: hsl(0, 0%, 100%);

  @media (max-width: 991.98px) {
   display: none;
  }
`

const StepsButtons = ({ handleStepChange, currentStep }) => {
  return <>
    <StepsCont>
      {stepsData.map(step => (
        <div key={step.number} className='d-flex flex-row gap-3'>
          <Circle
            onClick={() => handleStepChange(step.number)}
            $active={step.number === currentStep}
          >
            {step.number}
          </Circle>
          <div className='text-uppercase'>
            <Title>{step.title}</Title>
            <Subtitle>{step.subtitle}</Subtitle>
          </div>
        </div>
      ))}
    </StepsCont>
  </>
}

export default StepsButtons