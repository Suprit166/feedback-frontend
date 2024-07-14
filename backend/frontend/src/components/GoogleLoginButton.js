// import React from 'react';
// import { GoogleLogin } from 'react-google-login';
// import { api } from '../services/api';

// const GoogleLoginButton = ({ onLoginSuccess }) => {
//   const handleLogin = async (response) => {
//     const { tokenId } = response;
//     await api.post('/auth/google', { tokenId });
//     onLoginSuccess();
//   };

//   return (
//     <GoogleLogin
//       clientId="your-google-client-id"
//       buttonText="Login with Google"
//       onSuccess={handleLogin}
//       onFailure={(err) => console.error('Login failed', err)}
//       cookiePolicy={'single_host_origin'}
//     />
//   );
// };

// export default GoogleLoginButton;



import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginButton() {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
  };

  const onFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
