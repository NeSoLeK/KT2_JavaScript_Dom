import { cats } from "./list.js";
var page = 1;

console.log(cats)

function ageToStr(age) {
	let txt;
	let count = age % 100;
	if (count >= 5 && count <= 20) {
		txt = 'лет';
	} else {
		count = count % 10;
		if (count == 1) {
			txt = 'год';
		} else if (count >= 2 && count <= 4) {
			txt = 'года';
		} else {
			txt = 'лет';
		}
	}
	return `${age} ${txt}`;
}



function rateLinkCreate(rated){
  if(rated === true){
    return `./img/favourite_true.svg`
  }
  else{
      return `./img/favourite_false.svg`
  }
}

let parent = document.querySelector('.content');



    cats.forEach(element => {
    
    let age = ageToStr(element.age)
    
    let answer_block = document.createElement('div')
    answer_block.className = "answer_block";

    answer_block.innerHTML = `<h2 class = "name">${element.id}. ${element.name}, ${age}</h2>
    
    <hr>

    <img class = "el_img" src="${element.img_link}">
    <p class = "description">${element.description}</p>
    <hr>
    <div class = "rate_block">
    <h3 class = "answer_rate"> Рейтинг: ${element.rate}. Оценить: <img class = "img_rate" src = "${rateLinkCreate(element.favourite)}"
    </div>
    `
    parent.appendChild(answer_block)

    let name = element.name
    console.log(name)


    });

