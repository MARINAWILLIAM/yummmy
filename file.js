let userName,
    userEmail,
    userPhone,
    userAge,
    userPassword,
    userRePassword,
    userNameAlert,
    userEmailAlert,
    userPhoneAlert,
    userAgeAlert,
    userpasswordAlert,
    userRepasswordAlert;
    var hagam = 0;
  var  right = !0;
  var row = document.getElementById("mainfub");

search("").then(() => {
    $(".loading-screen").fadeOut(500, () => {
        $("body").css("overflow", "visible")
    })
})


  var  arr = [];


$(".strip-toggel-menu").click(function () {
    right ? //true or not
    ($(".navbody").addClass("replace")
    .removeClass("old"),
    hagam = $(".navbody").width()
     , $(".navslide").css("left", hagam), 
     $(".faicon").toggleClass("fa-times"), 
    $(".first").animate({
        opacity: "1",
        paddingTop: "30px"
    }, 1100),  $(".second").animate({
        opacity: "1",
        paddingTop: "30px"
    }, 1200), $(".third").animate({
        opacity: "1",
        paddingTop: "30px"
    }, 1300), $(".fourth").animate({
        opacity: "1",
        paddingTop: "30px"
    }, 1400), $(".fifth").animate({
        opacity: "1",
        paddingTop: "30px"
    }, 1500), 
    right = !right) : 
    ($(".navbody").addClass("old").removeClass("replace"),
     $(".faicon").toggleClass("fa-times"),
      $(".navslide").css("left", 0), $(".navbody li").animate({
        opacity: "0",
        paddingTop: "500px"
    }, 500), right = !right)


    // $(".importanticon").click(function(){
   //     if($(".sider").css("left")=="0px"){
    //     $(".sider").animate({left:"-200px"},1000)
    //     $(".navbarside").animate({left:"0px"},1000)
    //     $(".it1").animate({opacity: "0",paddingTop: "500px"
    //     }, 1100)
    //     $(".it2").animate({opacity: "0",paddingTop: "100px"
    //     }, 1200)
    //     $(".it3").animate({opacity: "0",paddingTop: "100px"
    //     }, 1300)
    //     $(".it4").animate({opacity: "0",paddingTop: "100px"
    //     }, 1400)
    //     $(".it5").animate({opacity: "0",paddingTop: "100px"
    //     }, 1500)
        
        
        
        
    //     }
    //     else{
    //     $(".sider").animate({left:"0px"},1000)
    //     $(".navbarside").animate({left:"200px"},1000)
    //     $(".it1").animate({opacity: "1",paddingTop: "25px"
    //     }, 1100)
    //     $(".it2").animate({opacity: "1",paddingTop: "25px"
    //     }, 1200)
    //     $(".it3").animate({opacity: "1",paddingTop: "25px"
    //     }, 1300)
    //     $(".it4").animate({opacity: "1",paddingTop: "25px"
    //     }, 1400)
    //     $(".it5").animate({opacity: "1",paddingTop: "25px"
    //     }, 1500)
        
    //     }
        
        
    //     }
        
        
        
        
        
    //     )










});






function displayMeals(arr) {

    let cartona = ""
    for (let i = 0; i < arr.length; i++) {
        cartona += `
        <div class="col-md-6 col-lg-3 mt-5  shadow ">
            <div onclick="showmeal('${arr[i].idMeal}')" class="picuter shadow rounded position-relative overflow-hidden">
                <div>
                    <img src='${arr[i].strMealThumb}' class="w-100 rounded shadow" />
                    <div class="tarnsparentsilde d-flex align-items-center ">
                        <div class="info p-2">
                            <h2>${arr[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    row.innerHTML = cartona
    $("html, body").animate({
        scrollTop: 0
    }, 200)
}

async function showmeal(idmea) {
    $(".loading-container").fadeIn(100)
    let akla = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmea}`)
    akla = await akla.json()
    displayMeal(akla.meals[0])
    $(".loading-container").fadeOut(500)
}












async function searchbyleter(fletter) {
    if (fletter) {
        $(".loading-container").fadeIn(100)
        let akla = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fletter}`)
        akla = await akla.json()
        if (akla.meals) {
            displayMeals(akla.meals)
        }
        $(".loading-container").fadeOut(100)
    }
}

































var isSearchTrue = !0;
$(".strip-search").click(function () {
    isSearchTrue ? ($(".search").addClass("open-menu").removeClass("close-search"), 
    $(".fa-search").toggleClass("fa-times"), $(".search-input").animate({
        top: "49%"
    }, 1500, function () {
        $(".search-input").animate({
            top: "50%"
        }, 250)
    }), isSearchTrue = !isSearchTrue) : ($(".search").addClass("close-search").
    removeClass("open-menu"), $(".fa-search").toggleClass("fa-times"), $(".search-input").animate({
        top: "300%"
    }), isSearchTrue = !isSearchTrue)
});








async function search(apii) {
    $(".loading-container").fadeIn(100)
    let akla = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${apii}`)
    akla = await akla.json()
    displayMeals(akla.meals)
    $(".loading-container").fadeOut(200)
   
}


