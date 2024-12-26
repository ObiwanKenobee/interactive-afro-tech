import { Brain, Heart, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const characters = [
  {
    name: "Maria Kim",
    role: "Healthcare Guide",
    description: "Your personal health and wellness advisor",
    icon: Heart,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Charlie Pele",
    role: "Tech Mentor",
    description: "Guiding you through digital innovation",
    icon: Brain,
    gradient: "from-primary to-purple-600",
  },
  {
    name: "Malkia",
    role: "Youth Advocate",
    description: "Empowering the next generation",
    icon: Shield,
    gradient: "from-secondary to-yellow-500",
  },
];

export const Characters = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meet Our AI Characters
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character) => (
            <Card
              key={character.name}
              className="p-6 hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${character.gradient} p-3 mb-4`}>
                <character.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{character.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{character.role}</p>
              <p className="text-foreground/80">{character.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};