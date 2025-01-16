export class Pessoa {
	constructor(
		public name: string,
		public lastName: string,
		private cpf: string,
	) {}

	getCpf(): string {
		return this.cpf;
	}
}

export class Professor extends Pessoa {
	constructor(
		name: string,
		lastName: string,
		cpf: string,
		private idClass: string,
	) {
		super(name, lastName, cpf);
	}
}

const professor = new Professor("Leonardo", "Maciel", "000.000.000-00", "45");
console.log(professor);
