import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import VideoViewPage from './pages/VideoViewPage/VideoViewPage';

import './common/common.scss';

function App() {

  return (
    <Routes>
      <Route path="/watch" element={<VideoViewPage />}/>
      <Route exact path="/" element={<MainPage />}/>
    </Routes>
  );
}
export default App;
