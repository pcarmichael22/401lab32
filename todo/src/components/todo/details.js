import React, { useState } from 'react';
import { When } from '../if';
import Modal from '../modal';

function Details() {
  const [details, setDetails] = useState({
    assignee: 'TestUser',
    text: 'This is cool',
    due: new Date()
  });
  const [toggleDetails, setToggleDetails] = useState();
  const [showDetails, setShowDetails] = useState();

  return (
    <When condition={showDetails}>
      <Modal title="To Do Item" close={toggleDetails}>
        <div className="todo-details">
          <header>
            <span>Assigned To: {details.assignee}</span>
            <span>Due: {details.due}</span>
          </header>
          <div className="item">{details.text}</div>
        </div>
      </Modal>
    </When>
  );
}

export default Details;
