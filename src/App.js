import logo from "./logo.svg";
import "./styles/tailwind.css";
import AppLayout from "./layouts/AppLayout";
import Weather from "../src/components/weather";

function App() {
  return (
    <AppLayout>
      <Weather />
    </AppLayout>
  );
}

export default App;
