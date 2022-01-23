import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ProductService } from '../../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories;
  product={};
  id;
  constructor(private router:Router,private categoryService:CategoryService,private productService:ProductService,private route:ActivatedRoute) { 
    this.categories=this.categoryService.getCategories();
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id)
    this.product=this.productService.get(this.id).take(1).subscribe(p=>this.product=p);
  }
  delete()
  {
    if (!confirm("Are you sure to delete this button ?")) return;
    
      this.productService.delete(this.id);
    
  }
  save(product)
  {
    if(this.id)
    {
      this.productService.update(this.id,product);
    }else
    {
      this.productService.create(product);
    }
    
  }
  ngOnInit() {
  }

}
