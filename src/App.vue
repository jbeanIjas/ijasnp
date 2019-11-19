<template>
	<div id="app">
		
		<appHeader/>
		
		<div class="main-content">
			<router-view />
		</div>
		
	</div>
</template>
<script>
	
	
	import appHeader from "@/components/appHeader.vue"

	export default {
		name: "home",
		components: {
			appHeader
		},
		data() {
            return {
                
            }
        },
        methods: {
			
        },
        mounted() {
        },
        watch: {
           
        }
	}
</script>


