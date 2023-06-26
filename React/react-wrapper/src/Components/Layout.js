const Layout = ({ children }) => {
  return (
    <>
      <header>
        <h2>SkillSafari</h2>
      </header>
      <section>{children}</section>
      <footer>
        <p>All rights reserved. 2023</p>
      </footer>
    </>
  );
};

export default Layout;
