import { Component, OnInit } from '@angular/core';
import Business from '../model/Business';
import { BusinessService } from '../service/business.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService) { }

  ngOnInit() {
    this.bs
      .getBusinesses()
      .subscribe((data: Business[]) => {
        this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
