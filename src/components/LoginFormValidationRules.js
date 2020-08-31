export default function validate(values) {
  let errorsFun = {};
  if (!values.password) {
    errorsFun.password = "Укажите пароль";
  } else if (values.password.length < 5) {
    errorsFun.password = "Пароль должен быть не менее 5 символов";
  } else errorsFun.password = "";

  if (!values.email) {
    errorsFun.email = "Укажите email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errorsFun.email = "Неверный формат E-mail";
  } else errorsFun.email = "";

  if (values.repeatPassword !== values.password) {
    errorsFun.repeatPassword = "Пароли не совпадают";
  } else if (!values.repeatPassword) {
    errorsFun.repeatPassword = "Укажите пароль";
  } else errorsFun.repeatPassword = "";

  errorsFun.touched = true;
  return errorsFun;
}
