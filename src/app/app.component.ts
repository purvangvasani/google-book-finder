import { Component } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public bookName: String = "";
  public bookList: any;

  constructor(private httpService: HttpServiceService) {
    
  }

  searchBook = () => {
    this.httpService.getBookList(this.bookName).subscribe(
      (response) => { this.bookList = response; console.log(this.bookList) },
      (error) => { console.log(error); });
  }

  clear = () => {
    this.bookName = "";
    this.bookList = {
      items: []
    };
  }
}
