export class Motor {
	ligar(): void {
		console.log("Ligando...");
	}

	acelerar(): void {
		console.log("Acelerando...");
	}

	parar(): void {
		console.log("parar...");
	}
}

export class Carro {
	private readonly motor = new Motor();

	ligar(): void {
		this.motor.ligar()
	}

	acelerar(): void {
		this.motor.acelerar()

	}

	parar(): void {
		this.motor.parar()
	}
}

const carro = new Carro()

carro.ligar()
carro.acelerar()
carro.parar()