//cat




//

function clickcatgoryy() {
    let cartona = ""
    for (let i = 0; i < arr.length; i++) cartona += `
    <div class="col-md-12 col-lg-3 mb-3 mt-5 ">
        <div class=" shadow rounded position-relative overflow-hidden picuter" >
            <div onclick="filterByCategory('${arr[i].strCategory}')" class="post">
                <img src='${arr[i].strCategoryThumb}' class="w-100 rounded" />
                <div class=" d-flex align-items-center  tarnsparentsilde">
                    <div class=" p-3">
                        <h2>${arr[i].strCategory}</h2>
                        <p>${arr[i].strCategoryDescription.split(" ").slice(0,25).join(" ")}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    row.innerHTML = cartona
    $("html, body").animate({
        scrollTop: 0
    }, 200)
}




//


async function maincatagory(catgorymain) {
    cato= await fetch(`https://www.themealdb.com/api/json/v1/1/${catgorymain}`);
    cato = await cato.json()
    return cato;

}




async function filterByCategory(catg) {
    $(".loading-container").fadeIn(100)
    let akla = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catg}`)
    akla = await akla.json()
    displayMeals(akla.meals)
    $(".loading-container").fadeOut(500)
}












//


function clickarea() {
    let cartona= ""
    for (var i = 0; i < arr.length; i++) cartona += `
    <div class="col-md-6 col-lg-3 my-4 shadow ">
        <div class=" shadow rounded position-relative">
            <div onclick=(areasssub('${arr[i].strArea}')) >
                <i class="fa-solid fa-city iconacity"></i>
                <h2 class="text-white">${arr[i].strArea}</h2>
            </div>
        </div>
    </div>`
  
    row.innerHTML = cartona
    $("html, body").animate({
        scrollTop: 0
    }, 200)


}
//

async function areasssub(ico) {
    $(".loading-container").fadeIn(100)
    let akla = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ico}`)
    akla = await akla.json()
    displayMeals(akla.meals.slice(0, 20))
    $(".loading-container").fadeOut(500)
}


//












//

function  clickingredient() {
    let cartona = ""
    for (var i = 0; i < arr.length; i++) cartona += `
    <div class="col-md-6 col-lg-3 my-4 shadow">
        <div onclick="where('${arr[i].strIngredient}')" class=" shadow rounded position-relative">
            <div >
                <i class="fa-solid fa-bowl-food iconata" ></i>
                <h2 class="text-white">${arr[i].strIngredient}</h2>
                <p class="text-white">${arr[i].strDescription.split(" ").splice(0,25).join(" ")}</p>
            </div>
        </div>
    </div>`
    row.innerHTML = cartona
 $("html, body").animate({
        scrollTop: 0
     }, 200)
}

