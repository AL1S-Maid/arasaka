<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import axios from 'axios'

interface Article {
  class: string
  title: string
  txt: string
  by: string
  start: string
  share: string
}

const articleList = ref<Article[]>([])

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/news')
    articleList.value = res.data
  } catch (err) {
    console.error('Failed to fetch articles', err)
  }
})
</script>

<template>
  <div class="A-main">
    <article class="a-container" v-slide-in>
      <div class="a-item" v-for="(item, index) in articleList" :key="index" :class="item.class">
        <div class="warpper">
          <span class="title">{{ item.title }}</span>
          <p class="txt">
            {{ item.txt }}
          </p>
          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar
                  color="grey-darken-3"
                  image="http://localhost:3000/static/icons/Arasaka-logo.png"
                ></v-avatar>
              </template>

              <v-list-item-title>by：{{ item.by }}</v-list-item-title>
              <v-list-item-subtitle>Arasaka</v-list-item-subtitle>
              <template v-slot:append>
                <div class="justify-self-end">
                  <v-icon class="me-1" icon="mdi-heart"></v-icon>
                  <span class="subheading me-2">{{ item.start }}</span>
                  <span class="me-1">·</span>
                  <v-icon class="me-1" icon="mdi-share-variant"></v-icon>
                  <span class="subheading">{{ item.share }}</span>
                </div>
              </template>
            </v-list-item>
          </v-card-actions>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base' as *;
.A-main {
  @include flex-style;
  flex-direction: column;
  .a-container {
    width: 80vw;
    height: 100vh;
    display: grid;
    margin-top: 10vh;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-flow: dense;
    gap: 1.75vh;
    .a-item {
      cursor: pointer;
      @include flex-style;
      border-radius: 10px;
      background: rgba(255, 0, 60, 0.05);
      box-shadow: 0 0 15px rgba(255, 0, 60, 0.3);
      transition: all 0.3s ease;
      border: 2px solid #ff003c;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
      }
      .warpper {
        flex-direction: column;
        @include flex-style;
        gap: 1vh;
        color: #fff;
        .v-card-actions {
          width: 100%;
        }
        .title {
          font-weight: 600;
          text-align: center;
        }
        .txt {
          width: 90%;
          font-weight: 500;
        }
      }
    }
    .a-item-1 {
      grid-column: span 3;
      flex-direction: column;
      .warpper {
        gap: 1vh;
        .v-card-actions {
          width: 90%;
        }
        .title {
          font-weight: 600;
          font-size: 1.2rem;
        }
        .txt {
          @include flex-style;
          flex-direction: column;
          font-size: 1rem;
          width: 85%;
          height: 50%;
        }
      }
    }
    .a-item-2 {
      align-items: end;
      grid-row: span 2;
      .warpper {
        width: 100%;
        height: 80%;
        gap: 1vw;
        .title {
          font-size: 1rem;
          font-weight: 600;
        }
        .txt {
          font-size: 1rem;
        }
      }
      @media (max-width: 768px) {
        grid-row: auto;
      }
    }
    .a-item-3 {
      grid-column: span 2;
      flex-direction: column;
      justify-content: flex-end;
      .warpper {
        height: 90%;
        width: 100%;
        gap: 0.8vh;
        .title {
          font-size: 1rem;
          font-weight: 600;
        }
      }
    }
    .a-item-4 {
      flex-direction: column;
      justify-content: flex-end;
      .warpper {
        height: 85%;
        width: 100%;
        gap: 0.8vh;
      }
    }
    .a-item-6 {
      grid-column: span 2;
      .warpper {
        gap: 2vh;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: 991px) {
    .a-container {
      width: 90%;
      height: auto;
      grid-template-rows: repeat(auto-fill, minmax(1fr, 1fr));
      grid-template-columns: 1fr;
      .a-item {
        grid-column: unset;
        .warpper {
          height: 100%;
          width: 100%;
          span {
            font-size: 0.8rem !important;
          }
          p {
            font-size: 0.8rem !important;
            height: auto !important;
          }
        }
      }
    }
  }
}
</style>