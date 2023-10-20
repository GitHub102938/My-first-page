const searchWraper = document.querySelector(".search-input");
const inputBox = searchWraper.querySelector("input");
const suggBox = searchWraper.querySelector(".autocom-box");
let suggestion = [
	"Людина мураха 3",
	"Мумії",
	"Вартові Галактики",
	"Венсдей",
	"Джокер",
]
inputBox.onkeyup = (e) => {
	let userData = e.target.value;
	let emptyArray = [];
	if(userData) {
		emptyArray = suggestion.filter((data)=> {
			return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});
		emptyArray = emptyArray.map((data)=>{
			return data = "<li>"+ data +"</li>";
		});
		console.log(emptyArray);
	}
}