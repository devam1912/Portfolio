import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button.jsx";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="space-y-4">
      <div className="rounded-3xl glass p-8">
        <p className="text-sm opacity-80">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm opacity-90">
          That route doesn’t exist. Use the buttons below to get back on the pitch.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => navigate("/")}>Go Home</Button>
          <Button variant="ghost" onClick={() => navigate("/projects")}>
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
