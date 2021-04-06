
import { createElement } from 'lwc';
import MyApp from 'my/miscRestApiCall';

const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);


/* import { createElement, register } from 'lwc';
import { registerWireService } from '@lwc/wire-service';
import UiApp from 'ui/app';

registerWireService(register);

const app = createElement('my-app', { is: UiApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app); */