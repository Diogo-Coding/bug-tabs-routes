<template>
  <ion-app>
    <ion-router-outlet :animation="fadeAnimation" />
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { fadeAnimation } from './utilities/animations.js'
</script>
