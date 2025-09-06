import { FinancialAnalystSidebar } from "@/components/financial-analyst-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<SidebarProvider>
			<div className="text-center">
				<FinancialAnalystSidebar />
			</div>
		</SidebarProvider>
	);
}
