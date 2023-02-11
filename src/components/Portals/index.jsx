import ReactDOM from 'react-dom';

const Portal = ({ children }) =>
   ReactDOM.createPortal(children, document.getElementById('overlays'));

export default Portal;
