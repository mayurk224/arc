const unlikeImg = document.getElementById('unlike-img');
const likeImg = document.getElementById('like-img');
const likeBtn = document.getElementById('like-btn');

let isLiked = false;

likeBtn.addEventListener('click', () => {
    isLiked = !isLiked;

    if (isLiked) {
        unlikeImg.style.display = 'none';
        likeImg.style.display = 'block';
        likeBtn.textContent = 'Unlike';
    } else {
        unlikeImg.style.display = 'block';
        likeImg.style.display = 'none';
        likeBtn.textContent = 'Like';
    }
});
