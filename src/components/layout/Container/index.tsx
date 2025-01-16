import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="py-0 px-3 w-full max-w-[1160px] mx-auto">{children}</div>
  );
};
