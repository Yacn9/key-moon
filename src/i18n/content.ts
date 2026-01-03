export type TLanguage = "fa" | "en";

export type TAppCopy = {
	header: {
		badge: string;
		badgeHint: string;
		title: string;
		subtitle: string;
		languageLabel: string;
	};
	card: {
		title: string;
		titleHint: string;
		description: string;
	};
	tabs: {
		encode: string;
		decode: string;
		info: string;
	};
	actions: {
		paste: string;
		copy: string;
		pasteError: string;
		copySuccess: string;
		copyError: string;
	};
	keyStatusLabel: string;
	keyStatusCustom: string;
	keyStatusDaily: string;
	encode: {
		inputLabel: string;
		inputPlaceholder: string;
		inputHint: string;
		keyLabel: string;
		keyPlaceholder: string;
		keyHint: string;
		outputLabel: string;
		outputPlaceholder: string;
		outputHint: string;
		allowedLabel: string;
		allowedHint: string;
	};
	decode: {
		inputLabel: string;
		inputPlaceholder: string;
		inputHint: string;
		keyLabel: string;
		keyPlaceholder: string;
		keyHint: string;
		outputLabel: string;
		outputPlaceholder: string;
		outputHint: string;
		errorPrefix: string;
		errors: {
			oddLength: string;
			invalidChar: string;
			unknown: string;
		};
	};
	info: {
		description: string;
		supportTitle: string;
		supportHint: string;
		supportText: string;
		supportIdLabel: string;
		supportNoteLabel: string;
		supportIdValue: string;
		supportNoteValue: string;
		buttonLabel: string;
		buttonHint: string;
	};
	help: {
		languageToggle: string;
	};
};

