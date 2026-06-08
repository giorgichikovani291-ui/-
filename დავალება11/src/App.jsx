import Input from "./componenets/input";
import Paragraph from "./componenets/paragraph";
import Satauri from "./componenets/satauri";

function App() {
  const number = 5;
  const arr = ["Banana", "Apple", "Orange"];
  const str = "Fruits";
  const foo = function () {
    return "xutjer" + 5;
  };
  const obj = {
    xili: "kivi",
    bostneuli: "pamidori",
  };
  return (
    <>
      <Satauri />
      <Paragraph />
      <Input />
      <h1>{number}</h1>
      <h2>{arr}</h2>
      <h3>{str}</h3>
      <h4>{foo()}</h4>
      <h5>{obj.xili}</h5>
    </>
  );
}
export default App;

//1) რა არის კომპონენტი? უპასუხე ტექსტურად
// კომპონენტი არის საიტის დამოუკიდებელი, მრავალჯერადად გამოყენებადი ნაწილი.
