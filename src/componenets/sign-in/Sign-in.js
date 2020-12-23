import React, { Component } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../formInput/FormInput";
import './sign-in.scss'


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            required
          />
          <div className="buttons">
          <CustomButton type='submit' isGoogleSignIn={false}>Sign in</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true} >Sign in With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
