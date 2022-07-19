


function addtoCart(sku){
	let payload = {
		"query": "mutation { addModelToCart(input: { cart_id: \"\", cartItems: [ { data: { sku: \""+sku+"\", qty: 1}, package_item_id: \"\", zipcode: \"110047\" } ] }) {redirectUrl cart { items { product { sku } qty}}}}",
		"variables": null,
		"operationName": null
	}
	let url = 'https://www.lg.com/in/shop/graphql'
	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("store", 'in');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(payload));
	xhr.onload = function() {
		var data = JSON.parse(this.responseText);
		console.log(data);
		if(xhr.status === 200) {
			setTimeout(function(){
				window.location = 'https://www.lg.com/in/shop/checkout/cart/index'
			},500)
		} else {
			console.log('request error')
		}
	};		
}
function iframeMouseOver(){
	document.getElementById('bringin_stream_lyxel_overlaydiv').style.opacity = '1'
}
function iframeMouseOut(){
	document.getElementById('bringin_stream_lyxel_overlaydiv').style.opacity = '1'
}
function getStyle(){
return `
	<style>
		#bringin_stream_lyxel_wrapdiv h1{
			font-family: sans-serif;
			font-size: 0.7vw;
			color:black;
			font-weight: 600;
			overflow-y: hidden;
			line-height:inherit!important;
			margin:revert!important;
			margin-bottom:0!important;
			height:3vw;
		}
		#bringin_stream_lyxel_wrapdiv .overlaydiv {
			width: 100%; 
			font-size: 13px; 
			text-align: left; 
			color: white; 
			padding-top: 16px; 
			opacity: 1;
		}
		#bringin_stream_lyxel_wrapdiv iframe{
			width: 100%;
			border: 1px solid #e4e4e4;
		}
		#bringin_stream_lyxel_wrapdiv button{
			color: #fff!important;
			text-transform: uppercase;
			border-color: #cc0041!important;
			background: #cc0041!important;
			display: inline-block;
			width: 100%;
			padding: 5px 5px;
			border-radius: 3px;
			border: 1px solid transparent;
			font-style: normal;
			font-weight: 700;
			font-size: 10px	;
			line-height: 16px;
			text-decoration: none;
			text-align: center;
			vertical-align: middle;
			white-space: normal;
			cursor: pointer;
		}
		#bringin_stream_lyxel_wrapdiv img{
			width: 7vw;
			max-width: inherit;
			max-height: inherit;
			height: 5.5vw;
			border-radius: 30px;
		}
		.videIframe{
			background: black;
			// background: linear-gradient(90deg, rgba(129,123,120,0.5158438375350141) 0%, rgba(108,103,100,0.6026785714285714) 35%, rgba(108,103,100,0.5718662464985995) 100%);

		}
		.bringin_stream_lyxel_wrapdiv-carousel {
			position: relative;
			z-index:55;
			width: 92%;
			height: 12vw; 
			margin: 0 auto;
		}

		.bringin_stream_lyxel_wrapdiv-carousel-content {
			position: relative;
			overflow: hidden;
			transition: width .4s;
			height: 100%;
		}
		.bringin_stream_lyxel_wrapdiv-slide {
			position: absolute;
			z-index: 1;
			transition: left .4s cubic-bezier(.47,.13,.15,.89);
		}
		.bringin_stream_lyxel_wrapdiv-nav {
			position: absolute;
			top: 1.9vw;
			z-index: 2;
			cursor: pointer;
			color: #A50034;
			-webkit-user-select: none;	
		}
		.bringin_stream_lyxel_wrapdiv-nav-left {
			left: -2vw;
		}
		.bringin_stream_lyxel_wrapdiv-nav-right {
			right: -2vw;
		}
		.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-left {
		
			font-size: 2.5vw;
      font-weight: bolder;
		}
		.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-right {
			font-size: 2.5vw;
      font-weight: bolder;
		}
		#bringin_stream_lyxel_wrapdiv .activestar{
			color: red;
			font-size: 16px;

		}
		#bringin_stream_lyxel_wrapdiv .inactivestar{
			color: grey;
			font-size: 16px;
		}
		#bringin_stream_lyxel_wrapdiv .current_price{
			color: black;
			font-size: 0.85vw;
			font-weight: bold;
			  
		}
		#bringin_stream_lyxel_wrapdiv .original_price{
			color: grey;
			font-size: 0.65vw;
			font-weight: bold;
		}
		#bringin_stream_lyxel_wrapdiv .discount{
			color: red;
			font-size: 0.65vw;
			font-weight: bold; 
		}
		#bringin_stream_lyxel_wrapdiv p {
			margin:0!important
		}
		#bringin_stream_lyxel_wrapdiv .bringinflex {   
			position:relative;
		}
		#bringin_stream_lyxel_player_with_overlay{
			width:100%;
			height:60vh ;
			position:relative;
			padding-right:10px;
			display: flex;
			justify-content: center;
		}
		.bringinstreamchat{
			width:40%;
			position:absolute;
			top:0;
			right:0;
			height:80vh;
		}
		.chatboxcontainer{
			height:60vh;
		}
		.chatbox{
			opacity:0;
			border:none !important;
			height:60vh;
		}
		.logo{
			position: absolute;
			top: 3vh;
			z-index: 1;
			left: 2vw;
			width:7vw
		}
		.logo img{
			height:100% !important;
		}
		#lg-leaser{
			height: 100vh;
			display:none;
			
		}
		#lg-live{
			display:block;
		}
		
		@media screen and (max-width: 1000px) {
			#bringin_stream_lyxel_wrapdiv .bringinflex {
				// display: block;
			}
			#bringin_stream_lyxel_player_with_overlay{
				width:100%;
			}

			.bringinstreamchat{
				width:100%;
				margin-top:8vw
			}
			.chatboxcontainer{
				height:60vh;

			}
			.chatbox{
				opacity:0;
				border:none !important;
				height:60vh;
			}
			#lg-leaser{
				height: 100vh;
				display:none;
			}
			#lg-live{
				display:block;
			}
		}
		@media screen and (max-width: 480px) {
			#bringin_stream_lyxel_wrapdiv .bringinflex {
				// display: block;
			}
			#bringin_stream_lyxel_player_with_overlay{
				width:100%;
				height:99vh ;
				position:relative;
				padding-right:0px;
				display: flex;
				justify-content: center;
			}
			.bringinstreamchat{
				width:100%;
				height: 80vh;
				z-index: 9999;
			}
			.chatboxcontainer{
			}
			.chatbox{
				opacity:0;
				border:none !important;
				height:65vh;
				position:absolute;
				bottom:0px;
			}
			.logo{
				position: absolute;
				top: 4vh;
				z-index: 1;
				left: 4vw;
				width:18vw;
			}
			.logo img{
				height:100% !important;
			}
			.videoIframeOverlay{
				width: 100%;
				height: 100vh;
				z-index: 1;
				opacity: 0.3;
				background: black;
				position: absolute;
			}
			#lg-leaser{
				height: 100vh;
				display: none;
			}
			#lg-live{
				display: block;
			}
			#bringin_stream_lyxel_wrapdiv .overlaydiv {
				width: 100%; 
				font-size: 13px; 
				text-align: left; 
				color: white; 
				padding-top: 16px; 
				opacity: 1;
				position: absolute;
   				 bottom: 30px;
			}
			.bringin_stream_lyxel_wrapdiv-carousel {
				position: relative;
				z-index:55;
				width: 92%;
				height: 35vw; 
				margin: 0 auto;
				z-index: 9999999;
			}
			#bringin_stream_lyxel_wrapdiv img{
				width: 34vw;
				height: 100%;
				max-width: inherit;
				max-height: inherit;
				border-radius: 30px;
			}
			#bringin_stream_lyxel_wrapdiv h1 {
				font-family: sans-serif;
				font-size: 2.9vw;
				color: black;
				font-weight: 600;
				overflow-y: hidden;
				line-height: inherit!important;
				margin: revert!important;
				margin-bottom: 0!important;
				height: 10vw;
			}
			#bringin_stream_lyxel_wrapdiv .current_price{
				color: black;
				font-size: 4.0vw;
				font-weight: bold;
			}
			#bringin_stream_lyxel_wrapdiv .original_price{
				color: grey;
				font-size: 3.0vw;
				font-weight: bold;
			}
			#bringin_stream_lyxel_wrapdiv .discount {
				color: red;
				font-size: 3.0vw;
				font-weight: bold;
			}
			.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-left {
				font-size: 3.5vw;
				font-weight: bolder;
			}
			.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-right {
				font-size: 3.5vw;
				font-weight: bolder;
			}
		}
		
	</style>`
}
function getProducts(){
return  [
	{ 
		"product_sku": "MD07539889",
		"product_name": "LG 32 L All in One NeoChef Charcoal Convection Microwave Oven (MJEN326UL)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md07539889/gallery/MJEN326UL-Microwave-ovens-Front-view-D-01.jpg",
		"star": `
		  <span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
		`,
		"original_price": '29999',
		"current_price": '23799',
		"discount": '20',
	},
	{ 
		"product_sku": "MD07521913",
		"product_name": "LG 28 L All In One Microwave Oven (MJEN286UH)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md07521913/gallery/MJEN286UH-Microwave-ovens-Front-view-with-logo-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
		`,
		"original_price": '25499',
		"current_price": '20700',
		"discount": '18',
	},
	{ 
		"product_sku": "MD06198196",
		"product_name": "LG 32 L With Twister Smog Handle Convection Microwave Oven  (MJEN326SF, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md06198196/gallery/MJEN326SF-Microoven-Front-View-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
		`,
		"original_price": '35999',
		"current_price": '29799',
		"discount": '17',
	},
	{ 
		"product_sku": "MD06212716",
		"product_name": "LG 32 L Convection Microwave Oven  (MJEN326PK, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md06212716/gallery/Medium_01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
		`,
		"original_price": '32499',
		"current_price": '26099',
		"discount": '19',
	},
	{ 
		"product_sku": "MD06212517",
		"product_name": "LG 32 L Convection Microwave Oven  (MJEN326UH, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md06212517/gallery/Medium_01_v.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
		`,
		"original_price": '31499',
		"current_price": '25199',
		"discount": '20',
	},
	{ 
		"product_sku": "MD06198076",
		"product_name": "LG 32 L With Twister Smog Handle Convection Microwave Oven  (MJEN326TL, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md06198076/gallery/MJEN326TL-Microoven-Front-View-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
		`,
		"original_price": '29199',
		"current_price": '22099',
		"discount": '24',
	},
	{ 
		"product_sku": "MD07514625",
		"product_name": "LG 28 L All In One Microwave Oven (MJEN286UF)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md07514625/gallery/MJEN286UF-Microwave-ovens-Front-view-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
		`,
		"original_price": '25999',
		"current_price": '21199',
		"discount": '18',
	},
	{ 
		"product_sku": "MD05940242",
		"product_name": "LG 28 L Convection Microwave Oven  (MJ2886BWUM, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md05940242/gallery/medium01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
		`,
		"original_price": '24299',
		"current_price": '19900',
		"discount": '18',
	},
	{ 
		"product_sku": "MD05875176",
		"product_name": "LG 28 L Convection & Grill Microwave Oven  (MJ2886BFUM.DBKQILN, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md05875176/gallery/MJ2886BFUM-Microwave-ovens-Front-view-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
		`,
		"original_price": '23799',
		"current_price": '19399',
		"discount": '18',
	},
	{ 
		"product_sku": "MD07544165",
		"product_name": "LG Charcoal Healthy Ovens",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md07544165/gallery/MJ2887BFUM-D-01.jpg",
		"star": `
		  <span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
		`,
		"original_price": '23999',
		"current_price": '19599',
		"discount": '18',
	}
]
}
function getHtml(){
let products = getProducts()
let html = `
	<div id="lg-leaser">
		<video controls  autoplay="autoplay" loop muted width="100%" height="100%">
			<source src="https://stream.mux.com/cVsQKesVczVzJ02isEbq02zunq9HlHk6iyU83gNhFH8O00/high.mp4" type="video/mp4">
		</video>
	</div>
	<div class="bringinflex" id="lg-live" > 
		<div id="bringin_stream_lyxel_player_with_overlay">
			<div class="videoIframeOverlay"></div>
			<iframe
				src="http://shiv-applic-rn11jez71uv5-1414797028.ap-south-1.elb.amazonaws.com:5080/WebRTCAppEE/play.html?name=test"
				// src="https://lgteststream.lyxelandflamingotech.in:5443/WebRTCAppEE/play.html?name=570262715405146378764593" 
				class="videIframe"
				marginwidth="0"
				marginheight="0"
				hspace="0"
				vspace="0"
				frameborder="0"
				allowfullscreen="" 
				onmouseover="iframeMouseOver();" 
				onmouseout="iframeMouseOut();" 
				webkitallowfullscreen="" 
				mozallowfullscreen="" 
				id="bringin_stream_lyxel_iframe" 
				
			>
			</iframe>
		</div> 	
		<div class="bringinstreamchat">
			<div class="chatboxcontainer">
				<iframe scrolling="no" class="chatbox"  onload="this.style.opacity=1;" src="https://chat.lyxelandflamingotech.in/chat"></iframe>
			</div>
		</div>	
		<div id="bringin_stream_lyxel_overlaydiv" onmouseover="iframeMouseOver();" class="overlaydiv">
		<div>
			<div class="bringin_stream_lyxel_wrapdiv-carousel">
				<div class="bringin_stream_lyxel_wrapdiv-nav bringin_stream_lyxel_wrapdiv-nav-left">
					<div class="bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-left">&lt;</div>
				</div>
				<div class="bringin_stream_lyxel_wrapdiv-carousel-content">
`
for(let [idx,dataset] of products.entries()){
html += `
				 
					<div class="bringin_stream_lyxel_wrapdiv-slide">
						<div onclick="addtoCart('`+ dataset.product_sku +`');"  style="padding-left:10px;cursor:pointer">
							<div style="background: white;border-radius: 10px;border: 1px solid silver;">
							  <div style="display: flex;">  
									<div>
										<img src="`+dataset.product_img+`">
									</div>
									<div style="padding-left:1px;padding-right:10px; padding-top: 0px;"> 
										<h1>` + dataset.product_name +`</h1>
										<p>` + dataset.star +`</p>
										<p style="margin-top:0.3vw!important">` + `
											<span class="current_price">₹` + dataset.current_price + `</span>
											<span class="original_price">₹` + dataset.original_price + `</span>
											<span class="discount">` + dataset.discount + `% Off</span>
										</p> 
									</div>
								</div>	
								<div style="padding: 0vw 1.2vw 1vw 1.2vw">
							    <button style="background:#A50034;">BUY NOW</button>	 
					  		</div>
							</div>
						
						</div>		
					</div>		
						
`} 
html += `
				</div>
				<div class="bringin_stream_lyxel_wrapdiv-nav bringin_stream_lyxel_wrapdiv-nav-right">
					<div class="bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-right">&gt;</div>
				</div>
			</div>
		</div>  
	</div>		
	</div>	
`
return html	
}
function renderHtmlDoc(){
let style = getStyle()
let html = getHtml()
let doc = style + html
return doc 
}
// localStorage.setItem("streamEnabled",'FALSE');

