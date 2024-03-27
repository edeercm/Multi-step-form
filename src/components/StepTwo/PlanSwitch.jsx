import React, { useState } from "react";
import styled from 'styled-components'

const SwitchBg = styled.div`
  margin-top: 0.5rem;
  height: 6.25svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(217, 100%, 97%);
`

const SwitchCont = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

const SwitchMoLbl = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ monthlyActive }) => monthlyActive ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"};
`

const Switch = styled.label`
  position: relative;
  width: 2.125em;
  height: 1.175em;
`

const SwitchInput = styled.input`
  &:checked + span:before {
    transform: translateX(0.92em);
  }
`

const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  transition: .4s;
  border-radius: 1rem;
  background-color: hsl(213, 96%, 18%);
  
  &::before {
    position: absolute;
    content: "";
    height: 0.775em;
    width: 0.775em;
    left: 0.2em;
    bottom: 0.2em;
    transition: .4s;
    border-radius: 50%;
    background-color: hsl(0, 0%, 100%);
  }
`

const SwitchYrLbl = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ yearlyActive }) => yearlyActive ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"};
`

const PlanSwitch = ({ handleBillingTypeChange }) => {

  const [monthlyActive, setMonthlyActive] = useState(true);

  const handleChange = () => {
    setMonthlyActive(!monthlyActive);
    handleBillingTypeChange(!monthlyActive);
  };

  return <> 
    <SwitchBg>
      <SwitchCont>
        <SwitchMoLbl monthlyActive={monthlyActive}>Monthly</SwitchMoLbl>
        <Switch>
          <SwitchInput type="checkbox" onChange={handleChange} />
          <SwitchSlider />
        </Switch>
        <SwitchYrLbl yearlyActive={!monthlyActive}>Yearly</SwitchYrLbl>
      </SwitchCont>
    </SwitchBg>
  </>
}

export default PlanSwitch