import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ScriptTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export function ScriptTextarea({ value, onChange }: ScriptTextareaProps) {
  const [charCount, setCharCount] = useState(value.length);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    setCharCount(newValue.length);
  };

  return (
    <div className="relative w-full">
      <Textarea 
        value={value}
        onChange={handleChange}
        placeholder="Enter your script here..."
        className="min-h-[200px] resize-none p-4 text-sm"
      />
      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
        {charCount}
      </div>
    </div>
  );
}