import React from "react";
import "./FormElements.css";

function FormElements({
  cities,
  handleChange,
  formData,
  date,
  onSubmit,
  handleStatus,
  errors,
}) {
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="main-content">
        <div className="form-group">
          <h1>Здравствуйте, </h1>
          <div>
            <div style={{display: "flex"}}>
            <h1 style={{ color: "#666666" }}>Username №111</h1>
            <button className='btn2' onClick={handleStatus}>
              Изменить статус
            </button>
            </div>
            <div className={formData.status ? "speech-bubble" : "hidden"}>
              {formData.status}
            </div>
          </div>
        </div>

        <div className="form-group">
          <label className="main-label" htmlFor="city">
            Ваш город
          </label>
          <select
            value={formData.city}
            name="city"
            onChange={(e) => handleChange(e)}
            className="input-control"
          >
            {cities.map((item, idx) => (
              <option key={idx} value={item.city}>
                {item.city}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="main-label">Пароль</label>
          <div>
          <input
            value={formData.password || ""}
            onChange={(e) => handleChange(e)}
            name="password"
            type="password"
            className={errors.password !== "" ? "input-control danger" : "input-control"}
          />
          <span className="error-msg">{errors.password}</span></div>
          <label className="right-label">
            Ваш новый пароль должен содержать не менее 5 символов.
          </label>
          
        </div>

        <div className="form-group">
          <label className="main-label">Пароль ещё раз</label>
          <div>
          <input
            disabled={formData.password === "" ? true : false }
            value={formData.repeatPassword || ""}
            onChange={(e) => handleChange(e)}
            name="repeatPassword"
            type="password"
            className={errors.repeatPassword !== "" ? "input-control danger" : "input-control"}
          />
          <span className="error-msg">{errors.repeatPassword}</span></div>
          <label className="right-label">
            Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
            ошибки.
          </label>
        </div>

        <div className="form-group">
          <label className="main-label">Электронная почта</label>
          <div>
          <input
            value={formData.email || ""}
            onChange={(e) => handleChange(e)}
            name="email"
            className={errors.email !== "" ? "input-control danger" : "input-control"}
          />
          <span className="error-msg">{errors.email}</span></div>
          <label className="right-label">
            Можно изменить адрес, указанный при регистрации.
          </label>
        </div>

        <div className="form-group">
          <label className="main-label">Я согласен</label>
          <div>
          <input name="newsAccepted" onClick={handleChange}className="checkbox" type="checkbox"></input>
          <span className="checkbox-span">принимать актуальную информацию на емейл.</span>
          </div>
        </div>
        <div className="form-group">
          <label></label>
          <button className="btn">Изменить</button>
          <label className="right-label date-label">{date}</label>
        </div>
      </form>
    </div>
  );
}

export default FormElements;
