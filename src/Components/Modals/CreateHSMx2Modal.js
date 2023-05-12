import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

import { Modal, Slider } from "antd";
import languages from "./languages";
import getLanguage from "getLanguage.js";


const language = languages[getLanguage()];


export const CreateHSMx2Modal = (props) => {
  /*
  const initialState = {
    campaignGoal: "",
    targetEvents: [
      {
        type: "",
      },
    ],
  };

  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  */

  const renderCreateHSMx2Modal = () => {
    //     footer={renderFooter()} <- add buttons here?
    //     enable closeable via a flag?
    //      closable={  props.configured || !props.node.hsm || !props.node.hasButtonLink()  }
    return (
      <Modal
        title={language.hsmx2}
        wrapClassName="create-target-event-modal"
        visible={props.show}
        onCancel={props.closeModal}
        closeIcon={<div class="close-icon"></div>}
        maskClosable={false}
        centered
        closable={true}
      >
      </Modal>
    );
  }

  return renderCreateHSMx2Modal();
}

export default CreateHSMx2Modal;
