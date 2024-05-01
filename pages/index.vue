<template>
   <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <!-- Primary column -->
        <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
          
        </section>
      </main>

      <!-- Secondary column (hidden on smaller screens) -->
      <aside class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
        <!-- Your content -->
      </aside>
    </div>


</template>

<script>


 export default {
    head() {
      return {
        script: [
          {
            src:
              'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
          }
        ],
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          }
        ]
      }
    },
    layout: 'default',
  }
</script>
