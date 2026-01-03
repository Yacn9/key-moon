import { NIBBLE_ALPHABET } from "@/constants/encoding";
import type { TAppCopy } from "@/i18n/content";
import { DAILY_KEY } from "@/private/keys";

const NIBBLE_LOOKUP = new Map<string, number>(NIBBLE_ALPHABET.map((char, index) => [char, index]));

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export const DECODE_ERROR = {
	ODD_LENGTH: "ERR_ODD_LENGTH",
	INVALID_CHAR: "ERR_INVALID_CHAR",
} as const;

export const resolveKey = (inputKey: string) => {
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

export const encodeText = (value: string, key: string) => {
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

export const decodeText = (value: string, key: string) => {
	const cleaned = value.replaceAll(/\s+/g, "");
	if (!cleaned) {
		return "";
	}
	if (cleaned.length % 2 !== 0) {
		throw new Error(DECODE_ERROR.ODD_LENGTH);
	}

	const bytes = new Uint8Array(cleaned.length / 2);
	for (let i = 0; i < cleaned.length; i += 2) {
		const high = NIBBLE_LOOKUP.get(cleaned[i]);
		const low = NIBBLE_LOOKUP.get(cleaned[i + 1]);
		if (high === undefined || low === undefined) {
			throw new Error(DECODE_ERROR.INVALID_CHAR);
		}
		bytes[i / 2] = (high << 4) | low;
	}

	const mixed = xorBytes(bytes, key);
	return decoder.decode(mixed);
};

export const getDecodeErrorMessage = (message: string, copy: TAppCopy) => {
	switch (message) {
		case DECODE_ERROR.ODD_LENGTH:
			return copy.decode.errors.oddLength;
		case DECODE_ERROR.INVALID_CHAR:
			return copy.decode.errors.invalidChar;
		default:
			return copy.decode.errors.unknown;
	}
};
