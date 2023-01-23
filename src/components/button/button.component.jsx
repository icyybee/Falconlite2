import Button from '@mui/material/Button';

import './button.styles.scss';

const FormButton = ({text}) => {
    return (
        <div className='button'>
            <Button type='submit' variant="contained">{text}</Button>
        </div>
    )
}

export default FormButton;