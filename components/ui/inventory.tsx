import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface InventoryProps extends React.ComponentProps<"p"> {
  tip: string;
}
export default function InvSection({
  className = "",
  tip,
  children,
  ...props
}: InventoryProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <p
          className="p-5 flex items-center text-center justify-center bg-mutedcard border-2 border-border"
          {...props}
        >
          {children}
        </p>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-text [&_svg]:invisible rounded-none shadow-box text-lg font-jersey"
      >
        {tip}
      </TooltipContent>
    </Tooltip>
  );
}
