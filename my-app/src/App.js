import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
  <div className="App">
    <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      <h1 className="text-4xl py-8 mb-10 bg-teal-600 text-white rounded-md">Expense Manager</h1>

  
      <div className="grid md:grid-cols-2 gap-4">
        <Form></Form>
          <Graph></Graph>
          
      </div>
    </div>
  </div>
  );
}

export default App;
