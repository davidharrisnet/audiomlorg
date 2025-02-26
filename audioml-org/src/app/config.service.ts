import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  /*** 
  public sayHello = async  (): Promise<string> =>{

    try {
      const response = await this.http.get<string>("http://127.0.0.1:5000/");
      
      return response;
      
    } catch (error) {
      console.error(error);      
  }
  return "Hello Config";
  };
  ***/


}