//
async function where(nam) {
    $(".loading-container").fadeIn(100)
    let akla = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${nam}`)
    akla = await akla.json()
    displayMeals(akla.meals)
    $(".loading-container").fadeOut(500)
}
























































$(".nav-a").click(async (e) => {
    

    document.getElementById("search-container").innerHTML = ""
    row.innerHTML = ""




    let listBy = e.target.getAttribute("which-one")



    $("html, body").animate({
        scrollTop: 0
    }, 200)

    if (listBy == "contact") {

        row.innerHTML = `
        <div id="contact" class="container myM w-75 mx-auto mb-5  ">
		<div class="p-2">
			<h2 class="text-light mb-5">ContacUs...</h2>
			<div class="row">
				<div class="col-lg-6  col-md-12 mt-3">
					<div class="form-group">
						<input class="form-control shadow " onkeyup="validation()" id="name"
							placeholder="Enter Your Name">
						<div class="alert mt-1 alert-danger d-none" id="namealert" role="alert">
							Special Characters and Numbers not allowed
						</div>
					</div>
				</div>
				<div class="col-lg-6  col-md-12 mt-3">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control shadow" id="email" placeholder="Enter Email">
						<div class="alert mt-1 alert-danger d-none" id="emailalert" role="alert">
							Enter valid email. *Ex: xxx@yyy.zzz
						</div>
					</div>
				</div>
				<div class="col-lg-6  col-md-12 mt-3">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control shadow" id="phone" placeholder="Enter phone">
						<div class="alert mt-1 alert-danger  d-none" id="phonealert" role="alert">
							Enter valid Phone Number
						</div>
					</div>
				</div>
				<div class="col-lg-6  col-md-12 mt-3">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control shadow" id="age" placeholder="Enter Age">
						<div class="alert mt-1 alert-danger  d-none" id="agealert" role="alert">
							Enter valid Age
						</div>
					</div>
				</div>
				<div class="col-lg-6  col-md-12 mt-3">
					<div class="form-group">
						<input onkeyup="validation()" class="form-control shadow" type="password" id="password"
							placeholder="Enter Password">
						<div class="alert mt-1 alert-danger  d-none" id="passwordalert" role="alert">
							Enter valid password *Minimum eight characters, at least one letter and one number:*
						</div>
                        
					</div>
				</div>
				<div class="col-lg-6  col-md-12 mt-3">
					<div class="form-group">





						<input onkeyup="validation()" class="form-control shadow" type="password" id="rePassword"
							placeholder="Enter RePassword">
						<div class="alert mt-1 alert-danger  d-none" id="repasswordalert" role="alert">
							Enter valid Repassword
						</div>
					</div>
				</div>


			</div>

			<button type="submit" disabled id="submitBtn" class="btn btn-outline-danger mt-4">Submit</button>
		</div>

	</div>`
        userName = document.getElementById("name"),
            userEmail = document.getElementById("email"),
            userPhone = document.getElementById("phone"),
            userAge = document.getElementById("age"),
            userPassword = document.getElementById("password"),
            userRePassword = document.getElementById("rePassword"),
            userNameAlert = document.getElementById("namealert"),
            userEmailAlert = document.getElementById("emailalert"),
            userPhoneAlert = document.getElementById("phonealert"),
            userAgeAlert = document.getElementById("agealert"),
            userpasswordAlert = document.getElementById("passwordalert"),
            userRepasswordAlert = document.getElementById("repasswordalert");

        userName.addEventListener("focus", () => {
            nameToached = true
        })
        userEmail.addEventListener("focus", () => {
            emailToached = true
        })
        userPhone.addEventListener("focus", () => {
            phoneToached = true
        })
        userAge.addEventListener("focus", () => {
            ageToached = true
        })
        userPassword.addEventListener("focus", () => {
            passwordToached = true
        })
        userRePassword.addEventListener("focus", () => {
            repasswordToached = true
        })
    }
    if (listBy == "search") {

        row.innerHTML = ""
        document.getElementById("search-container").innerHTML = `
        
        <div class="row mb-4">
            
				<div class="col-lg-6 "><input id="searchInput" class="form-control  " placeholder="Search By Name">
				</div>
				<div class="col-lg-6">
					<input class="form-control " type="text" maxlength="1" id="letter"
						placeholder="search By First Letter...">
				</div>

			</div>`

        $("#searchInput").keyup((e) => {
            search(e.target.value)
        })
        $("#letter").keyup((e) => {
            searchbyleter(e.target.value)
        })

        $('#letter').on("input", function () {
            if (this.value.length > 1)
                this.value = this.value.slice(0, 1);
        });
    }


    let click_event = new CustomEvent('click');
    document.querySelector('.strip-toggel-menu').dispatchEvent(click_event);

    let x;

    if (listBy == "categories") {
        $(".loading-container").fadeIn(100)

        x = await maincatagory(listBy + ".php")
        arr = x.categories.splice(0, 20);
        clickcatgoryy()
        $(".loading-container").fadeOut(500)
    } else if (listBy == "a") {
        $(".loading-container").fadeIn(100)

        x = await maincatagory("list.php?a=list")
        arr = x.meals.splice(0, 20);
        clickarea()
        $(".loading-container").fadeOut(500)
    } else if (listBy == "i") {
        $(".loading-container").fadeIn(100)

        x = await maincatagory("list.php?i=list")
        arr = x.meals.splice(0, 20);
        clickingredient()
        $(".loading-container").fadeOut(500)
    }





})





function displayMeal(meal) {
    let recipes = ""
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            recipes += `<li class="my-3 mx-1 p-1 alert-success rounded">${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}</li>`
        }
    }













    
    let tags = meal.strTags?.split(",") 
   
    let t = "" 
    for (let i = 0; i < tags?.length; i++) { 
        t += `<li class="my-3 mx-1 p-1 alert-danger rounded">${tags[i]}</li>`
    } 

    let inner = `


    <div class="col-md-10 col-lg-4 text-white aghha" >
   

					<img  src="${meal.strMealThumb}" alt="" class="w-100 ">
					<h1 class="pt-3 fw-bold">${meal.strMeal}</h1>
				</div>
				<div class="col-md-8 text-white text-left">
                <div class="d-flex justify-content-start">
					<h2 >Instructions</h2>
</div>
<div class="d-flex justify-content-start">
					<p class>${meal.strInstructions}</p>
                    </div>
                    <div class="d-flex justify-content-start align-items-start">
					<p><b class="fw-bolder pt-3">Area :</b> ${meal.strArea}</p>
                    </div>
                    <div class=" text-start pt-1 pmain">
					<p> <b class="fw-bolder pt-1">Catagory :</b> ${meal.strCategory}</p>
                    </div>
                    <div class="d-flex justify-content-start">
					<h3 clas>Recipes :</h3>
                    </div>
					<ul class="d-flex   ulrecpi" id="rec">
                   

					</ul>
                    <div class="d-flex justify-content-start">
					<h3 class="my-2 mx-1 ps-1">Tags :</h3>
                    </div>
					<ul class="d-flex  tagafter" id="tagid">

					</ul>
      
                    <div class="d-flex justify-content-start">

					
					<a class="btn btn-success text-white m " target="_blank" href="${meal.strSource}">Source</a>
					<a class="btn  text-white ms-3 btn-danger" target="_blank" href="${meal.strYoutube}">Youtub</a>
                    </div>
				</div>`
    row.innerHTML = inner
    document.getElementById("rec").innerHTML = recipes
    document.getElementById("tagid").innerHTML = t
    $("html, body").animate({
        scrollTop: 0
    }, 200)

}


















































































































$(document).scroll((e) => {

    if ($(document).scrollTop()) {
        $(".mmm").css("backgroundColor", "#rgb(13, 13, 13)")
    }
})


























let nameToached = false,
    emailToached = false,
    phoneToached = false,
    ageToached = false,
    passwordToached = false,
    repasswordToached = false;

function validation() {

    if (nameToached) {
        if (userNameValid()) {
            userName.classList.remove("is-invalid")
            userName.classList.add("is-valid")
            userNameAlert.classList.replace("d-block", "d-none")
            userNameAlert.classList.replace("d-block", "d-none")

        } else {
            userName.classList.replace("is-valid", "is-invalid")
            userNameAlert.classList.replace("d-none", "d-block")
        }
    }

    if (emailToached) {
        if (userEmailValid()) {
            userEmail.classList.remove("is-invalid")
            userEmail.classList.add("is-valid")
            userEmailAlert.classList.replace("d-block", "d-none")
            userEmailAlert.classList.replace("d-block", "d-none")
        } else {
            userEmail.classList.replace("is-valid", "is-invalid")
            userEmailAlert.classList.replace("d-none", "d-block")
        }
    }

    if (phoneToached) {
        if (userPhoneValid()) {
            userPhone.classList.remove("is-invalid")
            userPhone.classList.add("is-valid")
            userPhoneAlert.classList.replace("d-block", "d-none")
            userPhoneAlert.classList.replace("d-block", "d-none")
        } else {
            userPhone.classList.replace("is-valid", "is-invalid")
            userPhoneAlert.classList.replace("d-none", "d-block")
        }
    }

    if (ageToached) {
        if (userAgeValid()) {
            userAge.classList.remove("is-invalid")
            userAge.classList.add("is-valid")
            userAgeAlert.classList.replace("d-block", "d-none")
            userAgeAlert.classList.replace("d-block", "d-none")
        } else {
            userAge.classList.replace("is-valid", "is-invalid")
            userAgeAlert.classList.replace("d-none", "d-block")
        }
    }

    if (passwordToached) {
        if (userPasswordValid()) {
            userPassword.classList.remove("is-invalid")
            userPassword.classList.add("is-valid")
            userpasswordAlert.classList.replace("d-block", "d-none")
            userpasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userPassword.classList.replace("is-valid", "is-invalid")
            userpasswordAlert.classList.replace("d-none", "d-block")
        }
    }

    if (repasswordToached) {
        if (userRePasswordValid() && userPassword.value == userRePassword.value) {
            userRePassword.classList.remove("is-invalid")
            userRePassword.classList.add("is-valid")
            userRepasswordAlert.classList.replace("d-block", "d-none")
            userRepasswordAlert.classList.replace("d-block", "d-none")
        } else {
            userRePassword.classList.replace("is-valid", "is-invalid")
            userRepasswordAlert.classList.replace("d-none", "d-block")
        }
    }

    if(userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid()){
        document.getElementById("submitBtn").removeAttribute("disabled")
    }else{
        document.getElementById("submitBtn").setAttribute("disabled","true")
    }

}

function userNameValid() {
    return /^[a-zA-Z ]+$/.test(userName.value)
}

function userEmailValid() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail.value)
}

function userPhoneValid() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value)
}

function userAgeValid() {
    return /^[1-9][0-9]?$|^100$/.test(userAge.value)
}

function userPasswordValid() {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value)
}

function userRePasswordValid() {
    
    return userPassword.value == userRePassword.value

}