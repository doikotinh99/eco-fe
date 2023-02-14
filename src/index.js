import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//introduction
import Home from './pages/Home'
import Error from './components/404';

//user
import HomeUser from './user/pages/Home';
import AppUser from './SubApp'
//admin
import HomeAdmin from './admin/pages/Home'
import LoginAdmin from './admin/pages/Login'
import RegisterAdmin from './admin/pages/Register'
import ErrorAdmin from './admin/components/404';
import NotificationAdmin from './admin/pages/Notification';
import AppAdmin from './AdminApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
const subdomain = window.location.host.split('.')
console.log(subdomain[0])
if (subdomain.length === 1 || subdomain[0] == 'localhost:3000') {
  root.render(
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  );
} else {
  if (subdomain[0] === 'admin') {
    root.render(
      <Router>
        <Routes>
          <Route path="login" element={<LoginAdmin />} />
          <Route path="register" element={<RegisterAdmin />} />
          <Route path="/" element={<AppAdmin />}>
            <Route path="" element={<HomeAdmin />} />
            <Route path="thong-bao" element={<NotificationAdmin />} />
            <Route path="*" element={<ErrorAdmin />} />
          </Route>
        </Routes>
      </Router>
    )
  } else {
    root.render(
      <Router>
        <Routes>
          <Route path="/" element={<AppUser />}>
            <Route path="" element={<HomeUser subdomain={subdomain[0]} />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    )
  }

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
