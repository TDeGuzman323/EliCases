// iPhone 11 Pro Modal //
let img5 = document.querySelector ('#bambooXRmain');
let bambooXR = document.querySelector ('#bambooXR'); 
let cherryXR = document.querySelector ('#cherryXR');
let rosewoodXR = document.querySelector ('#rosewoodXR');
let walnutXR = document.querySelector ('#walnutXR');


bambooXR.addEventListener('click', () => {
    img5.src = "../Images/productCase/iPhone/iPhoneX/bamboo_iPhoneXR.png";
})

cherryXR.addEventListener('click', () => {
    img5.src = "../Images/productCase/iPhone/iPhoneX/cherry_iPhoneXR.png";
})

rosewoodXR.addEventListener('click', () => {
    img5.src = "../Images/No_picture_available_icon.png";
})

walnutXR.addEventListener('click', () => {
    img5.src = "../Images/productCase/iPhone/iPhoneX/walnut_iPhoneXR.png";
})
