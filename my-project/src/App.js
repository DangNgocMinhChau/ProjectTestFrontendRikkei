import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routers";

function App({ store, basename }) {
  return (
    <Provider store={store}>
    <BrowserRouter basename={basename}>
      <Routes />
    </BrowserRouter>
  </Provider>
  );
}

export default App;
