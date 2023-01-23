import BasicButtons from '../authButton/authButton.component';

import './authentication.styles.scss';

import Background from '../../assets/bg.jpg';
import Flag1 from '../../assets/flag1.jpg';
import Flag2 from '../../assets/flag2.jpg';
import Flag3 from '../../assets/flag3.jpg';

const Authentication = () => {
    return (
        <div className='auth'>
            <div className='auth__container'>
                <div className='auth__content'>
                    <img src={Background} className='auth__img' alt='background img' />
                    <div className='auth__content--container'>
                        <div className='auth__content--box'>
                            <div className='auth__box box--1'>
                                <div className='auth__head'>
                                    <p>Currency</p>
                                    <p>Balance</p>
                                </div>
                                <div className='auth__body'>
                                    <div className='auth__body--group'>
                                        <img src={Flag1} className='auth__flag' alt='US flag'/>
                                        <p className='currency'>United States Dollars</p>
                                        <p className='amount'>$103,748.30</p>
                                    </div>
                                    <div className='auth__body--group'>
                                        <img src={Flag2} className='auth__flag' alt='flag 2'/>
                                        <p className='currency'>Great British Pound</p>
                                        <p className='amount'>&#163;84,000.28</p>
                                    </div>
                                    <div className='auth__body--group'>
                                        <img src={Flag3} className='auth__flag' alt='flag 3'/>
                                        <p className='currency'>European Euro</p>
                                        <p className='amount'>&#163;50,000.00</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='auth__box--sub'>
                                <div className='auth__box box--2'>
                                    <div className='auth__top'>
                                        <img src={Flag1} className='auth__flag' alt='US flag'/>
                                        <p>United States Dollars</p>
                                        <p>USD</p>
                                    </div>

                                    <div className='auth__body auth__sub'>
                                        <div className='auth__sub--group'>
                                            <p>Routing no</p>
                                            <p>1234******</p>
                                        </div>
                                        <div className='auth__sub--group'>
                                            <p>Account no</p>
                                            <p>1234**********</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='auth__box box--3'>
                                    <BasicButtons />                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication;