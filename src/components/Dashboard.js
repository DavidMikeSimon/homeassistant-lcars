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
      <div className="lcars-app-container">
        <div id="header" className="lcars-row header">
          <div className="lcars-elbow left-bottom lcars-tan-bg"></div>
          <div className="lcars-bar horizontal">
            <div className="lcars-title right">LCARS</div>
          </div>
          <div className="lcars-bar horizontal right-end decorated"></div>
        </div>

        <div id="left-menu" className="lcars-column start-space lcars-u-1">
          <div className="lcars-bar lcars-u-1"></div>
        </div>

        <div id="footer" className="lcars-row">
          <div className="lcars-elbow left-top lcars-tan-bg"></div>
          <div className="lcars-bar horizontal both-divider bottom"></div>
          <div className="lcars-bar horizontal right-end left-divider bottom"></div>
        </div>

        <div id="container">
          <div className="lcars-column lcars-u-5">
            <Controls hass={hass} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
