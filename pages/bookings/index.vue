<template>
  <div class="flex-1 flex items-stretch">

    <main class="flex-1">

      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <!-- filters -->
        <div class="mt-8">
          <h3 class="text-sm leading-5 font-medium text-gray-500">
            Search bookings
          </h3>
          <div class="grid grid-cols-6 gap-5">
            <div class="mt-2
                      sm:col-span-1
                      lg:col-span-1">
              <div class="max-w-full flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  Start
                </span>
                <input type="text" name="username" id="username" autocomplete="username"
                  class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
              </div>
            </div>
            <div class="mt-2
                      sm:col-span-1
                      lg:col-span-1">
              <div class="max-w-full flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  End
                </span>
                <input type="text" name="username" id="username" autocomplete="username"
                  class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
              </div>

            </div>

            <div class="mt-2
                      sm:col-span-2
                      lg:col-span-2">
              <button type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/mail -->
                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                    clip-rule="evenodd" />
                </svg>
                Search bookings
              </button>
            </div>
          </div>
        </div>
        <!-- filters -->
        <!-- results component -->
        <div class="mt-8">

          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Odd row -->
                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Jane Cooper
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Regional Paradigm Technician
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          jane.cooper@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                      </tr>

                      <!-- Even row -->
                      <tr class="bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Cody Fisher
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Product Directives Officer
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          cody.fisher@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Owner
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                      </tr>

                      <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- results -->
      </div>
    </main>
  </div>
</template>
<script>
  export default {
    layout: "default",
  };

</script>
<style scoped>
</style>
