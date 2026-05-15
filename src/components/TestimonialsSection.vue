<script setup lang="ts">
const testimonials = [
  {
    quote: "My daughter and I got more editing work done today in 3 hours than we normally do in 3 days! PromptEdit is a complete game changer.",
    name: "Hilda Schlueter",
    role: "Online Course Creator",
    initials: "HS",
    color: "#ff5c00",
  },
  {
    quote: "My videos wouldn't look HALF as good without the Content Creator Templates Library. It's like having a professional design team on demand.",
    name: "Matt Lilley",
    role: "ContentCreator.com Student",
    initials: "ML",
    color: "#4d8fff",
  },
  {
    quote: "The Content Creator Templates Library is fantastic! I don't need any other digital asset subscriptions anymore. This is the only tool I need.",
    name: "Brady Hales",
    role: "ContentCreator.com Student",
    initials: "BH",
    color: "#9933ff",
  },
]
</script>

<template>
  <section aria-labelledby="testimonials-heading" class="py-20 relative overflow-hidden">

    <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-b from-transparent via-brand/[0.03] to-transparent pointer-events-none" />

    <div class="wrap">

      <div class="reveal flex items-center gap-[10px] mb-5">
        <span aria-hidden="true" class="w-8 h-[2px] bg-brand rounded-[1px] inline-block" />
        <span class="overline">Real creators. Real results.</span>
      </div>

      <h2 id="testimonials-heading" class="section-headline reveal text-white mb-16">
        Don't take our word for it.
      </h2>

      <div class="testimonials-grid">
        <div v-for="(t, i) in testimonials" :key="t.name"
          :class="['reveal', `d${i+1}`]"
          class="card p-9 flex flex-col justify-between min-h-[260px]">

          <!-- Stars -->
          <div>
            <div role="img" aria-label="5 out of 5 stars" class="flex gap-[3px] mb-6">
              <span v-for="_ in 5" :key="_" aria-hidden="true" class="star">★</span>
            </div>
            <blockquote class="text-[17px] leading-[1.7] text-[#bbb] font-normal mb-8 italic">
              "{{ t.quote }}"
            </blockquote>
          </div>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
            <div class="author-avatar shrink-0" :style="`color:${t.color};border-color:${t.color}40;background:${t.color}26;`">
              {{ t.initials }}
            </div>
            <div>
              <div class="text-[14px] font-bold text-white">{{ t.name }}</div>
              <div class="text-[12px] text-faint mt-[2px]">{{ t.role }}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 800;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .testimonials-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
