import { cn } from "@/lib/utils";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function H1Title({ children, className }: TitleProps) {
  return (
    <h1 className={cn("text-3xl lg:text-6xl font-bold tracking-tight", className)}>{children}</h1>
  );
}
