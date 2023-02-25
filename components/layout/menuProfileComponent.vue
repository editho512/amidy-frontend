<template>
  <div>
    <ul class=" text-sm font-medium  border rounded-lg  border-white text-white bg-third">
      <itemSidebarProfileComponent position="top" name="profile" url="profile">Profile</itemSidebarProfileComponent>
      <itemSidebarProfileComponent name="order" url="order">Orders</itemSidebarProfileComponent>
      <itemSidebarProfileComponent position="bottom" url="setting" name="setting"
        v-if="$auth.user != undefined && $auth.user.type != 'Customer'">
        Settings</itemSidebarProfileComponent>
    </ul>

  </div>
</template>

<script>
import itemSidebarProfileComponent from "./itemSidebarProfileComponent.vue"
export default {
  components: { itemSidebarProfileComponent }
}
</script >
