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
    <div className="space-y-3">
      {days.map((d) => (
        <DayItem
          key={d.id}
          label={d.label}
          locked={d.locked}
          blurred={d.blurred}
          selected={d.id === selectedDay}
          onClick={() => onSelect(d.id)}
        />
      ))}
    </div>
  );
}

