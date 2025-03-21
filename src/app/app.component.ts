import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  megasena: number[] = [0, 0, 0, 0, 0, 0];
  aposta: number[] = [0, 0, 0, 0, 0, 0];
  resultado: string | null = null;

  compararNumeros() {
    if (!this.validarNumeros(this.megasena) || !this.validarNumeros(this.aposta)) {
      this.resultado = "Os números devem estar entre 1 e 60 e não podem se repetir!";
      return;
    }

    const numerosIguais = this.contarNumerosIguais();
    
    if (numerosIguais === 6) {
      this.resultado = "Você ganhou!!! Todos os números estão corretos!";
    } else {
      this.resultado = `Ah que pena, não foi dessa vez... Você acertou ${numerosIguais} números!`;
    }
  }

  contarNumerosIguais(): number {
    return this.aposta.filter(num => this.megasena.includes(num)).length;
  }

  validarNumeros(numeros: number[]): boolean {
    const numSet = new Set(numeros);
    return numeros.every(num => num >= 1 && num <= 60) && numSet.size === numeros.length;
  }
}
