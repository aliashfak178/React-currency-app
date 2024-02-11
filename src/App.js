import './App.css';
import * as React from 'react';
import CreateAccount from './components/CreateAccount/CreateAccount'
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <CssBaseline />
      <div className="container">
        <div className="modal">
          <div className="modal-container">
            <div className="modal-left">
              <CreateAccount />
            </div>
            <div className="modal-right">
              <img src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" />
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
