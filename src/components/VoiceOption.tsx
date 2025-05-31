import { cn } from "@/lib/utils";

interface VoiceOptionProps {
  name: string;
  selected?: boolean;
  hasCheckmark?: boolean;
  onClick?: () => void;
}

export function VoiceOption({ name, selected = false, hasCheckmark = false, onClick }: VoiceOptionProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-between p-4 bg-white rounded-md shadow-sm cursor-pointer border border-gray-200 w-[80px] h-[80px]",
        selected && "border-orange-500"
      )}
      onClick={onClick}
    >
      <div className="font-medium text-sm">{name}</div>
      <div className="flex items-center justify-between w-full">
        <div className={cn("w-2 h-2 rounded-full", selected ? "bg-orange-500" : "bg-gray-200")}></div>
        {hasCheckmark && (
          <div className="text-gray-400">✓</div>
        )}
      </div>
    </div>
  );
}