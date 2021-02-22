import logo from './logo.svg';
import './App.css';
import SingleSelect from './component/SingleSelect'
import MultiSelect from './component/MultiSelect'

function App() {
  return (
    <div className="App">
        <h2>Single Select</h2>
        <SingleSelect />
        <h2>Multi Select</h2>
        <MultiSelect />
    </div>
  );
}

export default App;
