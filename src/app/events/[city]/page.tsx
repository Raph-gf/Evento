import EventsList from "@/components/events-list";
import Title from "@/components/title";
import { Suspense } from "react";
import LoadingCityEvents from "./loading";

type EventPageProps = {
  params: Promise<{ city: string }>;
};

export default async function CityEventsPage({ params }: EventPageProps) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <Title className="mb-28">
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </Title>

      <Suspense fallback={<LoadingCityEvents />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
