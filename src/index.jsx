import React from 'react';
import ReactDOM from 'react-dom';

import 'src/index.scss';

class myFlixApplication extends React.Component
{
    render() {
        return (
            <div className="my-flix">
                <div>Good morning</div>
            </div>
        );
    }
}

const container = document.getElementsByClassName('app-container') [0];

ReactDOM.render(React.createElement(MyFlixApplication), container);