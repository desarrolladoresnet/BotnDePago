import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(userdata: any): void {
    window.sessionStorage.removeItem("email");
    window.sessionStorage.setItem("email", JSON.stringify(userdata.email));
    window.sessionStorage.removeItem("token");
    window.sessionStorage.setItem("token", JSON.stringify(userdata.token));
    window.sessionStorage.removeItem("user_id");
    window.sessionStorage.setItem("user_id", JSON.stringify(userdata.user_id));
    window.sessionStorage.removeItem("username");
    window.sessionStorage.setItem("username", JSON.stringify(userdata.username));
  }

  public getUser(): any {
    const username = window.sessionStorage.getItem("username");
    const email = window.sessionStorage.getItem("email");
    const user_id = window.sessionStorage.getItem("user_id");
    const token = window.sessionStorage.getItem("token");


    if (username) {
      return JSON.parse(username);
    }

    return false;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem("username");
    if (user) {
      return true;
    }

    return false;
  }
}