import { Grid } from '@mui/material';
import { LoginLayoutStyles } from './LoginLayoutStyles';
import { LoginPropsInterface } from './LoginPropsInterface';

const LoginLayout = ({ LeftChild, RightChild }: LoginPropsInterface) => (
  <Grid sx={LoginLayoutStyles.bg}>
    <Grid sx={LoginLayoutStyles.leftContainer}>{LeftChild}</Grid>
    <Grid sx={LoginLayoutStyles.rightContainer}>{RightChild}</Grid>
  </Grid>
);
export default LoginLayout;
