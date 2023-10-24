import {
  Button,
  Drawer,
} from "antd";
import { useAppSelector } from "../redux/config-store";
import { useDispatch } from "react-redux";
import { closeDrawer } from "../redux/slice/drawer.slice";
import FormEdit from "../components/formEdit/formEdit";

function DrawerCyber(props: any) {
  let { visible,projectValue } = useAppSelector(
    (state) => state.drawerSlice
  );


  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeDrawer());
  };

  return (
    <>
      <Drawer
        title="Project detail"
        width={720}
        onClose={onClose}
        open={visible}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button
              style={{
                marginRight: "2rem",
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </div>
        }
      >
       <FormEdit data={projectValue}/>
      </Drawer>
    </>
  );
}

export default DrawerCyber;
