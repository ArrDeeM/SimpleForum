import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginAction} from '../store/actions/LoginAction';
import { connect } from 'react-redux';
const Signup = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const login = (username, password) => {
        setIsLoading(true);
        let payload = { username: username, password: password }
        props.loginAction(payload).then(result => {
            console.log("Login Results: ",result);
            if (result.success) {
                setIsLoading(false);
                props.history.push('/home');
            }
        })

    }
    const handleChange = (e) => {
       return(
            e.target.name==='uname'?setusername(e.target.value):
            e.target.name == 'psw'?setPassword(e.target.value):
            ()=>{}
       )
    }
    const handleClick = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/api/signup", {
          method: "POST",
          headers: new Headers({'content-type': 'application/json'}),
          body: JSON.stringify({
            username: username,
            password: password
          })
        }).then(response => {
          if (response.isValid) {
            username.length && password.length && login(username, password);
          } else {
            setIsValid(false)
          }
        });
    }
    return (
        <div className="wrap">
            <div className="signup">
                <h2>Signup Form</h2>
                {!isValid ? <h3>Username Taken</h3> : null}
                <form action="/" method="post">
                    <div className="container">
                      <div>
                        <label className="order" htmlFor="uname"><b>Username</b></label>
                        <input type="text" value={username}
                            name="uname" placeholder="Enter Username"
                             onChange={handleChange}required
                        />
                      </div>
                      <div>
                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password"
                            name="psw" onChange={handleChange} required />
                        <button type="submit" onClick={handleClick}>
                            {!isLoading?"Signup":'Loading...'}
                        </button>
                      </div>
                        <div>
                          <h3>Already Have an Account?</h3>
                          <Link to = '/'>
                          <button type="submit">
                              Login
                          </button>
                          </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state)=>{
    console.log('state',state);
     return {
        userDetails: state.login.userDetails,
    }
}
const mapDispatchToProps ={
    loginAction:LoginAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);
