import { type FC, useEffect, useMemo, useState } from "react";

import { Toaster } from "sonner";

import DecodeTab from "@/components/decode-tab";
import EncodeTab from "@/components/encode-tab";
import InfoHint from "@/components/info-hint";
import InfoTab from "@/components/info-tab";
import PageHeader from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { content, type TLanguage } from "@/i18n/content";
import { cn } from "@/lib/utils";

const App: FC = () => {
	const [language, setLanguage] = useState<TLanguage>("fa");
	const copy = useMemo(() => content[language], [language]);
	const isRtl = language === "fa";

	useEffect(() => {
		document.documentElement.lang = language;
		document.documentElement.dir = isRtl ? "rtl" : "ltr";
	}, [isRtl, language]);

	return (
		<main dir={isRtl ? "rtl" : "ltr"} className="min-h-screen">
			<div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 md:py-14">
				<PageHeader copy={copy} language={language} isRtl={isRtl} onLanguageChange={setLanguage} />

				<Card
					className="border-border/70 bg-card/80 backdrop-blur animate-fade-up"
					style={{ animationDelay: "180ms" }}
				>
					<CardHeader>
						<CardTitle
							className={cn("flex items-center gap-2", isRtl ? "text-right" : "text-left")}
						>
							<span>{copy.card.title}</span>
							<InfoHint text={copy.card.titleHint} className="h-4 w-4 text-[9px]" />
						</CardTitle>
						<CardDescription className={cn(isRtl ? "text-right" : "text-left")}>
							{copy.card.description}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="encode" className="w-full">
							<TabsList className="flex w-full flex-row justify-between gap-1">
								<TabsTrigger className="flex-1" value="info">
									{copy.tabs.info}
								</TabsTrigger>
								<TabsTrigger className="flex-1" value="decode">
									{copy.tabs.decode}
								</TabsTrigger>
								<TabsTrigger className="flex-1" value="encode">
									{copy.tabs.encode}
								</TabsTrigger>
							</TabsList>

							<EncodeTab copy={copy} isRtl={isRtl} />
							<DecodeTab copy={copy} isRtl={isRtl} />
							<InfoTab copy={copy} isRtl={isRtl} />
						</Tabs>
					</CardContent>
				</Card>
			</div>
			<Toaster
				theme="dark"
				position="bottom-center"
				richColors={false}
				toastOptions={{ className: cn(isRtl ? "text-right" : "text-left") }}
			/>
		</main>
	);
};

export default App;
