import { useMutation } from '@apollo/client';
import { SIGN_IN_MUTATION } from '../graphql/mutations';
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';


const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);

  const [mutate, result] = useMutation(SIGN_IN_MUTATION);

  const signIn = async ({ username, password }) => {
    return await mutate({ 
      variables: { username, password } 
    });
  };

  return [signIn, result];
};

export default useSignIn