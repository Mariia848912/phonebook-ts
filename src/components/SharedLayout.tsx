import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./Common/Container";
import { AppBar } from "./Header/AppBar";

export const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense>
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </Suspense>
    </>
  );
};
