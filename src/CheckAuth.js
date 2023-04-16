import { Auth } from 'aws-amplify';

async function checkAuthStatus() {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log('User:', user);
  } catch (error) {
    console.error('Error:', error);
  }
}

export default checkAuthStatus;
