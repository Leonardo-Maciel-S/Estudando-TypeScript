export class Empresa {
	readonly name: string;
	private readonly colaboradores: Colaborador[] = [];
	protected readonly cnpj: string;

	constructor(name: string, cnpj: string) {
		this.name = name;
		this.cnpj = name;
	}

	addColaborador(...list: Colaborador[]): void {
		list.forEach((item) => this.colaboradores.push(item));
	}

	getAllColaboradores() {
		return this.colaboradores;
	}
}
export class Colaborador {
	constructor(
		public readonly name: string,
		public readonly lastName: string,
	) {}

	getName() {
		console.log(this.name);
	}
}

const Empresa1 = new Empresa("Udemy", "11.111.111/0001-11");

const colaborador1 = new Colaborador("Leonardo", "Maciel");
const colaborador2 = new Colaborador("Luiz", "Marques");

Empresa1.addColaborador(colaborador1, colaborador2);

const colaboradores = Empresa1.getAllColaboradores();

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
