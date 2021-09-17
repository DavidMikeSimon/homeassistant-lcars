import React from 'react';
import { SwitchButton } from '../../packages/hass-lcars-react-components/src';

export function Controls(props) {
  const { hass } = props;
  return (
    <>
      <SwitchButton hass={hass} label="CNR LMP" entityId="switch.corner_lamp" />
      <SwitchButton hass={hass} label="DAVID BED LMP" entityId="switch.davids_bedside_lamp" />
    </>
  );
};
