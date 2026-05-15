<script setup lang="ts">
const items = [
  'Veo', '·', 'KlingAI', '·', 'Nano Banana', '·', 'DALL·E 3', '·',
  'ElevenLabs', '·', 'Suno', '·', 'DaVinci Resolve', '·', 'Adobe Premiere', '·',
  'Stable Diffusion', '·', 'Kling 2.0', '·', 'MidJourney API', '·', 'Bark', '·',
]
</script>

<template>
  <div aria-label="Supported tools: Veo, KlingAI, Nano Banana, DALL·E 3, ElevenLabs, Suno, DaVinci Resolve, Adobe Premiere, Stable Diffusion, Kling 2.0, MidJourney API, Bark" class="hairline border-b border-white/[0.07] overflow-hidden py-4 bg-[#050505]">
    <div aria-hidden="true" class="flex animate-marquee whitespace-nowrap" style="width: max-content;">
      <template v-for="_ in 2" :key="_">
        <span v-for="item in items" :key="item + _"
          :class="['mx-4 text-xs', item === '·' ? 'text-[#555]' : 'text-[#777] font-medium tracking-wide']">
          {{ item }}
        </span>
      </template>
    </div>
    <div aria-hidden="true" class="absolute left-0 top-0 bottom-0 w-16 pointer-events-none" style="background: linear-gradient(90deg, #050505, transparent);" />
    <div aria-hidden="true" class="absolute right-0 top-0 bottom-0 w-16 pointer-events-none" style="background: linear-gradient(-90deg, #050505, transparent);" />
  </div>
</template>
