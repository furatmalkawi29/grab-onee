import {createContext, useState} from 'react'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import './reset.css'


//dynamic context
export const isOverAgeContext = createContext({
  isOverAge: false,
  setIsOverAge: ()=> {}
});


function App() {
  const [isOverAge, setIsOverAge] = useState(false);
  const value = {isOverAge, setIsOverAge}

  return (
    <div className="App">
      <isOverAgeContext.Provider value={value}>
      <Header/>
      <Main/>
      <Footer/>
      </isOverAgeContext.Provider>
    </div>
  );
}

export default App;
