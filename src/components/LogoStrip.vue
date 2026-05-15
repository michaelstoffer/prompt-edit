<script setup lang="ts">
const tools = [
  { name: 'Veo', by: 'Google' },
  { name: 'KlingAI', by: 'AI Video' },
  { name: 'Nano Banana', by: 'Creative FX' },
  { name: 'ElevenLabs', by: 'Voice Clone' },
  { name: 'Suno', by: 'AI Music' },
  { name: 'DALL·E 3', by: 'OpenAI' },
  { name: 'Flux', by: 'Image Gen' },
  { name: 'Kling 2.0', by: 'AI Video' },
  { name: 'Stable Diffusion', by: 'Open Source' },
  { name: 'Bark', by: 'AI Audio' },
  { name: 'DaVinci Resolve', by: 'Plugin' },
  { name: 'Adobe Premiere', by: 'Plugin' },
]
</script>

<template>
  <div role="region" aria-label="Powered by: Veo, KlingAI, Nano Banana, ElevenLabs, Suno, DALL·E 3, Flux, Kling 2.0, Stable Diffusion, Bark, DaVinci Resolve, Adobe Premiere" class="border-t border-white/[0.06] border-b border-white/[0.06] bg-surface-alt overflow-hidden py-[18px] relative">
    <div aria-hidden="true" class="text-[10px] font-bold tracking-[0.15em] uppercase text-[#888] absolute left-6 top-1/2 -translate-y-1/2 z-[2] whitespace-nowrap">
      Powered by
    </div>

    <div aria-hidden="true" class="flex w-max marquee">
      <template v-for="_ in 2" :key="_">
        <div v-for="tool in tools" :key="tool.name + _"
          class="inline-flex items-center gap-2 mx-7">
          <div class="w-[6px] h-[6px] rounded-full bg-brand/50" />
          <span class="text-[13px] font-bold text-[#888] whitespace-nowrap">{{ tool.name }}</span>
          <span class="text-[10px] text-[#888]">{{ tool.by }}</span>
        </div>
      </template>
    </div>

    <!-- Fade edges -->
    <div aria-hidden="true" class="logo-fade-left" />
    <div aria-hidden="true" class="logo-fade-right" />
  </div>
</template>

<style scoped>
.logo-fade-left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 120px;
  background: linear-gradient(90deg, #0a0a0e, transparent);
  pointer-events: none;
  z-index: 1;
}
.logo-fade-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 120px;
  background: linear-gradient(-90deg, #0a0a0e, transparent);
  pointer-events: none;
  z-index: 1;
}
</style>
