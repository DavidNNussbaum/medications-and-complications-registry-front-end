import React, { Component } from "react"
 

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
             
        };
      }
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      };

    handleSubmit = (event) => {
       event.preventDefault()
       this.props.setLoginUser(this.state)
       this.props.setShowForm(false)
    }
    render() {
    return(
   <form onSubmit={this.handleSubmit}>
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
 <input type="submit" value="Submit"/> 
</form>
    )
}
}


export default LoginForm;