// Basic JavaScript for AIokkaliga website

// Function to handle form submissions (e.g., signup, login)
function handleFormSubmit(event) {
    event.preventDefault();
    alert('Form submitted! (This is a demo - no backend)');
}

// Function to handle button clicks (e.g., scan, buy, etc.)
function handleButtonClick(event) {
    alert('Button clicked! (This is a demo)');
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add form submit listeners
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });

    // Add button click listeners
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    // Special handling for OTP send button
    const sendOtpButton = document.getElementById('send-otp');
    if (sendOtpButton) {
        sendOtpButton.addEventListener('click', function() {
            alert('OTP sent! (Demo)');
        });
    }

    // Special handling for verify login button
    const verifyLoginButton = document.getElementById('verify-login');
    if (verifyLoginButton) {
        verifyLoginButton.addEventListener('click', function() {
            alert('Logged in! (Demo)');
        });
    }
});

// Function to simulate voice assistant (demo)
function startVoiceAssistant() {
    alert('Voice assistant activated! (Demo - would integrate with speech API)');
}

// Function to simulate camera/photo upload (demo)
function openCamera() {
    alert('Camera opened! (Demo - would integrate with camera API)');
}

// Function to simulate file upload (demo)
function uploadFile() {
    alert('File uploaded! (Demo - would handle file input)');
}

// Function to simulate AI processing (demo)
function processAI() {
    alert('AI processing... (Demo - would call AI service)');
}

// Function to simulate buying (demo)
function buyItem() {
    alert('Item added to cart! (Demo - would integrate with payment)');
}

// Function to simulate scanning (demo)
function scanItem() {
    alert('Scanning... (Demo - would process image)');
}

// Function to simulate voice input (demo)
function voiceInput() {
    alert('Listening... (Demo - would use speech recognition)');
}

// Function to simulate location change (demo)
function changeLocation() {
    alert('Location changed! (Demo - would update GPS/location)');
}

// Function to simulate logout (demo)
function logout() {
    alert('Logged out! (Demo - would clear session)');
}

// Function to simulate edit profile (demo)
function editProfile() {
    alert('Edit profile! (Demo - would open edit form)');
}

// Function to simulate add crop/livestock (demo)
function addItem() {
    alert('Item added! (Demo - would add to list)');
}

// Function to simulate settings change (demo)
function changeSetting() {
    alert('Setting changed! (Demo - would update preferences)');
}

// Function to simulate help/support (demo)
function getHelp() {
    alert('Help requested! (Demo - would open support chat)');
}
