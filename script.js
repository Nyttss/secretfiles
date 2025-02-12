// Ensure image container is hidden by default when page loads
document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    const journeyPhotosContainer = document.getElementById('journeyPhotosContainer');
    const momentsContainer = document.getElementById('momentsContainer');
    const giftContainer = document.getElementById('giftContainer');
    const messageContainer = document.getElementById('messageContainer');
    const playlistContainer = document.getElementById('playlistContainer'); // Add this line
    
    imageContainer.style.display = 'none';
    journeyPhotosContainer.style.display = 'none';
    momentsContainer.style.display = 'none';
    giftContainer.style.display = 'none';
    messageContainer.style.display = 'none';
    playlistContainer.style.display = 'none'; // Add this line
});

document.getElementById('startButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const welcomeText = document.getElementById('welcomeText');
    const startButton = this;
    
    if (imageContainer.style.display === 'none' || imageContainer.style.display === '') {
        imageContainer.style.display = 'flex';
        welcomeText.style.display = 'none';
        startButton.textContent = 'Back';
    } else {
        imageContainer.style.display = 'none';
        welcomeText.style.display = 'block';
        startButton.textContent = 'Open';
    }
});

function handleImageClick(buttonName) {
    const imageContainer = document.getElementById('imageContainer');
    const journeyPhotosContainer = document.getElementById('journeyPhotosContainer');
    const momentsContainer = document.getElementById('momentsContainer');
    const giftContainer = document.getElementById('giftContainer');
    const messageContainer = document.getElementById('messageContainer');
    const startButton = document.getElementById('startButton');
    const welcomeText = document.getElementById('welcomeText');
    
    // Hide all containers first
    imageContainer.style.display = 'none';
    journeyPhotosContainer.style.display = 'none';
    momentsContainer.style.display = 'none';
    giftContainer.style.display = 'none';
    messageContainer.style.display = 'none';
    
    // Show the selected container based on button name
    if (buttonName === 'Journey') {
        journeyPhotosContainer.style.display = 'block';
    } else if (buttonName === 'Moments') {
        momentsContainer.style.display = 'flex';
        calculateTimeTogether();
    } else if (buttonName === 'Gift') {
        giftContainer.style.display = 'block';
    } else if (buttonName === 'Message') {
        messageContainer.style.display = 'flex';
    }
    else if (buttonName === 'Playlist') {
        playlistContainer.style.display = 'block';
    }
    
    // Hide welcome text and start button
    startButton.style.display = 'none';
    welcomeText.style.display = 'none';
    startButton.textContent = 'Back';
}


// Back button functionality for Journey
document.getElementById('backButton').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const journeyPhotosContainer = document.getElementById('journeyPhotosContainer');
    const startButton = document.getElementById('startButton');
    const welcomeText = document.getElementById('welcomeText');
    
    journeyPhotosContainer.style.display = 'none';
    imageContainer.style.display = 'flex';
    startButton.style.display = 'block';
    welcomeText.style.display = 'none';
    startButton.textContent = 'Back';
});
document.getElementById('backButtonMessage').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const messageContainer = document.getElementById('messageContainer');
    const startButton = document.getElementById('startButton');
    const welcomeText = document.getElementById('welcomeText');

    messageContainer.style.display = 'none';
    imageContainer.style.display = 'flex';
    startButton.style.display = 'block';
    welcomeText.style.display = 'none';
    startButton.textContent = 'Back';
});

// Back button for Moments
document.getElementById('backButtonMoments').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const momentsContainer = document.getElementById('momentsContainer');
    const startButton = document.getElementById('startButton');
    const welcomeText = document.getElementById('welcomeText');
    
    momentsContainer.style.display = 'none';
    imageContainer.style.display = 'flex';
    startButton.style.display = 'block';
    welcomeText.style.display = 'none';
    startButton.textContent = 'Back';
});

// Back button for Gift
document.getElementById('backButtonGift').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const giftContainer = document.getElementById('giftContainer');
    const startButton = document.getElementById('startButton');
    const welcomeText = document.getElementById('welcomeText');
    
    giftContainer.style.display = 'none';
    imageContainer.style.display = 'flex';
    startButton.style.display = 'block';
    welcomeText.style.display = 'none';
    startButton.textContent = 'Back';
});

// Back button for Playlist
document.getElementById('backButtonPlaylist').addEventListener('click', function() {
    const imageContainer = document.getElementById('imageContainer');
    const playlistContainer = document.getElementById('playlistContainer');
    const startButton = document.getElementById('startButton');
    const welcomeText = document.getElementById('welcomeText');
    
    playlistContainer.style.display = 'none';
    imageContainer.style.display = 'flex';
    startButton.style.display = 'block';
    welcomeText.style.display = 'none';
    startButton.textContent = 'Back';
});



// Full image view functionality
function openFullImage(src) {
    const fullImageContainer = document.getElementById('fullImageContainer');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = src;
    fullImageContainer.style.display = 'flex';
}

// Close full image
document.querySelector('.close-full-image').addEventListener('click', function() {
    const fullImageContainer = document.getElementById('fullImageContainer');
    fullImageContainer.style.display = 'none';
});

// Function to change main image in Moments
function changeMainImage(src) {
    const mainImage = document.getElementById('mainMomentImage');
    mainImage.src = src;
}

// Function to calculate time together
function calculateTimeTogether() {
    const startDate = new Date('2018-09-16'); // Change this to your actual date
    const now = new Date();
    
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    
    if (days < 0) {
        months -= 1;
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += lastMonth;
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }
    
    document.getElementById('yearsTogether').textContent = years;
    document.getElementById('monthsTogether').textContent = months;
    document.getElementById('daysTogether').textContent = days;
}

function openGiftDetail(giftId) {
    const giftDetail = document.getElementById(giftId);
    giftDetail.style.display = 'flex';
    
    // Close when clicking outside content
    giftDetail.addEventListener('click', function(e) {
        if (e.target === this) {
            closeGiftDetail(giftId);
        }
    });
}

function closeGiftDetail(giftId) {
    const giftDetail = document.getElementById(giftId);
    giftDetail.style.display = 'none';
}

// Add event listeners for close buttons
document.addEventListener('DOMContentLoaded', function() {
    const closeButtons = document.querySelectorAll('.close-gift');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const giftDetail = this.closest('.gift-detail');
            giftDetail.style.display = 'none';
        });
    });
});

