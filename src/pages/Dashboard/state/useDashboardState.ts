import axios from 'axios';
import { useEffect, useState } from 'react';
import { config } from '../../../config/config';
import { commitInterface } from '../../../interfaces/commitInterface';
import { repositoryInterface } from '../../../interfaces/repositoryInterface';
import { UserGithuInterface } from '../../../interfaces/userGithubInterface';

const useDashboardState = () => {
  const [user, setUser] = useState<UserGithuInterface>();
  const [repository, setRepository] = useState<repositoryInterface>();
  const [commits, setCommits] = useState<commitInterface[]>();

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await axios.get(`${config.baseUrl}/users/KingslayerHn`);
      setUser(res.data);
    };

    const getUserRepository = async () => {
      const res = await axios.get(
        `${config.baseUrl}/repos/KingslayerHn/frontend-home-task`
      );
      setRepository(res.data);
    };

    const getCommits = async () => {
      const res = await axios.get(
        `${config.baseUrl}/repos/KingslayerHn/frontend-home-task/commits`
      );
      setCommits(res.data);
    };

    getUserInfo();
    getUserRepository();
    getCommits();
  }, []);
  return {
    user,
    commits,
    repository,
  };
};

export default useDashboardState;
