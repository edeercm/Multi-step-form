import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form';

const InputCont = styled.div`
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
`

const InputLabels = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: hsl(213, 96%, 18%);
  }
`

const InputError = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
  color: hsl(354, 84%, 57%);
`

const Input = styled.input`
  padding: 0.5rem 0.75rem;
  font-weight: 500;

  &::placeholder {
    color: hsl(231, 11%, 63%);
  }

  &:focus {
    font-weight: 500; 
    box-shadow: none;
    color: hsl(213, 96%, 18%);
    border-color: hsl(213, 96%, 18%);
  }

  &.is-invalid {
    font-weight: 500; 
    background-image: none;
    border-color: hsl(354, 84%, 57%);

    &:focus {
      box-shadow: none;
      border-color: hsl(354, 84%, 57%);
    }
  }

`

const InfoInputs = () => {

  const { register, formState: { errors }, trigger } = useForm();

  const handleBlur = async (fieldName) => {
    await trigger(fieldName);
  };

  return <>
    <InputCont>
      <InputLabels>
        <label>Name</label>
        {errors.name && <InputError>This field is required</InputError>}
      </InputLabels>
      <Input
        {...register('name', { required: true, minLength: 2, maxLength: 20 })}
        type="text"
        id="name"
        placeholder='e.g. Stephen King'
        onBlur={() => handleBlur('name')}
        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
      />
    </InputCont>
    <InputCont>
      <InputLabels>
        <label>Email</label>
        {errors.email && <InputError>This field is required</InputError>}
      </InputLabels>
      <Input
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        type="email"
        id="email"
        placeholder='e.g. stephenking@lorem.com'
        onBlur={() => handleBlur('email')}
        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
      />
    </InputCont>
    <InputCont>
      <InputLabels>
        <label>Phone Number</label>
        {errors.phone && <InputError>This field is required</InputError>}
      </InputLabels>
      <Input
        {...register('phone', { required: true, minLength: 8, maxLength: 10, pattern: /^[0-9]*$/ })}
        type="tel"
        id="phone"
        placeholder='e.g. 123 4567 8900'
        onBlur={() => handleBlur('phone')}
        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
      />
    </InputCont>
  </>
}

export default InfoInputs