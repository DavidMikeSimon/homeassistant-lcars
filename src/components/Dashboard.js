import React, { Component } from 'react';
import { Controls } from './Controls';

class Dashboard extends Component {
  render() {
    /* eslint-disable no-unused-vars */
    const {
      // Object containing all the state and methods to control Home Assistant
      hass,
      // Boolean if the sidebar is currently shown.
      showMenu,
      // Boolean if the UI should render in narrow mode.
      narrow,
      // Panel information that Home Assistant has (including config at panel.config)
      panel,
    } = this.props;

    return (
      <div className="App">
        <Controls hass={hass} />
      </div>
    );
  }
}

export default Dashboard;
