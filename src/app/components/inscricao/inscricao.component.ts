import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscricao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './inscricao.component.html',
  styleUrls: ['./inscricao.component.css']
})
export class InscricaoComponent {
  onSubmit() {
    alert('Formulário enviado com sucesso!');
  }
}
