<script lang="ts" setup>
definePageMeta({
  alias: ['/'],
})
</script>

<template>
    <ion-page>
      <ion-content>
        <ion-tabs>
          <ion-router-outlet />
          
          <template #bottom>
<ion-tab-bar >
            <ion-tab-button tab="home" href="/tabs/home">
              <ion-icon :icon="ioniconsHomeOutline" />
              <ion-label>Home</ion-label>
            </ion-tab-button>
  
            <ion-tab-button tab="settings" href="/tabs/settings">
              <ion-icon :icon="ioniconsSettingsOutline" />
              <ion-label>Settings</ion-label>
            </ion-tab-button>
  
          </ion-tab-bar>
</template>
        </ion-tabs>
      </ion-content>
    </ion-page>
  </template>