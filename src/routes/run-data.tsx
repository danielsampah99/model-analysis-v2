import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/run-data")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/run-data"!</div>;
}
