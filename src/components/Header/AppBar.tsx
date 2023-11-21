import { useAuth } from "../../hooks";
import { Container } from "../Common/Container";
import { AuthNav } from "./AuthNav";
import { Navigation } from "./Navigation";
import { UserMenu } from "./UserMenu";

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
      <header className="fixed w-full top-0 left-0 z-10  border-b-[1px] border-borderDefault50 pb-xs4">
          <Container containerStyle='flex justify-between'>
      <Navigation />
              {isLoggedIn ? <UserMenu /> : <AuthNav />}
              </Container>
    </header>
  );
};
