import React, { useState } from 'react'
import AddonsCard from './AddonsCard';
import { Container, Title, Label } from '../GlobalStyles';

const Addons = () => {

  const addons = [
    {
      name: 'Online service', label: 'Access to multiplayer games',
      // price: billingType === 'monthly' ? '$1/mo' : '$10/yr'
    },
    {
      name: 'Larger storage', label: 'Extra 1TB of cloud save',
      // price: billingType === 'monthly' ? '$2/mo' : '$20/yr'
    },
    {
      name: 'Customizable profile', label: 'Custom theme on your profile',
      // price: billingType === 'monthly' ? '$2/mo' : '$20/yr'
    }
  ];


  return <>
    <Container>
      <article>
        <Title>Pick add-ons</Title>
        <Label>Add-ons hel enhance your gaming experience.</Label>
      </article>
      <form className='d-flex flex-column gap-3'>
        {addons.map((addon, index) => (
          <AddonsCard
            key={index}
            addon={addon}
          />
        ))}
      </form>
  </Container >
  </>
}

export default Addons