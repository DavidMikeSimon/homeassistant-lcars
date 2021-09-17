import React from 'react';

export function LightCard(props) {
  const entity = props.hass.states[props.entityId];
  const { friendly_name } = entity.attributes;
  const on = entity.state && entity.state !== 'off' && entity.state != 'unavailable';

  function handleToggle() {
    props.hass.callService('switch', 'toggle', {
      entity_id: entity.entity_id,
    });
  }

  return (
    <button onClick={handleToggle} >
      {friendly_name}: {on ? "ON" : "OFF" }
    </button>
  );
}
