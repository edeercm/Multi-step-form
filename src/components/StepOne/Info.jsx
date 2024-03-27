import React from 'react';
import styled from 'styled-components'
import { Container, Title, Label } from '../GlobalStyles';
import InfoInputs from './InfoInputs';

const Info = () => {
  return (
    <Container>
      <article>
        <Title>Personal info</Title>
        <Label>Please provide your name, email, and phone number.</Label>
      </article>
      <form className='d-flex flex-column gap-3'>
        <InfoInputs />
      </form>
    </Container>
  );
};

export default Info;
