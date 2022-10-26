import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailComponent } from './poke-detail/poke-detail.component';
import { PokeTableComponent } from './poke-table/poke-table.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PokeDetailComponent,
    PokeTableComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    HeaderComponent,
    PokeDetailComponent,
    PokeTableComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
})
export class ComponentsModule {}
