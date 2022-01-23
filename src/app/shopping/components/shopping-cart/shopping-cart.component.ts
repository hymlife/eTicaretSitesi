import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cart;
  itemCount;
  listIDS;
  totalPrice:number=0;
  itemNumber:number=0;
  constructor(private shoppingCart:ShoppingCartService,private router:Router) {
    
   }
  
   
  getItemPrice(price,quantity){
    let itemPrice=price*quantity;
    return itemPrice;
  }

  clearCart()
  {
   this.shoppingCart.clearCart();
    
    this.totalPrice=0;
  }

   
  getTotalPrice(itemPrice)
  {
    this.totalPrice += itemPrice;
  }
  async ngOnInit() {
    this.itemCount=await this.getItemCount();
    this.cart=await this.shoppingCart.getCart();
    this.cart.subscribe(c=>{
      
      
      if(c.items)
      {
        

        this.listIDS=Object.keys(c.items);
        this.itemNumber=this.listIDS.length;
        for(let productID in c.items)
         {
          let itemPrice=this.getItemPrice(c.items[productID].product.price,c.items[productID].quantity);
          
          this.getTotalPrice(itemPrice);
         }
      }
      
      
    });
    
  
    
  }

  async getItemCount()
  {
    let cart=await this.shoppingCart.getCart();
    cart.subscribe(cart=>{
      this.itemCount=0;
       for(let productID in cart.items)
       {
         this.itemCount+=cart.items[productID].quantity;
       }
    });
     return this.itemCount;
  }

}
