import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/MainPage/MainPage';
import Studio from './pages/StudioPage/StudioPage';
import SearchPage from './pages/SearchPage/SearchPage';
import PlayListPage from './pages/PlayListPage/PlayListPage';
import VideoPage from './pages/VideoPage/VideoPage';

import './common/common.scss';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Studio" element={<Studio />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/playlist" element={<PlayListPage />} />
      <Route path="/watch" element={<VideoPage />} />
    </Routes>
  );
}

export default App;
