type TitleProps = {
  children: React.ReactNode;
};

export default function H1Title({ children }: TitleProps) {
  return <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">{children}</h1>;
}
