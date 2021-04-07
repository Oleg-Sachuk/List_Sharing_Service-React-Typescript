import React from 'react';
import {useHistory} from 'react-router-dom';

const About: React.FC = () => {
    const history = useHistory();
    return(
        <>
        <h1>About Page</h1>
        <div>
            <button onClick={() => history.push('/')}>Back to your list</button>
        </div>
        </>
    )
}

export default About;