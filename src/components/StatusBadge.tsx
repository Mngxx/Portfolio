import type { CurrentProject } from "../types";

const STATUS_LABEL: Record<CurrentProject["status"], string> = {
	live: "Live",
	"in-development": "In Development",
};

const STATUS_DOT: Record<CurrentProject["status"], string> = {
	live: "bg-emerald-400",
	"in-development": "bg-amber-400",
};

type StatusBadgeProps = {
	status: CurrentProject["status"];
};

export function StatusBadge({ status }: StatusBadgeProps) {
	return (
		<span className="flex items-center gap-1.5 text-xs font-semibold text-gray-400">
			<span className={`h-2 w-2 rounded-full ${STATUS_DOT[status]}`} />
			{STATUS_LABEL[status]}
		</span>
	);
}
