import { TanstackDevtools } from "@tanstack/react-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { NavBar } from "@/components/navbar";

export const Route = createRootRoute({
	component: () => (
		<>
			<NavBar />
			<Outlet />
			<TanstackDevtools
				config={{
					position: "bottom-left",
				}}
				plugins={[
					{
						name: "Router",
						render: <TanStackRouterDevtoolsPanel />,
					},
				]}
			/>
		</>
	),
});
