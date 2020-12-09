<template>
      <div class="sidebar-panel">
        <slot></slot>
      </div>
</template>
<style>
.sidebar-panel {
  overflow-y: auto;
  background-color: #2c3e50;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 999;
  padding: 3rem 20px 2rem 20px;
  width: 300px;
}
</style>
