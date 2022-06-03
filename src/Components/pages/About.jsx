import { useContext } from "react";
import { UserContext } from "../UserContext";

const About = () => {
    const msg = useContext(UserContext);

    return (
        <div>
            <h1>About</h1>
            <div>{msg}</div>    
        </div>
    )
}

export default About; 