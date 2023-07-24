import { Grid } from '@mui/material';
import LoginLayout from '../../Layouts/Login/LoginLayout';
import { HomeStyles } from './HomeStyles';
import Signup from '../../components/Signup/Signup';
import useHomeState from './state/useHomeState';
import Login from '../../components/Login/Login';

const Home = () => {
  const { isLogin, handleIsLoginChange } = useHomeState();
  return (
    <Grid flex={1} sx={HomeStyles.bg}>
      <LoginLayout
        LeftChild={
          <Signup isLogin={isLogin} handleIsLoginChange={handleIsLoginChange} />
        }
        RightChild={
          <Login isLogin={isLogin} handleIsLoginChange={handleIsLoginChange} />
        }
      />
    </Grid>
  );
};

export default Home;
