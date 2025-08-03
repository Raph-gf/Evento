import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import prisma from "./db";
import { notFound } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function getEvents(city: string, page = 1) {
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
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
}
