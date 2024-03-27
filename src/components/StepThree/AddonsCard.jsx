import React, { useState } from 'react';
import styled from 'styled-components'
import AddonsInput from './AddonsInput'

const AddonsCardSty = styled.div`
  height: 9svh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0.5rem;
  background-color: ${({ isChecked }) => isChecked ? 'hsl(217, 100%, 97%)' : 'transparent'};
  border: 0.05rem solid ${({ isChecked }) => isChecked ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)'};
`

const AddonsName = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 0.95rem;
  color: hsl(213, 96%, 18%);
`

const AddonsLabel = styled.span`
  font-size: 0.85rem;
  color: hsl(231, 11%, 63%);
`

const AddonsCard = ({ addon }) => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return <>
    <AddonsCardSty className='container'isChecked={isChecked}>
      <div className="row">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <AddonsInput onChange={handleCheckboxChange}/>
        </div>
        <div className="col-8">
          <AddonsName>{addon.name}</AddonsName>
          <AddonsLabel>{addon.label}</AddonsLabel>
        </div>
        <div className="col-2">

        </div>
      </div>
    </AddonsCardSty>
  </>
}

export default AddonsCard