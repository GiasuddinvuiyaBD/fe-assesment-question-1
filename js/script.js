
let inputField = document.getElementById('phone'); 
inputField.addEventListener('input', formatFun);

function formatFun() 
{
	let value = inputField.value;
	
	// inital value
    let formatNumber = ""; 
    // without 
    let digits = value.replace(/\D/g, '');

	if(digits.length > 0) formatNumber =  digits.substring(0,3)
	if(digits.length > 3) formatNumber = digits.substring(3,6)
	
	// adding bracktes
	if(digits.length > 3)
	{
		formatNumber = '(' + digits.substring(0,3)
		formatNumber += ') ' + digits.substring(3,6)
	}

	if(digits.length > 6) formatNumber += '-' +digits.substring(6,10);
  	
  	// passing value to 
	inputField.value = formatNumber;
	return (formatNumber);
}



