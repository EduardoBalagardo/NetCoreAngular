import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DiasSemanaComponent } from './components/dias-semana/dias-semana.component';
import { TablaProductComponent } from './components/tabla-product/tabla-product.component';
import { BuscadorProductoComponent } from './components/buscador-producto/buscador-producto.component';
import { BuscadorProductoCategoriaComponent } from './components/buscador-producto-categoria/buscador-producto-categoria.component';
import { FiltradoProductoNombreComponent } from './components/filtrado-producto-nombre/filtrado-producto-nombre.component';
import { FiltradoProductoCategoriaComponent } from './components/filtrado-producto-categoria/filtrado-producto-categoria.component';

import { ProductoServiceService } from '../services/producto-service.service';
import { CategoriaService } from '../services/categoria.service';
import { PersonaService } from '../services/persona.service';

import { TablaPersonaComponent } from './components/tabla-persona/tabla-persona.component';
import { BuscadorPersonaNombrecompletoComponent } from './components/buscador-persona-nombrecompleto/buscador-persona-nombrecompleto.component';
import { FiltradoPersonaNombrecompletoComponent } from './components/filtrado-persona-nombrecompleto/filtrado-persona-nombrecompleto.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DiasSemanaComponent,
    TablaProductComponent,
    BuscadorProductoComponent,
    BuscadorProductoCategoriaComponent,
    FiltradoProductoNombreComponent,
    FiltradoProductoCategoriaComponent,
    TablaPersonaComponent,
    BuscadorPersonaNombrecompletoComponent,
    FiltradoPersonaNombrecompletoComponent,
    

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'filtro-producto', component: FiltradoProductoNombreComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'listado-producto', component: TablaProductComponent },
      { path: 'filtro-categoria', component: FiltradoProductoCategoriaComponent },
      { path: 'filtro-persona', component: FiltradoPersonaNombrecompletoComponent }
    ])
  ],
  providers: [ProductoServiceService, CategoriaService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
