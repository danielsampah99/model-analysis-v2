import { Link, linkOptions } from "@tanstack/react-router";
import { BellIcon, ShieldUserIcon, UserRoundCogIcon, UserRoundPenIcon } from "lucide-react";
import logo from "../logo.svg";

const navigationOptions = linkOptions([
	{ to: "/", label: "Financial Analyst", icon: ShieldUserIcon },
	{ to: "/provider-partner", label: "Provider Partner", icon: UserRoundPenIcon },
	{ to: "/admin", label: "Administrator", icon: UserRoundCogIcon },
]);

export const NavBar = () => {
	return (
		<div
			id="nav-bar"
			className="bg-white shadow-sm fixed top-0 w-full backdrop-blur-lg"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex">
						<div className="flex shrink-0 items-center">
							<img
								alt="Application Logo"
								src={logo}
								className="h-8 w-auto hover:animate-[spin_10s_linear_infinite]"
							/>
						</div>
						<div className="font-serif text-sm lg:text-lg sm:ml-6 flex sm:space-x-8">
							{/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
							{navigationOptions.map((option) => (
								<Link
									{...option}
									key={option.to}
									activeProps={{ className: "border-indigo-600 font-bold text-gray-900" }}
									className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 px-1 pt-1 inline-flex gap-x-1 items-center border-b-2"
								>
									<option.icon className="size-5 stroke-teal-700 fill-white " />
									{option.label}
								</Link>
							))}
						</div>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<button
							type="button"
							className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
						>
							<span className="absolute -inset-1.5" />
							<span className="sr-only">View notifications</span>
							<BellIcon
								aria-hidden="true"
								className="size-6"
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
