"use client";

import type { Day } from "@/data/mock";
import { DayItem } from "./DayItem";

export function DayList({
  days,
  selectedDay,
  onSelect,
}: {
  days: Day[];
  selectedDay: number;
  onSelect: (id: number) => void;
}) {
  return (
    <div className="space-y-4">
      {days.map((d) => (
        <DayItem
          key={d.id}
          label={d.label}
          locked={d.locked}
          selected={d.id === selectedDay}
          onClick={() => onSelect(d.id)}
        />
      ))}
    </div>
  );
}
