import React, { useState } from "react";
import css from "./create-task.module.scss";
import type { SelectProps } from "antd";
import { Select, Space } from "antd";

const assignessOptions: SelectProps["options"] = [];
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

for (let i = 10; i < 36; i++) {
  assignessOptions.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}

function CreateTask() {
  return (
    <div>
      <h1 className={css["title"]}>Create task</h1>
      <form action="">
        <div className={css["column-2"]}>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Project</p>
            <Select style={{width:"100%"}}
              showSearch
              placeholder="Please select"
              optionFilterProp="children"
              filterOption={filterOption}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Task name</p>
            <input></input>
          </div>
        </div>
        <div className={css["column-2"]}>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Status</p>
            <Select style={{width:"100%"}}
              showSearch
              placeholder="Please select"
              optionFilterProp="children"
              filterOption={filterOption}
              options={[
                {
                  value: "jack",
                  label: "Jack",
                },
                {
                  value: "lucy",
                  label: "Lucy",
                },
                {
                  value: "tom",
                  label: "Tom",
                },
              ]}
            />
          </div>
          <div className={css["form-group"]}>
            <div className={css["column-2"]}>
              <div className={css["form-group"]}>
                <p className={css["input-label"]}>Priority</p>
                <Select style={{width:"100%"}}
                  showSearch
                  placeholder="Please select"
                  optionFilterProp="children"
                  filterOption={filterOption}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </div>
              <div className={css["form-group"]}>
                <p className={css["input-label"]}>Task type</p>
                <Select style={{width:"100%"}}
                  showSearch
                  placeholder="Please select"
                  optionFilterProp="children"
                  filterOption={filterOption}
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "tom",
                      label: "Tom",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={css["column-2"]}>
          <div className={css["form-group"]}>
            <p className={css["input-label"]}>Assignees</p>
            <Space style={{ width: "100%" }} direction="vertical">
              <Select 
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                defaultValue={["a10", "c12"]}
                options={assignessOptions}
              />
            </Space>
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
          <div className={css["form-group-des"]}>
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
