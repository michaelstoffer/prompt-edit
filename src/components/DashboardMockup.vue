<template>
  <section aria-labelledby="dashboard-heading" class="py-[100px] pb-20 relative overflow-hidden">

    <div class="wrap">
      <div class="reveal text-center mb-12">
        <p class="text-[13px] font-bold tracking-[0.12em] uppercase text-brand mb-3">The platform</p>
        <h2 id="dashboard-heading" class="section-headline text-white">Everything in one dashboard.</h2>
      </div>

      <!-- Browser frame -->
      <div role="img" aria-label="Screenshot of the PromptEdit dashboard showing AI generation tools, a sidebar, output cards, and credit balance" class="reveal d1 browser-frame">

        <!-- Browser chrome -->
        <div aria-hidden="true" class="chrome">
          <div class="flex items-center gap-[6px]">
            <span class="dot bg-[#ff5757]" />
            <span class="dot bg-[#ffbd2e]" />
            <span class="dot bg-[#28c840]" />
          </div>
          <div class="address-bar">
            <span class="text-[#666] text-[11px] mr-[6px]">🔒</span>
            <span class="text-muted text-[12px]">promptedit.com/dashboard</span>
          </div>
          <div class="w-[52px]" />
        </div>

        <!-- App shell -->
        <div aria-hidden="true" class="app-shell">

          <!-- Sidebar -->
          <div class="sidebar">
            <div class="p-4 pb-5 pt-4">
              <div class="w-7 h-7 rounded-[7px] bg-brand flex items-center justify-center text-[14px] mb-5">⚡</div>
              <div class="flex flex-col gap-1">
                <div v-for="item in sidebarItems" :key="item.label"
                  class="flex items-center gap-2 py-[7px] px-2 rounded-[6px] text-[11px] font-semibold cursor-pointer"
                  :class="item.active ? 'bg-brand/15 text-brand' : 'text-subtle'">
                  <span>{{ item.icon }}</span>
                  <span class="sidebar-label">{{ item.label }}</span>
                </div>
              </div>
            </div>
            <div class="mt-auto p-3 border-t border-white/[0.06]">
              <div class="bg-brand/10 border border-brand/20 rounded-[6px] p-[10px] px-[10px]">
                <div class="text-[10px] text-muted mb-[2px]">Credit balance</div>
                <div class="text-[15px] font-black text-brand tracking-[-0.03em]">$110</div>
              </div>
            </div>
          </div>

          <!-- Main content -->
          <div class="main-content">

            <!-- Prompt area -->
            <div class="p-4 px-5 border-b border-white/[0.06]">
              <div class="text-[10px] font-bold tracking-[0.08em] uppercase text-subtle mb-2">Generate with AI</div>
              <div class="bg-surface-alt border border-white/10 rounded-lg py-[10px] px-[14px] mb-[10px] flex items-center justify-between">
                <span class="text-[12px] text-faint">Cinematic opening shot at golden hour, lens flare, 4K...</span>
                <div class="w-[2px] h-[14px] bg-brand rounded-[1px] cursor-blink" />
              </div>
              <div class="flex items-center gap-[6px] flex-wrap">
                <div v-for="m in models" :key="m.name"
                  class="inline-flex items-center gap-[5px] py-1 px-[10px] rounded-full text-[10px] font-bold"
                  :class="m.active
                    ? 'bg-brand/15 border border-brand/40 text-brand'
                    : 'bg-[#111] border border-white/[0.08] text-subtle'">
                  <span class="w-[5px] h-[5px] rounded-full" :style="`background:${m.color};`" />
                  {{ m.name }}
                </div>
                <div class="ml-auto bg-brand text-white py-[5px] px-[14px] rounded-[6px] text-[11px] font-bold cursor-pointer whitespace-nowrap">
                  Generate →
                </div>
              </div>
            </div>

            <!-- Output grid -->
            <div class="output-grid">
              <div v-for="card in outputCards" :key="card.label" class="output-card" :style="`background:${card.gradient};`">
                <div class="absolute inset-0 p-[10px] flex flex-col justify-between">
                  <div class="flex justify-between items-start">
                    <span class="text-[14px]">{{ card.icon }}</span>
                    <div class="w-[6px] h-[6px] rounded-full" :style="`background:${card.accent};box-shadow:0 0 6px ${card.accent};`" />
                  </div>
                  <div>
                    <div class="text-[10px] font-bold text-white">{{ card.label }}</div>
                    <div class="text-[9px] text-muted mt-[1px]">{{ card.meta }}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- Right panel -->
          <div class="right-panel">
            <div class="text-[10px] font-bold tracking-[0.08em] uppercase text-subtle mb-3">Recent generations</div>
            <div class="flex flex-col gap-[6px]">
              <div v-for="item in recentItems" :key="item.label"
                class="flex items-center gap-2 p-2 bg-surface-alt rounded-[6px] border border-white/[0.05]">
                <div class="w-7 h-7 rounded-[4px] shrink-0" :style="`background:${item.gradient};`" />
                <div>
                  <div class="text-[10px] font-semibold text-[#ccc]">{{ item.label }}</div>
                  <div class="text-[9px] text-subtle mt-[1px]">{{ item.meta }}</div>
                </div>
              </div>
            </div>

            <div class="mt-4 pt-4 border-t border-white/[0.06]">
              <div class="text-[10px] font-bold tracking-[0.08em] uppercase text-subtle mb-2">Credit usage</div>
              <div class="h-1 bg-white/[0.06] rounded-[2px] overflow-hidden mb-1">
                <div class="w-[23%] h-full bg-brand rounded-[2px]" />
              </div>
              <div class="flex justify-between">
                <span class="text-[9px] text-subtle">$25 used</span>
                <span class="text-[9px] text-brand">$85 left</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
