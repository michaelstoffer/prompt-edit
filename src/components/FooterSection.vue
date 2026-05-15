<script setup lang="ts">
const links = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Earnings Disclaimer', href: '#' },
  { label: 'Contact', href: 'mailto:support@promptedit.com' },
]
</script>

<template>
  <footer class="border-t border-white/[0.06] py-9 bg-[#08080c]">
    <div class="wrap flex items-center justify-between flex-wrap gap-4">
      <div class="flex items-center gap-[10px]">
        <svg aria-hidden="true" width="22" height="22" viewBox="0 0 28 28" fill="none">
          <rect width="28" height="28" rx="7" fill="#ff5c00"/>
          <path d="M9 19V13l5-4 5 4v6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="14" cy="10" r="2" fill="white"/>
        </svg>
        <span class="font-extrabold text-[15px] text-white">PromptEdit</span>
        <span class="text-[12px] text-[#888] ml-1">© {{ new Date().getFullYear() }}</span>
      </div>

      <nav aria-label="Footer links">
        <ul class="flex items-center gap-6 flex-wrap list-none p-0 m-0">
          <li v-for="link in links" :key="link.label">
            <a :href="link.href"
              class="text-[12px] text-faint no-underline transition-colors duration-200 hover:text-[#aaa]">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>
