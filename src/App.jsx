import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx";
import Button from "./Button.jsx";
import Student from "./Student.jsx";

function App() {
  return(
   <>
    <Card />
    <Header />
    <Student name="Sravan" age={30} isStudent={true}/>
    <Button />
    <Footer />
   </>


  );
}

export default App;
