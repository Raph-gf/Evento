import Title from "@/components/Title";

type EventPageProps = {
  params: {
    city: string;
  };
};

export default function CityEventsPage({ params }: EventPageProps) {
  const FirstLetterUpperCase = (city: string) => {
    const cityName = city.slice(0, 1).toUpperCase() + params.city.slice(1);
    return cityName;
  };

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <Title>
        {params.city === "all" && "All Events"}
        {params.city !== "all" && `Events in ${FirstLetterUpperCase(params.city)}`}
      </Title>
    </main>
  );
}
