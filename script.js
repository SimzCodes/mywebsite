document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  if(form){
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you! We’ll get back to you soon.");
      form.reset();
    });
  }
});
function changeImage(newSrc){
document.getElementById("mainmage").src = newSrc;
}
