import { Component, OnInit, Output, Input, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() shoppingListUpdate = new EventEmitter<{name: string, amount: number}>();

  constructor() { }

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  ngOnInit() {
  }

onAddShoppingListItem(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.shoppingListUpdate.emit({
      name: nameInput.value,
      amount: amountInput.valueAsNumber,
    });
  }
}
