import EventsList from "@/components/events-list";
import Title from "@/components/title";
import { EventItem } from "@/lib/types";

type EventPageProps = {
  params: Promise<{ city: string }>;
};

export default async function CityEventsPage({ params }: EventPageProps) {
  const { city } = await params;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  );
  const events: EventItem[] = await response.json();

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <Title className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </Title>
      <EventsList events={events} />
    </main>
  );
}
