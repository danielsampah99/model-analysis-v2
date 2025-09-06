import { linkOptions } from "@tanstack/react-router";
// import { useParams } from "@tanstack/react-router";
import { SearchIcon, Settings2Icon, SquarePlayIcon } from "lucide-react";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";

const financialAnalystRoutes = linkOptions([
	{
		to: "/",
		label: "Search",
		icon: SearchIcon,
	},
	{
		to: "/params",
		label: "Parameters",
		icon: Settings2Icon,
	},
	{
		to: "/run-data",
		label: "Run Data",
		icon: SquarePlayIcon,
	},
]);

export const FinancialAnalystSidebar = () => {
	// const _path = useParams({ strict: false });

	return (
		<Sidebar
			collapsible="none"
			className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r pt-18"
		>
			<SidebarContent className="pt-2">
				<SidebarMenu>
					{financialAnalystRoutes.map((option) => (
						<SidebarMenuItem
							key={option.to}
							className="px-2"
						>
							<SidebarMenuButton tooltip={{ children: option.label, hidden: false }}>
								<option.icon className="size-6" />
								<span className="sr-only">{option.label}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarContent>
		</Sidebar>
	);
};
