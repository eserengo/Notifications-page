(function () {
  const posts = document.querySelectorAll(".post");
  posts.forEach((post) => {
    post.classList.add("unread");
    notificationsCount();
    post.addEventListener("click", () => {
      post.classList.remove("unread");
      removeUnreadDot(post);
      notificationsCount();
    });
  })
  document.getElementById("selector").addEventListener("click", markAllAsRead);

  function notificationsCount() {
    document.getElementById("counter").textContent = document.querySelectorAll(".unread").length;
  }
  function markAllAsRead() {
    posts.forEach((post) => {
      post.classList.remove("unread");
      removeUnreadDot(post);
      notificationsCount();
    })
  }
  function removeUnreadDot(el) {
    el.querySelector(".dot").classList.add("inactive");
  }
})();