import EventsList from "@/components/events-list";
import { Suspense } from "react";
import LoadingCityEvents from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

import z from "zod";
import H1Title from "@/components/title";

type EventPageProps = {
  params: Promise<{ city: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { city } = await params;

  return {
    title: city === "all" ? "All Events " : `Event in ${capitalize(city)}`,
    description: "Browse more than 10,000 events worldwide",
  };
}
const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function CityEventsPage({ params, searchParams }: EventPageProps) {
  const { city } = await params;
  const responsePage = await searchParams;
  const page = Number(responsePage?.page) || 1;

  const parsedPage = pageNumberSchema.safeParse(page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh] ">
      <H1Title className="mb-28">
        {city === "all" ? "All Events" : `Events in ${capitalize(city)}`}
      </H1Title>

      <Suspense key={city + parsedPage.data} fallback={<LoadingCityEvents />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
