import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const TypeWriter = ()=>{
    const [typeEffect] = useTypewriter({
        words:['FullStack Developer','Front-End Engineer','Java Develoer','Hungry Mind :P'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40
    })
    return(
        <h3 className="home__subtitle">I'm A {typeEffect}
            <Cursor/>
        </h3>
    );
};

export default TypeWriter;