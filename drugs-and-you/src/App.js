import logo from './logo.svg';
import './App.css';
import DrugComponent from './components/DrugsComponent.js';
import Introduction from './components/Introduction.js';
import DiseaseComponent from './components/DiseaseComponent';

function App() {
    return (
	    <div>
	    <Introduction / >
	    <div className="inputs">
	    <DrugComponent />
	    <div className="spacing" />
	    <DiseaseComponent/>
	</div>
	    </div>
	
  );
}

export default App;
