import CardList from './Cardlist';
import SearchBar from './SearchBar';
import { useState} from 'react';

const App = () => {

  const [input, setInput] = useState('');

  return (
    <div className="App">
      <h1>ROBOFRIENDS</h1>
      <SearchBar onChange={(e) => setInput(e.target.value)}/>
      <CardList term={input}/>
    </div>
  );
}

export default App;
