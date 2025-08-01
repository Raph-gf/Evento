import Skeleton from "@/components/skeleton";

export default function loading() {
  return (
    <div className="flex flex-col items-center gap-y-4 pt-28">
      <Skeleton className="" />
      <Skeleton className="" />
      <Skeleton className="" />
    </div>
  );
}
