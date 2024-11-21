import { Input, SocialButton } from "components";
import { useState } from "react";
import { AppleIcon, FacebookIcon, GoogleIcon } from "assets/icons";
import { AuthRootState, authSlice, authStore } from "@/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthForm = () => {
  const [signUp, setSignUp] = useState<boolean>(false);
  const navigate = useNavigate();
  const { email, name } = useSelector((state: AuthRootState) => state.user);

  const handleAuthentification = () => {
    authStore.dispatch({
      type: authSlice.actions.setIsAuthentificated.type,
      payload: true,
    });

    navigate("/");
  };

  return (
    <div className="p-4 sm:max-w-[369px] lg:max-w-[411px] mx-auto flex flex-col justify-center gap-8">
      <div className="w-full border border-light-blue p-1 rounded-3xl">
        <div className="flex relative">
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-blue rounded-3xl transition-transform ${signUp ? "translate-x-full" : ""}`}
          />
          <button
            className={`transition-colors flex-1 relative z-10 p-1 ${signUp ? "text-blue" : "text-white"}`}
            onClick={() => setSignUp(false)}
          >
            Log in
          </button>
          <button
            className={`transition-colors flex-1 relative z-10 p-1 ${signUp ? "text-white" : "text-blue"}`}
            onClick={() => setSignUp(true)}
          >
            Sign up
          </button>
        </div>
      </div>
      <div className="flex gap-4 mx-auto w-min">
        <SocialButton props={{ onClick: handleAuthentification }}>
          <AppleIcon />
        </SocialButton>
        <SocialButton props={{ onClick: handleAuthentification }}>
          <GoogleIcon />
        </SocialButton>
        <SocialButton props={{ onClick: handleAuthentification }}>
          <FacebookIcon />
        </SocialButton>
      </div>
      <div className="bg-[url('/icons/background-line.svg')] bg-no-repeat bg-contain bg-[5px_0] text-center b3 text-[#B0B8DC] w-4/5 mx-auto">
        or
      </div>
      <div className="flex flex-col gap-4">
        <div className="mb-6">
          <Input
            label="What's your name?*"
            placeholder="Maximus"
            password
            value={name}
            onChange={(e) =>
              authStore.dispatch(
                authSlice.actions.setUser({ name: e.target.value }),
              )
            }
          />
        </div>
        <div className="mb-6">
          <Input
            label="Your Email*"
            placeholder="ivanovich@gmail.coms"
            password
            value={email}
            onChange={(e) =>
              authStore.dispatch(
                authSlice.actions.setUser({ email: e.target.value }),
              )
            }
          />
        </div>
      </div>
      <div>
        <button
          className="w-full lg:w-auto lg:block mx-auto bg-black active:bg-black-press hover:bg-black-hover transition-colors text-white rounded-3xl py-3 px-4"
          onClick={handleAuthentification}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
