import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Audio Machnine Learning';
  hello_message:string="";

  constructor(private http: HttpClient) { }

  sayHello() {
    let url = "http://127.0.0.1:5000/";
    

    this.hello_message = "AppModule"

    this.http.get(url, {responseType: 'json'}).subscribe(
      (data) => {
        // Handle successful response
        console.log('HTTP GET Request successful', data);
        this.hello_message = data.toString();
      },
      (error) => {
        // Handle error
        console.error('HTTP GET Request failed', error);
      }
    );
  }
}


