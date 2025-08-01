type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;

  const res = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
  const data = await res.json();
  console.log(data);

  return <main>Singular Event</main>;
}
