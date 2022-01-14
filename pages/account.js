import { useUser } from "../components/User";
import styled from "styled-components";

const BoldSpanStyles = styled.span`
  font-weight: bold;
`;

export default function AccountPage() {
  const user = useUser();
  console.log(user);
  return (
    <div>
      <p>
        Hello <BoldSpanStyles>{user?.name}</BoldSpanStyles>
      </p>
      <p>
        You are currently logged in with this email: <BoldSpanStyles>{user?.email}</BoldSpanStyles>
      </p>
    </div>
  );
}
