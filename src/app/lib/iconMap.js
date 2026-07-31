import { Target, Eye, HeartHandshake, ShieldCheck, Lightbulb, Users, Globe2, Award } from "lucide-react";

export const iconMap = {
  target: Target,
  eye: Eye,
  heart: HeartHandshake,
  shield: ShieldCheck,
  bulb: Lightbulb,
  users: Users,
  globe: Globe2,
  award: Award,
};

export function getIcon(key) {
  return iconMap[key] || Target;
}