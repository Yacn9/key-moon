import { useId, useMemo, useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import { NIBBLE_ALPHABET } from "@/constants/encoding";
import { encodeText, resolveKey } from "@/lib/codec";

export function EncodeTab() {
	const [encodeInput, setEncodeInput] = useState("");
	const [encodeKey, setEncodeKey] = useState("");

	const idsBase = useId();
	const textId = `${idsBase}-encode-text`;
	const keyId = `${idsBase}-encode-key`;
	const outputId = `${idsBase}-encode-output`;

	const usingCustomKey = encodeKey.trim().length > 0;
	const resolvedKey = useMemo(() => resolveKey(encodeKey), [encodeKey]);
	const encodeResult = useMemo(
		() => encodeText(encodeInput, resolvedKey),
		[encodeInput, resolvedKey]
	);

	return (
		<TabsContent value="encode">
			<div className="grid gap-5 md:grid-cols-2">
				<div className="space-y-2 md:col-span-2">
					<label className="text-sm text-muted-foreground" htmlFor={textId}>
						متن برای کدگذاری
					</label>
					<Textarea
						id={textId}
						value={encodeInput}
						onChange={(event) => setEncodeInput(event.target.value)}
						placeholder="برای شروع، متن خود را اینجا بنویسید."
						className="min-h-[140px] text-right leading-7"
					/>
				</div>

				<div className="space-y-2">
					<label className="text-sm text-muted-foreground" htmlFor={keyId}>
						کلید اختصاصی (اختیاری)
					</label>
					<Input
						id={keyId}
						value={encodeKey}
						onChange={(event) => setEncodeKey(event.target.value)}
						placeholder="اگر خالی باشد، کلید روزانه استفاده می‌شود."
						className="text-right"
					/>
					<p className="text-xs text-muted-foreground">
						کلید فعال: {usingCustomKey ? "سفارشی" : "روزانه"}
					</p>
				</div>

				<div className="space-y-2 md:col-span-2">
					<label className="text-sm text-muted-foreground" htmlFor={outputId}>
						خروجی کدگذاری شده
					</label>
					<Textarea
						id={outputId}
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
	);
}
