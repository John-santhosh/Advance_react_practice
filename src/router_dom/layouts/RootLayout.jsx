import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <h1>Router Demo</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
        </nav>
      </header>

      {/* this is where the router_dom render the component based on the path click from above header component. */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
