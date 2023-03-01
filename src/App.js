import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { Homepage } from './Pages/homepage';
import { SearchPage } from './Pages/searchPage';

function App() {
  return (
    <div className=' relative min-h-screen flex flex-col justify-start'>
      <div className='  w-full'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/'>
          <Route index element={<Homepage/>}/>
          <Route path='/search/:query' element={<SearchPage/>}/>
        </Route>

      </Routes>
      <footer className=' mt-auto h-24 border-t-2  bg-green-500'></footer>
    </div>
    );
}

export default App;
