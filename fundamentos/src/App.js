import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import ChallengeComponent from './components/ChallengeComponent'
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Meu primeiro projeto</h1>
        <FirstComponent />
        <TemplateExpressions />
        <MyComponent />
        <Events />
        <ChallengeComponent />
      </div>
    </div>
  );
}

export default App;
