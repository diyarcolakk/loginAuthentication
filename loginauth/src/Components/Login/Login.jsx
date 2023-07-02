import firebase from "../../firebase"
import { useState } from "react"


const Login = () => {

    const [loginUser,setLoginUser] = useState("")
    const [loginPassword,setLoginPassword] = useState("")
    const [errorMessage,setErrorMessage] = useState("") 

    const  onSubmitHandler= (e) => {
        e.preventDefault()
        handleLogin();
      
    }

    const onChangeHandler = (e) => {
        const {name,value} = e.target
        return name === "loginUsername" ? setLoginUser(value): setLoginPassword(value)
    }


    const handleLogin = async () => {
     try {
      const newData=  await firebase.auth().signInWithEmailAndPassword(loginUser,loginPassword)
      console.log(newData);
      console.log(typeof newData);
        console.log("Giriş Başarılı");
        setErrorMessage("")
        
     } catch (error) {
        setErrorMessage("Bir hatayla karşılaşıldı. Kullanıcı adı veya şifre yanlış")
        console.log(error);
     }
    }


  return (
    <>    <form onSubmit={onSubmitHandler}>
    <div className="container">
        <div>
        <label htmlFor="Email" >Email</label>
        <input id="Email" name="loginUsername" value={loginUser} type="email" onChange={onChangeHandler}/>
        </div>
        <div>
        <label htmlFor="Password">Password</label>
        <input id="Password" name="loginPassword" value={loginPassword}type="password" onChange={onChangeHandler} />
        </div>
    </div>
    <div className="btn">
        <button  type="submit">Send Login Request</button>
    </div>
</form>
    {errorMessage && <div>{errorMessage}</div>}
</>

  )
}
export default Login