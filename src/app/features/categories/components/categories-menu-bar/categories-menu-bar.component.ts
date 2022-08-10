import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {CategoriesService} from '../../services/categories/categories.service';

@Component({
  selector: 'app-categories-menu-bar',
  templateUrl: './categories-menu-bar.component.html',
  styleUrls: ['./categories-menu-bar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesMenuBarComponent implements OnInit {
  categories!: Category[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService.getList().subscribe(response => {
      this.categories = response;
      console.debug(
        '🐞 ➜ file: categories-menu-bar.component.ts ➜ line 23 ➜ CategoriesMenuBarComponent ➜ this.categoriesService.getList ➜ this.categories',
        this.categories
      );
    });
  }
}
