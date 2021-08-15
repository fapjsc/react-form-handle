import { useState } from 'react';

const useInput = validateValue => {
  const [enterValue, setEnterValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enterValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = e => {
    setEnterValue(e.target.value);
  };

  const inputBlurHandler = e => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnterValue('');
    setIsTouched(false);
  };

  return {
    value: enterValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
