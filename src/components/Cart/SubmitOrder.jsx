import { useRef, useState } from "react";
import styles from "./SubmitOrder.module.css";

const isInputValid = (inputValue) => inputValue.trim() !== "";

const SubmitOrder = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    city: true,
    address: true,
  });

  const nameInputRef = useRef();
  const cityInputRef = useRef();
  const addressInputRef = useRef();

  const confirmOrderHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const isEnteredNameValid = isInputValid(enteredName);
    const isEnteredCityValid = isInputValid(enteredCity);
    const isEnteredAddressValid = isInputValid(enteredAddress);

    setFormValidity({
      name: isEnteredNameValid,
      city: isEnteredCityValid,
      address: isEnteredAddressValid,
    });

    const isFormValid =
      isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

    if (!isFormValid) {
      return;
    }

    props.onSubmit({
      name: enteredName,
      city: enteredCity,
      address: enteredAddress,
    });
  };

  const nameInputClasees = `${styles.control} ${
    formValidity.name ? "" : styles.invalid
  }`;
  const cityInputClasees = `${styles.control} ${
    formValidity.city ? "" : styles.invalid
  }`;
  const addressInputClasees = `${styles.control} ${
    formValidity.address ? "" : styles.invalid
  }`;

  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div className={nameInputClasees}>
        <label htmlFor="name">Ім'я</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formValidity.name && <p>Введіть Ім'я</p>}
      </div>
      <div className={cityInputClasees}>
        <label htmlFor="sity">Місто</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formValidity.city && <p>Введіть Місто</p>}
      </div>
      <div className={addressInputClasees}>
        <label htmlFor="address">Адреса</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formValidity.address && <p>Введіть Адресу</p>}
      </div>
      <div className={styles.actions}>
        <button className={styles.submit}>Підтвердити Замовлення!</button>
        <button type="button" onClick={props.onCancel}>
          Скасувати
        </button>
      </div>
    </form>
  );
};

export default SubmitOrder;
