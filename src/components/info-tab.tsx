import type { FC } from "react";

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
							"text-sm font-medium text-foreground",
							isRtl ? "text-right" : "text-left"
						)}
					>
						{copy.info.donateTitle}
					</p>
					<p className="mt-2 text-sm text-muted-foreground">{copy.info.donateIntro}</p>
					<div className="mt-4 grid gap-2 text-sm">
						{copy.info.donateLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noreferrer"
								className="text-foreground hover:text-muted-foreground transition-colors"
							>
								{link.label}: {link.href}
							</a>
						))}
					</div>
					<div className="mt-4 grid gap-2 text-xs text-muted-foreground">
						{copy.info.donateWallets.map((wallet) => (
							<span key={wallet.value}>
								{wallet.label}: {wallet.value}
							</span>
						))}
					</div>
				</div>
			</div>
		</TabsContent>
	);
};

export default InfoTab;
