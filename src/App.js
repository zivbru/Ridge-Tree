import { useState } from 'react';
import './App.css';
import Tree from './components/Tree/Tree';

function App() {
  const [url, setUrl] = useState('');
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await fetch(url);
    const resData = await res.json();
    setData(resData);
  };

  return (
    <div className='App'>
      <div className='input'>
        <input
          style={{ width: '400px' }}
          placeholder='insert your url'
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <button onClick={fetchData}>fetch Data</button>
      </div>
      {data && <Tree data={data} />}
    </div>
  );
}

export default App;
