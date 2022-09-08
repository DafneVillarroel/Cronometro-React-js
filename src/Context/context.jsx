import { useContext } from "react";
import { createContext, useState } from "react";


const ContentContext = createContext([]);

export const useContentContext = () => useContext(ContentContext);


function ContentContextProvider({children}){
    
  let initial = 0;
  const [counter, setCounter] = useState(initial);
  const [chronoOn, setChronoOn] = useState(false);
  const [timeOn, setTimeOn] = useState(false);
  
  const add = (num) => {
    setCounter(counter + num);
  };
 
  

    return(
        <ContentContext.Provider value={{
            counter,
            setCounter,
            timeOn,
            setTimeOn,
            chronoOn,
            setChronoOn,
            add, 
            initial,
            
        }}>
        {children}
        </ContentContext.Provider>
    )
}

export default ContentContextProvider;