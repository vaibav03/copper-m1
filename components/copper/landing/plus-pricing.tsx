import { CheckIcon, MinusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  formatMemory,
  formatNotesHours,
  formatUsd,
  getPlans,
  type Plan,
} from "@/lib/copper/catalog";
import { cn } from "@/lib/utils";

function PlanCard({ plan }: { plan: Plan }) {
  const plus = plan.id === "copper-plus";
  const rows = [
    { label: "Annual price", value: `${formatUsd(plan.annualUsd)}/year` },
    { label: "Memory kept", value: formatMemory(plan.memoryDays) },
    {
      label: "Notes recording",
      value: formatNotesHours(plan.notesHoursPerMonth),
    },
  ];

  return (
    <Card
      data-plan={plan.id}
      className={cn(
        "relative gap-0 p-6 sm:p-8",
        plus && "ring-primary bg-primary/5 shadow-xl ring-2",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        {plus && <Badge>Most helpful</Badge>}
      </div>
      <p className="mt-4 flex items-baseline gap-1">
        <span className={cn("text-4xl font-extrabold", plus && "text-primary")}>
          {formatUsd(plan.monthlyUsd)}
        </span>
        <span className="text-muted-foreground">/month</span>
      </p>
      <dl className="mt-6 divide-y border-t">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 py-3"
          >
            <dt className="text-muted-foreground">{row.label}</dt>
            <dd className="text-right font-semibold">{row.value}</dd>
          </div>
        ))}
        <div className="flex items-center justify-between gap-4 py-3">
          <dt className="text-muted-foreground">Refined answers</dt>
          <dd className="font-semibold">
            {plan.refinedAnswers ? (
              <span className="text-accent inline-flex items-center gap-1">
                <CheckIcon aria-hidden className="size-5" />
                Included
              </span>
            ) : (
              <span className="text-muted-foreground inline-flex items-center gap-1">
                <MinusIcon aria-hidden className="size-5" />
                Not included
              </span>
            )}
          </dd>
        </div>
      </dl>
    </Card>
  );
}

export function PlusPricing() {
  const plans = getPlans();

  return (
    <section
      id="plus"
      data-testid="plus-pricing"
      className="scroll-mt-16 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Copper Plus
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
            Free works great. Plus goes further.
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Every device works on the Free plan. Copper Plus adds Refined
            answers for complex questions, longer memory and unlimited Notes
            recording.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
