import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import StateForm from './StateForm.jsx';
import StateFormUC from './StateFormUC.jsx';
import FormTextarea from './FormTextarea.jsx';
import FromFile from './FormFile.jsx';
import FormBasic from './FormBasic.jsx';
import FormYup from './FormYup.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
const root = createRoot(document.getElementById('root'));

// root.render(<StateForm />);

// root.render(<StateFormUC />);

// root.render(<FormTextarea />);

// root.render(<FromFile />);

// root.render(<FormBasic />);

root.render(<FormYup />);
