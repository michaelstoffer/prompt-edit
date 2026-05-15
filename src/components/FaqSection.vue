<script setup lang="ts">
import { ref } from 'vue'
const open = ref<number | null>(0)

const faqs = [
  { q: "What exactly is PromptEdit?", a: "PromptEdit is a marketplace and platform that gives video creators access to every major AI tool (image, video, audio generation) plus a library of 100,000+ professionally designed templates — all through one dashboard, on simple pay-as-you-go credits." },
  { q: "Do I need a subscription to start?", a: "No. You can purchase a one-time credit pack ($98 for $110 in credits) and use it whenever. Credits never expire. The monthly plan ($39/mo) is available if you want a regular credit top-up and extra perks, but it's entirely optional." },
  { q: "Can I use the generated content and templates commercially?", a: "Absolutely. Every AI generation and every template in our library comes with full commercial rights — no attribution required. Use them for client work, YouTube, ads, courses, anything." },
  { q: "Is the quality as good as using each tool separately?", a: "Yes. We connect directly to the same APIs used when you access these tools individually — Veo, KlingAI, ElevenLabs, DALL·E 3, etc. You get identical quality with none of the account juggling." },
  { q: "Are there download limits on the template library?", a: "None. Unlimited downloads of any asset in the library, as long as your subscription is active. The library includes 4,000+ LUTs, 60,000+ sound effects, 3,000+ text animations, and more." },
  { q: "Does it work with my editing software?", a: "Yes. We have plugins for DaVinci Resolve and Adobe Premiere Pro. All assets are exported in standard formats compatible with any NLE — Final Cut Pro, CapCut, Premiere, Resolve, and more." },
  { q: "What's the refund policy?", a: "We offer a 30-day money-back guarantee. If you're not satisfied, contact us within 30 days for a full refund on any unused credits. Once you've used credits to generate content, those credits are non-refundable — think of it like gas in a car." },
  { q: "Can I cancel my monthly subscription anytime?", a: "Yes, instantly. No hoops to jump through, no cancellation fees. Cancel from your account settings and you won't be charged again. You keep access until the end of your billing period." },
]
</script>

<template>
  <section id="faq" aria-labelledby="faq-heading" class="py-20 bg-surface-alt border-t border-white/[0.05]">
    <div class="wrap">

      <div class="reveal flex items-center gap-[10px] mb-5">
        <span aria-hidden="true" class="w-8 h-[2px] bg-brand rounded-[1px] inline-block" />
        <span class="overline">FAQ</span>
      </div>

      <div class="faq-grid">
        <div class="reveal">
          <h2 id="faq-heading" class="section-headline text-white">Got<br />questions?</h2>
          <p class="text-[16px] leading-[1.8] text-muted mt-6">
            Everything you need to know before getting started. Can't find your answer?
          </p>
          <a href="mailto:support@promptedit.com" class="inline-block mt-5 text-[14px] font-semibold text-brand no-underline">
            support@promptedit.com →
          </a>
        </div>

        <div class="reveal d1 border-t border-white/[0.07]">
          <div v-for="(faq, i) in faqs" :key="i" class="border-b border-white/[0.07]">
            <button @click="open = open === i ? null : i"
              :aria-expanded="open === i"
              :aria-controls="`faq-answer-${i}`"
              class="w-full flex items-start justify-between gap-6 py-[22px] bg-transparent border-none cursor-pointer text-left">
              <span class="text-[15px] font-semibold leading-[1.4] transition-colors duration-200"
                :class="open === i ? 'text-white' : 'text-[#aaa]'">{{ faq.q }}</span>
              <span aria-hidden="true"
                class="text-[20px] leading-none shrink-0 transition-all duration-[250ms] mt-[2px]"
                :class="open === i ? 'rotate-45 text-brand' : 'text-[#888]'">+</span>
            </button>
            <div :id="`faq-answer-${i}`" v-if="open === i" class="pb-[22px] text-[14px] leading-[1.8] text-muted max-w-[520px]">
              {{ faq.a }}
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 80px;
  align-items: start;
}

@media (max-width: 768px) {
  .faq-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
