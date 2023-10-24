import React, { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useAppSelector } from "../../redux/config-store";

function FormEdit(props: any) {
  const editorRef: any = useRef(null);
  const log = () => {
    if (editorRef.current) {
      return editorRef.current.getContent();
    }
  };

  const projectCategoryArr: any[] = useAppSelector((state) => {
    return state.projectSlice.projectCategoryArr;
  });
  const {data}=props;


  const [inputValue, setInputValue] = useState<any>(data);

  useEffect(()=>{
    setInputValue({data});
  },[data]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <form action="">
      <div className="row">
        <div className="col-4">
          <div className="form-group">
            <p className="fs-4">Id</p>
            <input
              value={inputValue.id}
              className="form-control fs-4"
              readOnly
            />
          </div>
        </div>

        <div className="col-4">
          <div className="form-group">
            <p className="fs-4">Project name</p>
            <input
              name="projectName"
              onChange={handleInputChange}
              value={inputValue.projectName}
              className="form-control fs-4"
            />
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <p className="fs-4">Category</p>
            <select onChange={handleInputChange} name="categoryId" value={inputValue.categoryId} className="form-control fs-4">
              {projectCategoryArr.map((category, index) => {
                return (
                  <option key={index} value={category.id}>
                    {category.projectCategoryName}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="form-group mt-5">
        <p className="fs-4">Description</p>
        <Editor
          id="description"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={inputValue.description}
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
    </form>
  );
}

export default FormEdit;
