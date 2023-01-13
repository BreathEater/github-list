import './App.css';

const FileList = ({ files }) => 
  <div>FileList<div/>;

const data = [
{
  id: 1,
  name: 'src',
  type: 'folder',
  updated_at: '2019-07-07 21:24:00',
  latestCommit: {
    message: 'Initial commit'
  }
},
{
  id: 2,
  name: 'src',
  type: 'folder',
  updated_at: '2019-07-07 21:24:00',
  latestCommit: {
    message: 'Initial commit'
  }
},
{
  id: 3,
  name: 'src',
  type: 'folder',
  updated_at: '2019-07-07 21:24:00',
  latestCommit: {
    message: 'Initial commit'
  }
},
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
