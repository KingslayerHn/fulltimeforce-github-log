import { useEffect } from 'react';
import { store } from '../store/store';
import { getUserByToken } from '../store/actions/thunk/auth/auth-thunk.actions';

const useLoadUser = () => {
  useEffect(() => {
    const token = localStorage.getItem('fulltimeforce_token');

    if (token) {
      store
        .dispatch(getUserByToken())
        .unwrap()
        .catch(() => {
          localStorage.remove('fulltimeforce_token');
        });
    }
  }, []);
};

export default useLoadUser;
