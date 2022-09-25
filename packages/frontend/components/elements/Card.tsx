export interface CardProps {
  children?: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  const cardCls = `relative rounded-2xl bg-white shadow-lg border border-zinc-300/50 p-6`;

  return <div className={cardCls}>{children}</div>;
};
