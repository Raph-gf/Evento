import Title from "@/components/title";
import Image from "next/image";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await res.json();

  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          className="object-cover z-0 blur-3xl "
          src={event.imageUrl}
          alt="Event Image background"
          fill
          quality={50}
          sizes="(max-width:1280px) 100wv, 1280px"
          priority
        />

        <div className="z-1 relative flex flex-col gap-6 lg:gap-16 lg:flex-row ">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />

          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>

            <Title className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </Title>

            <p className="whitespace-nowrap text-xl text-white/75">
              {" "}
              Organized by <span className="italic">{event.organizerName}</span>
            </p>

            <button className="bg-white/20 text-lg capitalize mt-5 lg:mt-auto w-full  py-2 rounded-md border-white/10 border-2 state-effects">
              Get ticket
            </button>
          </div>
        </div>
      </section>

      <div className=" min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>

        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

type SectionProps = {
  children: React.ReactNode;
};

function Section({ children }: SectionProps) {
  return <section className="mb-12">{children}</section>;
}

function SectionHeading({ children }: SectionProps) {
  return <h2 className="text-2xl">{children}</h2>;
}

function SectionContent({ children }: SectionProps) {
  return <p className=" max-w-4xl mx-auto text-lg leading-8 text-white/75">{children}</p>;
}
