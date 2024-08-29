// Call The Function titleMove When The Content Is Loaded
// And Change The Nav Bar Opacity
var nav_bar_part = document.querySelector('.nav-bar-part');
document.addEventListener('DOMContentLoaded',()=>{
    titleMove();
    nav_bar_part.style.opacity = '1';
})


// Make The Letters Of The Title Move By One Letter
function titleMove(){
    var i = 0
    var text = 'Choose Your Happiness';
    var element = document.getElementById('presantation-text');
    let intervali = setInterval(()=>{
        if(i === text.length){
            clearInterval(intervali);
        }else{
            element.innerHTML += text[i];
            if(i === 11){
                element.innerHTML += '<br>';
            }
            i++;
        }
    },200)
}

//CART SLIDER START
var cart_inside = document.querySelectorAll('.cart');
cart_inside.forEach((c,index)=>{
    c.style.left = `${index * 80}%`
})
var hasMoved = true

//MOVING PREVIOUSLY
function prevBy(){
    const values = Array.from(cart_inside).map((c)=>{
        return parseFloat(c.style.left);
    })
    const minValue = Math.min(...values);
    if(minValue < 0){
        cart_inside.forEach(c=>{
            let currentPosition = parseFloat(c.style.left);
            c.style.left = `${currentPosition + 80}%`;
        })
        hasMoved = false;
    }else{
        hasMoved = true;
    }
   
}



var firstInterval = true
let firstDivValue = parseFloat(cart_inside[0].style.left);


//MOVING FORWARD
function moveBy(){
    const value = Array.from(cart_inside).map((c)=>{
        return parseFloat(c.style.left)
    })
    const max_value = Math.max(...value);
    
    if(firstDivValue > max_value * -1){
        if(hasMoved){
            cart_inside.forEach(c=>{
                let currentPosition = parseFloat(c.style.left);
                c.style.left = `${currentPosition - 80}%`
            })
            firstInterval = true;
        }else{
            prevBy();
        }
    }else{
        prevBy();
    }

}


//CALL THE FUNCTION MOVEBY EVERY 3 SECONDS
setInterval(()=>{
    moveBy();
},3000)


// ADDING THE PSEUDO CLASSES BEFORE,AFTER THROUGH JAVASCRIPT
function add_pseudo(className){
    var create_element = document.createElement('style');
    create_element.textContent = 
    `.${className}::before{
        content:'';
        position:absolute;
        height:7%;
        width:20%;
        background-color:#fc6e6e;
        left:50%;
        top:100%;
        transform:translateX(-50%);
        margin:5px 0;
    }
    .${className}::after{
        content:'';
        position:absolute;
        height:7%;
        width:20%;
        background-color:#fc6e6e;
        left:50%;
        top:0;
        transform:translateX(-50%);
        margin:-5px 0;
    } 
    `
    document.head.append(create_element);
}


// WHEN CLICKING ON THE ANCHOR TAG CHANGE CLASSES
var anchori = document.querySelectorAll('.anchori');
anchori.forEach((a)=>{
    if(a.classList[1] == 'active'){
        add_pseudo(a.classList[1]);
    }
    a.onclick = function(){
        for(let i = 0;i<anchori.length;i++){
            anchori[i].classList.remove('active');
            anchori[i].classList.add('inactive');
        }
        a.classList.add('active');
        a.classList.remove('inactive');
        
    }
})




var button_div = document.querySelector('.buttoni');
var anchor = document.getElementById('anchor');
var para_2 = document.getElementById('para2');

//READ MORE ABOUT OUR HISTORY SECTION

anchor.onclick = function(){
    para_2.style.display = 'block';
    this.style.display = 'none'
    this.style.textDecoration = 'none';
    var new_button = document.createElement('button');
    var new_one = document.createElement('a');
    document.querySelector('.anchor-div').append(new_one);
    new_one.textContent = 'End Of History!'
    new_button.addEventListener('click',function(){
        inside_reading.classList.remove('added-inside');
        setTimeout(()=>{
            read_more.classList.remove('added-read');
        },700)
    })
    button_div.append(new_button);
    new_button.textContent = 'Go Back';
}


var readBtn = document.getElementById('readBtn');
var read_more = document.querySelector('.read-more');
var inside_reading = document.querySelector('.inside-reading');
readBtn.onclick = function(){
    read_more.classList.add('added-read');
    setTimeout(()=>{
        inside_reading.classList.add('added-inside');
    },1000)
    
}

