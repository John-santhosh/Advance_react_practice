/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
//
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* we can use index prob to indicate the path to "/" */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
    </Route>
  )
);
const index = () => {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
};

export default index;

const Wrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

  :root {
  }
  body {
    margin: 0;
    padding: 20px;
    font-family: "Poppins";
    background: var(--secondary);
  }
  * {
    color: #fff;
    margin: 0;
  }
  p {
    margin: 20px 0;
  }
  button {
    border: 0;
    padding: 8px;
    border-radius: 4px;
    color: white;
    background: var(--primary);
    cursor: pointer;
  }

  /* navbar */
  header nav {
    display: flex;
    gap: 16px;
    justify-content: end;
    max-width: 1200px;
    margin: 0 auto;
  }
  header nav h1 {
    margin-right: auto;
    border-bottom: 3px solid var(--primary);
  }
  header nav a {
    text-decoration: none;
    padding: 6px;
    border-radius: 4px;
  }
  header nav a.active {
    background: var(--primary);
  }

  /* page content */
  main {
    max-width: 1200px;
    margin: 40px auto;
  }

  /* help layout */

  /* faq */

  /* careers list */

  /* careers details */

  /* breadcrumbs */
`;
