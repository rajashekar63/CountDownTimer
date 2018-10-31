import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import CountDownClock from './components/CountDownClock';
import SecondsToTime from './components/SecondsToTime';

render(
    <Provider>
		<CountDownClock secondsToTime={ SecondsToTime }/>
    </Provider>,
    document.getElementById('app')
);

