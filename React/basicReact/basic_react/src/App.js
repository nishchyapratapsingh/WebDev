import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <TextArea heading="Enter your text here" />
      </div>
    </>
  );
}

export default App;
