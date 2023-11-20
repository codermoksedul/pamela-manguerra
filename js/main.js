document.querySelector("#call_btn").addEventListener("click", function(){
  document.querySelector("#popup_box_area").classList.add("popup_box_area_active");
  document.querySelector("#business_card_area").classList.add("business_card_area_active_popup");
})
document.querySelector("#popup_close_btn").addEventListener("click", function(){
  document.querySelector("#popup_box_area").classList.remove("popup_box_area_active");
  document.querySelector("#business_card_area").classList.remove("business_card_area_active_popup");
})




// popup box button here
let install_btn = document.querySelector(".install_btn");
let share_btn = document.querySelector(".share_btn");
let popup_close_btn = document.querySelector(".popup_close_btn");
let install_popup = document.querySelector(".install_popup");
let popup_box = document.querySelector(".popup_box");

install_btn.addEventListener("click", function(){
  install_popup.classList.toggle("active_install_popup");
  popup_box.classList.toggle("active_popup_box");
})
popup_close_btn.addEventListener("click", function(){
  install_popup.classList.remove("active_install_popup");
  popup_box.classList.remove("active_popup_box");
})

share_btn.addEventListener("click", function(){
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: window.location.href
    })
      .then(() => {
        console.log('Link shared successfully');
      })
      .catch((err) => {
        console.error('Error sharing link: ', err);
      });
  } else {
    console.warn('Web Share API not supported');
  }
})

// print button here
// function printImage() {
//   window.print();
// }
