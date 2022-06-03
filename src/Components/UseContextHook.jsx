import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
  } from "react-router-dom";
import Index from './pages/Index';
import About from './pages/About';
import { UserContext } from './UserContext';

const UseContextHook = () => {
    return (
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                </ul>
                </nav>
            <UserContext.Provider value="Hello from context">
                <Routes>
                    <Route path="/" exact element={<Index/>}/>
                    <Route path="/home" element={<Index />}/>
                    <Route path="/about/" element={<About />}/>
                </Routes>
            </UserContext.Provider>
            </div>
        </Router>
    )

}

export default UseContextHook;