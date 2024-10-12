import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@mistek/freedom-ui/dist/assets/style.css";

createRoot(document.getElementById('root')!).render(
    <>
        <App />
    </>,
)
