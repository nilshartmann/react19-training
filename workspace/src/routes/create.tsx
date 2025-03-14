import { createFileRoute } from "@tanstack/react-router";
import CardEditor from "../components/CardEditor.tsx";

export const Route = createFileRoute("/create")({
  component: CardEditor,
});

// function CardEditor() {
// 	// ....
// }
