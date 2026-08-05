import type { ReactNode } from "react";
export type SectionProps = {
	id: string;
	className: string;
	children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
	return (
		<section
			id={id}
			className={`py-20 px-4 sm:px-6 lg:px-8 ${className ?? ""}`}
		>
			{children}
		</section>
	);
}
