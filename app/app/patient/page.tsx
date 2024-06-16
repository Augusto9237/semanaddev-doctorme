import Button from "@/components/button";
import { Header } from "@/components/header";

export default function Patient() {
	return (
		<>
			<Header title="Meus Agendamentos" href="/" iconClassName="w-4 h-4" />

			<div className="flex border border-gray-200 p-2 mt-8 mb-9 rounded-xl justify-between items-center">
				<button className="w-1/2 rounded-xl py-2 px-4 font-semibold bg-green-600 hover:opacity-85">Proximos</button>
				<button className="w-1/2 rounded-xl py-2 px-4 hover:bg-gray-100">Realizados</button>
			</div>

			<div>
				<h2>Hoje</h2>
				<div>CARD</div>
				<h2>Amanhã</h2>
			</div>
		</>
	)
}
