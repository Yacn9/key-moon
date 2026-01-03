import { Button } from "@/components/ui/button";
import { TabsContent } from "@/components/ui/tabs";

export function InfoTab() {
	return (
		<TabsContent value="info">
			<div className="space-y-5 text-sm text-muted-foreground leading-7">
				<p>
					این ابزار متن را با یک کلید چرخشی روزانه یا کلید دلخواه شما به یک رشته فارسی تبدیل
					می‌کند. اگر برای بازگشایی مشکلی دارید، مطمئن شوید از همان کلید استفاده شده است.
				</p>
				<div className="rounded-lg border border-border/60 bg-muted/30 p-4">
					<p className="text-sm font-medium text-foreground">حمایت و دونیت</p>
					<p className="mt-2 text-sm text-muted-foreground">
						برای حمایت، شناسه یا لینک پرداخت خودتان را اینجا قرار دهید. این بخش فقط یک جاگیر است و
						قابل شخصی‌سازی است.
					</p>
					<div className="mt-3 grid gap-2 text-xs text-muted-foreground">
						<span>شناسه: donate-id</span>
						<span>یادداشت: با انرژی شما این ابزار هر روز تازه می‌شود.</span>
					</div>
				</div>
				<Button variant="secondary" className="w-full">
					ثبت لینک حمایت
				</Button>
			</div>
		</TabsContent>
	);
}
