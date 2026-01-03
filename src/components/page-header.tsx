import type { FC } from "react";

import InfoHint from "@/components/info-hint";
import { Button } from "@/components/ui/button";
import type { TAppCopy, TLanguage } from "@/i18n/content";
import { cn } from "@/lib/utils";

type TPageHeaderProps = {
	copy: TAppCopy;
	language: TLanguage;
	isRtl: boolean;
	onLanguageChange: (language: TLanguage) => void;
};

const PageHeader: FC<TPageHeaderProps> = ({ copy, language, isRtl, onLanguageChange }) => {
	return (
		<header
			className={cn("space-y-4 animate-fade-up", isRtl ? "text-right" : "text-left")}
			style={{ animationDelay: "80ms" }}
		>
			<div className="flex flex-wrap items-center justify-between gap-3">
				<div
					className={cn(
						"inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1 text-xs text-muted-foreground",
						isRtl ? "flex-row-reverse" : "flex-row"
					)}
				>
					<span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-foreground/70" />
					<span>{copy.header.badge}</span>
					<InfoHint text={copy.header.badgeHint} className="h-4 w-4 text-[9px]" />
				</div>
				<div
					className={cn(
						"flex flex-wrap items-center gap-2 text-xs text-muted-foreground",
						isRtl ? "flex-row-reverse justify-start text-right" : "justify-start text-left"
					)}
				>
					<span>{copy.header.languageLabel}</span>
					<InfoHint text={copy.help.languageToggle} className="h-4 w-4 text-[9px]" />
					<Button
						variant={language === "fa" ? "secondary" : "outline"}
						size="sm"
						onClick={() => onLanguageChange("fa")}
						type="button"
					>
						FA
					</Button>
					<Button
						variant={language === "en" ? "secondary" : "outline"}
						size="sm"
						onClick={() => onLanguageChange("en")}
						type="button"
					>
						EN
					</Button>
				</div>
			</div>
			<div className="space-y-2">
				<h1 className="text-3xl font-semibold leading-tight md:text-4xl">{copy.header.title}</h1>
				<p className="text-sm text-muted-foreground md:text-base">{copy.header.subtitle}</p>
			</div>
		</header>
	);
};

export default PageHeader;
