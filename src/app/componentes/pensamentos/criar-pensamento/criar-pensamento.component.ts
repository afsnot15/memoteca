import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router
  ) {

  }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  public criarPensamento(): void {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  public cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