const sidebarItems = [
  { icon: '🎬', label: 'AI Video', active: true },
  { icon: '🖼️', label: 'AI Image', active: false },
  { icon: '🎙️', label: 'AI Audio', active: false },
  { icon: '📦', label: 'Templates', active: false },
  { icon: '🔌', label: 'Plugins', active: false },
]

const models = [
  { name: 'Veo', color: '#ff5c00', active: true },
  { name: 'KlingAI', color: '#4d8fff', active: false },
  { name: 'Nano Banana', color: '#9933ff', active: false },
]

const outputCards = [
  { label: 'Cinematic Opening', meta: 'Veo · 4K · 10s', icon: '🎬', accent: '#ff5c00', gradient: 'linear-gradient(135deg,#1a0800,#3d1400)' },
  { label: 'Brand Ad Reel', meta: 'KlingAI · 1080p', icon: '📱', accent: '#4d8fff', gradient: 'linear-gradient(135deg,#000d24,#001d4a)' },
  { label: 'Intro Animation', meta: 'Veo · 4K · 5s', icon: '✨', accent: '#9933ff', gradient: 'linear-gradient(135deg,#0d0014,#230038)' },
  { label: 'Product Showcase', meta: 'KlingAI · 4K', icon: '🛍️', accent: '#00cc66', gradient: 'linear-gradient(135deg,#000a08,#00261c)' },
]

const recentItems = [
  { label: 'Sunset Drive', meta: 'Veo · 4K · 2m ago', gradient: 'linear-gradient(135deg,#3d1400,#1a0800)' },
  { label: 'YT Thumbnail', meta: 'DALL·E 3 · 5m ago', gradient: 'linear-gradient(135deg,#001d4a,#000d24)' },
  { label: 'Voice Clone', meta: 'ElevenLabs · 8m ago', gradient: 'linear-gradient(135deg,#00261c,#000a08)' },
]
</script>

<style scoped>
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.cursor-blink { animation: blink 1s step-end infinite; }

.browser-frame {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05);
}

.chrome {
  background: #1a1a1e;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: inline-block;
}

.address-bar {
  background: #0c0c10;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  min-width: 240px;
}

.app-shell {
  display: grid;
  grid-template-columns: 140px 1fr 160px;
  background: #0c0c10;
  min-height: 420px;
}

.sidebar {
  background: #101014;
  border-right: 1px solid rgba(255,255,255,0.06);
  display: flex;
  flex-direction: column;
}

.main-content {
  display: flex;
  flex-direction: column;
}

.output-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 12px 20px 16px;
  flex: 1;
}

.output-card {
  border-radius: 8px;
  position: relative;
  min-height: 100px;
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}

.right-panel {
  border-left: 1px solid rgba(255,255,255,0.06);
  padding: 16px 14px;
  background: #0e0e12;
}

@media (max-width: 900px) {
  .app-shell {
    grid-template-columns: 100px 1fr;
    min-height: auto;
  }

  .right-panel {
    display: none;
  }

  .sidebar-label {
    display: none;
  }
}

@media (max-width: 600px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }

  .address-bar {
    min-width: 140px;
  }
}
</style>
