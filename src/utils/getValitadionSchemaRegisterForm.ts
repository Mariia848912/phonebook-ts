import * as yup from 'yup';

export const getValitadionSchemaRegisterForm = () => {
  const emailRegExp =
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  const emailValidationText =
    'A valid email address has 4 parts: recipient name (John2), @ symbol, domain name (gmail), top-level domain (.com). For example: "John52@gmail.com".';
  return yup.object().shape({
    name: yup.string().trim().required('Name is a required field'),
    email: yup
      .string()
      .trim()
      .required('Email is a required field')
      .matches(emailRegExp, emailValidationText),
    password: yup.string().min(7).required('Password is a required field'),
  });
};
