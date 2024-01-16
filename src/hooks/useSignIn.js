import { useMutation } from '@apollo/client';
import { SIGN_IN_MUTATION } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const [mutate, result] = useMutation(SIGN_IN_MUTATION);

  const signIn = async ({ username, password }) => {
    const data =  await mutate({ 
      variables: { username, password } 
    });
    console.log(data);
    await authStorage.setAccessToken(data.data.authenticate.accessToken);
    apolloClient.resetStore();
    return data
  };

  return [signIn, result];
};

export default useSignIn