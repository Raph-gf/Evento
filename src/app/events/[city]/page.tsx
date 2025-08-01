import Title from "@/components/Title";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default async function CityEventsPage({ params }: EventPageProps) {
  const city = params.city;

  const response = await fetch(
    `https://bytegrad.com/course-assests/projects/evento/api/events?city=${city}`
  );
  const events = response.json();
  console.log(events);

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <Title>
        {city === "all"
          ? "All Events"
          : `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
      </Title>
    </main>
  );
}
