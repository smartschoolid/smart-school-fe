import { useAppDispatch, useAppSelector } from "@/redux";
import { closeModal, openModal } from "@/redux/features/modal-slice";
import { Drawer } from "antd";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DrawerProps {
  id?: string;
  data?: any;
  title: string;
  children?: React.ReactNode;
  open?: boolean;
}
const DrawerComponent: React.FC<DrawerProps> = (props) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.modalState);

  return (
    <Drawer
      open={state.open}
      title={props.title}
      onClose={() => {
        dispatch(closeModal());
      }}
    >
      {props.children}
    </Drawer>
  );
};

export default DrawerComponent;
