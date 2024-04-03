import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'] 
})
export class CardItemComponent {
  @Input() title: string = 'Title, ie, CPF. CNPJ...'; // Descrição
  @Input() description: string = 'Description, ie. Nome do contribuinte'; // Description property to be set by the user

  constructor() { }
}
