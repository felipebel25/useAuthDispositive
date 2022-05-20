import './App.css';

import useAuthDispositive from './hooks/useAuthDispositive';
function App() {

  const [data, platform] = useAuthDispositive()
  const validationPc = data === 'Linux' || data === 'Windows' || data === 'Mac OS' 
  return (
    <div className="App">
      {validationPc ?
        <div>
          <h1>soy pc {data}</h1>
          <p>{platform}</p>
        </div>
        :
        <div>
          <h1>soy mobile {data}</h1>
          <p>{platform}</p>
        </div>
      }
    </div>
  );
}

export default App;
