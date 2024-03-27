import React from 'react'
import styled from 'styled-components'

const PlanCardSty = styled.div`
  padding: 0 0.75rem;
  width: 7.5rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 0.125rem solid hsl(229, 24%, 87%);

  &.yearly {
    height: 10rem;
  }

  &:hover {
    cursor: pointer;
    border-color: hsl(213, 96%, 18%);
  }
`

const PlanIcon = styled.img`
  width: 40%;
`

const PlanName = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 0.9rem;
  color: hsl(213, 96%, 18%);
`

const PlanPrice = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: hsl(231, 11%, 63%);
`

const PlanMosFree = styled.span`
  font-size: 0.8rem;
  font-weight: 500;
  color: hsl(213, 96%, 18%);
`

const PlanCard = ({ plan, yearly, icon }) => {
  return <>
    <PlanCardSty className={yearly ? "yearly" : ""}>
      <PlanIcon src={icon} alt={plan.name} />
      <div className="d-flex flex-column">
        <PlanName>{plan.name}</PlanName>
        <PlanPrice>{plan.price}</PlanPrice>
        {yearly && <PlanMosFree>{plan.monthsFree} months free</PlanMosFree>}
      </div>
    </PlanCardSty>
  </>
}

export default PlanCard