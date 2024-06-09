import Button from "@/components/button";
import { Field } from "@/components/form";
import { Header } from "@/components/header";
import Link from "next/link";

export default function SignIn() {
	return (
		<>
			<Header href="/" title="Login" iconClassName="w-4 h-4" />

			<div className="py-5">
				<h1 className="font-bold text-xl">Acesse sua conta</h1>
				<p>Olá, informe seus dados para acessar</p>
			</div>

			<div className="flex flex-col gap-4">
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
				<Button className="my-4">Login</Button>
			</div>
			<div className="flex flex-col justify-center items-center">
				<div className="relative w-full h-6 flex items-center justify-center">
					<span className="absolute z-10 bg-white px-2 m-auto">ou</span>
					<div className="border-b w-full absolute text-sm"></div>
				</div>
				<p>
					Não está cadastrado?
					<Link href="/signup" className="text-green-600 font-semibold+-"> Crie sua conta</Link>
				</p>
			</div>
		</>
	)
}
