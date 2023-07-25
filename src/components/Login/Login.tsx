import { LoginInterface } from './LoginInterface';
import { Grid, Typography, TextField, Button } from '@mui/material';
import theme from '../../theme';
import useSignupState from '../Signup/state/useSignupState';

const Login = ({ isLogin, handleIsLoginChange }: LoginInterface) => {
  const { formik } = useSignupState();
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
        <Grid
          display={'flex'}
          direction="column"
          width={'100%'}
          rowGap={1}
          component={'form'}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            name="firstName"
            label="firstName"
            variant="outlined"
            value={formik.values.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            name="lastName"
            label="lastName"
            variant="outlined"
            value={formik.values.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            name="email"
            label="email"
            variant="outlined"
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name="password"
            label="password"
            variant="outlined"
            type="password"
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button
            sx={{
              width: '100%',
              height: 45,
            }}
            type="submit"
          >
            Sing up
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default Login;
