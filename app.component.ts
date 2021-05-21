import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Attribute, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomService } from './custom.service';
import { DatafromapiService } from './datafromapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  data:any;
  
  
  names="data loaded fron parent"
   constructor (private  Service:CustomService,private Ser:DatafromapiService) {}

      productdata:any;
      product_sev:any;
      

    ngOnInit(){
      this.Ser.product().subscribe(productdata=>{this.data=productdata})
      this.Ser.abc().subscribe(xyz=>{this.product_sev=xyz})
      console.log("ngOninit called");
      
    }        
    ngOnChanges(){
      console.log(" ngOnChanges");

    }
    ngOnDestroy(){
      console.log("ngOnDestroy called");
    }

  
    
  info(){

    this.Service.sub();
    this.data=this.Service.arr
  }
     
  }
//@ViewChild('myForm',{static:false})
  //title='directives'=myForm:NgForm;
  
  //onSubmit(form:HTMLFontElement)
  //{
 // console.log(Form);
  //}


  

    
  














  