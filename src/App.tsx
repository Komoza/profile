import { SidePanel } from './components/side-panel/side-panel';
import { Home } from './components/Home/home';
import './App.scss'

function App() {
    return (
        <div className="container">
            <SidePanel/>
            <Home />
        </div>
    );
}

export default App;
