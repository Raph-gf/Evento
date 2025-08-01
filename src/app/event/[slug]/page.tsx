import Image from "next/image";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
  const event = await res.json();
  console.log(event);

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden">
        <Image
          className="object-cover blur-3xl "
          src={event.imageUrl}
          alt="Event-Image-background"
          fill
          sizes="(max-width:1280px) 100wv,1280px"
        ></Image>
      </section>
      <div></div>
    </main>
  );
}
