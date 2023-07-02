import { useState } from "react";
import "./PasswordReset.scss"

import firebase from "../../firebase";
const PasswordReset = () => {


    const [holdEmail,setHoldenEmail] = useState("")
    const [successMessage,setSuccessMessage] = useState("")
    const [errorMessage,setErrorMessage] = useState("")



    const resetPassword = async () => {
        try {
    await firebase.auth().sendPasswordResetEmail(holdEmail)
            setSuccessMessage("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.")
            setErrorMessage("")
        } catch (error) {

        setErrorMessage("Hatalı bir giriş yaptınız ya da ilgili kullanıcı bulunamadı")
        setSuccessMessage("")   
        console.log(error);
        }

    }

    const onSubmitHandler = (e) => {
        e.preventDefault()
        resetPassword();
    }

    const onChangeHandler = (e) => {

        const {name,value} = e.target
       return name ==="emailInput" ? setHoldenEmail(value) : console.log("There is unexpected Error");

    }

    console.log(holdEmail);
    
    
  return (
    <>
      <form className="resetContainer" onSubmit={onSubmitHandler}>
          <div className="resetEmail">
            <label htmlFor="email">Email: </label>
            <input
              placeholder="Please Enter Your Email"
              id="email"
              name="emailInput"
              value={holdEmail}
              type="email"
              onChange={onChangeHandler}
            />
          </div>
        <div className="btn">
          <button type="submit">Send Password Reset</button>
        </div>
      </form>
      {successMessage && <div> {successMessage}</div>}
      {errorMessage && <div> {errorMessage}</div>}

    </>
  );
};
export default PasswordReset;
