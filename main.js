let foodList=[
{
	
	id:1,
	name:"Guest Hotel",
	cusion:"South Indian, North Indian, Continental",
	rating:4.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lnvzwmwezw22a2oyrupx"
},

{
	
	id:2,
	name:"Midnight Hyderabad Biriyani",
	cusion:"Chinese, Biryani, Chettinad, South Indian, Indian",
	rating:3.5,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nmvpyazcmsqa4aosxqbr"
},
{
	
	id:3,
	name:"Malabar Express",
	cusion:"South Indian, Snacks",
	rating:4.0,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ggvpzrzbfbkjazut6yh4",
},
{
	
	id:4,
	name:"Namma Veedu Vasanta Bhavan",
	cusion:"South Indian",
	rating:4.2,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/shtqxbt8u4alo2fvte4z"
}
]

	let cont=document.querySelector(".container");
	let cards=document.createElement("div");
	cards.classList.add("row");
	cont.appendChild(cards);
	
	foodList.forEach(function(e){
		
		let div=document.createElement("div");
			div.classList.add("col");
			cards.appendChild(div);
			
		let div2=document.createElement("div");
			div2.classList.add("col-card");
			div.appendChild(div2);
			
		let img=document.createElement("img");
			img.src=e.imgurl;
			div2.appendChild(img);
			
		let head=document.createElement("h2");
			head.innerHTML=e.name;
			div2.appendChild(head);
			
		let para=document.createElement("p");
			para.innerHTML=e.cusion;
			div2.appendChild(para);
			
		let rate=document.createElement("h3");
			rate.innerHTML=e.rating;
			div2.appendChild(rate);
			
		
		
		
	})
