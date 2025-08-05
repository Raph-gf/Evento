import { getEvent } from "@/lib/server-utils";
import { ImageResponse } from "next/og";

export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const event = await getEvent(params.slug);
  console.log(event);
  return new ImageResponse(
    (
      <div>
        <img
          src={event.imageUrl}
          alt="Event background"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(20px)",
            opacity: 0.6,
            zIndex: 0,
          }}
        />
        <h1>{params.slug}</h1>
        <p>Evento - Browse events around you</p>
      </div>
    ),
    {
      ...size,
    }
  );
}
