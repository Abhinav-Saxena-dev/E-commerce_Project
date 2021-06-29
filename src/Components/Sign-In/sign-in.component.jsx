import React from 'react';
import './sign-in.style.scss';
import FormInput from '../Form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component';

class SignIn extends React.Component{
constructor(props){
    super(props);
    this.state = {
        email : "",
        password : "",
    };
}
handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email : "" , password : ""});
}

handleChange = (event) => {
console.log(event);
const {value, name} = event.target;
this.setState({ [name] : value});
}
render(){
    return(
        <div className= "sign-in">
            <h2 className= "title">I already have an account.</h2>
            <span>Sign with your Email and Password</span>

            <form onSubmit={this.handleSubmit}>
                <FormInput name="email" type = "email" handleChange = {this.handleChange} value = {this.state.email} label="Email" required />
                <FormInput name="password" type = "password" handleChange = {this.handleChange} label = "Password" value={this.state.password} />

                <CustomButton type="submit">SIGN IN</CustomButton>
            </form>
        </div>
    )
}
}

export default SignIn;