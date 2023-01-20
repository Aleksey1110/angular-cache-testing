import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-cart',
  template: `
    <lib-banner text="some text"></lib-banner>
    <p>
      cart works!
      some text
    </p>
  `,
  styles: [
  ]
})
export class CartComponent {
  @Input() text: string = ''
}
