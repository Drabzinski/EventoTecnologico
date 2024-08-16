import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-palestrantes',
  standalone: true,
  templateUrl: './palestrantes.component.html',
  styleUrls: ['./palestrantes.component.css'],
  imports: [CommonModule]
})
export class PalestrantesComponent {
  palestrantes = [
    { nome: 'Ana Silva', tema: 'Transformações da Inteligência Artificial no Mercado', foto: 'assets/foto1.jpg' },
    { nome: 'Carlos Oliveira', tema: 'Como a Digitalização Está Mudando os Negócios', foto: 'assets/foto2.jpg' },
    { nome: 'Fernanda Santos', tema: 'Desenvolvimento Ágil: Metodologias e Tendências', foto: 'assets/foto3.jpg' },
    { nome: 'Roberto Costa', tema: 'Segurança da Informação: Protegendo Dados em Tempos de Crise', foto: 'assets/foto4.jpg' },
    { nome: 'Juliana Martins', tema: 'Blockchain: Aplicações e Desafios Futuras', foto: 'assets/foto5.jpg' }
  ];
}
