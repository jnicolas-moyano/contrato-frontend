import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-listar-contratos',
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.css']
})
export class ListarContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.contratoService.getContratos().subscribe({
      next: (data) => {
        this.contratos = data;
      },
      error: (err) => {
        console.error('Error al obtener contratos:', err);
      }
    });
  }
}
