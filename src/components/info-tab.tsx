import type { FC } from "react";

import InfoHint from "@/components/info-hint";
import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";
import type { TAppCopy } from "@/i18n/content";
import { cn } from "@/lib/utils";

type TInfoTabProps = {
	copy: TAppCopy;
	isRtl: boolean;
};

const InfoTab: FC<TInfoTabProps> = ({ copy, isRtl }) => {
	return (
		<TabsContent value="info">
			<div
				className={cn(
					"space-y-5 text-sm text-muted-foreground leading-7",
					isRtl ? "text-right" : "text-left"
				)}
			>
				<p>{copy.info.description}</p>
				<div className="rounded-lg border border-border/60 bg-muted/30 p-4">
					<p
						className={cn(
							"text-sm font-medium text-foreground flex items-center gap-2",
							isRtl ? "flex-row-reverse justify-start text-right" : "justify-start text-left"
						)}
					>
						<span>{copy.info.supportTitle}</span>
						<InfoHint text={copy.info.supportHint} />
					</p>
					<p className="mt-2 text-sm text-muted-foreground">{copy.info.supportText}</p>
					<div className="mt-3 grid gap-2 text-xs text-muted-foreground">
						<span>
							{copy.info.supportIdLabel}: {copy.info.supportIdValue}
						</span>
						<span>
							{copy.info.supportNoteLabel}: {copy.info.supportNoteValue}
						</span>
					</div>
				</div>
				<Button
					variant="secondary"
					className={cn(
						"w-full flex items-center gap-2",
						isRtl ? "flex-row-reverse justify-start text-right" : "justify-start text-left"
					)}
				>
					<span>{copy.info.buttonLabel}</span>
					<InfoHint text={copy.info.buttonHint} className="h-4 w-4 text-[9px]" />
				</Button>
			</div>
		</TabsContent>
	);
};

export default InfoTab;
