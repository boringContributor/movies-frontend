import { Switch, Route } from 'react-router-dom';
import { MovieData, NotFound, Search } from './pages';
import Header from './components/header';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MovieData} />
        <Route exact path="/search" component={Search} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
