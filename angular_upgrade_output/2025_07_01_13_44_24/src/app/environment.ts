// Angular 9 environment configuration
import { enableProdMode } from '@angular/core';

export const environment = {
  production: true,
  authapiurl: 'https://metaluat.ascendion.com:8601/',
  baseurl: 'https://metaluat.ascendion.com:8600/'
};

if (environment.production) {
  enableProdMode();
}
