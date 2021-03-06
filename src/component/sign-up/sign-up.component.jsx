import React from 'react'
import './sign-up.styes.scss'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor(){
        super()

        this.state ={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword){
            alert("Confirm password don't match")
            return
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password)
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch(error){
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        
        return(
            <div className ='sign-up'>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                
                <h1 className='title'>I dont have an account</h1>
                <span>Sign Up with your email and password</span>

                <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                label = 'Display Name'
                handleChange = {this.handleChange}
                required
                />

                <FormInput 
                type='email'
                name='email'
                value={email}
                label = 'Email'
                handleChange = {this.handleChange}
                required
                />

                <FormInput 
                type='password'
                name='password'
                value={password}
                label = 'Password'
                handleChange = {this.handleChange}
                required
                />

                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                label = 'Confirm Password'
                handleChange = {this.handleChange}
                required
                />

                <CustomButton type='submit' > SIGN UP </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;
