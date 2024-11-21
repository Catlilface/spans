import { ReactNode } from "react";

const AuthBanner = ({ text, alt }: { text: ReactNode; alt: string }) => {
  return (
    <div>
      <h1 className="text-center b1">{text}</h1>
      <img src="/images/auth-banner.webp" alt={alt} />
    </div>
  );
};

export default AuthBanner;
