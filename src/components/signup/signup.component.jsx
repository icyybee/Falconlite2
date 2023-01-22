import VisibilityIcon from '@mui/icons-material/Visibility';

import './signup.styles.scss';

import Form from '../form/form.component';
import FormInput from '../formInput/formInput.component';
import FormButton from '../button/button.component';

const SignUp = () => {

    return (
        <div className='signup'>
            <Form 
                headTop='Create an account' 
                headBottom='Register on our website with your correct email address and information'
            >
                <div className='signup__content'>
                    <FormInput
                        label='First name' 
                        type='text' 
                        required 
                        placeholder='Jeremiah'
                    />
                    <FormInput 
                        label='Email Address'    
                        type='email' 
                        required 
                        placeholder='Fame@gmail.com'
                    />
                    <FormInput 
                        label='Phone Number'    
                        type='tel' 
                        required 
                        placeholder='+2348103769079' 
                    />
                    <FormInput 
                        label='Password'    
                        type='password' 
                        required
                        placeholder='********************'
                        icon= <VisibilityIcon />
                    />

                    <div className='remember'>
                        <input type='checkbox' checked/>
                        <label>Remember me</label>
                    </div>
                </div>
                <FormButton text='Sign up' />
                <div className='signin'>
                    <p>Already have an account? <span>Sign in</span></p>
                </div>
            </Form>
        </div>
    )
}

export default SignUp;