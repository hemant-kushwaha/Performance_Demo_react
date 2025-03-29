import { useState } from 'react';

export default function ({children}) {
    const [x,setX] = useState(0);
    return (
        <>
        <button onClick={()=>setX(x+1)}>Increment x</button>
        <div>   
         {x} 
         {children}
        </div>
        </>

    )

}