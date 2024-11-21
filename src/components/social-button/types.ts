import { ComponentProps, ReactNode } from "react";

export type SocialButtonType = {
  children: ReactNode;
  props?: ComponentProps<"button">;
};
