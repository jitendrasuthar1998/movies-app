import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { fetchDataFromApi } from './utils/api';
import { getApiConfiguration, getGenres } from './redux/slices/homeSlice';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    generesCall();
  }, []);

  // function to call api to get configuration details
  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        const url = {
          backdrop: res.images.secure_base_url + 'original',
          poster: res.images.secure_base_url + 'w342',
          profile: res.images.secure_base_url + 'w185',
        };
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  // function to call api to get all genres data
  const generesCall = async () => {
    let promises = [];
    let endPoints = ['tv', 'movie'];

    let allGeneres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);

    data.map(({ genres }) => {
      return genres.map((item) => (allGeneres[item.id] = item));
    });

    dispatch(getGenres(allGeneres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResult />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
