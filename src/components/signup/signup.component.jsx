import './signup.styles.scss';

import Form from '../form/form.component';

const SignUp = () => {
    return (
        <div className='signup'>
            <Form>
                <div className='signup__head'>
                    <h1>Create an account</h1>
                    <h2>Register on our website with your correct email address and information</h2>
                </div>
            </Form>
        </div>
    )
}

export default SignUp;