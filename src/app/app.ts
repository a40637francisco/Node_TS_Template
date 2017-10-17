import { makeLicencePlatesPlugins } from '../licencePlates';
import { connectPlugin } from '../express.endpoint.plugin';

import { Express } from 'express';
import * as express from 'express';
import * as logger from 'morgan';

export function getApp(
    opts: { port: number }
): Express {

    const app = express();
    app.set('port', opts.port);

    var logger = require('morgan');
   
    app.set('views', './views');
    app.set('view engine', 'hbs');
    
    app.use(logger('dev'));
    
    app.use(express.static('./public'));

    const licencePlatesPlugins = makeLicencePlatesPlugins();
    connectPlugin(app, licencePlatesPlugins.getLicencePlatesPlugin);
    connectPlugin(app, licencePlatesPlugins.getUploadImagePlugin);


    return app;
}