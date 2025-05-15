import "./App.css";
import { FaRegCopy } from "react-icons/fa";

function App() {
	const handlePaste = () => {
		navigator.clipboard.writeText("@mmygz");
	};
	return (
		<main className="bg-[url(bg.jpg)] bg-cover h-screen w-screen flex justify-center items-center text-white select-none ">
			<div className="py-12  px-12 border-1 border-border flex gap-18 rounded-lg bg-[#09090a94] backdrop-blur-lg shadow-2xl shadow-[black]">
				<img
					src="https://cdn.discordapp.com/avatars/433364426586980373/4a4dc59b79d57c69bad9b35e8cd1f1f7.png?size=1024"
					className="rounded-full w-48"
					alt=""
				/>
				<div className=" flex flex-col gap-4">
					<div className="flex items-end gap-1">
						<h2 className="font-bold text-4xl">mmygz</h2>
						<div
							onClick={handlePaste}
							className="text-disabled-text flex items-center cursor-pointer transition duration-100  gap-1 hover:underline underline-offset-3 active:text-[#b3b3b3bb]"
						>
							<span>@mmygz</span>
							<FaRegCopy />
						</div>
					</div>
					<p className="font-light text-[#c7c7c7]">
						fullstack dev
						<br />
						<br />
						PT-BR/ENG/FRA
					</p>
				</div>
			</div>
		</main>
	);
}

export default App;
