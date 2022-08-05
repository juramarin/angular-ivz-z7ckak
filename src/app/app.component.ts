import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Promijeni Angular ' + VERSION.major;

  ngOnInit(): void {
    of(2, 4, 6, 8, 10, 12, 14).subscribe(item => console.log(item));

    from([21, 42, 634, 8, 110, 12, 514]).subscribe({
      next: (item) => console.log(`Emitted item is ${item}`),
      error: (err) => console.log(`Emitted item is ${err}`),
      complete: () => console.log('completed!')
    });

    // throw new Error('Method not implemented.');
  }
}
