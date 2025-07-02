import { enableProdMode } from '@angular/core';

export const environment = {
  production: false,
  authapiurl: 'https://metaluat.ascendion.com:8601/',
  baseurl: 'https://metaluat.ascendion.com:8600/'
};

if (environment.production) {
  enableProdMode();
}