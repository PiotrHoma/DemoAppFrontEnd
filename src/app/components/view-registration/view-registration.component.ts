import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public productReg;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductReg(this.route.snapshot.params.id);
  }

  getProductReg(id:number){
    this.productService.getProduct(id).subscribe(
      data => {
        this.productReg = data;
      },
      err => console.error(err),
      () => console.log ("products loaded")
    );
  }
}
