import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <main className="min-h-screen">
        <Route exact path="/" component={HomePage} />
      </main>
      <Footer />
    </Router>
  );
}
