
// --- product selection page, iphone --- //

$('#staticBackdrop').on('show.bs.modal', function () {
    $('.classFromElement').on('click', function (e) {
        e.preventDefault();
    });
})

var alliPhonesImg = ["bamboo_iPhone11PROproMax","cherry_iPhone11PROproMax","rosewood_iPhone11PROproMax","walnut_iPhone11PROproMax"];
var imgPro = document.querySelector(".imgPro img");
var allCases = document.querySelectorAll(".allCases li");

allCases.forEach(colors => colors.addEventListener("click", function (elem)  {
    //--- remove class ACTIVE from code ---//
    for (var i=0; i < allCases.length; i++) {
        allCases[i].classList.remove("active");
    }

    function changeImage() {
        
    if (document.getElementById ("bamboo").src == "/Images/productCase/iPhone/iPhone11/bamboo_iPhone11PROproMax.png");
    {
        document.getElementById ("cherry").src = "/Images/productCase/iPhone/iPhone11/cherry_iPhone11PROproMax.png";
    }
        document.getElementById ("rosewood").src = "/Images/productCase/iPhone/iPhone11/rosewood_iPhone11PROproMax.png";
    {
        document.getElementById ("walnut").src = "/Images/productCase/iPhone/iPhone11/walnut_iPhone11PROproMax.png";
    }
    
    }
}))
//     if (this.className === "bamboo"){
//         imgPro.src = "../Images/productCase/iPhone/" +alliPhonesImg[0] +".png";
//         imgPro.classList.add("animate");
//     }

//      if (this.className === "cherry"){
//         imgPro.src = "../Images/productCase/iPhone/" +alliPhonesImg[1] +".png";
//         imgPro.classList.add("animate");
//     }

//      if (this.className === "rosewood"){
//         imgPro.src = "../Images/productCase/iPhone/" +alliPhonesImg[2] +".png";
//         imgPro.classList.add("animate");
//     }

//      if (this.className === "walnut"){
//         imgPro.src = "../Images/productCase/iPhone/" +alliPhonesImg[3] +".png";
//         imgPro.classList.add("animate");
//     }
    
//    setTimeout(function() {
//        imgPro.classList.remove("animate");
//    },500);

// }))