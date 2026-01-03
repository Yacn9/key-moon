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
		donateTitle: string;
		donateIntro: string;
		donateLinks: Array<{
			label: string;
			href: string;
		}>;
		donateWallets: Array<{
			label: string;
			value: string;
		}>;
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
			title: "کی‌مون - Key Moon",
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
				"این ابزار به شما کمک می‌کند متن خود را با یک کلید خصوصی قفل کنید و هر زمان خواستید دوباره بازش کنید. کافی است متن را وارد کنید تا تبدیل شود، سپس با همان کلید آن را برگردانید. برای امنیت بیشتر، کلید پیش‌فرض به‌صورت دوره‌ای تغییر می‌کند؛ اگر می‌خواهید همیشه به متن‌تان دسترسی داشته باشید، بهتر است کلید اختصاصی خودتان را انتخاب کنید.",
			donateTitle: "حمایت و دونیت",
			donateIntro: "اگر این ابزار برایتان مفید بود، می‌توانید از راه‌های زیر حمایت کنید:",
			donateLinks: [
				{ label: "Reymit", href: "https://reymit.ir/yacn9" },
				{ label: "Daramet", href: "https://daramet.com/yacn9" },
			],
			donateWallets: [
				{ label: "Tether (BEP20)", value: "0xa729EC0799Ef220f56A8e060E0c961a11925041c" },
				{ label: "Tether (TRC20)", value: "TYUgWDrmoPfja1ueuYmLiGck6dURj5hM7D" },
			],
		},
		help: {
			languageToggle: "زبان رابط را تغییر دهید.",
		},
	},
	en: {
		header: {
			badge: "Default key is active",
			badgeHint: "If you leave the key empty, the default key rotates periodically.",
			title: "Key Moon - کی‌مون",
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
				"Use this tool to lock your text with a private key and unlock it later. Paste your text, encode it, then decode it with the same key whenever you need it. For better safety the default key rotates periodically, so if you want reliable access, set your own custom key.",
			donateTitle: "Support & Donate",
			donateIntro: "If this tool helps you, you can support it here:",
			donateLinks: [
				{ label: "Reymit", href: "https://reymit.ir/yacn9" },
				{ label: "Daramet", href: "https://daramet.com/yacn9" },
			],
			donateWallets: [
				{ label: "Tether (BEP20)", value: "0xa729EC0799Ef220f56A8e060E0c961a11925041c" },
				{ label: "Tether (TRC20)", value: "TYUgWDrmoPfja1ueuYmLiGck6dURj5hM7D" },
			],
		},
		help: {
			languageToggle: "Switch the interface language.",
		},
	},
};
