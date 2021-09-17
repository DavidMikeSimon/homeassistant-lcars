import React from 'react';

export function SwitchButton(props) {
  const entity = props.hass.states[props.entityId];
  const on = entity.state && entity.state !== 'off' && entity.state != 'unavailable';

  function handleToggle() {
    props.hass.callService('switch', 'toggle', {
      entity_id: entity.entity_id,
    });
  }

  return (
    <div className="lcars-element left-rounded button" onClick={handleToggle}>
      <div className={`lcars-element-decorator right ${on ? 'lcars-lilac-bg' : 'lcars-gray-bg'}`}></div>
      {props.label}
    </div>
  );
}
