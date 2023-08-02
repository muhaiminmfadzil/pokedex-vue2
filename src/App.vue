<template>
  <div class="bg-sky-50">
    <div class="p-8 h-screen max-w-5xl mx-auto">
      <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:cursor-pointer hover:shadow-lg">
          <div class="card-color flex flex-1 flex-col rounded-lg p-8">
            <div class="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-sky-200">
              <img class="h-24 w-24" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="" />
            </div>
            <h3 class="mt-6 text-sm font-medium text-sky-500">#001</h3>
            <h3 class="text-lg font-semibold text-sky-900">Bulbasaur</h3>
          </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:cursor-pointer hover:shadow-lg">
          <div class="card-color flex flex-1 flex-col rounded-lg p-8">
            <div class="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-sky-200">
              <img class="h-24 w-24" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png" alt="" />
            </div>
            <h3 class="mt-6 text-sm font-medium text-sky-500">#002</h3>
            <h3 class="text-lg font-semibold text-sky-900">Ivysaur</h3>
          </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:cursor-pointer hover:shadow-lg">
          <div class="card-color flex flex-1 flex-col rounded-lg p-8">
            <div class="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-sky-200">
              <img class="h-24 w-24" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="" />
            </div>
            <h3 class="mt-6 text-sm font-medium text-sky-500">#003</h3>
            <h3 class="text-lg font-semibold text-sky-900">Venosaur</h3>
          </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:cursor-pointer hover:shadow-lg">
          <div class="card-color flex flex-1 flex-col rounded-lg p-8">
            <div class="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-sky-200">
              <img class="h-24 w-24" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" alt="" />
            </div>
            <h3 class="mt-6 text-sm font-medium text-sky-500">#004</h3>
            <h3 class="text-lg font-semibold text-sky-900">Charmander</h3>
          </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:cursor-pointer hover:shadow-lg">
          <div class="card-color flex flex-1 flex-col rounded-lg p-8">
            <div class="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-sky-200">
              <img class="h-24 w-24" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png" alt="" />
            </div>
            <h3 class="mt-6 text-sm font-medium text-sky-500">#005</h3>
            <h3 class="text-lg font-semibold text-sky-900">Charmelion</h3>
          </div>
        </li>
        <li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:cursor-pointer hover:shadow-lg">
          <div class="card-color flex flex-1 flex-col rounded-lg p-8">
            <div class="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-sky-200">
              <img class="h-24 w-24" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" alt="" />
            </div>
            <h3 class="mt-6 text-sm font-medium text-sky-500">#006</h3>
            <h3 class="text-lg font-semibold text-sky-900">Charlizard</h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.card-color {
  background: linear-gradient(150deg, #7dd3fc 46%, transparent 46%);
}
</style>
