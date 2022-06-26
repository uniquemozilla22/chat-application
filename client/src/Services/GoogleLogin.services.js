import { useGoogleLogin } from "@react-oauth/google";

const GoogleLoginServices = ({ onSuccess, onError, children }) => {
  const login = useGoogleLogin({
    onSuccess: (user) => onSuccess(user, "google"),
    onError,
  });

  return <button onClick={() => login()}>{children}</button>;
};

export default GoogleLoginServices;
