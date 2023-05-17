import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import AddUpdate from './pages/AddUpdate';

import UpdatePage from './components/updatePage';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddUpdate />} />
          <Route path='/update/:id' element={<UpdatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
