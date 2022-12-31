import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main App COMPONENT
import { AppComponent } from './app.component';

// ROUTE MODULE
import { AppRoutingModule } from './app-routing.module';

// NAV COMPONENT
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';

// EXAMPLE NAV COMPONENT
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';

// FLEXBOX COMPONENTS
import { AlignContentComponent } from './flexbox/align-content/align-content.component';
import { AlignItemsComponent } from './flexbox/align-items/align-items.component';
import { FlexDirectionComponent } from './flexbox/flex-direction/flex-direction.component';
import { FlexWrapComponent } from './flexbox/flex-wrap/flex-wrap.component';
import { JustifyContentComponent } from './flexbox/justify-content/justify-content.component';
import { OrderComponent } from './flexbox/order/order.component';

// FLEXBOX EXAMPLES
import { CardsComponent } from './examples/cards/cards.component';
import { LayoutOneComponent } from './examples/layouts/layout-one.component';

// CSS GRID EXAMPLES
import { GridExampleComponent } from './css-grid/grid-example-one/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexDirectionComponent,
    NavMenuComponent,
    NavBarComponent,
    FlexWrapComponent,
    JustifyContentComponent,
    AlignContentComponent,
    CardsComponent,
    AlignItemsComponent,
    OrderComponent,
    LayoutOneComponent,
    GridExampleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
