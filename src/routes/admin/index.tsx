import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div className="bg-red-600 mt-30">Hello "/admin/"!</div>;
}
