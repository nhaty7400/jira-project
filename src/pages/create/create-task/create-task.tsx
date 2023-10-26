import React, { useRef, useEffect, useState } from "react";
import { Select, Space, Slider } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import { useFormik } from "formik";
import * as Y from "yup";
import { useAppSelector } from "../../../redux/config-store";
import { getAllProject } from "../../../services/project.service";
import { useDispatch } from "react-redux";
import { setListProject } from "../../../redux/slice/project.slice";
import {
  addAsignees,
  deleteAsigness,
  setPriority,
  setStatus,
  setType,
} from "../../../redux/slice/task.slice";
import { getUser } from "../../../services/user.service";
import { setListUserSearch } from "../../../redux/slice/user.slice";
import {
  createTask,
  getAllStatus,
  getPriority,
  getTaskType,
} from "../../../services/task.service";
import { useNavigate } from "react-router-dom";

interface Creator {
  id: number;
  name: string;
}

interface Members {
  userId: number;
  name: string;
  avatar: string;
}

interface DataType {
  id: number;
  projectName: string;
  categoryName: string;
  creator: Creator;
  members: Members[];
  deleted: boolean;
  categoryId: number;
  alias: string;
  description: any;
}

function CreateTask() {
  const editorRef: any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const projectArr: DataType[] = useAppSelector((state) => {
    return state.projectSlice.listProject;
  });
  const userSearchResult = useAppSelector((state) => {
    return state.userSlice.listUserSearch;
  });
  const { asigneesArr,taskTypeArr, taskStatusArr, taskPriorityArr } = useAppSelector(
    (state) => {
      return state.taskSlice;
    }
  );


  useEffect(() => {
    (async () => {
      const resp = await getAllProject();
      const action = setListProject(resp.content);
      dispatch(action);
    })();
    (async () => {
      const resp = await getUser("");
      const action = setListUserSearch(resp.content);
      dispatch(action);
    })();
    (async () => {
      const resp = await getAllStatus();
      const action = setStatus(resp.content);
      dispatch(action);
    })();
    (async () => {
      const resp = await getPriority();
      const action = setPriority(resp.content);
      dispatch(action);
    })();
    (async () => {
      const resp = await getTaskType();
      const action = setType(resp.content);
      dispatch(action);
    })();
  }, []);

  const formik: any = useFormik({
    initialValues: {
      listUserAsign: [],
      taskName: "",
      description: "",
      statusId: "",
      originalEstimate: 0,
      timeTrackingSpent: 0,
      timeTrackingRemaining: 0,
      projectId: 0,
      typeId: 0,
      priorityId: 0,
    },

    enableReinitialize: true,

    onSubmit: (value) => {
      const taskData: any = {
        listUserAsign: asigneesArr,
        taskName: value.taskName,
        description: log(),
        statusId: value.statusId,
        originalEstimate: +value.originalEstimate,
        timeTrackingSpent: +value.timeTrackingSpent,
        timeTrackingRemaining: +value.timeTrackingRemaining,
        projectId: +value.projectId,
        typeId: +value.typeId,
        priorityId: +value.priorityId,
      };

      createTask(taskData)
        .then(() => {
          dispatch(deleteAsigness());
          navigate("/home")
        })
        .catch((e) => {
          console.log(e);
        });
    },
  });

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
              <p className="fs-4">Project</p>
              <select
                className="form-control fs-4"
                {...formik.getFieldProps("projectId")}
              >
                {projectArr?.map((project: any, index: any) => {
                  return (
                    <option key={index} value={project.id}>
                      {project.projectName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p className="fs-4">Task name</p>
              <input
                {...formik.getFieldProps("taskName")}
                type="text"
                className="form-control fs-4"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
              <p className="fs-4">Status</p>
              <select
                {...formik.getFieldProps("statusId")}
                className="form-control fs-4"
              >
                {taskStatusArr?.map((status: any, index: any) => {
                  return (
                    <option key={index} value={status.statusId}>
                      {status.statusName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <p className="fs-4">Priority</p>
              <select
                {...formik.getFieldProps("priorityId")}
                className="form-control fs-4"
              >
                {taskPriorityArr?.map((priority: any, index: any) => {
                  return (
                    <option key={index} value={priority.priorityId}>
                      {priority.priority}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <p className="fs-4">Task type</p>
              <select
                {...formik.getFieldProps("typeId")}
                className="form-control fs-4"
              >
                {taskTypeArr?.map((type: any, index: any) => {
                  return (
                    <option key={index} value={type.id}>
                      {type.taskType}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
              <p className="fs-4">Assignees</p>
              <Space style={{ width: "100%" }} direction="vertical">
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  options={userSearchResult?.map((user) => {
                    return {
                      label: user.name,
                      value: user.userId,
                    };
                  })}
                  optionFilterProp="label"
                  onSelect={(value)=>{
                    const action=addAsignees(value);
                    dispatch(action);
                  }}
                />
              </Space>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p style={{ fontWeight: "bold" }} className="fs-4">
                TIME TRACKING
              </p>
              <Slider defaultValue={30} tooltip={{ open: true }} />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="form-group">
              <p className="fs-4">Originial Estimate</p>
              <input
                {...formik.getFieldProps("originalEstimate")}
                type="text"
                className="form-control fs-4"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <p className="fs-4">Time spent</p>
              <input
                {...formik.getFieldProps("timeTrackingSpent")}
                type="text"
                className="form-control fs-4"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <p className="fs-4">Time remaining</p>
              <input
                {...formik.getFieldProps("timeTrackingRemaining")}
                type="text"
                className="form-control fs-4"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="form-group">
            <p className="fs-4">Desciption</p>
            <Editor
              id="description"
              onInit={( editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 300,
                menubar: false,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "preview",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic forecolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </div>
        </div>
        <div className="mt-4">
          <button type="submit" className="btn btn-primary fs-4 mt-3">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
