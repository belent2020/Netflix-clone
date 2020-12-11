

import Row from './component/Row';
import requests from './js/request';
import "./css/Main.css"
import Banner from './component/Banner';
import Header from "./component/TopBar"

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title = "NETFLIX ORGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row title = "Trending Now" 
      fetchUrl={requests.fetchTrending}/>
      <Row title = "Top Rated" 
      fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title = "Action Movie" 
      fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" 
      fetchUrl={requests.fetchComedyMovies}/>
       <Row title = "Horror Movies" 
      fetchUrl={requests.fetchHorrorMovies}/>
       <Row title = "Romance Movies" 
      fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentaries Movies" 
      fetchUrl={requests.fetchDocumentaries}/>
    
    </div>
  );
}

export default App;
