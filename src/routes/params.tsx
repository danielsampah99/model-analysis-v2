import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/params")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/params"!</div>;
}
