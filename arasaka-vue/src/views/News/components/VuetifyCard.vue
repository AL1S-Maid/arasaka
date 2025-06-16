<script setup lang="ts">
import type { NumberAnimationInst } from 'naive-ui'
import { ref } from 'vue'

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)
</script>

<template>
  <v-container v-slide-in>
    <v-card
      border="opacity-50 sm"
      class="mx-auto"
      max-width="360"
      rounded="xl"
      variant="text"
    >
      <template v-slot:title>
        <div class="text-caption font-weight-bold">Personnel</div>
      </template>

      <template v-slot:append>
        <v-chip
          border="success sm opacity-100"
          color="red"
          size="small"
          variant="text"
        >
          <v-icon icon="mdi-arrow-up" start></v-icon> 0.01%
        </v-chip>
      </template>

      <template v-slot:text>
        <div class="text-h4 font-weight-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
            <path fill="currentColor" fill-rule="evenodd" d="M7.5.875a3.625 3.625 0 0 0-1.006 7.109c-1.194.145-2.218.567-2.99 1.328c-.982.967-1.479 2.408-1.479 4.288a.475.475 0 1 0 .95 0c0-1.72.453-2.88 1.196-3.612c.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 1 0 .95 0c0-1.88-.497-3.32-1.48-4.288c-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 0 0 7.5.875M4.825 4.5a2.675 2.675 0 1 1 5.35 0a2.675 2.675 0 0 1-5.35 0" clip-rule="evenodd"/>
          </svg>
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="1592215" />
        </div>

        <small class="text-caption text-medium-emphasis d-flex justify-space-between align-center">
          <div>
            <span class="text-green">
              <v-avatar icon="mdi-arrow-up" size="small" variant="tonal"></v-avatar>
              + 
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="128" />
            </span>

            in the last year
          </div>

          <v-btn
            icon="mdi-arrow-right"
            size="x-small"
            variant="text"
            border
          ></v-btn>
        </small>
      </template>
    </v-card>
    <v-card
      border="opacity-50 sm"
      class="mx-auto"
      max-width="360"
      rounded="xl"
      variant="text"
    >
      <template v-slot:title> 
        <div class="text-caption font-weight-bold">Market Value</div>
      </template>

      <template v-slot:append>
        <v-chip
          border="success sm opacity-100"
          color="red"
          size="small"
          variant="text"
        >
          <v-icon icon="mdi-arrow-up" start></v-icon> 15%
        </v-chip>
      </template>

      <template v-slot:text>
        <div class="text-h4 font-weight-black">
          $
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="895639487389" />
        </div>

        <small class="text-caption text-medium-emphasis d-flex justify-space-between align-center">
          <div>
            <span class="text-green">
              <v-avatar icon="mdi-arrow-up" size="small" variant="tonal"></v-avatar>
              + $ 
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="8393295" />
            </span>

            in the last week
          </div>

          <v-btn
            icon="mdi-arrow-right"
            size="x-small"
            variant="text"
            border
          ></v-btn>
        </small>
      </template>
    </v-card>
    <v-card
      border="opacity-50 sm"
      class="mx-auto"
      max-width="360"
      rounded="xl"
      variant="text"
    >
      <template v-slot:title>
        <div class="text-caption font-weight-bold">Branch</div>
      </template>

      <template v-slot:append>
        <v-chip
          border="success sm opacity-100"
          color="red"
          size="small"
          variant="text"
        >
          <v-icon icon="mdi-arrow-up" start></v-icon> 16%
        </v-chip>
      </template>

      <template v-slot:text>
        <div class="text-h4 font-weight-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 9.01l.01-.011M14 9.01l.01-.011M10 13.01l.01-.011m3.99.011l.01-.011M10 17.01l.01-.011m3.99.011l.01-.011M6 20.4V5.6a.6.6 0 0 1 .6-.6H12V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6"/>
          </svg>
          <n-number-animation ref="numberAnimationInstRef" :from="0" :to="18" />
        </div>

        <small class="text-caption text-medium-emphasis d-flex justify-space-between align-center">
          <div>
            <span class="text-green">
              <v-avatar icon="mdi-arrow-up" size="small" variant="tonal"></v-avatar>
              + 
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="3" />
            </span>

            in the last year
          </div>

          <v-btn
            icon="mdi-arrow-right"
            size="x-small"
            variant="text"
            border
          ></v-btn>
        </small>
      </template>
    </v-card>
  </v-container>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.v-container {
  @include flex-style;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;
  }
  .v-card {
    background-color: #09090b;
    color: #fff;
    filter: drop-shadow(0 0 5px red);
    @media (max-width: 768px) {
      min-width: 320px !important;
    }
    .v-card-item {
      .v-card-item__append {
        .border-success {
          border-color: #ff003c !important
        }
      }
    }
    .v-card-text {
      .text-h4 {
        @include flex-style;
        justify-content: flex-start;
        gap: 10px;
      }
      .text-caption {
        color: #fff !important;
        .text-green {
          color: #ff003c !important;
        }
      }
    }
  }
}
</style>