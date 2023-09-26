import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top";
import SideBar from "./side-bar/side-bar";

function BaseTemplate() {
    return (
      <ScrollToTop>
       <SideBar/>
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      
      </ScrollToTop>
    );
  }
  
  export default BaseTemplate;
  