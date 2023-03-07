import { Route, Routes } from 'react-router-dom';
import './App.css';
import { DetailMovieTv} from './components/detailMovieTv';
import { DetailPerson } from './components/detailPerson';
import { Navbar } from './components/navbar';
import { Homepage } from './Pages/homepage';
import { MoviePage } from './Pages/moviePage';
import { PeoplePage } from './Pages/peoplePage';
import { SearchPage } from './Pages/search/searchPage';
import { TvPage } from './Pages/tvPage';

function App() {
  return (
    <div className=' relative min-h-screen flex flex-col justify-start'>
      <div className='  w-full'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/'>
          <Route index element={<Homepage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='/movie' element={<MoviePage/>}>
            <Route path=':id' element={<DetailMovieTv mediaType={"movie"}/>}/>
          </Route>
          <Route path='/tv' element={<TvPage/>}>
            <Route path=':id' element={<DetailMovieTv mediaType={"tv"}/>}/>
          </Route>
          <Route path='/people' element={<PeoplePage/>}>
            <Route path=':id' element={<DetailPerson/>}/>
          </Route>
        </Route>

      </Routes>
      <footer className=' py-3 mt-auto flex justify-center gap-7 flex-wrap border-t-2  bg-emerald-400'>
        <ul className=' max-w-fit list-disc'>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>Tailwind</li>
        </ul>
        <ul className=' max-w-fit list-disc'>
          <li>The Movie Database API</li>
          <li>Open News API</li>
        </ul>
      </footer>
    </div>
    );
}

export default App;
