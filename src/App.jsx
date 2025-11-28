import Weather from "./components/Weather";

function App() {

  return (
    <div className="App">
      <Weather />
      <footer className="footer">
          <p className="footer-text">
            {" "}
            &copy; {new Date().getFullYear()} Vedang Dhuri. All rights reserved.
          </p>
      </footer>
    </div>
  );
}

export default App;