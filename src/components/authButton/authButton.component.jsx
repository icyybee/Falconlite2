import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BasicButtons = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Send</Button>
      <Button variant="outlined">Convert</Button>
      <Button variant="outlined">Receive</Button>
    </Stack>
  );
}

export default BasicButtons;