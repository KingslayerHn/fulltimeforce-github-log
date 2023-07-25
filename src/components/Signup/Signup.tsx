import { Grid, Typography, Button, Box } from '@mui/material';
import Github from '../../assets/Github.png';
import { SignUpInterface } from './SignUpInterface';

const Signup = ({ isLogin, handleIsLoginChange }: SignUpInterface) => {
  return (
    <Grid display={'flex'} direction="column" flex={1} height={'100%'}>
      <Grid flex={1}>
        <Typography color={'#fff'} fontWeight={600} fontSize={40}>
          Welcome back !!
        </Typography>
        <Grid alignItems={'center'} justifyContent="center" display={'flex'}>
          <Box
            component="img"
            src={Github}
            width={200}
            height="auto"
            display={'flex'}
          />
        </Grid>
      </Grid>
      <Grid>
        <Typography color={'#fff'} fontWeight={500} fontSize={14} mb={1}>
          {isLogin ? " Don't have acount yet?" : 'Do you have account?'}
        </Typography>
        <Button
          sx={{
            backgroundColor: 'transparent',
            border: ' 1px solid #fff',
            borderRadius: 20,
            width: '100%',
          }}
          onClick={handleIsLoginChange}
        >
          {isLogin ? 'Sign up' : 'Sign in'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Signup;
