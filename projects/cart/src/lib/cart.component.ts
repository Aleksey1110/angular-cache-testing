import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-cart',
  template: `
    <lib-banner text="some text"></lib-banner>
    <p>
      cart works!
      some text 2
    </p>
  `,
  styles: [
  ]
})
export class CartComponent {
  @Input() text: string = ''
}
