import { useUser } from "./User";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import RequestReset from "./RequestReset";

export default function ({ children }) {
  const me = useUser();
  if (!me)
    return (
      <>
        <SignIn />
        <SignUp />
        <RequestReset />
      </>
    );
  return children;
}
