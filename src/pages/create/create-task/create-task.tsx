import React, { useState } from "react";
import css from "./create-task.module.scss";
import Dropdown from "../../../components/dropdown/dropdown";

function CreateTask() {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleDropdownSelect = (selectedValue: string) => {
    setSelectedOption(selectedValue);
  };
  return (
    <div>
      <h1 className={css["title"]}>Create task</h1>
      <form action="">
        <div className={css["column-2"]}>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Project</p>
            <Dropdown options={options} onSelect={handleDropdownSelect} />
          </div>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Task name</p>
            <input></input>
          </div>
        </div>
        <div className={css["column-2"]}>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Status</p>
            <Dropdown options={options} onSelect={handleDropdownSelect} />
          </div>
          <div className={css["form-group"]}>
            <div className={css["column-2"]}>
              <div className={css["form-group"]}>
                <p className={css["input-label"]}>Priority</p>
                <Dropdown options={options} onSelect={handleDropdownSelect} />
              </div>
              <div className={css["form-group"]}>
                <p className={css["input-label"]}>Task type</p>
                <Dropdown options={options} onSelect={handleDropdownSelect} />
              </div>
            </div>
          </div>
        </div>
        <div className={css["column-2"]}>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Assignees</p>
            <input></input>
          </div>
          <div className={css["form-group"]}>
            <div className={css["column-2"]}>
              <div className={css["form-group"]}>
                <p className={css["input-label"]}>Original Estimate</p>
                <input></input>
              </div>
              <div className={css["form-group"]}>
                <div className={css["column-2"]}>
                  <div className={css["form-group"]}>
                    <p className={css["input-label"]}>Time spent</p>
                    <input></input>
                  </div>
                  <div className={css["form-group"]}>
                    <p className={css["input-label"]}>Time remaining</p>
                    <input></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={css["column-2"]}>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Description</p>
            <textarea placeholder="Enter your description..."></textarea>
          </div>
        </div>
      </form>
      <div className={css["button-group"]}>
          <button className={css["cancel-button"]}>Cancel</button>
          <button className={css["submit-button"]}>Submit</button>
        </div>
    </div>
  );
}

export default CreateTask;
