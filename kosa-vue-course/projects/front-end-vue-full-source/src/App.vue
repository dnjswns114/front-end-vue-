<template>
  <div className="d-flex flex-column vh-100">
    <AppHeader />
    <div className="flex-grow-1 container-fluid">
      <div className="row">

        <div className="col-md-4 col-lg-3 p-2">
          <AppMenu />
        </div>

        <div className="col-md-8 col-lg-9 p-2">
          <router-view/>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppMenu from "@/components/AppMenu.vue";
</script>

<style>
</style>
