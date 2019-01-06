import { Injectable } from '@angular/core';
import { Codes } from '../config/config.code';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  accepted: boolean = false;

  constructor() { }

  checkLogin(code: number): boolean {
    Codes.filter(x => {
      if (x.code == code) this.accepted = true;
    });
    return this.accepted;
  }
}
