import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Categories } from '../categories';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DetailsComponent implements OnInit {
  @Input() product!: Categories;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.product = JSON.parse(params['product']);
    });
  }
}
