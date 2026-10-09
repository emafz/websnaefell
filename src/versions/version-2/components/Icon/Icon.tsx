import { ArrowRightLeft, BatteryCharging, BookOpen, Building2, Check, CircleDot, Gauge, Leaf, Mountain, Route, Settings, ShieldCheck, Smartphone, Truck, Weight, Wrench, Zap, type LucideIcon } from "lucide-react";

export type IconName = "bolt" | "route" | "gauge" | "leaf" | "battery" | "shield" | "wrench" | "settings" | "book" | "compare" | "city" | "mountain" | "portable" | "check" | "speed" | "weight" | "tire" | "load";

const iconMap: Record<IconName, LucideIcon> = {
  bolt: Zap,
  route: Route,
  gauge: Gauge,
  leaf: Leaf,
  battery: BatteryCharging,
  shield: ShieldCheck,
  wrench: Wrench,
  settings: Settings,
  book: BookOpen,
  compare: ArrowRightLeft,
  city: Building2,
  mountain: Mountain,
  portable: Smartphone,
  check: Check,
  speed: Gauge,
  weight: Weight,
  tire: CircleDot,
  load: Truck,
};

export default function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const IconComponent = iconMap[name];
  return <IconComponent className={className} aria-hidden="true" />;
}