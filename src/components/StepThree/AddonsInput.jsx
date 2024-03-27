import React from 'react'
import styled from 'styled-components'

const AddnsInputCont = styled.label`
  position: relative;
  cursor: pointer;
`

const AddnsCheckmark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  background-color: transparent;
  border: 0.125rem solid hsl(229, 24%, 87%);
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    display: none;
    width: 5px;
    height: 12px;
    top: 0.1rem;
    left: 0.4rem;
    border: solid hsl(0, 0%, 100%);
    border-width: 0 2.5px 2.5px 0;
    transform: rotate(45deg);
  }
`

const AddnsInput = styled.input`
  display: inline-block;

  &:checked ~ ${AddnsCheckmark} {
    border-color: hsl(243, 100%, 62%);
    background-color: hsl(243, 100%, 62%);
  }

  &:checked ~ ${AddnsCheckmark}::after {
    display: inline-block;
  }
`

const AddonsInput = ({ onChange }) => {
  return <>
    <AddnsInputCont>
      <AddnsInput type="checkbox" onChange={onChange} />
      <AddnsCheckmark />
    </AddnsInputCont>
  </>
}

export default AddonsInput


