import { DecodeTab } from "@/components/decode-tab";
import { EncodeTab } from "@/components/encode-tab";
import { InfoTab } from "@/components/info-tab";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
	return (
		<main dir="rtl" className="min-h-screen">
			<div className="mx-auto flex w-full max-w-screen-md flex-col gap-8 px-4 py-10 md:py-14">
				<PageHeader />

				<Card
					className="border-border/70 bg-card/80 backdrop-blur animate-fade-up"
					style={{ animationDelay: "180ms" }}
				>
					<CardHeader>
						<CardTitle>پنل کدگذاری و بازگشایی</CardTitle>
						<CardDescription>
							هر تب یک جریان جدا دارد و کلید را می‌توانید خالی بگذارید.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<Tabs defaultValue="encode" className="w-full">
							<TabsList className="grid grid-cols-3">
								<TabsTrigger value="encode">کدگذاری</TabsTrigger>
								<TabsTrigger value="decode">بازگشایی</TabsTrigger>
								<TabsTrigger value="info">اطلاعات و حمایت</TabsTrigger>
							</TabsList>

							<EncodeTab />
							<DecodeTab />
							<InfoTab />
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}

export default App;
