import './App.css';
import Row from './components/Row'
import requests from './requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
   <div>
    <Nav/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isPresent={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy MOvies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documenteries" fetchUrl={requests.fetchDocumentaries}/>

   </div>
  );
}

export default App;
