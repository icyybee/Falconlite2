import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';

import './signup.styles.scss';

import Form from '../form/form.component';
import FormInput from '../formInput/formInput.component';
import FormButton from '../button/button.component';
import Verify from '../verify/verify.component';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Form input validation
        if (!name || !email || !phone || !password) {
            return alert ('Please fill out all fields!');
        }

        //Email verification
        const urlencoded = new URLSearchParams();
        urlencoded.append("name", name);
        urlencoded.append("email", email);
        urlencoded.append("phone", phone);
        urlencoded.append("password", password);

        const requestOptions = {
        method: 'POST',
        body: urlencoded,
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        redirect: 'follow'
        };

        const response = await fetch('https://falconlite.com/v1/api/send-email', requestOptions);
        const result = await response.json();
        console.log(result);

        if (result.success === true && result.code === 200) {
            alert(result.data.message);
            setCode(result.data.verification_code);
            
            //Sending verification code
            const urlencoded = new URLSearchParams();
            urlencoded.append("code", result.data.verification_code);

            const verificationResponse = await fetch ('https://falconlite.com/v1/api/verify-email', requestOptions);
  
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
            {code && <Verify code={code} />}
        </div>
    )
}

export default SignUp;