var wrapdiv = document.createElement("div");
wrapdiv.style.width = "100%";
wrapdiv.setAttribute('id','bringin_stream_lyxel_wrapdiv')
wrapdiv.innerHTML = renderHtmlDoc()
var scriptRef = document.getElementById('bringin_stream_lyxel')
scriptRef.insertAdjacentElement('afterend', wrapdiv);




//carousel effect
var carousel = document.querySelector('.bringin_stream_lyxel_wrapdiv-carousel');
var carouselContent = document.querySelector('.bringin_stream_lyxel_wrapdiv-carousel-content');
var slides = document.querySelectorAll('.bringin_stream_lyxel_wrapdiv-slide');
var arrayOfSlides = Array.prototype.slice.call(slides);
var carouselDisplaying;
var screenSize;
setScreenSize();
var lengthOfSlide;

function addClone() {
 var lastSlide = carouselContent.lastElementChild.cloneNode(true);
 lastSlide.style.left = (-lengthOfSlide) + "px";
 carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}
function removeClone() {
var firstSlide = carouselContent.firstElementChild;
firstSlide.parentNode.removeChild(firstSlide);
}
function moveSlidesRight() {
var slides = document.querySelectorAll('.bringin_stream_lyxel_wrapdiv-slide');
var slidesArray = Array.prototype.slice.call(slides);
var width = 0;
slidesArray.forEach(function(el, i){
	el.style.left = width + "px";
	width += lengthOfSlide;
});
addClone();
}
moveSlidesRight();
function moveSlidesLeft() {
var slides = document.querySelectorAll('.bringin_stream_lyxel_wrapdiv-slide');
var slidesArray = Array.prototype.slice.call(slides);
slidesArray = slidesArray.reverse();
var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

slidesArray.forEach(function(el, i){
	maxWidth -= lengthOfSlide;
	el.style.left = maxWidth + "px";
});
}
window.addEventListener('resize', setScreenSize);
function setScreenSize() {
if ( window.innerWidth > 1900  ) {
	 carouselDisplaying = 4	;}
else if ( window.innerWidth >= 1200 ) {
	carouselDisplaying = 4	;
} else if ( window.innerWidth >= 480 ) {
	carouselDisplaying = 2;
} else {
	carouselDisplaying = 1;
}
getScreenSize();
}
function getScreenSize() {
var slides = document.querySelectorAll('.bringin_stream_lyxel_wrapdiv-slide');
var slidesArray = Array.prototype.slice.call(slides);
lengthOfSlide = ( carousel.offsetWidth  / carouselDisplaying );
var initialWidth = -lengthOfSlide;
slidesArray.forEach(function(el) {
	el.style.width = lengthOfSlide + "px";
	el.style.left = initialWidth + "px";
	initialWidth += lengthOfSlide;
});
}
var rightNav = document.querySelector('.bringin_stream_lyxel_wrapdiv-nav-right');
rightNav.addEventListener('click', moveLeft);
var moving = true;
function moveRight() {
if ( moving ) {
	moving = false;
	var lastSlide = carouselContent.lastElementChild;
	lastSlide.parentNode.removeChild(lastSlide);
	carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
	removeClone();
	var firstSlide = carouselContent.firstElementChild;
	firstSlide.addEventListener('transitionend', activateAgain);
	moveSlidesRight();
}
}
function activateAgain() {
var firstSlide = carouselContent.firstElementChild;
moving = true;
firstSlide.removeEventListener('transitionend', activateAgain);
}
var leftNav = document.querySelector('.bringin_stream_lyxel_wrapdiv-nav-left');
leftNav.addEventListener('click', moveRight);
// var moveLeftAgain = true;
function moveLeft() {
if ( moving ) {
	moving = false;
	removeClone();
	var firstSlide = carouselContent.firstElementChild;
	firstSlide.addEventListener('transitionend', replaceToEnd);
	moveSlidesLeft();
}
}
function replaceToEnd() {
var firstSlide = carouselContent.firstElementChild;
firstSlide.parentNode.removeChild(firstSlide);
carouselContent.appendChild(firstSlide);
firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
addClone();
moving = true;
firstSlide.removeEventListener('transitionend', replaceToEnd);
}

