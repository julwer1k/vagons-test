import './App.scss';
import { QuestionTable } from './components/QuestionTable';

function App() {
  return (
    <div data-cy="app">
      <div className="section">
        <div className="container">
          <QuestionTable />
        </div>
      </div>
    </div>
  );
}

export default App;
