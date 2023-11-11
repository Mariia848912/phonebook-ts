import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout";
import { useAppDispatch } from "./redux/hooks";
import { useAuth } from "./hooks";
import { refreshUser } from "./redux/auth/authOperations";

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const ContactPage = lazy(() => import("./pages/Contacts"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  return (
    <>
      {isRefreshing ? (
        <div>refresh</div>
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