//Start Pusher Code
// Pusher.logToConsole = true;

var pusher = new Pusher('97d648861f04b3db0d74', {
    cluster: 'ap2'
});

var channel = pusher.subscribe('lg-stream');
channel.bind('stream-started', function (data) {

    // alert('Started');
    if(data.streamEnabled == "TRUE"){
        // Add code for showing chat div and product slider after this.
		var lgLiveElement = document.getElementById("lg-live")
			lgLiveElement.style.display="block"
			
		var element = document.getElementById("lg-leaser")
			element.style.display="none"
		getScreenSize()
		localStorage.setItem("streamEnabled",'TRUE');
		console.log("yes")
        // alert("Ready");
    }
	if(data.streamEnabled == "FALSE"){
        // Add code for showing chat div and product slider after this.
		var element = document.getElementById("lg-leaser")
			element.style.display="block"
		var lgLiveElement = document.getElementById("lg-live")
			lgLiveElement.style.display="none"
		getScreenSize()

		localStorage.setItem("streamEnabled",'FALSE');
		console.log("no")

        // alert("Teaser Ready");
    }
});


if(localStorage.getItem('streamEnabled') == "TRUE"){
	// Add code for showing chat div and product slider after this.
	var lgLiveElement = document.getElementById("lg-live")
		lgLiveElement.style.display="block"
		
	var element = document.getElementById("lg-leaser")
		element.style.display="none"
	getScreenSize()
	// localStorage.setItem("streamEnabled",'TRUE');
	// alert("Ready");
}
