import { Button } from '@mui/material';

export default function MaterialBasic() {
  return (
    <>
      <Button variant="text" color="secondary" sx={{ textTransform: 'none' }}>
        Text
      </Button>
      <Button variant="contained" color="secondary">
        Contained
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
    </>
  );
}
