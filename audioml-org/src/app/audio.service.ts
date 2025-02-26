import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class AudioService {

  public Sounds = {
    bang: "Bang",
    woot: "Woot",
    slam: "Slam"

  }

  constructor() { }

}
