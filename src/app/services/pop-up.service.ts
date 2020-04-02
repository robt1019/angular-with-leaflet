import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {
  constructor() {}

  makeCapitalPopup(data: any) {
    return (
      `` +
      `<div>Capital: ${data.capital}</div>` +
      `<div>State: ${data.state}</div>` +
      `<div>Population: ${data.population}</div>`
    );
  }
}
