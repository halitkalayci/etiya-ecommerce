import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CategoriesService } from 'src/app/features/categories/services/categories/categories.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() categoryId!: number;
  productList!: Product[];
  fetchStatus = 'pending';
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 1500);
  }

  getAllProducts() {
    this.productsService.getAll().subscribe(
      (response) => {
        this.productList = response;
        this.fetchStatus = 'loaded';
      },
      (error) => {
        this.fetchStatus = 'error';
      }
    );
  }
}
