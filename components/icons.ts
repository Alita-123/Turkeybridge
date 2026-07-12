import {
  Briefcase,
  Plane,
  Ship,
  Calculator,
  GraduationCap,
  Building2,
  Bot,
  Code2,
  Monitor,
  TrendingUp,
  Camera,
  Clapperboard,
  Share2,
  Languages,
  ShieldCheck,
  Clock,
  Scale,
  Landmark,
  Factory,
  Headset,
  BadgeCheck,
  UserCheck,
  Target,
  type LucideIcon,
} from "lucide-react";

/** Shared icon maps keyed by dictionary `key` — keeps dictionaries serializable. */

export const serviceIcons: Record<string, LucideIcon> = {
  business: Briefcase,
  residency: Plane,
  finance: Calculator,
  student: GraduationCap,
  company: Building2,
  trade: Ship,
};

export const courseIcons: Record<string, LucideIcon> = {
  ai: Bot,
  software: Code2,
  web: Monitor,
  marketing: TrendingUp,
  videography: Camera,
  editing: Clapperboard,
  social: Share2,
  turkish: Languages,
};

export const trustIcons: Record<string, LucideIcon> = {
  certified: ShieldCheck,
  support: Clock,
  legal: Scale,
  multilingual: Languages,
};

export const vipIcons: Record<string, LucideIcon> = {
  lawyers: Scale,
  finance: Landmark,
  industry: Factory,
  vip: Headset,
};

export const academyIcons: Record<string, LucideIcon> = {
  certificate: BadgeCheck,
  instructor: UserCheck,
  practical: Target,
};
