import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Promijeni Angular ' + VERSION.major;

  ngOnInit(): void {
    of(2, 4, 6, 8, 10, 12, 14).subscribe((item) => console.log(item));

    from([21, 42, 634, 8, 110, 12, 514]).subscribe({
      next: (item) => console.log(`Emitted item is ${item}`),
      error: (err) => console.log(`Emitted item is ${err}`),
      complete: () => console.log('completed!'),
    });

    of('Apple1', 'Apple2', 'Apple3').subscribe({
      next: (item) => console.log(`Emitted item is ${item}`),
      error: (err) => console.log(`Emitted item is ${err}`),
      complete: () => console.log('completed!'),
    });

    of(2, 4, 6, 8, 10, 12, 14)
      .pipe(
        tap((item) => console.log(`1 log ${item}`)),
        map((item) => item * 5),
        tap((item) => console.log(`2 log ${item}`)),
        take(3)
      ).subscribe((item) => console.log(`3 log ${item}`));
  }
}
