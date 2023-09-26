import React from "react";
import css from "./side-bar.module.scss";
import SearchIcon from "../../../assets/icons/search.icon";
import AddIcon from "../../../assets/icons/add.icon";

function SideBar() {
  return (
    <div>
      <aside className={css["side-bar-first"]}>
        <div className={css["side-bar-first-link"]}>
          <div className={css["side-bar-first-link-icon"]}>
            <SearchIcon />
          </div>
          <div className={css["side-bar-first-link-text"]}>SEARCH TASK</div>
        </div>
        <div className={css["side-bar-first-link"]}>
          <div className={css["side-bar-first-link-icon"]}>
            <AddIcon />
          </div>
          <div className={css["side-bar-first-link-text"]}>ADD TASK</div>
        </div>
      </aside>
      <div className={css["side-bar-second"]}></div>
    </div>
  );
}

export default SideBar;
