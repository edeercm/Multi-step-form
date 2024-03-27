import React from 'react'
import styled from 'styled-components'

const BtnsCont = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const BackBtn = styled.button`
  font-weight: 500;
  color: hsl(231, 11%, 63%);

  &:hover {
    color: hsl(213, 96%, 18%);
  }
`

const NextBtn = styled.button`
  width: 6.25rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 100%);
  background-color: hsl(213, 96%, 18%);
`

const ConfirmBtn = styled.button`
  width: 6.25rem;
  height: 2.5rem;
  border-radius: 0.4rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: hsl(0, 0%, 100%);
  background-color: hsl(243, 100%, 62%);
`

const StepsNavBtns = ({ handleNextStep, handlePreviousStep, handleConfirm, currentStep }) => {
  return <>
    <BtnsCont>
      <BackBtn
        style={{ opacity: currentStep === 1 ? 0 : 1 }}
        onClick={handlePreviousStep}
      >
        Go Back
      </BackBtn>
      {currentStep !== 4 && (
        <NextBtn
          onClick={handleNextStep}
        >
          Next Step
        </NextBtn>
      )}
      {currentStep === 4 && (
        <ConfirmBtn
          onClick={handleConfirm}
        >
          Confirm
        </ConfirmBtn>
      )}
    </BtnsCont>
  </>
}

export default StepsNavBtns