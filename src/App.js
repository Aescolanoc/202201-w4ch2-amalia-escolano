import { useState } from 'react';
import './App.css';
import { Gentleman } from './components/gentelman';
import { Info } from './components/info';
import { GENTLEMEN } from './models/gentlemen.data';

function App() {
  const [gentlemen, setGentlemen] = useState(GENTLEMEN);

  const deleteGentleman = (gentleman) => {
    setGentlemen(gentlemen.filter((item) => item.id !== gentleman.id));
  };

  const updateGentleman = (newGentleman) => {
    setGentlemen(
      gentlemen.map((item) =>
        newGentleman.id === item.id ? newGentleman : item
      )
    );
  };

  return (
    <div className="App">
      <Info />
      <ul className="gentlemen">
        {gentlemen.map((gentleman, i) => {
          return (
            <Gentleman
              key={i}
              gentleman={gentleman}
              deleteGentleman={deleteGentleman}
              updateGentleman={updateGentleman}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
