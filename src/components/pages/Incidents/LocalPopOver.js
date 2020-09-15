import React, { useState } from 'react';
import { Popover } from 'antd';
import IncidentModal from './Modal';

const orangemarker = require('../../../resources/images/orange_blue_marker.png');

const LocalPopOver = props => {
  const [click, setClick] = useState(false);

  const handleHide = () => {
    setClick(false);
  };

  const handleClick = visible => {
    setClick(visible);
  };

  const linkStore = () => {
    if (props.incident.links.length > 0) {
      return props.incident.links.map(link => (
        <div className="evidence">
          {' '}
          <a href={link}>{link} </a>
        </div>
      ));
    }
  };
  let content = linkStore();
  const evidence = <h3>Evidence:</h3>;
  content.unshift(evidence);

  return (
    <Popover
      zIndex={0}
      content={
        <div>
          {content}
          <div className="close-container">
            <IncidentModal
              incident={props.incident}
              modal={false}
              zIndex={2000}
            />
            <button onClick={handleHide} className="close">
              Close
            </button>
          </div>
        </div>
      }
      title={
        <div className="title-container">
          <div>{props.incident.title}</div>{' '}
          <div>{props.incident.date.slice(0, 10)}</div>
        </div>
      }
      trigger="click"
      visible={click}
      onVisibleChange={handleClick}
    >
      {props.marker ? (
        <img src={orangemarker} alt="map marker" className="marker"></img>
      ) : null}
      {props.text ? (
        <p>{`${props.incident.city}: ${props.incident.date.slice(0, 10)}`}</p>
      ) : null}
    </Popover>
  );
};

export default LocalPopOver;
