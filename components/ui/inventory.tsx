interface InventoryProps extends React.ComponentProps<"p"> {
  tip: string;
}
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
export default function InventoryComp({
  className = "",
  children,
  tip,
  ...props
}: InventoryProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <p
          className={` ${className} p-5 flex items-center text-center justify-center bg-mutedcard border-2 border-border`}
          {...props}
        >
          {children}
        </p>
      </TooltipTrigger>

      <TooltipContent
        side="bottom"
        className="bg-text font-jersey text-lg [&_svg]:bg-text [&_svg]:invisible"
      >
        <p>{tip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
