import React from "react";
import { Modal, Input } from "antd";
const { Search } = Input;

const ModalSearch = ({ open, handleCancel, handleOk }) => {
  return (
    <Modal
      open={open}
      style={{
        top: 85,
        right: "-50%",
      }}
      onOk={handleOk}
      onCancel={handleCancel}
      closable={false}
      footer={[]}
    >
      <Search
        placeholder="Search Playstation.com"
        allowClear
        enterButton
        size="large"
        onSearch={() => console.log("updating..")}
      />
    </Modal>
  );
};

export default ModalSearch;
