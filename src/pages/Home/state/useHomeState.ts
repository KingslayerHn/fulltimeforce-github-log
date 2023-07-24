import { useState } from 'react';

const useHomeState = () => {
  const [isLogin, setIsOpen] = useState<boolean>(false);

  const handleIsLoginChange = () => {
    setIsOpen(!isLogin);
  };

  return {
    isLogin,
    handleIsLoginChange,
  };
};

export default useHomeState;
