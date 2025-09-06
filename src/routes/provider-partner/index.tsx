import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/provider-partner/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="mt-30">Hello "/provider-partner/"!</div>;
}
