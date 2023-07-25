import { LoginInterface } from './LoginInterface';
import { Grid, Typography, TextField, Button } from '@mui/material';
import theme from '../../theme';
import useSignupState from '../Signup/state/useSignupState';
import useLoginState from '../Signup/state/useLoginState';

const Login = ({ isLogin, handleIsLoginChange }: LoginInterface) => {
  const { formik } = useSignupState();

  const { formik: formikLogin } = useLoginState();
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
        <Grid
          display={'flex'}
          direction="column"
          width={'100%'}
          rowGap={1}
          component={'form'}
          onSubmit={formikLogin.handleSubmit}
        >
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formikLogin.values.email}
            onChange={formikLogin.handleChange}
            error={
              formikLogin.touched.email && Boolean(formikLogin.errors.email)
            }
            helperText={formikLogin.touched.email && formikLogin.errors.email}
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            name="password"
            value={formikLogin.values.password}
            onChange={formikLogin.handleChange}
            error={
              formikLogin.touched.password &&
              Boolean(formikLogin.errors.password)
            }
            helperText={
              formikLogin.touched.password && formikLogin.errors.password
            }
          />
          <Button
            sx={{
              width: '100%',
              height: 45,
            }}
            type="submit"
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
            onChange={formik.handleChange}
            value={formik.values.firstName}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
          />
          <TextField
            name="lastName"
            label="lastName"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
          />
          <TextField
            name="email"
            label="email"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            name="password"
            label="password"
            variant="outlined"
            type="password"
            onChange={formik.handleChange}
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
