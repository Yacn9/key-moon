import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { DAILY_KEY } from "@/private/keys";

const NIBBLE_ALPHABET = [
	"ا",
	"ب",
	"پ",
	"ت",
	"ث",
	"ج",
	"چ",
	"ح",
	"خ",
	"د",
	"ذ",
	"ر",
	"ز",
	"ژ",
	"س",
	"ش",
];

const NIBBLE_LOOKUP = new Map<string, number>(NIBBLE_ALPHABET.map((char, index) => [char, index]));

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const resolveKey = (inputKey: string) => {
	const trimmed = inputKey.trim();
	return trimmed.length > 0 ? trimmed : DAILY_KEY;
};

const xorBytes = (data: Uint8Array, key: string) => {
	const keyBytes = encoder.encode(key);
	if (keyBytes.length === 0) {
		return data;
	}

	const output = new Uint8Array(data.length);
	for (let i = 0; i < data.length; i += 1) {
		output[i] = data[i] ^ keyBytes[i % keyBytes.length];
	}
	return output;
};

const encodeText = (value: string, key: string) => {
	if (!value.trim()) {
		return "";
	}

	const bytes = encoder.encode(value);
	const mixed = xorBytes(bytes, key);

	let output = "";
	for (const byte of mixed) {
		output += NIBBLE_ALPHABET[byte >> 4] + NIBBLE_ALPHABET[byte & 15];
	}
	return output;
};

const decodeText = (value: string, key: string) => {
	const cleaned = value.replace(/\s+/g, "");
	if (!cleaned) {
		return "";
	}
	if (cleaned.length % 2 !== 0) {
		throw new Error("طول متن رمز باید زوج باشد.");
	}

	const bytes = new Uint8Array(cleaned.length / 2);
	for (let i = 0; i < cleaned.length; i += 2) {
		const high = NIBBLE_LOOKUP.get(cleaned[i]);
		const low = NIBBLE_LOOKUP.get(cleaned[i + 1]);
		if (high === undefined || low === undefined) {
			throw new Error("کاراکتر نامعتبر در متن رمز.");
		}
		bytes[i / 2] = (high << 4) | low;
	}

	const mixed = xorBytes(bytes, key);
	return decoder.decode(mixed);
};

