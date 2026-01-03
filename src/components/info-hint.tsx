import type { FC } from "react";

import { cn } from "@/lib/utils";

type TInfoHintProps = {
	text: string;
	className?: string;
};

const InfoHint: FC<TInfoHintProps> = ({ text, className }) => {
	return (
		<span
			className={cn(
				"inline-flex h-5 w-5 items-center justify-center rounded-full border border-border/70 text-[10px] leading-none text-muted-foreground",
				className
			)}
			title={text}
		>
			i
		</span>
	);
};

export default InfoHint;
