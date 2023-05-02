import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from './pages/MainPage/MainPage';

import './common/common.scss';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Main />}/>
    </Routes>
  );
}

export default App;
