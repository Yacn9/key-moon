import { type FC, useMemo } from "react";

import CodecPanel from "@/components/codec-panel";
import { TabsContent } from "@/components/ui/tabs";
import useCodecState from "@/hooks/use-codec-state";
import type { TAppCopy } from "@/i18n/content";
import { encodeText } from "@/lib/codec";

type TEncodeTabProps = {
	copy: TAppCopy;
	isRtl: boolean;
};

const EncodeTab: FC<TEncodeTabProps> = ({ copy, isRtl }) => {
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
	} = useCodecState({ idPrefix: "encode", copy });

	const encodeResult = useMemo(
		() => encodeText(inputValue, resolvedKey),
		[inputValue, resolvedKey]
	);

	return (
		<TabsContent value="encode">
			<CodecPanel
				isRtl={isRtl}
				input={{
					id: textId,
					label: copy.encode.inputLabel,
					hint: copy.encode.inputHint,
					placeholder: copy.encode.inputPlaceholder,
					value: inputValue,
					onChange: setInputValue,
					actionLabel: copy.actions.paste,
					onAction: () => void pasteFromClipboard(setInputValue),
				}}
				keyField={{
					id: keyId,
					label: copy.encode.keyLabel,
					hint: copy.encode.keyHint,
					placeholder: copy.encode.keyPlaceholder,
					value: keyValue,
					onChange: setKeyValue,
					statusLabel: keyStatus,
				}}
				output={{
					id: outputId,
					label: copy.encode.outputLabel,
					hint: copy.encode.outputHint,
					placeholder: copy.encode.outputPlaceholder,
					value: encodeResult,
					actionLabel: copy.actions.copy,
					onAction: () => copyToClipboard(encodeResult),
				}}
			/>
		</TabsContent>
	);
};

export default EncodeTab;
