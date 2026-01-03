import { useId, useMemo, useState } from "react";

import type { TAppCopy } from "@/i18n/content";
import { resolveKey } from "@/lib/codec";

import useClipboardActions from "./use-clipboard";

type TCodecState = {
	inputValue: string;
	setInputValue: (value: string) => void;
	keyValue: string;
	setKeyValue: (value: string) => void;
	textId: string;
	keyId: string;
	outputId: string;
	resolvedKey: string;
	usingCustomKey: boolean;
	keyStatus: string;
	pasteFromClipboard: (onPaste: (text: string) => void) => Promise<void>;
	copyToClipboard: (text: string) => Promise<void>;
};

type TCodecStateOptions = {
	idPrefix: string;
	copy: TAppCopy;
};

const useCodecState = ({ idPrefix, copy }: TCodecStateOptions): TCodecState => {
	const [inputValue, setInputValue] = useState("");
	const [keyValue, setKeyValue] = useState("");

	const idsBase = useId();
	const textId = `${idsBase}-${idPrefix}-text`;
	const keyId = `${idsBase}-${idPrefix}-key`;
	const outputId = `${idsBase}-${idPrefix}-output`;

	const usingCustomKey = keyValue.trim().length > 0;
	const resolvedKey = useMemo(() => resolveKey(keyValue), [keyValue]);
	const keyStatus = `${copy.keyStatusLabel}: ${
		usingCustomKey ? copy.keyStatusCustom : copy.keyStatusDaily
	}`;

	const { pasteFromClipboard, copyToClipboard } = useClipboardActions(copy.actions);

	return {
		inputValue,
		setInputValue,
		keyValue,
		setKeyValue,
		textId,
		keyId,
		outputId,
		resolvedKey,
		usingCustomKey,
		keyStatus,
		pasteFromClipboard,
		copyToClipboard,
	};
};

export default useCodecState;
