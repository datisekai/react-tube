import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';

import { Toaster } from 'react-hot-toast';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import MasterLayout from './components/layouts/MasterLayout';
import History from './pages/History';
import Liked from './pages/Liked';
import MyVideo from './pages/MyVideo';
import Short from './pages/Short';
import Subcribe from './pages/Subcribe';
import Watch from './pages/Watch';
import Channel from './pages/Channel';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<MasterLayout/>}>
            <Route index element={<App/>}/>
            <Route path='watch/:id' element={<Watch/>} />
            <Route path='short' element={<Short/>} />
            <Route path='subcribe' element={<Subcribe/>} />
            <Route path='watched-video' element={<History/>} />
            <Route path='my-video' element={<MyVideo/>} />
            <Route path='liked-video' element={<Liked/>} />
            <Route path='channel/:id' element={<Channel/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Toaster />
    </>
  </React.StrictMode>,
)
