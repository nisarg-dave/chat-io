import React from 'react';
import Form from '../components/Form';
import Default from '../layouts/Default';

function SignUpPage() {
  return (
    <Default>
      <Form buttonText="Sign Up" showSignUpMessage={false} />
    </Default>
  );
}

export default SignUpPage;
