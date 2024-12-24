const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={"h-screen w-screen md:flex p-6"}>
      <div className={"md:basis-1/2"}>{children}</div>
      <div></div>
    </div>
  );
};

export default AuthLayout;
