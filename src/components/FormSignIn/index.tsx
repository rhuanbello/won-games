import { Email, Lock } from '@styled-icons/material-outlined';
import Button from 'components/Button';
import TextField from 'components/TextField';
import Link from 'next/link';
import { FormWrapper, FormLink, ForgotPassword } from 'components/Form';

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <ForgotPassword href="#">Forgot your password?</ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        {`Don't have an account? `}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
