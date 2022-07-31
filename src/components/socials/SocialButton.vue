<template>

	<a class="social-button" :style="cssProps" :href="[link]" target="_blank">

		<span> {{ name }} </span>
		<font-awesome-icon class="social-button-icon" :icon="['fab', icon ]" />

	</a>

</template>

<style>
@import '@/assets/components/socials/button/wavyEffect.css';

/* Basic styling */
.social-button {
	cursor: pointer;
	background-color: var(--color-element);
	display: inline-block;

	padding: .5rem 1rem;
	border-radius: .2rem;
	width: 10rem;
	text-align: center;
	transition: 1s;

	color: white;
	font-family: var(--font-primary);
	font-size: 10pt;

	text-decoration: none;
}

.social-button * {
	transition: .5s;
	margin: 0 .2rem;
}

/* Basic hover animation */
.social-button:hover span {
	font-size: 0;
}

.social-button:hover .social-button-icon {
	transform: scale(1.4);
}


</style>

<script>
export default {
	props: [ 'name', 'icon' , 'color' , 'link' ],
	computed: {
    	cssProps() {
			return {
        		'--color-element': this.color,
			}
		}
	}
}
</script>