function App() {
	const [encodeInput, setEncodeInput] = useState("");
	const [encodeKey, setEncodeKey] = useState("");
	const [decodeInput, setDecodeInput] = useState("");
	const [decodeKey, setDecodeKey] = useState("");

	const usingCustomEncodeKey = encodeKey.trim().length > 0;
	const usingCustomDecodeKey = decodeKey.trim().length > 0;

	const resolvedEncodeKey = useMemo(() => resolveKey(encodeKey), [encodeKey]);
	const resolvedDecodeKey = useMemo(() => resolveKey(decodeKey), [decodeKey]);

	const encodeResult = useMemo(
		() => encodeText(encodeInput, resolvedEncodeKey),
		[encodeInput, resolvedEncodeKey]
	);

	const decodeResult = useMemo(() => {
		try {
			return { value: decodeText(decodeInput, resolvedDecodeKey), error: "" };
		} catch (error) {
			return {
				value: "",
				error: error instanceof Error ? error.message : "خطای ناشناخته",
			};
		}
	}, [decodeInput, resolvedDecodeKey]);

	return (
		<main dir="rtl" className="min-h-screen">
			<div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-10 md:py-14">
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
							متن خود را با کلید دلخواه یا کلید روزانه تبدیل کنید. خروجی از حروف فارسی ساخته می‌شود
							تا خوانایی حفظ شود.
						</p>
					</div>
				</header>

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

							<TabsContent value="encode">
								<div className="grid gap-5 md:grid-cols-2">
									<div className="space-y-2 md:col-span-2">
										<label className="text-sm text-muted-foreground" htmlFor="encode-text">
											متن برای کدگذاری
										</label>
										<Textarea
											id="encode-text"
											value={encodeInput}
											onChange={(event) => setEncodeInput(event.target.value)}
											placeholder="برای شروع، متن خود را اینجا بنویسید."
											className="min-h-[140px] text-right leading-7"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm text-muted-foreground" htmlFor="encode-key">
											کلید اختصاصی (اختیاری)
										</label>
										<Input
											id="encode-key"
											value={encodeKey}
											onChange={(event) => setEncodeKey(event.target.value)}
											placeholder="اگر خالی باشد، کلید روزانه استفاده می‌شود."
											className="text-right"
										/>
										<p className="text-xs text-muted-foreground">
											کلید فعال: {usingCustomEncodeKey ? "سفارشی" : "روزانه"}
										</p>
									</div>

									<div className="space-y-2 md:col-span-2">
										<label className="text-sm text-muted-foreground" htmlFor="encode-output">
											خروجی کدگذاری شده
										</label>
										<Textarea
											id="encode-output"
											value={encodeResult}
											readOnly
											placeholder="خروجی اینجا نمایش داده می‌شود."
											className="min-h-[120px] text-right leading-7"
										/>
										<p className="text-xs text-muted-foreground">
											حروف مجاز خروجی: {NIBBLE_ALPHABET.join(" ")}
										</p>
									</div>
								</div>
							</TabsContent>

							<TabsContent value="decode">
								<div className="grid gap-5 md:grid-cols-2">
									<div className="space-y-2 md:col-span-2">
										<label className="text-sm text-muted-foreground" htmlFor="decode-text">
											متن کدگذاری‌شده
										</label>
										<Textarea
											id="decode-text"
											value={decodeInput}
											onChange={(event) => setDecodeInput(event.target.value)}
											placeholder="متن رمز شده را وارد کنید."
											className="min-h-[140px] text-right leading-7"
										/>
									</div>

									<div className="space-y-2">
										<label className="text-sm text-muted-foreground" htmlFor="decode-key">
											کلید برای بازگشایی (اختیاری)
										</label>
										<Input
											id="decode-key"
											value={decodeKey}
											onChange={(event) => setDecodeKey(event.target.value)}
											placeholder="همان کلیدی که برای کدگذاری استفاده شده."
											className="text-right"
										/>
										<p className="text-xs text-muted-foreground">
											کلید فعال: {usingCustomDecodeKey ? "سفارشی" : "روزانه"}
										</p>
									</div>

									<div className="space-y-2 md:col-span-2">
										<label className="text-sm text-muted-foreground" htmlFor="decode-output">
											متن بازگشایی‌شده
										</label>
										<Textarea
											id="decode-output"
											value={decodeResult.value}
											readOnly
											placeholder="متن اصلی اینجا نمایش داده می‌شود."
											className="min-h-[120px] text-right leading-7"
										/>
										{decodeResult.error ? (
											<p className="text-xs text-muted-foreground">خطا: {decodeResult.error}</p>
										) : null}
									</div>
								</div>
							</TabsContent>

							<TabsContent value="info">
								<div className="space-y-5 text-sm text-muted-foreground leading-7">
									<p>
										این ابزار متن را با یک کلید چرخشی روزانه یا کلید دلخواه شما به یک رشته فارسی
										تبدیل می‌کند. اگر برای بازگشایی مشکلی دارید، مطمئن شوید از همان کلید استفاده شده
										است.
									</p>
									<div className="rounded-lg border border-border/60 bg-muted/30 p-4">
										<p className="text-sm font-medium text-foreground">حمایت و دونیت</p>
										<p className="mt-2 text-sm text-muted-foreground">
											برای حمایت، شناسه یا لینک پرداخت خودتان را اینجا قرار دهید. این بخش فقط یک
											جاگیر است و قابل شخصی‌سازی است.
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
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</main>
	);
}

export default App;
