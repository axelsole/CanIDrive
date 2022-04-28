<template>
<header>

  <router-link to="/">
    <h1>Can I Drive?</h1>
  </router-link>

    <router-link to="/ferrari">
    <button>Ferrari</button>
  </router-link>

      <router-link to="/quotes">
    <button>Quotes</button>
  </router-link>

</header>

  <router-view />
</template>