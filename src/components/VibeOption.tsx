import { cn } from "@/lib/utils";

interface VibeOptionProps {
  name: string;
  selected?: boolean;
  onClick?: () => void;
}

export function VibeOption({ name, selected = false, onClick }: VibeOptionProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-start justify-between p-4 bg-white rounded-md shadow-sm cursor-pointer border border-gray-200 w-full h-[60px]",
        selected && "border-orange-500"
      )}
      onClick={onClick}
    >
      <div className="font-medium text-sm">{name}</div>
      <div className="flex items-center justify-start w-full">
        <div className={cn("w-2 h-2 rounded-full", selected ? "bg-orange-500" : "bg-gray-200")}></div>
      </div>
    </div>
  );
}