<script setup lang="ts">
const plans = [
  {
    tag: 'One-Time Purchase',
    name: 'Credit Pack',
    price: '$98',
    period: 'one time',
    value: 'You get $110 in AI credits',
    saving: 'Save 10% instantly',
    featured: false,
    features: [
      '$110 in credits (10% bonus included)',
      'Access to every AI tool',
      'Full Content Creator Templates Library',
      'Commercial license on all generations',
      '30-day refund on unused credits',
      'Credits never expire',
    ],
    cta: 'Buy Credit Pack',
    note: '',
  },
  {
    tag: 'Most Popular',
    name: 'Monthly Pro',
    price: '$39',
    period: '/month',
    value: 'You get $49 in credits every month',
    saving: '+ 20% lifetime boost on all credits',
    featured: true,
    features: [
      '$49 in monthly credits (renews each month)',
      'Lifetime 20% boost — credits stack up',
      'Extra 10% off when you buy more credits',
      'Priority generation queue',
      'Multiple simultaneous generations',
      'Full Content Creator Templates Library',
      'DaVinci Resolve + Adobe Premiere plugins',
      'Cancel anytime — no lock-in',
    ],
    cta: 'Start Monthly Pro',
    note: 'Most creators recoup the cost in the first project.',
  },
]
</script>

<template>
  <section id="pricing" aria-labelledby="pricing-heading" class="py-20 bg-surface-alt border-t border-white/[0.05]">
    <div class="wrap">

      <div class="reveal flex items-center gap-[10px] mb-5">
        <span aria-hidden="true" class="w-8 h-[2px] bg-brand rounded-[1px] inline-block" />
        <span class="overline">Pricing</span>
      </div>

      <!-- Headline -->
      <div class="pricing-header reveal mb-14">
        <h2 id="pricing-heading" class="section-headline text-white">
          Simple pricing.<br /><span class="text-[#555]">No surprises.</span>
        </h2>
        <div>
          <p class="text-[17px] leading-[1.8] text-dim mb-3">
            $39/month replaces $167+ in individual subscriptions.
            Or grab a one-time credit pack if you prefer flexibility.
          </p>
          <p class="text-[14px] text-faint">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>

      <!-- Plans grid -->
      <div class="plans-grid">
        <div v-for="(plan, i) in plans" :key="plan.name"
          :class="['reveal', `d${i+1}`, plan.featured ? 'plan-featured' : 'plan-standard']">

          <!-- Featured glow -->
          <div v-if="plan.featured" aria-hidden="true" class="featured-glow" />

          <!-- Tag -->
          <div class="inline-block py-[5px] px-3 rounded-full text-[11px] font-bold tracking-[0.08em] uppercase mb-5"
            :class="plan.featured
              ? 'bg-brand/15 text-brand border border-brand/30'
              : 'bg-white/[0.05] text-muted border border-white/[0.08]'">
            {{ plan.tag }}
          </div>

          <div class="mb-[6px] text-[15px] font-bold text-muted">{{ plan.name }}</div>

          <!-- Price -->
          <div class="flex items-baseline gap-1 mb-2">
            <span class="text-[64px] font-black tracking-[-0.04em] text-white leading-none">{{ plan.price }}</span>
            <span class="text-[16px] text-muted font-medium">{{ plan.period }}</span>
          </div>

          <div class="text-[14px] text-dim mb-1">{{ plan.value }}</div>
          <div class="text-[13px] font-semibold mb-8" :class="plan.featured ? 'text-brand' : 'text-muted'">{{ plan.saving }}</div>

          <!-- CTA -->
          <a href="#" :class="plan.featured ? 'btn-primary' : 'btn-outline'"
            class="w-full justify-center box-border"
            :style="`margin-bottom:${plan.note ? 12 : 32}px;`">
            {{ plan.cta }}
            <svg aria-hidden="true" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
          <div v-if="plan.note" class="text-[12px] text-faint text-center mb-7">{{ plan.note }}</div>

          <!-- Divider -->
          <div class="h-px bg-white/[0.07] mb-7" />

          <!-- Feature list -->
          <ul class="list-none flex flex-col gap-3">
            <li v-for="feat in plan.features" :key="feat" class="flex items-start gap-[10px] text-[14px] text-dim">
              <div class="check-icon">
                <svg aria-hidden="true" width="8" height="8" fill="none" stroke="#ff5c00" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              {{ feat }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Guarantee bar -->
      <div class="reveal mt-5 py-5 px-7 bg-surface border border-white/[0.07] rounded-xl flex items-center justify-between flex-wrap gap-4">
        <div class="flex items-center gap-3">
          <span aria-hidden="true" class="text-[24px]">🛡️</span>
          <div>
            <div class="text-[14px] font-bold text-white">100% Money-Back Guarantee</div>
            <div class="text-[13px] text-muted">Cancel within 30 days for a full refund on any unused credits. Once you spend credits, they're used — like gas in a car.</div>
          </div>
        </div>
        <div class="flex flex-col gap-1 text-right">
          <div class="text-[12px] text-faint">No risk. No commitment.</div>
          <div class="text-[12px] text-faint">Cancel anytime, instantly.</div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pricing-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: end;
}

.plans-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.plan-standard {
  border-radius: 16px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  background: #0c0c10;
  border: 1px solid rgba(255,255,255,0.07);
}

.plan-featured {
  border-radius: 16px;
  padding: 40px;
  position: relative;
  overflow: hidden;
  background: #0f0f14;
  border: 1px solid #ff5c00;
}

.featured-glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,92,0,0.15) 0%, transparent 70%);
  pointer-events: none;
}

@media (max-width: 768px) {
  .pricing-header {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .plans-grid {
    grid-template-columns: 1fr;
  }

  /* Show featured plan first on mobile */
  .plans-grid > :first-child {
    order: 2;
  }

  .plans-grid > :last-child {
    order: 1;
  }
}
</style>
