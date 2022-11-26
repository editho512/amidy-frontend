<template>
  <div>
    <div class="card mt-3 h-100">
      <div class="card-header h-1/4 py-2">
        <slot name="header-card"></slot>
      </div>
      <div class="card-body h-max py-2">
        <slot name="body-card"></slot>
      </div>
      <div class="card-footer h-1/4 py-2">
          <slot name="footer-card"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {

  }

</script>
