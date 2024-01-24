import React, { useEffect } from 'react';
import AuthAPI from '../../services/StartingPage/AuthAPI';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/authSlice';

const AuthProvider = (props) => {
  const { children } = props;

  const accessToken = localStorage.getItem('accessToken');
  const dispatch = useDispatch();

  const handleFetchCurrentUser = async (accessToken) => {
    try {
      const apiResponse = await AuthAPI.currentUser();
      dispatch(login(apiResponse.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!!accessToken) {
      handleFetchCurrentUser();
    }
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
