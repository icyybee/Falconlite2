import Authentication from '../authentication/authentication.component';

import Logo from '../../assets/logo.png';

import './form.styles.scss';

const Form = ({children}) => {
    return (
        <div className='form'>
            <div className='form__container'>
                <div className='form__left'>
                    <div className='logo__container'>
                        <img src={Logo} alt='logo image'/>
                    </div>
                    {children}
                </div>
                <Authentication />
            </div>
        </div>
    )
}

export default Form;