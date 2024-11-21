import { AuthRootState } from "@/store";
import { CrossIcon } from "assets/icons";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { AuthBanner, AuthForm } from "widgets";

const Auth = () => {
  const isAuthentificated = useSelector(
    (state: AuthRootState) => state.isAuthentificated,
  );

  if (isAuthentificated) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="h-dvh md:p-6 flex flex-col justify-center items-center">
      <div className="relative flex items-center justify-center h-full lg:max-h-[702px] w-full max-w-[1392px] bg-white overflow-auto sm:rounded-[32px]">
        <button className="absolute top-4 right-4 sm:top-6 sm:right-6 border border-black-disabled rounded-full p-1 sm:p-[6px] lg:hidden">
          <CrossIcon />
        </button>
        <div className="w-full lg:w-1/2">
          <AuthForm />
        </div>
        <div className="w-4/5 h-full bg-very-light-blue lg:flex hidden items-center justify-center">
          <AuthBanner
            text={
              <div className="text-center b1">
                Try out <span className="text-blue">AI's features</span>
              </div>
            }
            alt="Try out AI's features"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
