import React from 'react';
import { render } from 'react-dom';
import App from './App';

import {MobxProvider } from "./MobxContext"



render(
	<React.StrictMode>

	<MobxProvider>
		<App />
	</MobxProvider>

	</React.StrictMode>,
	document.getElementById("root")
);
