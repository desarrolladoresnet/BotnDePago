import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { LoginService } from "./login.service";
import { StorageService } from "../utils/storage-service.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private readonly loginService: LoginService,
    private readonly storageService: StorageService
    ) {}

    user?: any;

  ngOnInit(): void {
    this.user = this.storageService.getUser();
    if (this.user) console.log(this.user);
  }

  data: Date = new Date();
  focus: any;
  focus1: any;

  login = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  });

  SendLoginForm() {
    const username = this.login.value.username || "";
    const password = this.login.value.password || "";

    const data = {
      username: username,
      password: password
    };

    if (data.username && data.password) {
      this.loginService.LoginUser(data).subscribe({
        next: response => {
          console.log("Response received:", response);
          this.storageService.saveUser(response);
        },
        error: err => {
          console.error("Error:", err);
          // Aquí puedes manejar el error.
        },
        complete: () => {
          console.log("Request completed");
          // Este callback se ejecutará cuando el Observable se complete.
        }
      });
    }
  }
}
