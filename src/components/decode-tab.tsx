import { useId, useMemo, useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { decodeText, resolveKey } from "@/lib/codec";

export function DecodeTab() {
	const [decodeInput, setDecodeInput] = useState("");
	const [decodeKey, setDecodeKey] = useState("");

	const idsBase = useId();
	const textId = `${idsBase}-decode-text`;
	const keyId = `${idsBase}-decode-key`;
	const outputId = `${idsBase}-decode-output`;

	const usingCustomKey = decodeKey.trim().length > 0;
	const resolvedKey = useMemo(() => resolveKey(decodeKey), [decodeKey]);

	const decodeResult = useMemo(() => {
		try {
			return { value: decodeText(decodeInput, resolvedKey), error: "" };
		} catch (error) {
			return {
				value: "",
				error: error instanceof Error ? error.message : "خطای ناشناخته",
			};
		}
	}, [decodeInput, resolvedKey]);

	return (
		<TabsContent value="decode">
			<div className="grid gap-5 md:grid-cols-2">
				<div className="space-y-2 md:col-span-2">
					<label className="text-sm text-muted-foreground" htmlFor={textId}>
						متن کدگذاری‌شده
					</label>
					<Textarea
						id={textId}
						value={decodeInput}
						onChange={(event) => setDecodeInput(event.target.value)}
						placeholder="متن رمز شده را وارد کنید."
						className="min-h-[140px] text-right leading-7"
					/>
				</div>

				<div className="space-y-2">
					<label className="text-sm text-muted-foreground" htmlFor={keyId}>
						کلید برای بازگشایی (اختیاری)
					</label>
					<Input
						id={keyId}
						value={decodeKey}
						onChange={(event) => setDecodeKey(event.target.value)}
						placeholder="همان کلیدی که برای کدگذاری استفاده شده."
						className="text-right"
					/>
					<p className="text-xs text-muted-foreground">
						کلید فعال: {usingCustomKey ? "سفارشی" : "روزانه"}
					</p>
				</div>

				<div className="space-y-2 md:col-span-2">
					<label className="text-sm text-muted-foreground" htmlFor={outputId}>
						متن بازگشایی‌شده
					</label>
					<Textarea
						id={outputId}
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
	);
}
