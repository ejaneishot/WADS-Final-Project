import { cn } from "@/lib/cn";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200", className)}
      {...props}
    />
  );
}
