import * as sapper from '@sapper/app';

import 'bootstrap/scss/bootstrap.scss';
import './globals.scss';

sapper.start({
	target: document.querySelector('#sapper')
});