interface VibeDescriptionProps {
  title: string;
  description: string[];
}

export function VibeDescription({ title, description }: VibeDescriptionProps) {
  return (
    <div className="p-4 bg-white rounded-md shadow-sm border border-gray-200 w-full">
      <h3 className="font-medium text-sm mb-2">{title}</h3>
      {description.map((paragraph, index) => (
        <p key={index} className="text-sm text-gray-700 mb-2">
          {paragraph}
        </p>
      ))}
    </div>
  );
}