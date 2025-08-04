import "server-only";
import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import prisma from "./db";
import { capitalize } from "./utils";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const where = city === "all" ? undefined : { city: capitalize(city) };
  const pageNumber = Number(page) || 1;
  const skip = (pageNumber - 1) * 6;

  const events = await prisma.eventoEvent.findMany({
    where,
    orderBy: {
      date: "asc",
    },
    skip,
    take: 6,
  });

  const totalCount = await prisma.eventoEvent.count({
    where,
  });
  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
