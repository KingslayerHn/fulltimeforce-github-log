import { LoginInterface } from './LoginInterface';
import { Grid, Typography, TextField, Button } from '@mui/material';
import theme from '../../theme';

const Login = ({ isLogin, handleIsLoginChange }: LoginInterface) => {
  return (
    <Grid
      alignItems={'center'}
      display="flex"
      direction={'column'}
      height="100%"
    >
      <Grid>
        <Typography
          color={theme.palette.primary.main}
          fontWeight={600}
          fontSize={40}
          mb={5}
        >
          {isLogin ? 'Login' : 'Register'}
        </Typography>
      </Grid>
      {isLogin ? (
        <Grid display={'flex'} direction="column" width={'100%'} rowGap={1}>
          <TextField label="Email" variant="outlined" />
          <TextField label="password" variant="outlined" type="password" />
          <Button
            sx={{
              width: '100%',
              height: 45,
            }}
          >
            Sign in
          </Button>
        </Grid>
      ) : (
        <Grid display={'flex'} direction="column" width={'100%'} rowGap={1}>
          <TextField label="firstName" variant="outlined" />
          <TextField label="lastName" variant="outlined" />
          <TextField label="email" variant="outlined" />
          <TextField label="password" variant="outlined" type="password" />
          <Button
            sx={{
              width: '100%',
              height: 45,
            }}
          >
            Sing up
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
