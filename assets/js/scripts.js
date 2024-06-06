var subscribeTarget = document.getElementById('subscribe');
document.getElementById("subscribe").addEventListener("click", subscribeHandler);

function subscribeHandler() {
  alert('> subscribeHandler');
  console.log('> subscribeTarget', subscribeTarget);
}
