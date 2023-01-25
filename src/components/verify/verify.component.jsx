import './verify.styles.scss';

import Form from '../form/form.component';
import FormButton from '../button/button.component';

const Verify = ({code}) => {
    const codeArray = code.split('');

    return (
        <div className='verify'>
            <Form 
                headTop='Kindly enter Email verification code' 
                headBottom='To Sign up, kindly enter the verification code sent to your email address'
            >
                <div className='verify__content'>
                    {codeArray.map((c, index) => (
                        <div className='verify__block'>
                            <input key={index} value={c} />
                        </div>
                    ))}
                </div>
                <FormButton text='Proceed' />
            </Form>
        </div>
    )
}

export default Verify;