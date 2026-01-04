export const NIBBLE_ALPHABET = [
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
	"ص",
	"ض",
	"ط",
	"ظ",
	"ع",
	"غ",
	"ف",
	"ق",
	"ک",
	"گ",
	"ل",
	"م",
	"ن",
	"و",
	"ه",
	"ی",
];

export const DAILY_KEY = (import.meta.env.VITE_DAILY_KEY as string | undefined) ?? "default-key";

export const SEGMENT_SIZE = 205;
export const SEGMENT_SEPARATOR = "~/~";

export const DECODE_ERROR = {
	ODD_LENGTH: "ERR_ODD_LENGTH",
	INVALID_CHAR: "ERR_INVALID_CHAR",
} as const;
