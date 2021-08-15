import useInput from '../hooks/useInput';

const BasicForm = props => {
  const validFirstName = value => {
    return value.trim() !== '';
  };

  const validLastName = value => {
    return value.trim() !== '';
  };

  const validEmail = value => {
    return value.includes('@');
  };

  const {
    value: enterFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: restFirstName,
  } = useInput(validFirstName);

  const {
    value: enterLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: restLastName,
  } = useInput(validLastName);

  const {
    value: enterEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: restEmail,
  } = useInput(validEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailHasError ? 'form-control invalid' : 'form-control';

  const onSubmitHandler = e => {
    e.preventDefault();

    if (!formIsValid) return;

    console.log('submit');
    console.log(enterFirstName, enterLastName, enterEmail);

    restFirstName();
    restLastName();
    restEmail();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="control-group">
        {/* First Name */}
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enterFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            autoComplete="off"
          />
          {firstNameHasError && <p className="error-text">First name must be not empty.</p>}
        </div>

        {/* Last Name */}
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enterLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            autoComplete="off"
          />
          {lastNameHasError && <p className="error-text">Last name must be not empty.</p>}
        </div>
      </div>

      {/* Email */}
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enterEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          autoComplete="off"
        />
        {emailHasError && <p className="error-text">Invalid email.</p>}
      </div>

      {/* Form Actions */}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
