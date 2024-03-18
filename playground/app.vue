<script setup lang="ts">
import { createBottomSheet, createDialog, notifyInfo, notifySuccess } from 'vuetify3-dialog'

function showNotify() {
  notifySuccess('Info snackbar nofity message')
}

function showWarnDialog() {
  createDialog({
    text: 'Hello world!',
    title: 'My warn dialog message',
    buttons: [
      { title: 'ok', key: 'ok' },
      { title: 'cancel', key: 'cancel' },
    ],
  }).then((key) => {
    notifyInfo(`Selected: ${key}`)
  }).catch((err) => {
    notifyInfo(`Error: ${err}`)
  })
}

function showBottomSheet() {
  createBottomSheet({
    title: 'My bottom sheet title',
    text: 'Hello world!',
    /* items: [
      { title: 'Item 1', value: 'item1' },
      { title: 'Item 2', value: 'item2' },
      { title: 'Item 3', value: 'item3' },
    ], */
    dialogOptions: {
      text: 'Hello world!',
      title: 'My warn dialog message',
      buttons: [
        { title: 'ok', key: 'ok' },
        { title: 'cancel', key: 'cancel' },
      ],
    },
  }).then((key) => {
    notifyInfo(`Selected: ${key}`)
  }).catch((err) => {
    notifyInfo(`Error: ${err}`)
  })
}
</script>

<template>
  <v-app>
    <v-app-bar color="primary" density="compact" title="Nuxt module playground!" />
    <v-layout class="d-flex flex-column mt-6 align-center justify-center pa-10" fluid>
      <v-btn class="ma5" color="primary" data-testid="notify-button" @click="showNotify">
        notify
      </v-btn>
    </v-layout>
    <v-layout class="d-flex flex-column mt-6 align-center justify-center pa-10" fluid>
      <v-btn class="ma5" color="primary" data-testid="dialog-button" @click="showWarnDialog">
        dialog
      </v-btn>
    </v-layout>
    <v-layout class="d-flex flex-column mt-6 align-center justify-center pa-10" fluid>
      <v-btn class="ma5" color="primary" data-testid="bottom-sheet-button" @click="showBottomSheet">
        bottom sheet
      </v-btn>
    </v-layout>
  </v-app>
</template>
