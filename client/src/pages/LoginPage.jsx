import React from 'react';
import Form from '../components/Form';
import Default from '../layouts/Default';

function LoginPage() {
  return (
    <Default>
      <Form buttonText="Log In" showSignUpMessage={true} />
    </Default>
  );
}

export default LoginPage;
