import React, { useState, useEffect, useRef } from "react";
import FormElements from "./FormElements";
import sortData from "./sortData";
import data from "../data/cities.json";
import reformDate from "./reformDate";
import validate from "./LoginFormValidationRules";
function Form() {
  const [cities] = useState(sortData(data));
  const isLoaded = useRef(false);
  const [date, setDate] = useState("");
  const [formData, setFormData] = useState({
    status: "",
    city: cities[0].city,
    password: "",
    repeatPassword: "",
    email: "",
    newsAccepted: false,
  });
  const [clickBox, setClick] = useState(true);
  const [errors, setErrors] = useState({
    password: "",
    repeatPassword: "",
    email: "",
  });

  const handleChange = (e) => {
    if (e.target.name !== "newsAccepted") {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    } else {
      setClick((clickBox) => !clickBox);
      setFormData({ ...formData, [e.target.name]: clickBox });
    }
  };

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
    }
    else setErrors(validate(formData));
  }, [formData]);

  const onSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    if (
      errors.password === "" &&
      errors.repeatPassword === "" &&
      errors.email === "" && errors.touched === true
    ) {
      setDate(reformDate());
      console.log(JSON.stringify(formData));
    }
  };

  const handleStatus = (e) => {
    e.preventDefault();
    const status = prompt("Введите новый статус!");
    setFormData({ ...formData, status });
  };

  return (
    <FormElements
      handleChange={handleChange}
      formData={formData}
      cities={cities}
      date={date}
      onSubmit={onSubmit}
      handleStatus={handleStatus}
      errors={errors}
    />
  );
}

export default Form;
