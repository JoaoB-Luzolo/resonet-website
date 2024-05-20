document.addEventListener('DOMContentLoaded', function() {
    fetchAds();
});

function fetchAds() {
    fetch('http://localhost:1337/api/advertisments')
        .then(response => response.json())
        .then(data => {
            // Render ads on the HTML page
            renderAds(data);
        })
        .catch(error => console.error('Error fetching ads:', error));
}

function renderAds(ads) {
    const adsContainer = document.querySelector('.ads-container');

    // Clear existing ads before rendering new ones
    adsContainer.innerHTML = '';

    // Iterate over the ads data to generate HTML for each ad
    ads.forEach(ad => {
        // Create an ad container
        const adContainer = document.createElement('div');
        adContainer.classList.add('ad');

        // Create elements for ad details
        const adName = document.createElement('h3');
        adName.textContent = ad.name;

        const adImage = document.createElement('img');
        adImage.src = ad.artwork.url;
        adImage.alt = 'Advertisement Image';

        const adImpressions = document.createElement('p');
        adImpressions.textContent = `Impressions: ${ad.impressions}`;

        const adClicks = document.createElement('p');
        adClicks.textContent = `Clicks: ${ad.clicks}`;

        // Append ad details to ad container
        adContainer.appendChild(adName);
        adContainer.appendChild(adImage);
        adContainer.appendChild(adImpressions);
        adContainer.appendChild(adClicks);

        // Append the ad container to the ads container
        adsContainer.appendChild(adContainer);
    });
}
