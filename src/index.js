import './index.css';
import Dashboard from './components/Dashboard';
import ReactPanelElement from './ReactPanelElement.js';

customElements.define('lcars-panel', ReactPanelElement(Dashboard));
