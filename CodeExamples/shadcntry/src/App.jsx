import { Button } from "@/components/ui/button";
import { Calendar } from "./components/ui/calendar";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>Click me</Button>
      <Calendar mode="single" className="rounded-md border shadow-md p-3" />
    </div>
  );
}

export default App;
