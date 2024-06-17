import Button from "@/components/button";
import { Header } from "@/components/header";
import { formartTime } from "@/other/helpers";
import Image from "next/image";

export default function Patient() {
	return (
		<>
			<Header title="Meus Agendamentos" href="/" iconClassName="w-4 h-4" />

			<div className="flex gap-2 border border-gray-200 p-2 mt-8 mb-9 rounded-xl justify-between items-center">
				<button className="w-1/2 rounded-xl py-2 px-4 font-semibold bg-green-600 hover:opacity-85">Proximos</button>
				<button className="w-1/2 rounded-xl py-2 px-4 hover:bg-gray-100">Realizados</button>
			</div>

			<div>
				<h2 className="font-semibold text-lg mb-4">Hoje</h2>
				<div>{ }</div>
				<h2 className="font-semibold text-lg mb-4">Amanhã</h2>
			</div>
		</>
	)
}

type AppointmentProps = {
	id: string;
	firstName: string;
	lastName: string;
	photo: string;
	speciality: string;
	date: string;
	made: string;
}

function Card(appointment: AppointmentProps) {
	return (
		<div className="flex flex-col">
			<div>
				{formartTime(new Date(appointment.date))}
				<span className="border-b border-dashed"></span>
				{formartTime(new Date(appointment.date), true)}
			</div>

			<div className="flex p-4 rounded-lg bg-green-50 w-full items-center relative">
				<span className="absolute -m-4 w-[2px] h-[60px] bg-green-500 rounded-r-lg"></span>
				<div>
					<Image
						src={`/photos/${appointment.photo}`}
						width={48}
						height={48}
						alt={appointment.firstName}
						className="rounded-full"
					/>
				</div>
				<div className="flex flex-col">
					<h2 className="font-semibold text-lg">{appointment.firstName}</h2>
					<p className="text-[#343a40]">{appointment.speciality}</p>
				</div>
			</div>
		</div>
	)
}
