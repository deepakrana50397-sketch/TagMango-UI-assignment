"use client";

import { useState } from "react";
import { TopHeader } from "@/components/layout/TopHeader";
import { PageShell } from "@/components/layout/PageShell";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { DayList } from "@/components/sidebar/DayList";
import { FeedPostCard } from "@/components/cards/FeedPostCard";
import { SubscriberCard } from "@/components/cards/SubscriberCard";
import { days } from "@/data/mock";

export default function Page() {
  const [selectedDay, setSelectedDay] = useState(1);

  return (
    <div className="min-h-screen">
      <TopHeader />

      <PageShell
        sidebar={
          <Sidebar>
            <DayList days={days} selectedDay={selectedDay} onSelect={setSelectedDay} />
          </Sidebar>
        }
      >
        <FeedPostCard />
        <SubscriberCard />
      </PageShell>
    </div>
  );
}
