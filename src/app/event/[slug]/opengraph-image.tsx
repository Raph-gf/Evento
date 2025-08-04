import { ImageResponse } from "next/og";

export const alt = "Evento";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>{params.slug}</h1>
        <p>Evento - Browse events around you</p>
      </div>
    ),
    {
      ...size,
    }
  );
}
