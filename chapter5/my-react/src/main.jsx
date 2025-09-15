import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ModuleBasic from './ModuleBasic.jsx';
import MotionBasic from './MotionBasic.jsx';
import MotionWhile from './MotionWhile.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById('root'));

// root.render(<ModuleBasic />);

// root.render(
//   <>
//     <h3 className="head">CSS Modules</h3>
//     <ModuleBasic />
//   </>
// );

// root.render(<MotionBasic />);

root.render(<MotionWhile />);
