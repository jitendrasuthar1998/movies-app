import { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration, getGenres } from './redux/slices/homeSlice';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const url = useSelector((state) => state.home.url);
  // console.log('url from redux store', url);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchApiConfig();
    generesCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration')
      .then((res) => {
        // console.log('res', res);

        const url = {
          backdrop: res.images.secure_base_url + 'original',
          poster: res.images.secure_base_url + 'w342',
          profile: res.images.secure_base_url + 'w185',
        };
        // console.log('url at fetchDataFromApi == ', url);
        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

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
