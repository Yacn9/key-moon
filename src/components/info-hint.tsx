import type { FC } from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type TInfoHintProps = {
	text: string;
	className?: string;
};

const InfoHint: FC<TInfoHintProps> = ({ text, className }) => {
	return (
		<TooltipProvider delayDuration={150}>
			<Tooltip>
				<TooltipTrigger asChild>
					<button
						type="button"
						aria-label={text}
						className={cn(
							"inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/70 text-[10px] leading-none text-muted-foreground",
							className
						)}
					>
						i
					</button>
				</TooltipTrigger>
				<TooltipContent side="top" align="center">
					{text}
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default InfoHint;
