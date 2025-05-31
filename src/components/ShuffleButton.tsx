import { RefreshCw } from "lucide-react";

interface ShuffleButtonProps {
  onClick?: () => void;
}

export function ShuffleButton({ onClick }: ShuffleButtonProps) {
  return (
    <div 
      className="flex items-center justify-center bg-gray-300 rounded-md shadow-sm cursor-pointer w-[80px] h-[80px]"
      onClick={onClick}
    >
      <RefreshCw className="h-6 w-6 text-white" />
    </div>
  );
}