//MOVE THE LETTER BY ONE WHEN 
var texti = 'Interior'
var elementi = document.getElementById('interior-para');
var image_part = document.getElementById('interior-image');
var j = 0;

//MOVE THE LETTER BY ONE WHEN WE HOVER OVER THE IMAGE

function moveByEach(){
    let intervali = setInterval(()=>{
        if(j === texti.length){
            clearInterval(intervali);
        }else{
            elementi.innerHTML += texti[j];
            j+=1
        }
    },200)
}

image_part.onmouseover = function(){
    moveByEach();
}


var why_us_button = document.getElementById('why_us_button');
var x_image = document.getElementById('x-image');
var why_us_gallery = document.querySelector('.why-us-gallery');
var inside_why_us = document.querySelector('.inside-why-us');


//WHY US? SECTION-GALLERY

why_us_button.onclick = function(){
    why_us_gallery.classList.add('why-inside');
    setTimeout(()=>{
        inside_why_us.classList.add('inside-why-us-added');
    },500)
    
}
x_image.onclick = function(){
    inside_why_us.classList.remove('inside-why-us-added');
    setTimeout(()=>{
        why_us_gallery.classList.remove('why-inside');
    },1000)
}

//INTERSECTION TO CHECK IF THE IMAGES ARE APPEARING IN THE PAGE
//AND THEN MANIPULATING WITH CLASSES 
var animate = document.querySelectorAll('.animate');
const isIntersecting = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate-finished');
        }else{
            entry.target.classList.remove('animate-finished');
        }
    })
})

animate.forEach(a=>{
    isIntersecting.observe(a);
})


//THE SLIDER OF THE SERVICES PART
var image_place = document.querySelectorAll('.image-place');
image_place.forEach((i,index)=>{
    i.style.left = `${index * 100}%`
})
let firstDiv = parseFloat(image_place[0].style.left);
var circle_button = document.querySelectorAll('#circle-button');
let n = 0;

//NEXT
function moveOver(){
    const values = Array.from(image_place).map(a=>{
        return parseFloat(a.style.left);
    })
    const max_value = Math.max(...values);
    console.log(max_value);
    if(firstDiv > (max_value * -1)){
        n++;
        image_place.forEach(c=>{
            let current = parseFloat(c.style.left);
            c.style.left = `${current - 100}%`
        })
    
    }
    for(let j = 0;j<circle_button.length;j++){
        circle_button[j].classList.remove('active-circle');
    }
    circle_button[n].classList.add('active-circle');
    
}


//PREVIOUS
function prevMove(){
    
    const values = Array.from(image_place).map(a=>{
        return parseFloat(a.style.left);
    })
    const min_value = Math.min(...values);
    if(min_value < 0){
        n--;
        image_place.forEach(c=>{
            let current_pos = parseFloat(c.style.left);
            c.style.left = `${current_pos + 100}%`
        })
    }

    for(let j = 0;j<circle_button.length;j++){
        circle_button[j].classList.remove('active-circle');
    }
    circle_button[n].classList.add('active-circle');
}


document.getElementById('prev').addEventListener('click',prevMove);
document.getElementById('next').addEventListener('click',moveOver);

//WORDS APPEARING ON THE SLIDER
var array_of_words = ['Prishtine','Prizren','Peje','Gjakove']
function checkingIntersection(elementi,indexi){
    const intersecting = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                moveThat(elementi,indexi);
            }else{
                clearing();
            }
        })
    })
    intersecting.observe(elementi);
}


function moveThat(element,index){
    var the_word = array_of_words[index];
    var j = 0;
    let interval = setInterval(()=>{
        if(j === the_word.length){
            clearInterval(interval);
        }else{
            element.innerHTML += the_word[j];
            j+=1
        }
    },200)
}  

var city_name = document.querySelectorAll('#city-name');
city_name.forEach((c,index)=>{
    checkingIntersection(c,index);
})

function clearing(){
    city_name.forEach((c)=>{
        c.innerHTML = ''
    })
}


// CART ANIMATION APPEAR WHEN SCROLLING
var carts_10 = document.querySelectorAll('.animate-carts');
function animacioni(){
    var height_ = window.innerHeight;

    var breakPoint = 150
    for(let i = 0;i<carts_10.length;i++){
        var bounding = carts_10[i].getBoundingClientRect().top;
        var timing = i*200;
        if(bounding < height_ - breakPoint){
            setTimeout(()=>{
                carts_10[i].classList.add('animated')
            },timing)
        }else{
            carts_10[i].classList.remove('animated');
        }
    }
}



