import type { FC } from "react";

import InfoHint from "@/components/info-hint";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TFieldHeaderProps = {
	id: string;
	label: string;
	hint: string;
	actionLabel?: string;
	onAction?: () => void;
	isRtl: boolean;
};

const FieldHeader: FC<TFieldHeaderProps> = ({ id, label, hint, actionLabel, onAction, isRtl }) => {
	return (
		<div
			className={cn(
				"flex w-full items-center gap-2",
				isRtl ? "flex-row-reverse justify-between" : "justify-between"
			)}
		>
			<label
				className={cn(
					"flex items-center gap-2 text-sm text-muted-foreground",
					isRtl ? "flex-row-reverse justify-end text-right" : "justify-start text-left"
				)}
				htmlFor={id}
			>
				<span>{label}</span>
				<InfoHint text={hint} />
			</label>
			{actionLabel && onAction ? (
				<Button
					type="button"
					variant="ghost"
					size="sm"
					className="h-7 px-2 text-xs"
					onClick={onAction}
				>
					{actionLabel}
				</Button>
			) : null}
		</div>
	);
};

export default FieldHeader;
