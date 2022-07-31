<script setup>
import SocialButton from './SocialButton.vue'
</script>

<template>

	<div class="social-nav">
		<SocialButton name="Github" icon="github" color="#52565e" link="https://github.com/StrategFirst/"/>
		<SocialButton name="Discord" icon="discord" color="#5865F2" link="https://discord.com/channels/@me/303111512829198337"/>
		<SocialButton name="Twitter" icon="twitter" color="#1da1f2" link="https://twitter.com/MathieuToulon"/>
		<SocialButton name="Linkedin" icon="linkedin" color="#0a66c2" link="https://www.linkedin.com/in/mathieu-toulon-034b15195/"/>
	</div>

</template>

<style>
.social-nav {
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1rem;
	margin: 1rem;
}
</style>