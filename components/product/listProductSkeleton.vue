<template>

  <div role="status" class="mt-8 animate-pulse">

    <tableComponent>
      <template #table-header>
        <tr>
          <th scope="col" class="text-lg  font-extrabold px-6 pb-4 text-left flex max-sm:justify-center">
            <div class="inline-block h-3.5 bg-gray-200 rounded-full  w-16 mb-1"></div>

          </th>
          <th scope="col" class="text-lg   font-extrabold px-6 pb-4 text-left max-md:hidden">
            <div class="h-3.5 bg-gray-200 rounded-full  w-24 mb-1"></div>
          </th>
          <th scope="col" class="text-lg   font-extrabold px-6 pb-4 text-left max-lg:hidden">
            <div class="h-3.5 bg-gray-200 rounded-full  w-40 mb-1"></div>
          </th>
          <th scope="col" class="text-lg  font-extrabold px-6 pb-4 text-left max-sm:hidden">
            <div class="h-3.5 bg-gray-200 rounded-full  w-24 mb-1"></div>
          </th>
        </tr>
      </template>
      <template #table-body>
        <tr class="">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div class="text-left max-lg:text-center">
              <div class="inline-block h-3 bg-gray-200 rounded-full  w-28 mb-1"></div>
            </div>
            <div class="hidden max-lg:block mt-1 text-center">
              <div class="inline-block h-2.5 bg-gray-200 rounded-full  w-40 mb-1"></div>
            </div>
            <div class="hidden max-md:block text-center">
              <div class="inline-block h-2 bg-gray-200 rounded-full  w-32 mb-1"></div>
            </div>
            <div class="hidden max-sm:block text-center">
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">
            <div class="inline-block h-2.5 bg-gray-200 rounded-full  w-16 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-lg:hidden">
            <div class="inline-block h-3 bg-gray-200 rounded-full  w-48 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-sm:hidden">
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
          </td>
        </tr>

        <tr class="">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div class="text-left max-lg:text-center">
              <div class="inline-block h-2 bg-gray-200 rounded-full  w-24 mb-1"></div>
            </div>
            <div class="hidden max-lg:block mt-1 text-center">
              <div class="inline-block h-3 bg-gray-200 rounded-full  w-48 mb-1"></div>
            </div>
            <div class="hidden max-md:block text-center">
              <div class="inline-block h-3 bg-gray-200 rounded-full  w-28 mb-1"></div>
            </div>
            <div class="hidden max-sm:block text-center">
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">
            <div class="inline-block h-3 bg-gray-200 rounded-full  w-24 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-lg:hidden">
            <div class="inline-block h-2 bg-gray-200 rounded-full  w-24 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-sm:hidden">
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
          </td>
        </tr>

        <tr class="">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div class="text-left max-lg:text-center">
              <div class="inline-block h-3 bg-gray-200 rounded-full  w-24 mb-1"></div>
            </div>
            <div class="hidden max-lg:block mt-1 text-center">
              <div class="inline-block h-2 bg-gray-200 rounded-full  w-40 mb-1"></div>
            </div>
            <div class="hidden max-md:block text-center">
              <div class="inline-block h-2.5 bg-gray-200 rounded-full  w-28 mb-1"></div>
            </div>
            <div class="hidden max-sm:block text-center">
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">
            <div class="inline-block h-2 bg-gray-200 rounded-full  w-32 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-lg:hidden">
            <div class="inline-block h-2.5 bg-gray-200 rounded-full  w-24 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-sm:hidden">
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
          </td>
        </tr>

        <tr class="">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div class="text-left max-lg:text-center">
              <div class="inline-block h-2 bg-gray-200 rounded-full  w-16 mb-1"></div>
            </div>
            <div class="hidden max-lg:block mt-1 text-center">
              <div class="inline-block h-3 bg-gray-200 rounded-full  w-28 mb-1"></div>
            </div>
            <div class="hidden max-md:block text-center">
              <div class="inline-block h-2.5 bg-gray-200 rounded-full  w-48 mb-1"></div>
            </div>
            <div class="hidden max-sm:block text-center">
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">
            <div class="inline-block h-2 bg-gray-200 rounded-full  w-32 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-lg:hidden">
            <div class="inline-block h-2 bg-gray-200 rounded-full  w-28 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-sm:hidden">
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
          </td>
        </tr>
        <tr class="">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            <div class="text-left max-lg:text-center">
              <div class="inline-block h-2.5 bg-gray-200 rounded-full  w-24 mb-1"></div>
            </div>
            <div class="hidden max-lg:block mt-1 text-center">
              <div class="inline-block h-2 bg-gray-200 rounded-full  w-48 mb-1"></div>
            </div>
            <div class="hidden max-md:block text-center">
              <div class="inline-block h-3 bg-gray-200 rounded-full  w-28 mb-1"></div>
            </div>
            <div class="hidden max-sm:block text-center">
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
              <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-md:hidden">
            <div class="inline-block h-2 bg-gray-200 rounded-full  w-32 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-lg:hidden">
            <div class="inline-block h-3 bg-gray-200 rounded-full  w-48 mb-1"></div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap max-sm:hidden">
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
            <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1"></div>
          </td>
        </tr>

      </template>
    </tableComponent>

    <div class="flex justify-end mt-2">
      <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1 mx-2"></div>
      <div class="inline-block h-8 bg-gray-200 rounded-md  w-24 mb-1 mx-2"></div>
      <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1 mx-2"></div>
      <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1 mx-2"></div>
      <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1 mx-2"></div>
      <div class="inline-block h-8 bg-gray-200 rounded-md  w-24 mb-1 mx-2"></div>
      <div class="inline-block h-8 bg-gray-200 rounded-md  w-8 mb-1 mx-2"></div>
    </div>

  </div>

</template>

<script>
import tableComponent from '../widget/tableComponent.vue';
export default {
  components: { tableComponent }
}
</script>
