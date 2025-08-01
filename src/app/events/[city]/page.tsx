import EventsList from "@/components/events-list";
import Title from "@/components/title";
import { Suspense } from "react";
import LoadingCityEvents from "./loading";
import { capitalize } from "@/lib/utils";

type EventPageProps = {
  params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: EventPageProps) {
  const { city } = await params;
  return {
    title: `Event in ${city}`,
    description: "Browse more than 10,000 events worldwide",
  };
}

export default async function CityEventsPage({ params }: EventPageProps) {
  const { city } = await params;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <Title className="mb-28">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </Title>

      <Suspense fallback={<LoadingCityEvents />}>
        <EventsList city={city} />
      </Suspense>
    </main>
  );
}
