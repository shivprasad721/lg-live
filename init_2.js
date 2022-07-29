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
			height:4vw;
		}

		#bringin_stream_lyxel_wrapdiv h2{
			font-family: sans-serif;
			padding: 0px; 
			text-align: center; 
			font-size: 2rem; 
			color: #606060;			
			overflow-y: hidden;
			line-height:inherit!important;
			margin-top : 0px !important;
			// margin:10px 0px;
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
			border: 0px solid #e4e4e4;
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
			// height: 100%;
			border-radius: 30px;
		}
		.videIframe{
			background: black;
			// background: linear-gradient(90deg, rgba(129,123,120,0.5158438375350141) 0%, rgba(108,103,100,0.6026785714285714) 35%, rgba(108,103,100,0.5718662464985995) 100%);
			border-left: 10px solid white !important;
		}
		.bringin_stream_lyxel_wrapdiv-carousel {
			position: relative;
			z-index:55;
			width: 92%;
			height: 13vw !important; 
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
			top: 2.7vw;
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
		
			font-size: 3.5vw;
      font-weight: bolder;
		}
		.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-right {
			font-size: 3.5vw;
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
			text-decoration: line-through;
		}
		#bringin_stream_lyxel_wrapdiv .discount{
			color: red;
			font-size: 0.65vw;
			font-weight: bold; 
		}
		#bringin_stream_lyxel_wrapdiv .discount-label{
			color: #424242;
			font-size: 0.65vw;
			font-weight: bold; 
		}
		#bringin_stream_lyxel_wrapdiv p {
			margin:0!important
		}
		#bringin_stream_lyxel_wrapdiv .bringinflex {   
			position:relative;
			border-top: 10px solid white;
		}
		#bringin_stream_lyxel_player_with_overlay{
			width:70%;
			height:60vh ;
			position:relative;
			padding-right:10px;
			display: flex;
			justify-content: center;
		}
		.bringinstreamchat{
			width:30%;
			position:absolute;
			top:0;
			right:0;
			height:60vh;
			border-left: 1px solid white;
		}
		.chatboxcontainer{
			height:60vh;
		}
		.chatbox{
			opacity:0;
			border:none !important;
			height:60vh;
		}
		.videoChatContainer
		{
			display:flex;
			background: black;
		}
		.dealBadgeContainer{
			width:10vw;
		}
		.badge{
			position: absolute;
			top: 7px;
			left: 18px;
		}
		.badgeContainer{
			width:35px;
		}
		#bringin_s9999tream_lyxel_overlaydiv{
			display:none
		}
		// #burst-12 {
		// 	background: #cc0041;
		// 	width: 20px;
		// 	height: 20px;
		// 	position: relative;
		// 	text-align: center;
		// 	font-family:
		//   }
		//   #burst-12:before,
		//   #burst-12:after {
		// 	content: "";
		// 	position: absolute;
		// 	top: 0;
		// 	left: 0;
		// 	height: 20px;
		// 	width: 20px;
		// 	background: red;
		//   }
		//   #burst-12:before {
		// 	transform: rotate(30deg);
		//   }
		//   #burst-12:after {
		// 	transform: rotate(60deg);
		//   }
		@media screen and (max-width: 1080px) {
			#bringin_stream_lyxel_wrapdiv .bringinflex {
				// display: block;
			}
			.videoChatContainer
			{
				display:flex;
				background: black;
			}
			#bringin_stream_lyxel_player_with_overlay{
				width:70%;
			}

			.bringinstreamchat{
				width:30%;
				margin-top:0px
			}
			.chatboxcontainer{
				height:60vh;
			}
			.chatbox{
				opacity:0;
				border:none !important;
				height:57vh;
			}
			.bringin_stream_lyxel_wrapdiv-carousel {
				position: relative;
				width: 92%;
				height: 25vw !important; 
				margin: 0 auto;
			}
			#bringin_stream_lyxel_wrapdiv img{
				width: 14vw;
				max-width: inherit;
				max-height: inherit;
				border-radius: 30px;
			}
			#bringin_stream_lyxel_wrapdiv h1 {
				font-family: sans-serif;
				font-size: 1.5vw;
				color:black;
				font-weight: 600;
				overflow-y: hidden;
				line-height:inherit!important;
				margin:revert!important;
				margin-bottom:0!important;
				height:8vw;
			}
			#bringin_stream_lyxel_wrapdiv .current_price{
				color: black;
				font-size: 1.85vw;
				font-weight: bold;
			}
			#bringin_stream_lyxel_wrapdiv .original_price{
				color: grey;
				font-size: 1.65vw;
				font-weight: bold;
				text-decoration: line-through;
			}
			#bringin_stream_lyxel_wrapdiv .discount {
				color: red;
				font-size: 1.65vw;
				font-weight: bold; 
			}
			#bringin_stream_lyxel_wrapdiv .discount-label {
				color: #424242;
				font-size: 1.65vw;
				font-weight: bold; 
			}
			.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-left {
				font-size: 4vw;
				font-weight: bolder;
			}
			.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-right {
				font-size: 4vw;
				font-weight: bolder;
			}
			.bringin_stream_lyxel_wrapdiv-nav{
				postion: absolute;
				top: 6vh !important;
			}
			.bringin_stream_lyxel_wrapdiv-nav-left {
				left: -2vw;
			}
			.bringin_stream_lyxel_wrapdiv-nav-right {
				right: -2vw;
			}
		}
		@media screen and (max-width: 480px) {

			.videIframe{
				background: black;
				// background: linear-gradient(90deg, rgba(129,123,120,0.5158438375350141) 0%, rgba(108,103,100,0.6026785714285714) 35%, rgba(108,103,100,0.5718662464985995) 100%);
				border-left: none !important;
			}
			#bringin_stream_lyxel_wrapdiv iframe{
				border: none;
				height:100%;
			}
			#bringin_stream_lyxel_wrapdiv .bringinflex {
				display: block;
				padding: 15px;
				border-top: none;
			}
			#bringin_stream_lyxel_player_with_overlay{
				width:100%;
				height:30vh;
				position:relative;
				padding-right:0px;
				display: flex;
				justify-content: center;
			}
			.videoChatContainer
			{
				display:block;
				background: transparent;
			}
			.bringinstreamchat{
				width:100%;
				position: relative;
				height:40vh;
				margin-top:0px;
				border: none;
			}
			.chatboxcontainer{
				height:42vh;
				border-top: 15px solid white;

			}
			.chatbox{
				opacity:0;
				border:none !important;
				height:40vh;
			}
			#bringin_stream_lyxel_wrapdiv .overlaydiv {
				width: 100%; 
				margin-top: 15px;
				font-size: 13px; 
				text-align: left; 
				color: white; 
				padding-top: 15px;
				opacity: 1;
				top:70vh:
				position: absolute;
			}
			.bringin_stream_lyxel_wrapdiv-carousel {
				position: relative;
				width: 92%;
				height: 52vw !important; 
				margin: 0 auto;
			}
			#bringin_stream_lyxel_wrapdiv img{
				width: 34vw;
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
				height: 18vw;
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
				text-decoration: line-through;
			}
			#bringin_stream_lyxel_wrapdiv .discount {
				color: red;
				font-size: 3.0vw;
				font-weight: bold;
			}
			#bringin_stream_lyxel_wrapdiv .discount-label {
				color: #424242;
				font-size: 2.5vw;
				font-weight: bold;
			}
			.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-left {
				font-size: 12vw;
				font-weight: bolder;
			}
			.bringin_stream_lyxel_wrapdiv-carousel-arrow-icon-right {
				font-size: 12vw;
				font-weight: bolder;
			}
			.bringin_stream_lyxel_wrapdiv-nav{
				postion: absolute;
				top: 10vh;
			}
			.bringin_stream_lyxel_wrapdiv-nav-left {
				left: -5vw;
			}
			.bringin_stream_lyxel_wrapdiv-nav-right {
				right: -5vw;
			}
			#bringin_stream_lyxel_wrapdiv h2{
				font-family: sans-serif;
				padding: 0px; 
				text-align: center; 
				font-size: 1.3rem; 
				color: #606060;			
				overflow-y: hidden;
				line-height:inherit!important;
				// margin-top : 0px !important;
				// margin:10px 0px;
			}
			.dealBadgeContainer{
				width:25vw !important;
				text-align:center;
			}
			
		}
		
	</style>`
}
function getProducts(){
return  [
	{ 
		"product_sku": "MC2886BHT",
		"product_name": "LG 28 L Convection Microwave Oven with Diet Fry",
		"modal_and_color": "(MC2886BHT, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md07536273/gallery/MC2886BHT-Microwave-ovens-Front-view-with-logo-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
		`,
		"original_price": '19099',
		"current_price": '13369',
		"discount": '30',
	},
	{ 
		"product_sku": "MJEN326SF",
		"product_name": "LG 32 L With Twister Smog Handle Convection Microwave Oven  ",
		"modal_and_color": "(MJEN326SF, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md06198196/gallery/MJEN326SF-Microoven-Front-View-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
		`,
		"original_price": '35999',
		"current_price": '25201',
		"discount": '30',
	},
	{ 
		"product_sku": "MC2886BFUM",
		"product_name": "LG Convection Healthy Ovens",
		"modal_and_color": "(MC2886BFUM, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md05850416/gallery/MC2886BFUM-microwave-ovens-Front-view-D-01.jpg",
		"star": `
		  <span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
		`,
		"original_price": '20499',
		"current_price": '14350',
		"discount": '30',
	},
	{ 
		"product_sku": "MJEN326TL",
		"product_name": "LG 32 L With Twister Smog Handle Convection Microwave Oven",
		"modal_and_color": "(MJEN326TL, Black)",
		"product_img": "https://www.lg.com/in/images/microwave-ovens/md06198076/gallery/MJEN326TL-Microoven-Front-View-D-01.jpg",
		"star": `
		  <span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='activestar'>&#9733;</span>
			<span class='inactivestar'>&#9733;</span>
		`,
		"original_price": '29199',
		"current_price": '20441',
		"discount": '30',
	},
	{
	"product_sku": "MC2886BLT",
	"product_name": "LG 28 L Convection Microwave Oven  ",
	"modal_and_color": "(MC2886BLT, Black)",
	"product_img": "https://www.lg.com/in/images/microwave-ovens/md06116836/gallery/01-1100X730-v1.jpg",
	"star": `
	  <span class='inactivestar'>&#9733;</span>
		<span class='inactivestar'>&#9733;</span>
		<span class='inactivestar'>&#9733;</span>
		<span class='inactivestar'>&#9733;</span>
		<span class='inactivestar'>&#9733;</span>
	`,
	"original_price": '18799',
	"current_price": '13159',
	"discount": '30',
	},
	// {
	// 	"product_sku": "MS4295DIS",
	// 	"product_name": "LG 42 L Inverter Solo Microwave Oven  ",
	// 	"modal_and_color": "(MS4295DIS, Black)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md05917016/gallery/D-01.jpg",
	// 	"star": `
	// 	  <span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '18499',
	// 	"current_price": '13204',
	// 	"discount": '30',
	// },
	// { 
	// 	"product_sku": "MD07539889",
	// 	"product_name": "LG 32 L All in One NeoChef Charcoal Convection Microwave Oven (MJEN326UL)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md07539889/gallery/MJEN326UL-Microwave-ovens-Front-view-D-01.jpg",
	// 	"star": `
	// 	  <span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '29999',
	// 	"current_price": '23799',
	// 	"discount": '20',
	// },
	// { 
	// 	"product_sku": "MD07521913",
	// 	"product_name": "LG 28 L All In One Microwave Oven (MJEN286UH)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md07521913/gallery/MJEN286UH-Microwave-ovens-Front-view-with-logo-D-01.jpg",
	// 	"star": `
	// 	  <span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '25499',
	// 	"current_price": '20700',
	// 	"discount": '18',
	// },

	// { 
	// 	"product_sku": "MD06212716",
	// 	"product_name": "LG 32 L Convection Microwave Oven  (MJEN326PK, Black)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md06212716/gallery/Medium_01.jpg",
	// 	"star": `
	// 	  <span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '32499',
	// 	"current_price": '26099',
	// 	"discount": '19',
	// },
	// { 
	// 	"product_sku": "MD06212517",
	// 	"product_name": "LG 32 L Convection Microwave Oven  (MJEN326UH, Black)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md06212517/gallery/Medium_01_v.jpg",
	// 	"star": `
	// 	  <span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '31499',
	// 	"current_price": '25199',
	// 	"discount": '20',
	// },

	// { 
	// 	"product_sku": "MD07514625",
	// 	"product_name": "LG 28 L All In One Microwave Oven (MJEN286UF)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md07514625/gallery/MJEN286UF-Microwave-ovens-Front-view-D-01.jpg",
	// 	"star": `
	// 	  <span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '25999',
	// 	"current_price": '21199',
	// 	"discount": '18',
	// },
	// { 
	// 	"product_sku": "MD05940242",
	// 	"product_name": "LG 28 L Convection Microwave Oven  (MJ2886BWUM, Black)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md05940242/gallery/medium01.jpg",
	// 	"star": `
	// 	  <span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '24299',
	// 	"current_price": '19900',
	// 	"discount": '18',
	// },
	// { 
	// 	"product_sku": "MD05875176",
	// 	"product_name": "LG 28 L Convection & Grill Microwave Oven  (MJ2886BFUM.DBKQILN, Black)",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md05875176/gallery/MJ2886BFUM-Microwave-ovens-Front-view-D-01.jpg",
	// 	"star": `
	// 	  <span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 		<span class='activestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '23799',
	// 	"current_price": '19399',
	// 	"discount": '18',
	// },
	// { 
	// 	"product_sku": "MD07544165",
	// 	"product_name": "LG Charcoal Healthy Ovens",
	// 	"product_img": "https://www.lg.com/in/images/microwave-ovens/md07544165/gallery/MJ2887BFUM-D-01.jpg",
	// 	"star": `
	// 	  <span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 		<span class='inactivestar'>&#9733;</span>
	// 	`,
	// 	"original_price": '23999',
	// 	"current_price": '19599',
	// 	"discount": '18',
	// }
]
}
function getHtml(){
let products = getProducts()
let html = `
	<div class="bringinflex" id="lg-live" > 
	 <div class="videoChatContainer" >
		<div id="bringin_stream_lyxel_player_with_overlay" >
			<iframe
				src="https://stream.lyxellabs.com:/WebRTCAppEE/play.html?name=JFi7f1zLi0Xt1659003787397" 
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
			<div class="chatboxcontainer" >
				<iframe scrolling="no" class="chatbox"  onload="this.style.opacity=1;" src="https://chat.lyxelandflamingotech.in/"></iframe>
			</div>
		</div>
	  </div>
	  	
	  <div id="bringin_s9999tream_lyxel_overlaydiv" onmouseover="iframeMouseOver();" class="overlaydiv ">
		<div style="display: flex; justify-content: center; margin-bottom: 15px;">
			<div class="dealBadgeContainer">
				<img  src="https://bringin-core.sgp1.cdn.digitaloceanspaces.com/klqmgu/deal.jpeg" style="width:100%"/> 
			</div>
		</div>	
	
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
						<div onclick="addtoCart('`+ dataset.product_sku +`');"  style="padding: 0px 10px;cursor:pointer">
							<div style="background: white;border-radius: 10px;border: 1px solid silver;">
							  <div style="display: flex;">
							  		<div class="badge">
									  <div class="badgeContainer">
									  	<img  src="https://bringin-core.sgp1.cdn.digitaloceanspaces.com/klqmgu/hot-selling-small.png" style="width:100%"/> 
									  </div>
									</div>
									<div>
										<img src="`+dataset.product_img+`">
									</div>
									<div style="padding-left:1px;padding-right:10px; padding-top: 0px;"> 
										<h1>` + dataset.product_name +`</br>`+ dataset.modal_and_color +`</h1>
										<p>` + dataset.star +`</p>
										<p style="margin-top:0.3vw!important">` + `
											<span class="current_price">₹` + dataset.current_price + `</span>
											<span class="original_price">₹` + dataset.original_price + `</span>
											<span class="discount">` + dataset.discount + `% Off</span>
											<span class="discount-label"></br>(Inclusive of 5% Sign up Discount*)</span>
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
setInterval(moveLeft, 4000);
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
// Banner Update
// localStorage.setItem("bannerUpdate",'TRUE');
// var xhr = new XMLHttpRequest();
// 	xhr.withCredentials = true;

// 	xhr.addEventListener("readystatechange", function() {
// 	if(this.readyState === 4) {
// 		console.log("check xhr",this.responseText);
// 	}
// 	});

// 	xhr.open("GET", "https://bringin-core.sgp1.digitaloceanspaces.com/klqmgu/config.json");

// 	xhr.send();
// updateBanner()
// setInterval(updateBanner, 1000);
var requestOptions = {
	method: 'GET',
	redirect: 'follow',
	mode : 'no-cors'
	};
	
	fetch("https://bringin-core.sgp1.digitaloceanspaces.com/klqmgu/config.json", requestOptions)
	.then(response => console.log(response.text())).then(result => console.log("check result",result.parse()))
	.catch(error => console.log('error', error));

	let bannerUpate = localStorage.getItem('bannerUpdate')
	if(bannerUpate=='TRUE')
	{
		var bannerUpateStyle = document.getElementById("bringin_s9999tream_lyxel_overlaydiv")
		bannerUpateStyle.style.display="block"
		getScreenSize()

	}
	if(bannerUpate=='FALSE')
	{
		var bannerUpateStyle = document.getElementById("bringin_s9999tream_lyxel_overlaydiv")
		bannerUpateStyle.style.display="none"
		getScreenSize()

	}

// //Start Pusher Code
// document.write('<script src="https://js.pusher.com/7.1/pusher.min.js"></script>')
// // Pusher.logToConsole = true;
// var pusher = new Pusher('97d648861f04b3db0d74', {
//     cluster: 'ap2'
// });


// var channel = pusher.subscribe('lg-stream');
// channel.bind('stream-started', function (data) {

//     // alert('Started');
//     if(data.streamEnabled == "TRUE"){
//         // Add code for showing chat div and product slider after this.
// 		var lgLiveElement = document.getElementById("lg-live")
// 			lgLiveElement.style.display="block"
			
// 		var element = document.getElementById("lg-leaser")
// 			element.style.display="none"
// 		getScreenSize()
// 		localStorage.setItem("streamEnabled",'TRUE');
// 		console.log("yes")
//         // alert("Ready");
//     }
// 	if(data.streamEnabled == "FALSE"){
//         // Add code for showing chat div and product slider after this.
// 		var element = document.getElementById("lg-leaser")
// 			element.style.display="block"
// 		var lgLiveElement = document.getElementById("lg-live")
// 			lgLiveElement.style.display="none"
// 		getScreenSize()

// 		localStorage.setItem("streamEnabled",'FALSE');
// 		console.log("no")

//         // alert("Teaser Ready");
//     }
// });


// if(localStorage.getItem('streamEnabled') == "TRUE"){
// 	// Add code for showing chat div and product slider after this.
// 	var lgLiveElement = document.getElementById("lg-live")
// 		lgLiveElement.style.display="block"
		
// 	var element = document.getElementById("lg-leaser")
// 		element.style.display="none"
// 	getScreenSize()
// 	// localStorage.setItem("streamEnabled",'TRUE');
// 	// alert("Ready");
// }
