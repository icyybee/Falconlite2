import Authentication from '../authentication/authentication.component';

import Logo from '../../assets/logo.png';

import './form.styles.scss';

const Form = ({children, headTop, headBottom}) => {
    return (
        <div className='form'>
            <div className='form__container'>
                <div className='form__left'>
                    <div className='logo__container'>
                        <img src={Logo} alt='logo image'/>
                    </div>
                    <div className='form__head'>
                        <h1>{headTop}</h1>
                        <h2>{headBottom}</h2>
                    </div>
                    {children}
                </div>
                <Authentication />
            </div>
        </div>
    )
}

export default Form;