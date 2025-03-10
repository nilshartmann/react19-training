import { createFileRoute } from "@tanstack/react-router";

import App from "../components/App.tsx";

export const Route = createFileRoute("/")({
  component: IndexRouteComponent,
});

function IndexRouteComponent() {
  return <App />;
}
