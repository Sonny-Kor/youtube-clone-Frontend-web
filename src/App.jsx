import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/MainPage/MainPage';
import VideoPage from './pages/VideoPage/VideoPage';
import SearchPage from './pages/SearchPage/SearchPage';
import Studio from './pages/StudioPage/StudioPage';
/*
import PlayListPage from './pages/PlayListPage/PlayListPage';
*/
import './common/common.scss';

function App() {
  /*
  <Route path="/playlist" element={<PlayListPage />} />
  */
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/watch" element={<VideoPage />}>
        <Route path=":videoid" element={<VideoPage />} />
      </Route>
      <Route path="/search" element={<SearchPage />} />
      <Route exact path="/Studio" element={<Studio />} />
    </Routes>
  );
}

export default App;
