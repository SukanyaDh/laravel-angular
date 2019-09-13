import { Component, OnInit } from '@angular/core';
import { ApiresponseService } from '../services/apiresponse.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  constructor(private apiCall:ApiresponseService,private token:TokenService) { }
  getProducts()
  {
    this.apiCall.listProducts().subscribe((data:[])=>
      this.products = data['success']
    );
  }
  ngOnInit() {
    this.getProducts();
  }

}
