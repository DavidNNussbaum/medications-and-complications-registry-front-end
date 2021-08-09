const SignupForm = () => {
    const handleSubmit = (event) => {
       event.preventDefault()
       
    }
    return(
   <form onSubmit={handleSubmit}>
      <label htmlFor="first_name"> 
          First Name: 
      </label>
<br/>
 <input type="email" id="email"/><br/>
 <label htmlFor="email"> 
          Email: 
      </label>
<br/>
 <input type="email" id="email"/><br/>
 <label htmlFor="password"> 
          Password: 
      </label>
<br/>
 <input type="password" id="password"/><br/>
 <label htmlFor="password_confirmation"> 
          Repeat Password: 
      </label>
<br/>
 <input type="password" id="password-confirmation"/><br/>
 <input type="submit" value="Submit"/> 
</form>
    )
}

export default SignupForm;