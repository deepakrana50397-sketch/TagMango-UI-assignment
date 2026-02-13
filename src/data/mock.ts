export type Day = {
  id: number;
  label: string;
  locked?: boolean;
  blurred?: boolean;
};

export const days: Day[] = [
  { id: 1, label: "Day - 1" },
  { id: 2, label: "Day - 2" },
  { id: 3, label: "Day - 3", blurred: true },
  { id: 4, label: "Day - 4", blurred: true },
  { id: 5, label: "Day - 5", locked: true },
  { id: 6, label: "Day - 6", locked: true },
  { id: 7, label: "Day - 7", locked: true },
  { id: 8, label: "Day - 8", locked: true },
  { id: 9, label: "Day - 9", locked: true },
];

export const feed = {
  user: "Ashraf Idrishi",
  time: "1s",
  text: "Today’s challenge workout completed—feeling stronger already",
  comments: 10,
  reactions: 18,
};

export const pinned = {
  author: "Russell Brunson",
  time: "3 hrs ago",
  body:
    "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time.",
  list: ["Minimum 20 minutes of sit-up", "Mention Intensity", "Upload Media (Optional)"],
};
