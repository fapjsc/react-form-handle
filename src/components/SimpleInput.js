import useInput from '../hooks/useInput';

const SimpleInput = props => {
  // Valid
  const nameValid = value => {
    return value.trim() !== '';
  };

  const emailValid = value => {
    return value.includes('@');
  };

  // Name
  const {
    value: enteredName,
    isValid: enterNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(nameValid);

  // Email
  const {
    value: enteredEmail,
    isValid: enterEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(emailValid);

  let formIsValid = false;

  if (enterNameIsValid && enterEmailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!enterNameIsValid || !enterEmailIsValid) return;

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError ? `form-control invalid` : `form-control`;
  const emailInputClasses = emailInputHasError ? `form-control invalid` : `form-control`;

  return (
    <form onSubmit={onSubmitHandler}>
      {/* Name */}
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          autoComplete="off"
        />

        {nameInputHasError && <p className="error-text">Name must not be empty.</p>}
      </div>

      {/* Email */}
      <div className={emailInputClasses}>
        <label htmlFor="email">Email</label>
        <input
          value={enteredEmail}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          autoComplete="off"
        />

        {emailInputHasError && <p className="error-text">Invalid email.</p>}
      </div>

      {/* Form Action */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
