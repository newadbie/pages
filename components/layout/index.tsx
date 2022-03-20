import { FC } from "react";

interface IProps {
  title?: string;
}

const Layout: FC<IProps> = ({ children, title }) => {
  return (
    <>
      {title && (
        <header>
          <h1>{title}</h1>
        </header>
      )}
      <main>{children}</main>
    </>
  );
};

export default Layout;
