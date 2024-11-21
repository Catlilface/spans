import { SocialButtonType } from "./types";

const SocialButton = ({ children, props }: SocialButtonType) => {
  return <button {...props}>{children}</button>;
};

export default SocialButton;