var anchori = document.querySelectorAll('.anchori');
var array_end_points = ['index.html','#first-section','#second-section','#','#']
anchori.forEach((a,index)=>{
    a.onclick = function(){
        window.location.href = array_end_points[index];
    }
})

// CHECKING IF THE SERVICES IS INTERSECTING OR SCROLLY IS MORE THAN 400
//  IF SO THEN GO ON AND MAKE THE ARROW-UP APPEAR

var up_arrow = document.querySelector('.up-arrow');
var new_section = document.querySelector('#second-section')
const is_inter = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting || window.scrollY > 400){
            up_arrow.classList.add('diffrent-class');
            up_arrow.addEventListener('click',()=>{
                window.location.href = '#';
            })
        }else{
            up_arrow.classList.remove('diffrent-class');
        }
    })
})
is_inter.observe(new_section)

//SAVING THE IMAGES FOR THE PROPERTIES
var house_images = [
    'house-image1.jpg',
    'house-image2.jpg',
    'house-image3.avif',
    'house-image4.avif',
    'house-image5.avif',
    'house-image6.avif',
    'house-image7.avif',
    'house-image8.jpg',
    'house-image9.jpg',
    'house-image10.avif',
    'house-image11.avif',
    'house-image12.jpg',
    'house-image13.avif',
    'house-image14.avif',
    'house-image15.avif',
    'house-image16.avif',
    'house-image17.avif'
]

window.addEventListener('scroll',animacioni)
const HOMES_URL = 'http://127.0.0.1:8000/estate_models/homes';//ENDPOINT 1
const FILTERING_URL = 'http://127.0.0.1:8000/estate_models/filtering';//ENDPOINT 2

var contain_properties = document.querySelector('.contain-properties');
var saving = document.getElementById('saving');
var first_select = document.getElementById('first-select');
var second_select = document.getElementById('second-select');
var input = document.getElementById('input');

function checking_i(){
    const checking_intersection = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                get_data(HOMES_URL);
                setTimeout(()=>{
                    finishingIntersection();
                })
               
            }
        })
    })
    checking_intersection.observe(contain_properties);
}
checking_i();

var displaying_properties = document.querySelector('.displaying-properties');
var empty_array = [];
function get_data(url){
    if(document.querySelector('.error-message').style.opacity == 0){
    fetch(url).then(response=>{
        return response.json();
    }).then(answer=>{
        var into_list = Array.from(answer);
        empty_array.push(...into_list); // PUSHING IN AN EMPTY ARRAY ALL THE OBJECTS WE GET AS A RESPONSE FROM THE SERVER
        var propertie = document.querySelectorAll('.propertie');
        if(propertie.length === 0){
            //FOR EACH OBJECT CREATE DIVS TO PUT THE INFORMATION FROM THE SERVER ON THE PAGE
            into_list.forEach((a,index)=>{
                var new_div = document.createElement('div');
                new_div.className = 'propertie';
                new_div.classList.add('animate');
                displaying_properties.append(new_div);
                var holding_div = document.createElement('div');
                var inside_holding = document.createElement('div');
                inside_holding.className = 'inside_holding';
                holding_div.className = 'holding_div';
                var home_image = document.createElement('img');
                home_image.className = 'image-home';
                home_image.src = house_images[index];
                new_div.append(home_image);
                var home_city = document.createElement('h1');
                var home_price = document.createElement('p');
                var number_of_rooms = document.createElement('p');
                home_city.innerHTML = a.city;
                home_price.innerHTML = `Price: ${a.price} &euro;`;
                number_of_rooms.innerHTML = `Rooms:${a.number_of_rooms}`
                holding_div.append(home_city);
                inside_holding.append(home_price);
                inside_holding.append(number_of_rooms);
                holding_div.append(inside_holding);
                new_div.append(holding_div);

            })
            console.log(answer);
        }
        
    })
}
}

