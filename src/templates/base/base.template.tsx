import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top";
import SideBar from "./side-bar/side-bar";
import css from "./base.template.scss"

function BaseTemplate() {
    return (
      <div style={{
        padding:"2.5rem 3.2rem 5rem 34rem"
      }}>
        <ScrollToTop>
       <SideBar/>
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      
      </ScrollToTop>
      </div>
      
    );
  }
  
  export default BaseTemplate;
  