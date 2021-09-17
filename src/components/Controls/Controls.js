import React from 'react';
import { LightCard } from '../../packages/hass-lcars-react-components/src';

export function Controls(props) {
  const { hass } = props;
  return (
    <>
      <LightCard hass={hass} entityId="switch.corner_lamp" />
      <LightCard hass={hass} entityId="switch.davids_bedside_lamp" />
    </>
  );
};
