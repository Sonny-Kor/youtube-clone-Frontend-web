import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/MainPage/MainPage';
import Studio from './pages/StudioPage/StudioPage';

import './common/common.scss';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/Studio" element={<Studio />} />
    </Routes>
  );
}

export default App;
