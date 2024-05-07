import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Passionate MERN Stack Developer",
              "Python Developer",
              "Competitive Programmer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed:70,
          }}
        />
      )
}

export default Type