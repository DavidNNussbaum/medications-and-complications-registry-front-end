import SignupForm from '../forms/SignupForm';

function Signup(props) {
    return (
    <div>
       <h1>This is signup.</h1>
    <SignupForm setUser={props.setUser}/>
    </div>
    )
}
     
export default Signup;