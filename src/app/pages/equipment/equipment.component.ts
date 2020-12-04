import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  selectedEq: boolean = false;

  constructor() {  }

  ngOnInit(): void {
  }

  equipmentClick() {
    
    this.selectedEq = true;
    
  }

}


