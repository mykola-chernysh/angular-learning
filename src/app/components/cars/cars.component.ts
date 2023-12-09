import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {CarComponent} from "../car/car.component";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarComponent,
    NgForOf
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit {
  cars: ICar[];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getTriggerStatus().subscribe(() => {
      this.carService.getAll().subscribe(value => this.cars = value);
    })
  }
}
