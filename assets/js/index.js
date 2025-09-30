
        // Initialize map
        const map = L.map('map').setView([47.4979, 19.0402], 13);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Add sample markers
        const restaurants = [
            {coords: [47.5079, 19.0502], name: 'Pizza Palace'},
            {coords: [47.4879, 19.0302], name: 'Burger King'},
            {coords: [47.4979, 19.0602], name: 'Sushi Bar'}
        ];

        restaurants.forEach(restaurant => {
            const icon = L.divIcon({
                html: '<div style="background: #FF6B35; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>',
                className: '',
                iconSize: [30, 30]
            });
            
            L.marker(restaurant.coords, {icon: icon})
                .addTo(map)
                .bindPopup(`<b>${restaurant.name}</b><br>Kiszállítási idő: 25 perc`);
        });