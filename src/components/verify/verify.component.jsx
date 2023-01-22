import './verify.styles.scss';

import Form from '../form/form.component';
import FormButton from '../button/button.component';

const Verify = () => {
    return (
        <div className='verify'>
            <Form 
                headTop='Kindly enter Email verification code' 
                headBottom='To Sign up, kindly enter the verification code sent to your email address'
            >
                <div className='verify__content'>
                    <div className='verify__block'></div>
                    <div className='verify__block'></div>
                    <div className='verify__block'></div>
                    <div className='verify__block'></div>
                    <div className='verify__block'></div>
                </div>
                <FormButton text='Proceed' />
            </Form>
        </div>
    )
}

export default Verify;