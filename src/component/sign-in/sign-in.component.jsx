import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { SignInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component{
    constructor(){
        super()

        this.state ={
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'', password:''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
                <h1 className='title'>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange} 
                    type='email' 
                    name='email' 
                    value={this.state.email} 
                    label='Email'
                    required
                    />
                    

                    <FormInput 
                    handleChange={this.handleChange} 
                    type='password' 
                    name='password' 
                    value={this.state.password} 
                    label='Password'
                    required
                    />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in  </CustomButton>
                        <CustomButton onClick ={ SignInWithGoogle } isGoogleSignIn> Sign in with google  </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

}

export default SignIn;