import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productform: FormGroup;
  validMessage: string ="";

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productform = new FormGroup({
      name: new FormControl('',Validators.required),
      productName: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
      purchasePrice: new FormControl('',Validators.required),
      purchaseDate: new FormControl(),
      contact: new FormControl(),
    });
  }

  submitRegistration(){
    if (this.productform.valid){
      this.validMessage = "Your product registration has been submitted. Thank you!";
      this.productService.createProductRegistration(this.productform.value).subscribe(
        data => {
          this.productform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else{
      this.validMessage = "Please fill out the form before submitting!";
    }
  }
}
