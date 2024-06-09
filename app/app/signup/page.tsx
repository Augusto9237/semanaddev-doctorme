import Button from "@/components/button";
import { Field } from "@/components/form";
import { Header } from "@/components/header";
import Link from "next/link";

export default function SignUp() {
	return (
		<>
			<Header href="/" title="Criar conta" iconClassName="w-4 h-4" />

			<div className="py-5">
				<h1 className="font-bold text-xl">Crie sua conta</h1>
				<p>Olá, informe seus dados para acessar</p>
			</div>

			<div className="flex flex-col gap-4">
				<Field
					labelProps={{
						children: "Nome",
					}}
					inputProps={{
						placeholder: "Informe seu nome",
						type: "text",
						id: 'name',
						defaultValue: '',
						autoFocus: true
					}}
				/>

				<Field
					labelProps={{
						children: "Telefone",
					}}
					inputProps={{
						placeholder: "Informe seu numero de telefone",
						type: "text",
						id: 'login',
						defaultValue: '',
						autoFocus: true
					}}
				/>

				<Field
					labelProps={{
						children: "Senha",
					}}
					inputProps={{
						placeholder: "Informe sua senha",
						type: "password",
						id: 'passord',
						defaultValue: '',
						autoFocus: true
					}}
				/>
				<Button className="my-4">Criar a conta</Button>
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="relative w-full h-6 flex items-center justify-center">
					<span className="absolute z-10 bg-white px-2 m-auto">ou</span>
					<div className="border-b w-full absolute text-sm"></div>
				</div>
				<p>
					Já está cadastrado?
					<Link href="/sign-in" className="text-green-600 font-semibold+-"> Acesse sua conta</Link>
				</p>
			</div>
		</>
	)
}
