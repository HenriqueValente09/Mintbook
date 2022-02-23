const btnNewPost = document.getElementsByClassName('new-post-btn')[0]
const newPostbox = document.getElementsByClassName('new-post-box')[0]

console.log(btnNewPost);

btnNewPost.onclick = () => {
    newPostbox.classList.toggle('show-form')
}