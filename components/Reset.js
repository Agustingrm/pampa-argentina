import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import Form from "./styles/Form";
import useForm from "../lib/useForm";
import Error from "./ErrorMessage";

const RESET_MUTATION = gql`
  mutation RESET_MUTATION($email: String!, $password: String!, $token: String!) {
    redeemUserPasswordResetToken(email: $email, token: $token, password: $password) {
      code
      message
    }
  }
`;

export default function Reset({ token }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
    token,
  });
  const [reset, { data, loading, error }] = useMutation(RESET_MUTATION, {
    variables: inputs,
  });
  // Here we have two types of errors, the one that comes from user update (password is too short), and the
  // ones from the password reset token, that comes as a 'Successful Error'
  const successfulError = data?.redeemUserPasswordResetToken?.code
    ? data?.redeemUserPasswordResetToken
    : undefined;
  console.log(error);
  async function handleSubmit(e) {
    e.preventDefault();
    await reset().catch(console.error);
    resetForm();
  }
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Reset Your Password</h2>
      <Error error={error || successfulError} />
      <fieldset>
        {data?.redeemUserPasswordResetToken === null && <p>Success! You can Now sign in</p>}

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={inputs.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Request Reset!</button>
      </fieldset>
    </Form>
  );
}
