import './formInput.styles.scss';

const FormInput = ({label, icon, ...otherProps}) => {
    
    return (
        <div className="form-group">
            <label>{label}</label>
            <div className='form-group__input'>
                <input {...otherProps} />
                {icon && (
                    <div className='password'>{icon}</div>
                )}
            </div>
        </div>
    )
}

export default FormInput;