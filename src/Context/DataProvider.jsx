import { useState } from "react";
import { createContext} from "react";

export const DataContext = createContext();


 const DataProvider = ({children}) => {

    const [html, sethtml] = useState('');
    const [css, setCss] = useState('');
    const[js, setJs] = useState(''); 
  return (
    <DataContext.Provider 
        value = {{
            html,
            sethtml,
            css,
            setCss,
            js,
            setJs
        }}
    >
        {children}

    </DataContext.Provider>
  )
}

export default DataProvider