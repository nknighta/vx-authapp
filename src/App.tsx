import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import "./components/Auth.css";

// Home component

// About component
const PrivacyPolicy = () => {
  return <h1>Privacy Policy</h1>;
};

// QueryParamDemo component that uses useSearchParams hook
const QueryParamDemo = () => {
  const [searchParams] = useSearchParams();

  // Get query parameters using React Router's useSearchParams
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  return (
    <div className="query-params">
      <h1>Query Parameters Demo</h1>
      <p>
        <strong>id:</strong> {id || "(not provided)"}
      </p>
      <p>
        <strong>name:</strong> {name || "(not provided)"}
      </p>
      <p>
        <em>Try changing the URL to add ?id=123&name=test</em>
      </p>
    </div>
  );
};

// main router component
function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Privacy">Privavicy</Link>
            </li>
            <li>
              <Link to="/query-demo">Query Params Demo</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/query-demo" element={<QueryParamDemo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
