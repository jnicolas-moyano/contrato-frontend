import { Component } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-crear-contrato',
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css']
})
export class CrearContratoComponent {
  contrato: Contrato = {
    identificador: '',
    valor: 0,
    nombreContratante: '',
    documentoContratante: '',
    nombreContratista: '',
    documentoContratista: '',
    fechaInicial: '',
    fechaFinal: ''
  };

  constructor(private contratoService: ContratoService) {}

  onSubmit(): void {
    this.contratoService.createContrato(this.contrato).subscribe({
      next: (data) => {
        console.log('Contrato creado:', data);
        alert('Contrato creado exitosamente');
      },
      error: (err) => {
        console.error('Error al crear contrato:', err);
        alert('Ocurrió un error al crear el contrato');
      }
    });
  }
}
