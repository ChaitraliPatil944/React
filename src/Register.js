import React from 'react';

class Register extends React.Component{
    render(){
        return(
            <div>
                <h2>Register</h2>
                <form>
                    <label>Username</label>
                    <input type="text" name="username"/>
                    <br/>
                    <label>Password</label>
                    <input type="password" name="password"/>
                    <br/>
                    <label>Email</label>
                    <input type="email" name="email"/>
                    <br/>
                    <label>Phone</label>
                    <input type="text" name="phone"/>
                    <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        )
    }
}
export default Register;