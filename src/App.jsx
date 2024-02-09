import { useEffect } from 'react';
import './App.css';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './redux/slices/homeSlice';

function App() {

  const url = useSelector((state)=> state.home.url);
  console.log('url from redux store', url);
  const dispatch = useDispatch();

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular')
      .then((res) => {
        console.log('res', res);
        dispatch(getApiConfiguration(res));
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return <div></div>;
}

export default App;
