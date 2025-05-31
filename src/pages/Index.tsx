import { useState } from "react";
import { Header } from "@/components/Header";
import { VoiceOption } from "@/components/VoiceOption";
import { VibeOption } from "@/components/VibeOption";
import { ScriptTextarea } from "@/components/ScriptTextarea";
import { VibeDescription } from "@/components/VibeDescription";
import { ActionButton } from "@/components/ActionButton";
import { ShuffleButton } from "@/components/ShuffleButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [selectedVoice, setSelectedVoice] = useState("Coral");
  const [selectedVibe, setSelectedVibe] = useState("Medieval Knight");
  const [script, setScript] = useState(
    "Ah, noble traveler! Heed my words, and I shall lead thee to the fabled Holeful Bakery!\n\nStep forth upon West 74th Street, marching straight with purpose. When thou dost reach the great crossing at Columbus Avenue, turn left, as if answering the call to adventure!\n\nContinue southward, past bustling merchants and townfolk, until thou dost arrive at Amsterdam Avenue. Here, turn right, for the scent of warm-baked glory draws near!\n\nLo! Just ahead, the crest of Levain Bakery stands proud. Enter, noble traveler, and claim thy rightful reward–a golden, gooey treasure beyond measure!\n\nGo forth, and may thy quest be delicious and true!"
  );

  const voices = [
    { name: "Alloy", hasCheckmark: false },
    { name: "Ash", hasCheckmark: true },
    { name: "Ballad", hasCheckmark: true },
    { name: "Coral", hasCheckmark: true },
    { name: "Echo", hasCheckmark: false },
    { name: "Fable", hasCheckmark: false },
    { name: "Onyx", hasCheckmark: false },
    { name: "Nova", hasCheckmark: false },
    { name: "Sage", hasCheckmark: true },
    { name: "Shimmer", hasCheckmark: false },
    { name: "Verse", hasCheckmark: true },
  ];

  const vibes = [
    { name: "Medieval Knight" },
    { name: "Sympathetic" },
    { name: "Bedtime Story" },
    { name: "Robot" },
    { name: "Calm" },
  ];

  const vibeDescription = {
    title: "Affect: Deep, commanding, and slightly dramatic, with an archaic and reverent quality that reflects the grandeur of Olde English storytelling.",
    description: [
      "Tone: Noble, heroic, and formal, capturing the essence of medieval knights and epic quests, while reflecting the antiquated charm of Olde English.",
      "Emotion: Excitement, anticipation, and a sense of mystery, combined with the seriousness of fate and duty."
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-6 py-8 max-w-6xl">
        <Button variant="outline" className="mb-8 flex items-center">
          START BUILDING <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-500 mb-4">VOICE</h2>
          <div className="grid grid-cols-11 gap-4">
            {voices.map((voice) => (
              <VoiceOption 
                key={voice.name}
                name={voice.name}
                selected={selectedVoice === voice.name}
                hasCheckmark={voice.hasCheckmark}
                onClick={() => setSelectedVoice(voice.name)}
              />
            ))}
            <ShuffleButton onClick={() => {
              const randomVoice = voices[Math.floor(Math.random() * voices.length)].name;
              setSelectedVoice(randomVoice);
            }} />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4">VIBE</h2>
            <div className="grid grid-cols-2 gap-4">
              {vibes.map((vibe) => (
                <VibeOption 
                  key={vibe.name}
                  name={vibe.name}
                  selected={selectedVibe === vibe.name}
                  onClick={() => setSelectedVibe(vibe.name)}
                />
              ))}
              <div className="flex items-center justify-center bg-gray-200 rounded-md h-[60px]">
                <div className="animate-spin">
                  <RefreshCw className="h-6 w-6 text-gray-400" />
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <VibeDescription 
                title={vibeDescription.title}
                description={vibeDescription.description}
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-sm font-medium text-gray-500 mb-4">SCRIPT</h2>
            <ScriptTextarea 
              value={script}
              onChange={setScript}
            />
          </div>
        </div>
      </main>
      
      <footer className="py-4 px-6">
        <div className="container mx-auto max-w-6xl grid grid-cols-3 gap-4">
          <ActionButton type="download" />
          <ActionButton type="share" />
          <ActionButton type="play" />
        </div>
      </footer>
    </div>
  );
};

export default Index;

// Missing RefreshCw import
import { RefreshCw } from "lucide-react";