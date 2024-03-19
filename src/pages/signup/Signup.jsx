import React, { useEffect, useState } from 'react';

import './signup.scss';
import InputField from './InputField';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;
  
  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
  });
  const { nameError, emailError, passwordError, confirmPasswordError } =
    formErrors;

  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.nameError = 'Username is required!';
    }
    if (!values.email) {
      errors.emailError = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.emailError = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.passwordError = 'Password is required';
    } else if (values.password.length < 4) {
      errors.passwordError = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.passwordError = 'Password cannot exceed more than 10 characters';
    }

    if (!values.confirmPassword) {
      errors.confirmPasswordError = 'Enter password to confirm';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPasswordError = 'Password is not same.Re-enter password.';
    }
    return errors;
  };

  return (
    <div className='container'>
      <form className='form-container' onSubmit={handleSubmit}>
        <h1 className='form-heading'>Signup</h1>
        <InputField
          title={'Name'}
          
          name={'name'}
          id={'name'}
          error={nameError}
          value={name}
          type={'text'}
          handleChange={handleChange}
        />
        <InputField
          title={'Email'}
          type={'text'}
          name={'email'}
          id={'email'}
          value={email}
          error={emailError}
          handleChange={handleChange}
        />
        <InputField
          title={'Password'}
          type={'password'}
          name={'password'}
          id={'password'}
          value={password}
          error={passwordError}
          handleChange={handleChange}
        />
        <InputField
          title={'Confirm Password'}
          type={'password'}
          name={'confirmPassword'}
          id={'confirmPassword'}
          value={confirmPassword}
          error={confirmPasswordError}
          handleChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Signup;
