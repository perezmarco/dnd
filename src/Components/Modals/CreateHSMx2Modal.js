import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

import { Modal, Button } from "antd";
import languages from "./languages";
import getLanguage from "getLanguage.js";
import "./CreateHSMx2Modal.scss";


const language = languages[getLanguage()];


export const CreateHSMx2Modal = (props) => {
  const initialState = {
    nodeArgs: { answers: ["Answer", "Another Question"], content: "Question" },
  };

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();


  const renderFooter = () => {
    const validForm = true; // TODO: Use this to determine whether the buttons are clickable, will need one per button
    return (
      <div className="create-buttons-container">
        <button
          className={`create-hsmx2 ${validForm && "is-valid"}`}
          onClick={props.hsmCreate(state.nodeArgs)}
          disabled={!validForm}
        >
          <p>{language.createHsmx2}</p>
        </button>

        <button
          className={`cancel-create ${validForm && "is-valid"}`}
          onClick={props.closeModal}
          disabled={!validForm}
        >
          <p>{language.cancel}</p>
        </button>
      </div>
    );
  };

  const getModalBody = () => {
    return <h1>Hi</h1>
  }

  const renderCreateHSMx2Modal = () => {
    return (
      <Modal
        title={language.hsmx2}
        wrapClassName="create-hsmx2-modal"
        visible={props.show}
        onCancel={props.closeModal}
        closeIcon={<div className="close-icon"></div>}
        maskClosable={false}
        centered
        closable={true}
        footer={renderFooter()}
      >
        {getModalBody()}
      </Modal>
    );
  }

  return renderCreateHSMx2Modal();
}

export default CreateHSMx2Modal;
