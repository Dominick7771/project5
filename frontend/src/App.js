import Films from "components/Films";
import Navigation from "./components/Navigation";
import apiReducer from "./modules/reducers/apiReducer";
import rootReducer from "./modules/reducers"

function App() {

    return (
        <div className="container-fluid">
            <Navigation/>
            <Films/>
        </div>
    );
}

export default App;
