import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

const root = createRoot(document.getElementById('root'));
setInterval(() => {
	root.render(
		<p>現在時刻：{(new Date()).toLocaleString()}</p>
	)
})