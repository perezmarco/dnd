import React, { useEffect, useState } from "react";

import CreateHSMx2Modal from "./Modals/CreateHSMx2Modal";
import "./AddAlternateHSMInNode.scss";
import { nodeName } from "jquery";
import { HSMNodeModel } from "../views/Conversation/DDCustom/Models/HSMNodeModel";

const defaultBGColor = "#6F737D";
const focusBGColor = "#292B2E";

const AddAlternateHSMInNode = (props) => {
  const [state, setState] = useState({
    inFocus: false,
    showModal: false,
  });

  /*useEffect(() => {
    setState({
      ...state // should manipulate open
    });
  });*/

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

  const renderComponent = () => {
    const { inFocus } = state;
    return (
      <>
        <div className="text">HSM</div>
        <div className={inFocus ? "focus-icon" : "icon"} />
      </>
    );
  };

  /*
    0. Update CSS sheet for modal
    1. Add alternate flow rectangle
    1a. Add Nodde Port
    2. Add header box
    3. Add Dropdown
    4. Add Time setter
    5. Add Node Port for alternate flow 
  */


  const createHSM = (nodeArgs) => {
    return (ev) => {
      const { node, diagramEngine, onHsmx2Action, forceUpdate } = props;
      let diagramModel = diagramEngine.getDiagramModel();
      let newNodeModel = new HSMNodeModel(nodeArgs);
      newNodeModel.primaryNode = false;
      newNodeModel.x = Math.max((2 * node.x) % window.screen.width, 600);
      newNodeModel.y = node.y + ((newNodeModel.x < node.x) ? 300 : 0); // for wrap around: avoid overlap
      const childnode = diagramModel.addNode(newNodeModel);

      // prevent parent container from picking up event and overriding state change
      ev.stopPropagation();
      setState({ ...state, showModal: false });

      diagramEngine.forceUpdate();
      onHsmx2Action(childnode.getID()); // subsequent re-renders of the parent should unset this.
    };
  }


  const renderCreateHSMx2Modal = () => {
    return (
      <CreateHSMx2Modal
        show={state.showModal}
        hsmCreate={createHSM}
        closeModal={(e) => {
          e.stopPropagation();
          setState({ ...state, showModal: false });
        }}
      />
    );
  }

  return (
    (props.node.primaryNode) &&
    <div className="hsmx2-selector-block"
      style={{ backgroundColor: state.inFocus ? focusBGColor : defaultBGColor }}
      onMouseEnter={() => setState({ ...state, inFocus: true })}
      onMouseLeave={() => setState({ ...state, inFocus: false })}
      onClick={() => setState({ ...state, showModal: true })}
    >
      {renderComponent()}
      {renderCreateHSMx2Modal()}
    </div >
  )
}

export default AddAlternateHSMInNode;
