import { type FC, useEffect, useMemo, useRef } from "react";

import { toast } from "sonner";

import CodecPanel from "@/components/codec-panel";
import { TabsContent } from "@/components/ui/tabs";
import useCodecState from "@/hooks/use-codec-state";
import type { TAppCopy } from "@/i18n/content";
import { decodeText, getDecodeErrorMessage } from "@/lib/codec";
import { cn } from "@/lib/utils";

type TDecodeTabProps = {
	copy: TAppCopy;
	isRtl: boolean;
};

const DecodeTab: FC<TDecodeTabProps> = ({ copy, isRtl }) => {
	const {
		inputValue,
		setInputValue,
		keyValue,
		setKeyValue,
		textId,
		keyId,
		outputId,
		resolvedKey,
		keyStatus,
		pasteFromClipboard,
		copyToClipboard,
	} = useCodecState({ idPrefix: "decode", copy });

	const decodeResult = useMemo(() => {
		try {
			return { value: decodeText(inputValue, resolvedKey), error: "" };
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? getDecodeErrorMessage(error.message, copy)
					: copy.decode.errors.unknown;
			return {
				value: "",
				error: errorMessage,
			};
		}
	}, [inputValue, resolvedKey, copy]);
	const lastErrorRef = useRef<string | null>(null);

	useEffect(() => {
		if (!decodeResult.error) {
			lastErrorRef.current = null;
			return;
		}
		const message = `${copy.decode.errorPrefix}: ${decodeResult.error}`;
		if (lastErrorRef.current !== message) {
			toast.error(message);
			lastErrorRef.current = message;
		}
	}, [copy.decode.errorPrefix, decodeResult.error]);

	return (
		<TabsContent value="decode">
			<CodecPanel
				isRtl={isRtl}
				input={{
					id: textId,
					label: copy.decode.inputLabel,
					hint: copy.decode.inputHint,
					placeholder: copy.decode.inputPlaceholder,
					value: inputValue,
					onChange: setInputValue,
					actionLabel: copy.actions.paste,
					onAction: () => void pasteFromClipboard(setInputValue),
				}}
				keyField={{
					id: keyId,
					label: copy.decode.keyLabel,
					hint: copy.decode.keyHint,
					placeholder: copy.decode.keyPlaceholder,
					value: keyValue,
					onChange: setKeyValue,
					statusLabel: keyStatus,
				}}
				output={{
					id: outputId,
					label: copy.decode.outputLabel,
					hint: copy.decode.outputHint,
					placeholder: copy.decode.outputPlaceholder,
					value: decodeResult.value,
					actionLabel: copy.actions.copy,
					onAction: () => copyToClipboard(decodeResult.value),
				}}
				footer={
					decodeResult.error ? (
						<p className={cn("text-xs text-muted-foreground", isRtl ? "text-right" : "text-left")}>
							{copy.decode.errorPrefix}: {decodeResult.error}
						</p>
					) : null
				}
			/>
		</TabsContent>
	);
};

export default DecodeTab;
