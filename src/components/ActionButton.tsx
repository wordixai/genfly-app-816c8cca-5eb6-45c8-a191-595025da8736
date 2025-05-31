import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, Share, Play } from "lucide-react";

interface ActionButtonProps {
  type: "download" | "share" | "play";
  onClick?: () => void;
}

export function ActionButton({ type, onClick }: ActionButtonProps) {
  const getButtonContent = () => {
    switch (type) {
      case "download":
        return (
          <>
            <Download className="mr-2 h-4 w-4" />
            DOWNLOAD
          </>
        );
      case "share":
        return (
          <>
            <Share className="mr-2 h-4 w-4" />
            SHARE
          </>
        );
      case "play":
        return (
          <>
            <Play className="mr-2 h-4 w-4" />
            PLAY
          </>
        );
    }
  };

  const getButtonStyle = () => {
    switch (type) {
      case "download":
        return "bg-gray-600 hover:bg-gray-700 text-white";
      case "share":
        return "bg-gray-800 hover:bg-gray-900 text-white";
      case "play":
        return "bg-orange-500 hover:bg-orange-600 text-white";
    }
  };

  return (
    <Button 
      onClick={onClick}
      className={cn(
        "w-full py-6 font-medium",
        getButtonStyle()
      )}
    >
      {getButtonContent()}
    </Button>
  );
}