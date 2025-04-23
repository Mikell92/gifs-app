import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";

@Component({
  selector: 'gifs-list',
  imports: [GifListItemComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  /* TODO: input string[]; */
  gifs = input.required<string[]>();
}
