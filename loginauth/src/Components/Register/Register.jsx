import "./Register.scss"
import { useState } from "react"
import firebase from "../../firebase"
import PasswordReset from "../forgotMyPassword/PasswordReset"

const Login = () => {

    const [userName,setUserName] = useState("")
    const [password,setPassword] = useState("")

    const  onSubmitHandler= (e) => {
        e.preventDefault()
        handleSignUp();
        setUserName("")
        setPassword("")
    }

    const onChangeHandler = (e) => {
        const {name,value} = e.target
        return name === "usernameInput" ? setUserName(value): setPassword(value)
    }


    const handleSignUp = async() => {
        try{
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(userName,password)
            console.log(userCredential);
            const user = userCredential.user
            console.log(user);
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
    <>
        <form onSubmit={onSubmitHandler}>
            <div className="container">
                <div>
                <label htmlFor="username" >Username</label>
                <input id="username" name="usernameInput" value={userName} type="email" onChange={onChangeHandler}/>
                </div>
                <div>
                <label htmlFor="Password">Password</label>
                <input id="Password" name="passwordInput" value={password}type="text" onChange={onChangeHandler} />
                </div>
            </div>
            <div className="btn">
                <button  type="submit">Send Authentication Request</button>
            </div>
        </form>
        <PasswordReset />
    </>
  )
}
export default Login