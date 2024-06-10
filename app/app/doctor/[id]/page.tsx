import { Header } from "@/components/header";
import { Icon } from "@/components/icon";
import { formartTime } from "@/other/helpers";
import Image from "next/image";

export default function Doctor({
	params,
}: Readonly<{ params: { id: string } }>) {
	const doctor = {
		firstName: "Vinicius",
		lastName: "Sousa",
		speciality: "Oftamologista",
		state: "PA",
		city: "Belém",
		photo: "/photos/photo-4.jpg",
		bio: "Médico formado pela FMU com especialidade em Oftalmologista",
		price: 100,
		attendances: 50,
		experience: "10 anos",
		availability: "Quarta à Sexta - 10:00 - 12:00",
		address: "Av. Roberto Camelier 1517",
		agenda: [
			{
				id: "1",
				date: "2024-06-15T12:00:00.000Z",
				availability: true
			},
			{
				id: "2",
				date: "2024-06-15T13:00:00.000Z",
				availability: true
			},
			{
				id: "3",
				date: "2024-06-15T14:00:00.000Z",
				availability: false
			},
			{
				id: "4",
				date: "2024-06-15T16:00:00.000Z",
				availability: true
			},
			{
				id: "5",
				date: "2024-06-15T12:00:00.000Z",
				availability: false
			},
		]
	}

	return (
		<>
			<Header href="/" title="Agenda" iconClassName="w-4 h-4" />
			<div className="flex flex-col gap-5 mt-5">
				<div className="bg-green-600 p-4 rounded-xl text-white flex gap-4">
					<Image
						src={doctor.photo}
						alt={doctor.firstName}
						width={76}
						height={76}
						className="rounded-xl"
					/>
					<div>
						<h1>Dr. {doctor.firstName} {doctor.lastName}</h1>
						<p>{doctor.speciality}</p>
						<p><Icon name="map" className="w-4 h-4 text-white">
							{doctor.city},
							{doctor.state}
						</Icon></p>
					</div>
				</div>

				<p className="p-3 border border-gray-100">
					{doctor.bio}
				</p>

				<div className="border-b border-b-gray-100 flex justify-between py-1">
					<div className="w-1/2">
						<h2 className="text-[#9F9F9F]">Valor Consulta:</h2>
						<p>R$ {doctor.price}</p>
					</div>

					<div className="w-1/2">
						<h2 className="text-[#9F9F9F]">Atendimentos</h2>
						<p>{doctor.attendances}</p>
					</div>
				</div>

				<div className="border-b border-b-gray-100 flex justify-between py-1">
					<div className="w-1/2">
						<h2 className="text-[#9F9F9F]">Formação</h2>
						<p>Medicina</p>
					</div>

					<div className="w-1/2">
						<h2 className="text-[#9F9F9F]">Experiência</h2>
						<p>{doctor.experience}</p>
					</div>
				</div>

				<div className="border-b border-b-gray-100  py-1">
					<h2 className="text-[#9F9F9F]">Disponibilidade</h2>
					<p>{doctor.availability}</p>
				</div>

				<div className="border-b border-b-gray-100n py-1">
					<h2 className="text-[#9F9F9F]">Localidade</h2>
					<p>{doctor.address}, {doctor.city}</p>
				</div>


				<h2 className="border border-gray-100 text-center p-3">Horários disponíveis</h2>
				<div className="px-2 flex flex-col gap-5">
					<div className="flex">
						<div className="w-[90px] h-[36px] flex items-center font-semibold">Hoje</div>
						<Agenda agenda={doctor.agenda} />
					</div>

					<div className="flex">
						<div className="w-[90px] h-[36px] flex items-center font-semibold">Amanhã</div>
						<Agenda agenda={doctor.agenda} />
					</div>
				</div>
			</div>
		</>
	)
}

type AgendaProps = {
	id: string,
	date: string,
	availability: boolean
}

function Agenda({ agenda }: { agenda: AgendaProps[] }) {
	return (
		<div className="grid grid-cols-3 gap-4 w-full">
			{agenda.map(item => <AgendaButton key={item.id} {...item} />)}
		</div>
	)
}

function AgendaButton({ date, availability }: AgendaProps) {
	if (!availability) return null
	return (
		<button className={`text-sm text-green-700 w-full h-12 rounded-lg py-2 px-3 ${availability ? "bg-green-100 hover:bg-green-200" : "bg-gray-200"}`}>
			{formartTime(new Date(date))}
		</button>
	)
}
