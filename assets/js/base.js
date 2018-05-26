// Prevent click-jack attacks
if (top != window)
    top.location = window.location;

window.onbeforeunload = function() {
  window.onbeforeunload = null;
  return "Want to leave without learning all the secrets (he-he)?";
};
