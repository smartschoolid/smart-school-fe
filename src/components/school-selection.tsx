import { Modal } from "antd";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface SchoolSelectionRef {
  open: () => void;
}
const SchoolSelection = forwardRef<SchoolSelectionRef>((_, ref) => {
  const [open, setOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    open: () => {
      setOpen(true);
    },
  }));

  const onClose = () => {
    setOpen(false);
  };

  return <Modal title="Pilih Sekolah" open={open} onCancel={onClose}></Modal>;
});

export default SchoolSelection;
