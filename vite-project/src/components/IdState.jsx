import idContext from "./IdContext";
import { useState } from "react";

const IdState = (props)=>{
    //eslint-disable-next-line
    const[id, setId] = useState(1);
    return <idContext.Provider value={{id, setId}}>
        {props.children}
    </idContext.Provider>
}

export default IdState