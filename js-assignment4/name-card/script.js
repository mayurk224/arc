const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const imageInput = document.getElementById('image');
const profilePic = document.getElementById('profile-pic');
const displayName = document.getElementById('display-name');
const displayAge = document.getElementById('display-age');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    profilePic.src = imageInput.value;
    profilePic.alt = nameInput.value;
    displayName.textContent = nameInput.value;
    displayAge.textContent = `Age: ${ageInput.value}`;
});
