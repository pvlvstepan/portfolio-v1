const validateInput = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email.toLowerCase(),
    )
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.message.trim()) {
    errors.message = "Message can't be empty";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message should be at least 20 characters long";
  }

  return errors;
};

export default validateInput;
