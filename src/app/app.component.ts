import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'; 
import { SobreComponent } from './components/sobre/sobre.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { PatrocinadoresComponent } from './components/patrocinadores/patrocinadores.component';
import { InscricaoComponent } from './components/inscricao/inscricao.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SobreComponent, PalestrantesComponent, AgendaComponent, PatrocinadoresComponent, InscricaoComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'evento';
}
