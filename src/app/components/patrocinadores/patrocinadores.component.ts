import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patrocinadores',
  standalone: true,
  templateUrl: './patrocinadores.component.html',
  styleUrls: ['./patrocinadores.component.css'],
  imports: [CommonModule]
})
export class PatrocinadoresComponent {
  patrocinadores = [
    { nome: 'Google', logo: 'assets/google-logo.png', descricao: 'Líder em tecnologia e serviços online.' },
    { nome: 'Microsoft', logo: 'assets/microsoft-logo.png', descricao: 'Inovadora em software e hardware.' },
    { nome: 'Amazon', logo: 'assets/amazon-logo.png', descricao: 'Gigante do comércio eletrônico e serviços de nuvem.' },
    { nome: 'IBM', logo: 'assets/ibm-logo.png', descricao: 'Especialista em soluções de tecnologia e consultoria.' },
    { nome: 'Apple', logo: 'assets/apple-logo.png', descricao: 'Famosa por seus produtos eletrônicos e software.' },
    { nome: 'Intel', logo: 'assets/intel-logo.png', descricao: 'Líder em tecnologia de processadores e chips.' },
    { nome: 'Cisco', logo: 'assets/cisco-logo.png', descricao: 'Especialista em redes e soluções de comunicação.' }
  ];
}