import { lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
 import { ToastContainer,  } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from "./redux/hooks";
import { useAuth } from "./hooks";
import { refreshUser } from "./redux/auth/authOperations";
import { SharedLayout } from "./components/SharedLayout";
import { RestrictedRoute } from "./components/Routes/RestrictedRoute";
import { PrivateRoute } from "./components/Routes/PrivateRoute";

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
            <Route path="/login" element={<RestrictedRoute component={<LoginPage/> } redirectTo='/contacts' />} />
            <Route path="/register" element={<RestrictedRoute component={<RegisterPage/> } redirectTo='/contacts' />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactPage />} redirectTo='/login' />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
        <ToastContainer autoClose={3000} />

    </>
  );
}

export default App;
