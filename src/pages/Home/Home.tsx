import { Grid } from '@mui/material';
import LoginLayout from '../../Layouts/Login/LoginLayout';
import { HomeStyles } from './HomeStyles';
import Signup from '../../components/Signup/Signup';
import useHomeState from './state/useHomeState';
import Login from '../../components/Login/Login';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Home = () => {
  const { isLogin, handleIsLoginChange } = useHomeState();
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);

  if (user) {
    navigate('/home');
  }

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
