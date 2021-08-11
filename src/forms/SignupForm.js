import React, { Component } from "react"

class SignupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            email: "",
            password: "",
            password_confirmation: "",
        };
      }
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      };

    handleSubmit = (event) => {
       event.preventDefault()
       this.props.setUser(this.state)
    }
    render() {
    return(
   <form onSubmit={this.handleSubmit}>
      <label htmlFor="first_name"> 
          First Name: 
      </label>
<br/>

 <input onChange={this.handleChange} name="first_name" type="text" id="first-name"/><br/>
 <label htmlFor="email"> 
          Email: 
      </label>
<br/>
 <input onChange={this.handleChange} name="email" type="email" id="email"/><br/>
 <label htmlFor="password"> 
          Password: 
      </label>
<br/>
 <input onChange={this.handleChange} name="password" type="password" id="password"/><br/>
 <label htmlFor="password_confirmation"> 
          Repeat Password: 
      </label>
<br/>
 <input onChange={this.handleChange} name="password_confirmation" type="password" id="password-confirmation"/><br/>
 <input type="submit" value="Submit"/> 
</form>
    )
}
}


export default SignupForm;