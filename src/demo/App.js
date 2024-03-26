/* eslint no-magic-numbers: 0 */
import React, { useState } from 'react';

import { MonacoEditor } from '../lib';

const App = () => {

    const [state, setState] = useState({value:'', label:'Type Here'});
    const setProps = (newProps) => {
            setState(newProps);
        };

    return (
        <div>
            <MonacoEditor
                setProps={setProps}
                {...state}
            />
        </div>
    )
};


export default App;
