import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';

import './signup.styles.scss';

import Form from '../form/form.component';
import FormInput from '../formInput/formInput.component';
import FormButton from '../button/button.component';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Form input validation
        if (!name || !email || !phone || !password) {
            return alert ('Please fill out all fields!');
        }

        //Email verification
        const response = await fetch('https://falconlite.com/v1/api/send-email', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                phone,
                password
            }),
            headers: { 'Content-Type' : 'application/json'}
        });
        const json = await response.json();
        console.log(json.data.message);
        if (json.success === true && json.code === 200) {
            alert(json.data.message);

            //Sending verification code
            const verificationResponse = await fetch ('https://falconlite.com/v1/api/verify-email', {
                method: 'POST',
                body: JSON.stringify({
                    email : json.data.email
                }),
                headers: { 'Content-Type' : 'application/json'}
            });
    
            if (verificationResponse.ok) {
                alert("A Verification code has been sent to your email!");
            } else {
                alert('Error sending verification code. Please try again!');
            };
        } else {
            alert("Sign up failed. Please try again!");
        }
    }

    return (
        <div className='signup'>
            <Form handleSubmit={handleSubmit}
                headTop='Create an account' 
                headBottom='Register on our website with your correct email address and information'
            >
                <div className='signup__content'>
                    <FormInput
                        label='First name' 
                        type='text' 
                        required
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        placeholder='Jeremiah'
                    />
                    <FormInput 
                        label='Email Address'    
                        type='email' 
                        required 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Fame@gmail.com'
                    />
                    <FormInput 
                        label='Phone Number'    
                        type='tel' 
                        required 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder='+2348103769079' 
                    />
                    <FormInput 
                        label='Password'    
                        type='password' 
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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