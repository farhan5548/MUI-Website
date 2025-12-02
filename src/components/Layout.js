import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <h1>{children}</h1>
    </>
  );
};

export default Layout;
