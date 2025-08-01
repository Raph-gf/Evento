import SkeletonCard from "@/components/skeleton-card";

export default function loading() {
  return (
    <div>
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
