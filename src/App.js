import "./App.css";
import Header from "./components/Header";
import MyApp from "./components/MyApp";
import MyButton from "./components/MyButton";
import ShoppingList from "./components/ShoppingList";

function App() {
  return (
    <div className="App">
      <Header />
      <ShoppingList />
      <MyButton />
      <MyButton />
      <MyApp />
    </div>
  );
}

export default App;
