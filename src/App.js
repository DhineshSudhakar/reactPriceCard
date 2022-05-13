import './App.css';
import PriceCard from './components/PriceCard';
import { users } from './users.js'

function App() {
  return (
    <div className="App">
      <div className="cards">
        {
          users.map((user, i) => {
            return <PriceCard key={i} card={user} />
          })
        }
      </div>

    </div>
  );
}

export default App;
