import { Bell, Flame, User, Hexagon } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function TopHeader() {
  return (
    <header
      className="sticky top-0 z-20 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ height: 60 }}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Side: Logo and Name */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center rounded-lg bg-primary/10 p-1">
            <Hexagon className="h-6 w-6 text-amber-600 fill-amber-600" />
          </div>
          <span className="hidden text-xl font-bold tracking-tight sm:inline-block">
            Tag<span className="text-amber-600">Mango</span>
          </span>
        </div>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Fire Icon with Count */}
          <div className="flex items-center gap-1.5 rounded-full bg-orange-50 px-3 py-1.5 text-sm font-medium text-orange-600 ring-1 ring-inset ring-orange-500/20 dark:bg-orange-900/20 dark:text-orange-400 dark:ring-orange-500/30">
            <Flame className="h-4 w-4 fill-orange-500 text-orange-500" />
            <span>30</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications */}
            <IconButton label="Notifications">
              <Bell className="h-5 w-5" />
            </IconButton>

            {/* Profile */}
            <IconButton label="Profile">
              <User className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </header>
  );
}
