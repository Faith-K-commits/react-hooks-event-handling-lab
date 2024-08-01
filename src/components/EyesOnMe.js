import { useState } from "react";

const EyesOnMe = () => {
    const [state, setState] = useState();
    
    const handleFocus = () => {
        console.log('Good!');
        setState('focus');
    }

    const handleBlur = () => {
        console.log('Hey! Eyes on me!');
        setState('blur');
    }

    return ( 
        <button onFocus={handleFocus} onBlur={handleBlur} >Eyes on me</button>
    );
}
 
export default EyesOnMe;