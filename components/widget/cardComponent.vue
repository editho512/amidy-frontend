<template>
  <div>
    <div class="card mt-3">
      <div class="card-header">
        <slot name="header-card"></slot>
      </div>
      <div class="card-body">
        <div class="flex justify-center">
          <slot name="body-card"></slot>
        </div>
      </div>
      <div class="card-footer">
          <slot name="footer-card"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  }

</script>
