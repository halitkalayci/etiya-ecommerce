import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, FeaturesRoutingModule, ProductsModule],
})
export class FeaturesModule {}