export const content: Record<TLanguage, TAppCopy> = {
	fa: {
		header: {
			badge: "کلید پیش‌فرض فعال است",
			badgeHint: "اگر کلید اختصاصی وارد نکنید، کلید پیش‌فرض به صورت دوره‌ای عوض می‌شود.",
			title: "رمزنگاری ساده، تیره و فارسی",
			subtitle:
				"متن خود را با کلید دلخواه یا کلید پیش‌فرض تبدیل کنید. خروجی از حروف فارسی ساخته می‌شود تا خوانایی حفظ شود.",
			languageLabel: "زبان",
		},
		card: {
			title: "پنل کدگذاری و بازگشایی",
			titleHint: "هر تب یک جریان جدا برای کدگذاری یا بازگشایی دارد.",
			description: "هر تب یک جریان جدا دارد و کلید را می‌توانید خالی بگذارید.",
		},
		tabs: {
			encode: "کدگذاری",
			decode: "بازگشایی",
			info: "اطلاعات و حمایت",
		},
		actions: {
			paste: "جایگذاری",
			copy: "کپی",
			pasteError: "امکان دسترسی به کلیپ‌بورد نیست.",
			copySuccess: "کپی شد.",
			copyError: "امکان کپی وجود ندارد.",
		},
		keyStatusLabel: "کلید فعال",
		keyStatusCustom: "سفارشی",
		keyStatusDaily: "پیش‌فرض",
		encode: {
			inputLabel: "متن برای کدگذاری",
			inputPlaceholder: "برای شروع، متن خود را اینجا بنویسید.",
			inputHint: "متن خامی که می‌خواهید رمز شود را اینجا وارد کنید.",
			keyLabel: "کلید اختصاصی (اختیاری)",
			keyPlaceholder: "اگر خالی باشد، کلید پیش‌فرض استفاده می‌شود.",
			keyHint: "کلید دلخواه برای تغییر خروجی. خالی بگذارید تا کلید پیش‌فرض استفاده شود.",
			outputLabel: "خروجی کدگذاری شده",
			outputPlaceholder: "خروجی اینجا نمایش داده می‌شود.",
			outputHint: "متن رمز شده‌ای که می‌توانید کپی کنید.",
			allowedLabel: "حروف مجاز خروجی:",
			allowedHint: "خروجی فقط از این حروف برای نمایش امن استفاده می‌کند.",
		},
		decode: {
			inputLabel: "متن کدگذاری‌شده",
			inputPlaceholder: "متن رمز شده را وارد کنید.",
			inputHint: "رشته‌ی رمز شده را برای بازگشایی وارد کنید.",
			keyLabel: "کلید برای بازگشایی (اختیاری)",
			keyPlaceholder: "همان کلیدی که برای کدگذاری استفاده شده.",
			keyHint: "اگر از کلید سفارشی استفاده کرده‌اید، همینجا وارد کنید.",
			outputLabel: "متن بازگشایی‌شده",
			outputPlaceholder: "متن اصلی اینجا نمایش داده می‌شود.",
			outputHint: "نتیجه‌ی بازگشایی در این بخش نمایش داده می‌شود.",
			errorPrefix: "خطا",
			errors: {
				oddLength: "طول متن رمز باید زوج باشد.",
				invalidChar: "کاراکتر نامعتبر در متن رمز.",
				unknown: "خطای ناشناخته",
			},
		},
		info: {
			description:
				"این ابزار متن را با کلید پیش‌فرض یا کلید دلخواه شما به یک رشته فارسی تبدیل می‌کند. برای امنیت، کلید پیش‌فرض در هر دوره به‌روزرسانی می‌شود؛ بهتر است کلید اختصاصی خودتان را تنظیم کنید.",
			supportTitle: "حمایت و دونیت",
			supportHint: "اینجا برای معرفی لینک یا شناسه حمایت شماست.",
			supportText:
				"برای حمایت، شناسه یا لینک پرداخت خودتان را اینجا قرار دهید. این بخش فقط یک جاگیر است و قابل شخصی‌سازی است.",
			supportIdLabel: "شناسه",
			supportNoteLabel: "یادداشت",
			supportIdValue: "donate-id",
			supportNoteValue: "با انرژی شما این ابزار هر روز تازه می‌شود.",
			buttonLabel: "ثبت لینک حمایت",
			buttonHint: "می‌توانید لینک پرداخت یا شناسه را از اینجا ذخیره کنید.",
		},
		help: {
			languageToggle: "زبان رابط را تغییر دهید.",
		},
	},
	en: {
		header: {
			badge: "Default key is active",
			badgeHint: "If you leave the key empty, the default key rotates periodically.",
			title: "Simple, dark, Persian-friendly cipher",
			subtitle:
				"Transform your text with a custom key or the default key. Output uses Persian letters to stay readable.",
			languageLabel: "Language",
		},
		card: {
			title: "Encode & Decode Panel",
			titleHint: "Each tab is a separate flow for encoding or decoding.",
			description: "Each tab is independent and the key can be left empty.",
		},
		tabs: {
			encode: "Encode",
			decode: "Decode",
			info: "Info & Support",
		},
		actions: {
			paste: "Paste",
			copy: "Copy",
			pasteError: "Unable to read from clipboard.",
			copySuccess: "Copied.",
			copyError: "Unable to copy.",
		},
		keyStatusLabel: "Active key",
		keyStatusCustom: "Custom",
		keyStatusDaily: "Default",
		encode: {
			inputLabel: "Text to encode",
			inputPlaceholder: "Type your text here.",
			inputHint: "Paste or type the plain text you want to encode.",
			keyLabel: "Custom key (optional)",
			keyPlaceholder: "Leave empty to use the default key.",
			keyHint: "Provide a custom key to change the output.",
			outputLabel: "Encoded output",
			outputPlaceholder: "Encoded text will appear here.",
			outputHint: "Copy the encoded output from here.",
			allowedLabel: "Allowed output letters:",
			allowedHint: "Output is rendered using only these letters.",
		},
		decode: {
			inputLabel: "Encoded text",
			inputPlaceholder: "Paste the encoded text.",
			inputHint: "Enter the encoded string you want to decode.",
			keyLabel: "Key to decode (optional)",
			keyPlaceholder: "Use the same key used to encode.",
			keyHint: "If you used a custom key, enter it here.",
			outputLabel: "Decoded text",
			outputPlaceholder: "The original text appears here.",
			outputHint: "Decoded result is shown here.",
			errorPrefix: "Error",
			errors: {
				oddLength: "Encoded text length must be even.",
				invalidChar: "Encoded text contains invalid characters.",
				unknown: "Unknown error",
			},
		},
		info: {
			description:
				"This tool transforms text using the default key or your custom key. For safety, the default key rotates periodically, so set your own key for consistency.",
			supportTitle: "Support & Donate",
			supportHint: "Place your support link or ID here.",
			supportText:
				"Add your payment link or donation ID here. This section is just a placeholder and can be customized.",
			supportIdLabel: "ID",
			supportNoteLabel: "Note",
			supportIdValue: "donate-id",
			supportNoteValue: "Your support keeps this tool fresh every day.",
			buttonLabel: "Save support link",
			buttonHint: "Save your payment link or ID here.",
		},
		help: {
			languageToggle: "Switch the interface language.",
		},
	},
};
