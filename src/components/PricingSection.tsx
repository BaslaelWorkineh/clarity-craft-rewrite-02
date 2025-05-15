import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

// Updated PRICING_PLANS array
const PRICING_PLANS = [
	{
		name: "Free",
		price: "$0",
		description: "Perfect for trying out Clarity Bubble",
		features: [
			"10 tone rewrites per day",
			"3 tone types",
			"Basic message history",
			"Text-only interface",
		],
		cta: "Start for Free",
		popular: false,
	},
	{
		name: "Premium",
		price: "$11.99",
		period: "/month",
		description: "Advanced tone rewriting and integrations for power users.",
		features: [
			"Unlimited rewrites",
			"All tone types",
			"Gmail/Slack/LinkedIn integration",
			"Communication analytics",
			"Priority support",
		],
		cta: "Get Premium Plan",
		popular: true,
	},
	{
		name: "Production",
		price: "$24.99",
		period: "/month",
		description: "For teams and businesses needing robust, production-grade features.",
		features: [
			"Everything in Premium",
			"Team management & collaboration",
			"Advanced analytics & reporting",
			"Custom integrations",
			"Dedicated support",
		],
		cta: "Upgrade to Production",
		popular: false,
	},
];

export default function PricingSection() {
	return (
		<section id="pricing" className="py-32 px-6 relative">
			{/* Premium grid background */}
			<div className="absolute inset-0 grid-bg opacity-30"></div>
			<div className="absolute inset-0 radial-gradient"></div>
			<div className="spotlight-gradient-large absolute top-1/4 right-1/4"></div>

			{/* Adjusted max-w for two cards */}
			<div className="max-w-4xl mx-auto relative z-10">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold purple-text-gradient purple-glow">
						Choose Your Plan
					</h2>
					<p className="mt-3 text-xl text-foreground/80">
						Simple and transparent pricing.
					</p>
				</div>

				{/* Adjusted grid for 2 cards and centered them */}
				<div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
					{PRICING_PLANS.map((plan) =>
						plan.popular ? (
							// Premium Plan (formerly Pro, marked as popular)
							<div key={plan.name} className="relative flex flex-1 min-w-[300px] max-w-[350px] h-full">
								{/* MOST POPULAR Badge - Adjusted positioning slightly */}
								<div className="absolute top-0 left-1/2 transform -translate-x-[48%] -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-lg shadow-purple-500/50 transform -rotate-3 origin-center whitespace-nowrap z-30">
									MOST POPULAR
								</div>

								<motion.div
									className="premium-card relative overflow-hidden rounded-none sharp-border border-plus-pattern p-8 border-clarity-purple ring-1 ring-clarity-purple/30 w-full flex flex-col h-full min-h-[520px]"
									whileHover={{
										boxShadow: "0 0 25px rgba(255, 215, 0, 0.5)",
									}}
								>
									{/* Golden Shine */}
									<div className="golden-shine"></div>

									<div className="text-center z-10 relative">
										<h3 className="text-xl font-bold">{plan.name}</h3>
										<div className="mt-4 flex items-end justify-center">
											<span className="text-4xl font-bold">{plan.price}</span>
											{plan.period && (
												<span className="text-foreground/70 ml-1">
													{plan.period}
												</span>
											)}
										</div>
										<p className="mt-3 text-sm text-foreground/70 h-12">
											{plan.description}
										</p>
									</div>

									{/* Feature list */}
									<div className="mt-8 space-y-4 flex-grow z-10 relative">
										{plan.features.map((feature, featureIndex) => (
											<div key={featureIndex} className="flex items-start">
												<Check className="h-5 w-5 text-clarity-purple shrink-0 mr-3 mt-0.5" />
												<span className="text-sm text-foreground/80">
													{feature}
												</span>
											</div>
										))}
									</div>

									<div className="mt-8 z-10 relative">
										<Button
											className="w-full sharp-border text-white bg-clarity-purple hover:bg-clarity-purple/90 purple-button-glow"
											asChild
										>
											<a href="/waitlist">{plan.cta}</a>
										</Button>
									</div>
								</motion.div>
							</div>
						) : (
							// Free Plan
							<motion.div
								key={plan.name}
								className="glass-morphism rounded-none sharp-border border-plus-pattern p-8 border-white/10 relative transform transition-all duration-300 hover:-translate-y-1 w-full flex flex-col h-full flex-1 min-w-[300px] max-w-[350px] min-h-[520px]"
							>
								<div className="text-center">
									<h3 className="text-xl font-bold">{plan.name}</h3>
									<div className="mt-4 flex items-end justify-center">
										<span className="text-4xl font-bold">{plan.price}</span>
										{plan.period && (
											<span className="text-foreground/70 ml-1">
												{plan.period}
											</span>
										)}
									</div>
									<p className="mt-3 text-sm text-foreground/70 h-12">
										{plan.description}
									</p>
								</div>

								{/* Added flex-grow to feature list for equal height */}
								<div className="mt-8 space-y-4 flex-grow">
									{plan.features.map((feature, featureIndex) => (
										<div key={featureIndex} className="flex items-start">
											<Check className="h-5 w-5 text-clarity-purple shrink-0 mr-3 mt-0.5" />
											<span className="text-sm text-foreground/80">
												{feature}
											</span>
										</div>
									))}
								</div>

								<div className="mt-8">
									<Button
										className={`w-full sharp-border text-white bg-black border border-white/10 hover:bg-white/5`}
										asChild
									>
										<a href="/waitlist">{plan.cta}</a>
									</Button>
								</div>
							</motion.div>
						)
					)}
				</div>
			</div>
		</section>
	);
}
