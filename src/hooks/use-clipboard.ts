import { toast } from "sonner";

import type { TAppCopy } from "@/i18n/content";

type TClipboardActions = {
	pasteFromClipboard: (onPaste: (text: string) => void) => Promise<void>;
	copyToClipboard: (text: string) => Promise<void>;
};

const useClipboardActions = (actions: TAppCopy["actions"]): TClipboardActions => {
	const pasteFromClipboard = async (onPaste: (text: string) => void) => {
		if (!navigator?.clipboard?.readText) {
			toast.error(actions.pasteError);
			return;
		}
		try {
			const text = await navigator.clipboard.readText();
			onPaste(text);
		} catch {
			toast.error(actions.pasteError);
		}
	};

	const copyToClipboard = async (text: string) => {
		if (!text || !navigator?.clipboard?.writeText) {
			toast.error(actions.copyError);
			return;
		}
		try {
			await navigator.clipboard.writeText(text);
			toast.success(actions.copySuccess);
		} catch {
			toast.error(actions.copyError);
		}
	};

	return { pasteFromClipboard, copyToClipboard };
};

export default useClipboardActions;
