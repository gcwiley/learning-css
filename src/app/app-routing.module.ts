import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// FLEXBOX COMPONENTS
import { AlignContentComponent } from './flexbox/align-content/align-content.component';
import { AlignItemsComponent } from './flexbox/align-items/align-items.component';
import { FlexDirectionComponent } from './flexbox/flex-direction/flex-direction.component';
import { FlexWrapComponent } from './flexbox/flex-wrap/flex-wrap.component';
import { JustifyContentComponent } from './flexbox/justify-content/justify-content.component';
import { OrderComponent } from './flexbox/order/order.component';

// CSS GRID COMPONENTS
import { GridExampleComponent } from './css-grid/grid-example-one/grid.component';

// EXAMPLE COMPONENTS
import { CardsComponent } from './examples/cards/cards.component';
import { LayoutOneComponent } from './examples/layouts/layout-one.component';
import { TemplateExampleComponent } from './examples/template/template.component';

const routes: Routes = [
  { path: 'align-content', component: AlignContentComponent },
  { path: 'align-items', component: AlignItemsComponent },
  { path: 'flex-direction', component: FlexDirectionComponent },
  { path: 'flex-wrap', component: FlexWrapComponent },
  { path: 'justify-content', component: JustifyContentComponent },
  { path: 'order', component: OrderComponent },
  { path: 'card-example', component: CardsComponent },
  { path: 'layout-example', component: LayoutOneComponent },
  { path: 'css-grid', component: GridExampleComponent },
  { path: 'template', component: TemplateExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
