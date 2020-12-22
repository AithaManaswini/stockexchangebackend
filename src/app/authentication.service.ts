// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';
// @Injectable({
//   providedIn: 'root'
// })
// export class User{
//   constructor(
//     public status:string,
//      ) {}
  
// }

// export class AuthenticationService {

//   constructor(private httpClient:HttpClient) { }
//   // authenticate(username, password) {
//   //   if (username === "javainuse" && password === "password") {
//   //     sessionStorage.setItem('username', username)
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // }
//   // authenticateadmin(username, password) {
//   //   if (username === "javainadminuse" && password === "password") {
//   //     sessionStorage.setItem('username', username)
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // }
//   authenticateadmin(username, password) {
//     username="javainadminuse",
//     password="password";
    
//     const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
//     return this.httpClient.get<User>('http://localhost:8904/validateLogin',{headers}).pipe(
//      map(
//        userData => {
//         sessionStorage.setItem('username',username);
//         return userData;
//        }
//      )

//     );
//   }
  
//   isUserLoggedIn() {
//     let user = sessionStorage.getItem('username')
//     console.log(!(user === null))
//     return !(user === null)
//   }

//   logOut() {
//     sessionStorage.removeItem('username')
//   }

// }
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
// Provide username and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(username, password) {
    console.log("in authenticate");
    return this.httpClient
      .post<any>("http://localhost:8904/authenticate", { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem("username", username);
          let tokenStr = "Bearer " + userData.token;
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
  }
}