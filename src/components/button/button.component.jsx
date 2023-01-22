import Button from '@mui/material/Button';

import './button.styles.scss';

const FormButton = ({text}) => {
    return (
        <div className='button'>
            <Button variant="contained">{text}</Button>
        </div>
    )
}

export default FormButton;