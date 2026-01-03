import type { FC, ReactNode } from "react";

import FieldHeader from "@/components/field-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type TInputField = {
	id: string;
	label: string;
	hint: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	actionLabel?: string;
	onAction?: () => void | Promise<void>;
};

type TKeyField = {
	id: string;
	label: string;
	hint: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	statusLabel: string;
};

type TOutputField = {
	id: string;
	label: string;
	hint: string;
	placeholder: string;
	value: string;
	actionLabel?: string;
	onAction: () => void | Promise<void>;
};

type TCodecPanelProps = {
	isRtl: boolean;
	input: TInputField;
	keyField: TKeyField;
	output: TOutputField;
	footer?: ReactNode;
};

const CodecPanel: FC<TCodecPanelProps> = ({ isRtl, input, keyField, output, footer }) => {
	return (
		<div className="grid gap-5 md:grid-cols-2">
			<div className="space-y-2 md:col-span-2">
				<FieldHeader
					id={input.id}
					label={input.label}
					hint={input.hint}
					actionLabel={input.actionLabel}
					onAction={input.onAction}
					isRtl={isRtl}
				/>
				<Textarea
					id={input.id}
					value={input.value}
					onChange={(event) => input.onChange(event.target.value)}
					placeholder={input.placeholder}
					className={cn("min-h-35 leading-7", isRtl ? "text-right" : "text-left")}
				/>
			</div>

			<div className="space-y-2">
				<FieldHeader id={keyField.id} label={keyField.label} hint={keyField.hint} isRtl={isRtl} />
				<Input
					id={keyField.id}
					value={keyField.value}
					onChange={(event) => keyField.onChange(event.target.value)}
					placeholder={keyField.placeholder}
					className={cn(isRtl ? "text-right" : "text-left")}
				/>
				<p className={cn("text-xs text-muted-foreground", isRtl ? "text-right" : "text-left")}>
					{keyField.statusLabel}
				</p>
			</div>

			<div className="space-y-2 md:col-span-2">
				<FieldHeader
					id={output.id}
					label={output.label}
					hint={output.hint}
					actionLabel={output.actionLabel}
					onAction={output.onAction}
					isRtl={isRtl}
				/>
				<Textarea
					id={output.id}
					value={output.value}
					readOnly
					placeholder={output.placeholder}
					className={cn("min-h-30 leading-7", isRtl ? "text-right" : "text-left")}
				/>
				{footer ?? null}
			</div>
		</div>
	);
};

export default CodecPanel;
