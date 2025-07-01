
import './polyfills';
import './styles/vendor.css';
import './styles/_variables.scss';

import { interval, throwError, merge } from 'rxjs';
import { map, first, mapTo, scan, bufferCount, debounceTime, startWith, finalize, catchError } from 'rxjs/operators';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

// Enable either Hot Module Reloading or production mode
/* tslint:disable */
if (module['hot']) {
    module['hot'].accept();
    module['hot'].dispose(() => { });
} else {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));