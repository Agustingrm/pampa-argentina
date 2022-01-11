import { useUser } from "./User";
import SignIn from "./SignIn";
import Signup from "./Signup";
import RequestReset from "./RequestReset";

export default function ({ children }) {
  const me = useUser();
  if (!me)
    return (
      <>
        <SignIn />
        <Signup />
        <RequestReset />
      </>
    );
  return children;
}
