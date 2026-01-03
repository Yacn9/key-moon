export function PageHeader() {
	return (
		<header className="space-y-4 text-right animate-fade-up" style={{ animationDelay: "80ms" }}>
			<div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1 text-xs text-muted-foreground">
				<span className="h-1.5 w-1.5 animate-soft-pulse rounded-full bg-foreground/70" />
				کلید روزانه فعال است
			</div>
			<div className="space-y-2">
				<h1 className="text-3xl font-semibold leading-tight md:text-4xl">
					رمزنگاری ساده، تیره و فارسی
				</h1>
				<p className="text-sm text-muted-foreground md:text-base">
					متن خود را با کلید دلخواه یا کلید روزانه تبدیل کنید. خروجی از حروف فارسی ساخته می‌شود تا
					خوانایی حفظ شود.
				</p>
			</div>
		</header>
	);
}
