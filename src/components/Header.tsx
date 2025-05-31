import { Button } from "@/components/ui/button";
import { Code } from "lucide-react";
import { Switch } from "@/components/ui/switch";

export function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6">
      <div className="font-bold text-xl">OpenAI.fm</div>
      <div className="text-center text-sm text-gray-600 max-w-md">
        An interactive demo for developers to try the new text-to-speech model in the OpenAI API.
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="outline" size="sm" className="flex items-center">
          <Code className="mr-2 h-4 w-4" />
        </Button>
        <Switch />
      </div>
    </header>
  );
}