import { createRootRoute, Outlet } from "@tanstack/react-router";
import * as React from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <main className={"container mx-auto"}>
      <Outlet />
    </main>
  );
}