//FILTERING IF THE USER WANTS TO SEARCH ABOUT A PARTICULAR PROPERTIE
function filtering(url){
    if(first_select.value && second_select.value && input.value !== ''){
        var getting_all = document.querySelectorAll('.propertie');
        var error_message = document.querySelector('.error-message');
        if(error_message.style.opacity == 1){
            error_message.style.opacity = 0;
        }
        if(getting_all.length > 0){//WHEN FILTERING IF THERE IS AN IMAGE OR DIV OF THE ALL PROPERTIES 
            //REMOVE ALL OF THEM
            getting_all.forEach(node=>{
                node.remove();
            })
        }

        //THE DATA TO SENT IN THE BACKEND AND THEN BACKEND PROCESSES IT AND CHECKS IF SOMETHING LIKE THIS EXISTS
        //THERE AND SENDS BACK A RESPONSE
        var object_data = {
            rooms:first_select.value,
            price:second_select.value,
            city:input.value
        }
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(object_data)
        
        }).then(response=>{
            return response.json();
        }).then(answer=>{
            if(Array.isArray(answer)){//IF THE ANSWER IS AN ARRAY IT MEANS WE GOT SOME DATA FOR THAT PROPERTIE ELSE IT MEANS THAT WE ONLY GOT AN OBJECT TELLING THAT PROPERTIE DOES NOT EXIST
                const my_answer = Array.from(answer);
                //NOW PROCESSING THOSE DATA AND DISPLAYING THEM IN THE DOM
                my_answer.forEach((a)=>{
                    var new_div = document.createElement('div');
                    new_div.className = 'propertie';
                    displaying_properties.append(new_div);
                    var holding_div = document.createElement('div');
                    var inside_holding = document.createElement('div');
                    inside_holding.className = 'inside_holding';
                    holding_div.className = 'holding_div';
                    var home_image = document.createElement('img');
                    home_image.className = 'image-home';
                    new_div.append(home_image);
                    var home_city = document.createElement('h1');
                    var home_price = document.createElement('p');
                    var number_of_rooms = document.createElement('p');
                    home_city.innerHTML = a.city;
                    home_price.innerHTML = `Price: ${a.price} &euro;`;
                    number_of_rooms.innerHTML = `Rooms:${a.number_of_rooms}`
                    holding_div.append(home_city);
                    inside_holding.append(home_price);
                    inside_holding.append(number_of_rooms);
                    holding_div.append(inside_holding);
                    new_div.append(holding_div);
                    var id_array = []
                    for(let j = 0;j<empty_array.length;j++){
                        id_array.push(empty_array[j].id); //PUSH ALL THE ID-S
                        //OF THE EMPTY ARRAY WHICH LEAVED A BLUE PRINT OF ALL PROPERTIES
                    }
                    if(id_array.includes(a.id)){//IF THE ID OF THE PROPERTIE WE ARE SEARCHING IS IN THE ID-S
                        //OF ID_ARRAY THEN GET THE INDEX OF THAT ID
                        //AND PUT THE SAME IMAGE AS WE DID AT THE FUNCTION WITH ALL PROPERTIES
                        var index_of = id_array.indexOf(a.id);
                        home_image.src = house_images[index_of];
                    }
                })
            }else{
                var error_message = document.querySelector('.error-message');//TAKE THE ERROR MESSAGE
                setTimeout(()=>{
                    error_message.style.opacity = '1';//AND CHANGE IT-S OPACITY AFTER 0.3 SECONDS
                },300)
                
            }
        }).catch(error=>{
            console.error(error);//IF THERE OCCOURS ANY ERROR DURING THE PROCESS
            //CONSOLE THAT OUT FOR EASIER DEBUGGING
        })
        
}else{
    console.log('nothing');
}
}

saving.onclick = function(){
    filtering(FILTERING_URL);
}




function finishingIntersection(){
    const another_intersection = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                const childrens = entry.target.children;//GET THE CHILDREN ELEMENTS OF THE ENTRY
                const toArr = Array.from(childrens);//TURN IT INTO AN ARRAY 
                var window_height = window.innerHeight;//GET THE HEIGHT OF THE WINDOW
                var break_point = 100;//A BREAKPOINT
                toArr.forEach((children,index)=>{
                    var bounding_top = children.getBoundingClientRect().top;//GET THE TOP OF THE ELEMENT
                    var timing = index*200//TIMING TO BE USED IN SETTIMEOUT TO MAKE THE FIRST ELEMENTS MOVE BEFORE THE LAST ONES
                    if(bounding_top > window_height - break_point){//IF BOUNDING TOP IS BIGGER THAN THE WINDOWHEIGHT-BREAKPOINT
                        setTimeout(()=>{
                            children.classList.add('animate-second-finished');//ADD THE CLASS
                        },timing);//AFTER TIMING WHICH IS JUST THE INDEX OF THE ELEMENT * 200
                    }
                })
            }
        })
    })
 

    another_intersection.observe(displaying_properties);//OBSERVE THE PARTICULAR ELEMENT
}

