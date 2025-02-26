import { Component, Input,Output,EventEmitter} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AudioService } from './audio.service';
import { ConfigService } from './config.service';
import { ValuesComponent} from './tutorial/values/values.component';
import { InputComponent} from './tutorial/input/input.component';
import { OutputComponent } from './tutorial/output/output.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
            ValuesComponent, // This is necessary for the html to see app-values
            InputComponent,
            OutputComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ AudioService, ConfigService]
})
export class AppComponent {
  title = 'Audio Machnine Learning';
  hello_message = "";
  currentItem='Input Value from AppComponent'; // @Input

  @Output('myEvent') 
    emitEvent = new EventEmitter();

  constructor(private http: HttpClient, 
    private audioService: AudioService,
    private configService :ConfigService) { 
    console.log(audioService.Sounds.bang);

  }



  handleEvent(event:string) {
    console.log(event);
  }



  sayHello2() {
    this.http.get<string>("http://127.0.0.1:5000/").subscribe(buffer => {
      console.log("The response is " + buffer);
      this.hello_message = buffer;
    })
  }

  sayHello1() {
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


