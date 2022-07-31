<script setup>
import SocialNav from '../components/socials/SocialNav.vue'
import ShortIntroduction from '../components/ShortIntroduction.vue'
</script>

<template>
  <div id="home-content">

    <img src="@/assets/components/fillerAnimation/gears.svg" />
    <ShortIntroduction class="ShortIntroduction" />

    <main>
        <div> Formations 
		      <font-awesome-icon class="cat-icon" :icon="['fas','graduation-cap']" color="var(--color-primary)" /> </div>
        <div> Expériences
		      <font-awesome-icon class="cat-icon" :icon="['fas','graduation-cap']" color="var(--color-primary)" /> </div>
        <div> Autres
		      <font-awesome-icon class="cat-icon" :icon="['fas','graduation-cap']" color="var(--color-primary)"/> </div>

    </main>

    <SocialNav />

  </div>
</template>

<style>
#home-content {
  display: grid;
  grid-template:
    'a b' 80vh / 1fr 1fr;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-gap: 20vh;
}


header {
  color: white;
  font-family: var(--font-primary);
}

header span {
  font-size: 7pt;
  font-weight: bolder;
}

header h1 {
  font-size: 20pt;
  font-weight: bolder;
}
header h2 {
  font-size: 12pt;
}
header p {
  font-size: 10pt;
}

header {
  display: block;
}

header > * ~ * {
  margin-top: 1rem;
}

header h2 {
  color: var(--color-primary);
}

body {
  display: flex;
  padding: 5rem;
}

main {
  display: flex;
  flex-direction: column;
}

main div {
  border: 1px solid white;
  padding: 1rem;
  margin: .5rem;
  width: 20rem;
  border-radius: .4rem;
  color: white;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

main div:hover {
  filter: invert();
  background-color: black;
}
main div .cat-icon {
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translate(0, -50% );
}

main div::after {
  content: ' ';
  height: 5rem;
  border: none;
  border-left: 1px solid white;
  position: absolute;
  top: -1rem;
  right: 4rem;
  transform: rotate(10deg);
}

</style>
