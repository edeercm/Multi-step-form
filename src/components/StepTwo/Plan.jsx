import React, { useState } from 'react'
import { Container, Title, Label } from '../GlobalStyles';
import PlanCard from './PlanCard';
import PlanSwitch from './PlanSwitch';
import iconarcade from '../../assets/images/icon-arcade.svg'
import iconadvanced from '../../assets/images/icon-advanced.svg'
import iconpro from '../../assets/images/icon-pro.svg'

const Plan = () => {

  const [billingType, setBillingType] = useState('monthly');

  const handleBillingTypeChange = () => {
    setBillingType(prevType => prevType === 'monthly' ? 'yearly' : 'monthly');
  };

  const plans = [
    { name: 'Arcade', price: billingType === 'monthly' ? '$9/mo' : '$90/yr', monthsFree: 2 },
    { name: 'Advanced', price: billingType === 'monthly' ? '$12/mo' : '$120/yr', monthsFree: 2 },
    { name: 'Pro', price: billingType === 'monthly' ? '$15/mo' : '$150/yr', monthsFree: 2 },
  ];

  return <>
    <Container>
      <article>
        <Title>Select your plan</Title>
        <Label>You have the option of monthly or yearly billing.</Label>
      </article>
      <form className='d-flex flex-row justify-content-between'>
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            plan={plan}
            yearly={billingType === "yearly"}
            icon={index === 0 ? iconarcade : index === 1 ? iconadvanced : iconpro}
          />
        ))}
      </form>
      <PlanSwitch handleBillingTypeChange={handleBillingTypeChange} />
    </Container>
  </>
}

export default Plan