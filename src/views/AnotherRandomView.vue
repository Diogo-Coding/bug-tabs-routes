<template>
  <ion-page>
    <ion-content>
      <div class="preView">
        <div class="background-page">
          <div>
            <ion-title>Default Page</ion-title>
          </div>
          <ion-label>{{ $route.path }}</ion-label>
          <ion-button @click="redirect('/tabs/tab3')">Go to Tab 3</ion-button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonTitle, IonLabel, IonButton } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirect(path) {
  router.push(path);
}

</script>

<style scoped>
.preView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-height: calc(100vh - var(--ion-safe-area-top) - var(--ion-safe-area-bottom));
}
.background-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 32px;
  gap: 8px;
  height: 200px;
  width: 200px;
  border-radius: 12px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
}
.preView ion-title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>