import SearchMoviesMain from "./components/SearchMoviesMain";
import MovieDetails from "./components/MovieDetails";
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <div className="App" style={{margin:"20px", padding: "10px", }}>
      <Switch>
      <Route path="/movies" component={SearchMoviesMain} exact />
      <Route path="/movies/:imdbID" component={MovieDetails} />
      <Redirect to="/movies" />
      </Switch>
    </div>
  );
}

export default App;
