import React, { useEffect, useState } from "react";

import CreateHSMx2Modal from "./Modals/CreateHSMx2Modal";
import "./AddAlternateHSMInNode.scss";


const AddAlternateHSMInNode = (props) => {
  const defaultBGColor = "#6F737D";
  const hoverBGColor = "#292B2E";
  const [state, setState] = useState({
    hover: false,
    showModal: false,
    configured: true,
  });

  /*useEffect(() => {
    setState({
      ...state // should manipulate open
    });
  });*/

  const renderComponent = () => {
    const { hover } = state;
    if (hover) {
      return <div className="hover" />
    } else {
      return <div className="icon" />
    }
  };

  /*
      These might need to be passed in by HSMNodeWidget.js
      forceUpdate={props.forceUpdate}
      diagramEngine={props.diagramEngine}
      node={props.node}

      // what could we need configured for?
     setConfigured={() =>
          setState({ ...state, configured: true, showModal: false })
     }
  */

  const renderCreateHSMx2Modal = () => {
    return (
      <CreateHSMx2Modal
        show={state.showModal}
        closeModal={(e) => {
          e.stopPropagation();
          setState({ ...state, showModal: false });
        }}
      />
    );
  }

  return (
    <div className="hsmx2-selector-block"
      style={{ backgroundColor: state.hover ? hoverBGColor : defaultBGColor }}
      onMouseEnter={() => setState({ ...state, hover: true })}
      onMouseLeave={() => setState({ ...state, hover: false })}
      onClick={() => setState({ ...state, showModal: true })}
    >
      <div className="text">HSM</div>
      {renderComponent()}
      {renderCreateHSMx2Modal()}
    </div >
  )
}

export default AddAlternateHSMInNode;
