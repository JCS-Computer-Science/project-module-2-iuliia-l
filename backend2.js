var app = new Vue({
    el:'#app',
    data: {
        services: [
            ["Landscape Maintenance", 10, "/Hr / Worker", 0]
            ["Grass cutting	", 0.005, "/ Square Foot (typically done weekly)", 0]
            ["Pruning", 12, "/ Hr", 0]
            ["Facilities maintenance", 12, "/ Hr / Worker", 0]
            ["Snow clearing / snow removal / plowing", 0.005, " / Square Foot", 0]
            ["Weed management", 10, "/ Hr / Worker", 0]
            ["Sod installation", 20, " / Hr / Worker + Materials", 0]
            ["Fertilization", 0.004, "/ Square Foot", 0]
            ["General grounds keeping / maintenance", 10, "/ Hr / Worker", 0]
            ["Astroturf", 40, "/ Hr / Worker + Materials", 0]
            ["Landscape Construction", 40, "/ Hr / Worker + Materials", 0]
            ["Showhome installations & maintenance", 50, "/ Hr", 0]
            ["Custom landscape design", 50, "/ Hr", 0]
            ["Stone & hardscaping", 40, "/ Hr + Materials", 0]
            ["Garden installation", 40, "/ Hr + Materials", 0]
            ["Shrub & perennial planting", 45, "/ Hr + Materials", 0]
            ["Lawn installation", 22.50, "/ Hr Worker + Materials", 0]
            ["Tree planting", 40, "/ Hr + Materials", 0]
            ["Entryway features", 50, "/ Hr + Materials", 0],
           ],
        total: 0
    },
    methods: {
        totalPrice: function (){
            var tot = 0;
            this.services.forEach((service) => {
                tot += parseInt(service[3]) * service[2];
            });
            this.total = tot
        }
    }
})