	const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
	/*
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304,   // 1 square foot = 929.0304 square centimeters
		"square miles": 1 / 27878400, // 1 square foot = 2.78784e-8 square miles
		 "square kilometers": 9.290304e-8

    };
	*/
	
	    const conversionToOtherUnits = {
        "Acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "Square Feet": 1,
        "Square Yards": 1 / 9,             // 1 square yard = 9 square feet
        "Square Inches": 144,              // 1 square foot = 144 square inches
        "Square Meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "Square Centimeters": 929.0304,   // 1 square foot = 929.0304 square centimeters
		"Square Miles": 1 / 27878400, // 1 square foot = 2.78784e-8 square miles
		 "Square Kilometers": 9.290304e-8

    };
	
	function calculateAreaRecBorder() {
		hideAllResults();
		
	let lengthUnit = document.getElementById('lengthUnitRecBorder').value;
	let widthUnit = document.getElementById('widthUnitRecBorder').value;
	let priceUnit = document.getElementById('priceUnitRec').value;
	let borderUnit = document.getElementById('borderWidthUnitRecBorder').value;
	
	let length = parseFloat(document.getElementById('lengthRecBorder').value);
    let width = parseFloat(document.getElementById('widthRecBorder').value);
	let border = parseFloat(document.getElementById('borderWidthRecBorder').value);
    let resultElement = document.getElementById('resultRecBorder');
	let resultDiv = document.getElementById("resultDivRecBorder");
	let unitOptions = document.getElementById('unitOptionsRecBorder');
    let unitTable = document.getElementById('unitTableRecBorder');
	let pricePerUnit=document.getElementById('priceUnitRecBorder').value || 0;
	let quantity=document.getElementById('quantityRecBorder').value || 1;


    resultDiv.style.display = "block"; 

	if (!length || !width|| !border) {
		resultElement.innerText = "Please enter values for length,width and border width";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}
	
    // Convert outerLength, outerWidth, and borderWidth to feet using the conversion factor
    const outerLengthInFeet = length * (unitConversionsToFeet[lengthUnit] || 1);
    const outerWidthInFeet = width * (unitConversionsToFeet[widthUnit] || 1);
    const borderWidthInFeet = border * (unitConversionsToFeet[borderUnit] || 1);

    // Calculate inner length and width by subtracting border width from outer dimensions
    const innerLengthInFeet = outerLengthInFeet - 2 * borderWidthInFeet;
    const innerWidthInFeet = outerWidthInFeet - 2 * borderWidthInFeet;

    // Calculate the area of the outer rectangle and inner rectangle
    const outerAreaInFeet = outerLengthInFeet * outerWidthInFeet;
    const innerAreaInFeet = innerLengthInFeet * innerWidthInFeet;

    // Calculate the area of the border by subtracting inner area from outer area
    const borderAreaInFeet = outerAreaInFeet - innerAreaInFeet;

    // Calculate the total area using the quantity of units
    const totalBorderAreaInFeet = borderAreaInFeet * quantity;

    let areaInSelectedUnit = totalBorderAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);
    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }

	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalBorderAreaInFeet,'unitResultBodyRecBorder');
	//document.getElementById('resultDivRecBorder').focus();
	//window.location.hash = '#recBorderHeader';
	document.getElementById('recBorderHeader').scrollIntoView()


}

 function clearFieldsRecBorder() {
    document.getElementById('lengthRecBorder').value = "";
    document.getElementById('widthRecBorder').value = "";
	document.getElementById('borderWidthRecBorder').value = "";
    document.getElementById('quantityRecBorder').value = "1";
    document.getElementById('priceRecBorder').value = "0";
    document.getElementById('lengthUnitRecBorder').selectedIndex = 0;
    document.getElementById('widthUnitRecBorder').selectedIndex = 0;
	document.getElementById('borderWidthUnitRecBorder').selectedIndex = 0;
    document.getElementById('priceUnitRecBorder').selectedIndex = 0;

    document.getElementById('resultRecBorder').innerText = "";
    document.getElementById('resultRecBorder').classList.remove("error");
	document.getElementById('resultDivRecBorder').style.display = "none";

	
}
	
	function calculateAreaRec() {
		hideAllResults();
  
    // Ensure units are converted to lowercase for uniformity
	/*
	let lengthUnit = document.getElementById('lengthUnitRec').value.toLowerCase();
	let widthUnit = document.getElementById('widthUnitRec').value.toLowerCase();
	let priceUnit = document.getElementById('priceUnitRec').value.toLowerCase();
	*/
	
	let lengthUnit = document.getElementById('lengthUnitRec').value;
	let widthUnit = document.getElementById('widthUnitRec').value;
	let priceUnit = document.getElementById('priceUnitRec').value;
	
	let length = parseFloat(document.getElementById('lengthRec').value);
    let width = parseFloat(document.getElementById('widthRec').value);
    let resultElement = document.getElementById('resultRec');
	let resultDiv = document.getElementById("resultDivRec");
	let unitOptions = document.getElementById('unitOptionsRec');
    let unitTable = document.getElementById('unitTableRec');
	let pricePerUnit=document.getElementById('priceRec').value || 0;
	let quantity=document.getElementById('quantityRec').value || 1;


    resultDiv.style.display = "block"; 
	
	if (!length || !width) {
		resultElement.innerText = "Please enter valid values for length and width.";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}

    // Convert length and width to feet using the conversion factor
    const lengthInFeet = length * (unitConversionsToFeet[lengthUnit] || 1);
    const widthInFeet = width * (unitConversionsToFeet[widthUnit] || 1);

    // Calculate square footage for a single unit
    const areaPerUnitInFeet = lengthInFeet * widthInFeet;
    // Calculate the total area using the quantity of units
    const totalAreaInFeet = areaPerUnitInFeet * quantity;
    let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);
    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }

	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodyRec');
	//document.getElementById('resultDivRec').focus();
	//window.location.hash = '#recHeader';
	document.getElementById('recHeader').scrollIntoView()
}


function calculateAreaCircle() {
	hideAllResults();
	let diameter = parseFloat(document.getElementById('diameterCircle').value);
	let diameterUnit = document.getElementById('diameterUnitCircle').value;
	let priceUnit = document.getElementById('priceUnitCircle').value;
	let resultDiv = document.getElementById("resultDivCircle");
	let resultElement = document.getElementById('resultRecCircle');
	   resultDiv.style.display = "block"; 
	   	let unitOptions = document.getElementById('unitOptionsCircle');
    let unitTable = document.getElementById('unitTableCircle');
	let pricePerUnit=document.getElementById('priceCircle').value || 0;
	let quantity=document.getElementById('quantityCircle').value || 1;
	
	if (!diameter) {
		resultElement.innerText = "Please enter valid values for diameter.";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}

	


    const diameterInFeet = diameter * (unitConversionsToFeet[diameterUnit] || 1);
    const radiusInFeet = diameterInFeet / 2;
    const areaInFeet = Math.PI * Math.pow(radiusInFeet, 2);
    const totalAreaInFeet = areaInFeet * quantity;	
    let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);

    let totalCost = 0;

    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }

	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodyCircle');
	//document.getElementById('resultDivRec').focus();
	//window.location.hash = '#recHeader';
	document.getElementById('circleHeader').scrollIntoView()


}


 function clearFieldsRec() {
    document.getElementById('lengthRec').value = "";
    document.getElementById('widthRec').value = "";
    document.getElementById('quantityRec').value = "1";
    document.getElementById('priceRec').value = "0";
    document.getElementById('lengthUnitRec').selectedIndex = 0;
    document.getElementById('widthUnitRec').selectedIndex = 0;
    document.getElementById('priceUnitRec').selectedIndex = 0;

    document.getElementById('resultRec').innerText = "";
    document.getElementById('resultRec').classList.remove("error");
	  document.getElementById('resultDivRec').style.display = "none";

    // Hide optional unit result section
    //document.getElementById('unitOptionsRec').style.display = "none";
    //document.getElementById('unitTableRec').style.display = "none";
    //document.getElementById('unitResultBodyRec').innerHTML = "";
	
}


 function clearFieldsCircle() {
    document.getElementById('diameterCircle').value = "";
    document.getElementById('quantityCircle').value = "1";
    document.getElementById('priceCircle').value = "0";
    document.getElementById('diameterUnitCircle').selectedIndex = 0;
	document.getElementById('priceUnitCircle').selectedIndex = 0;


    document.getElementById('resultRecCircle').innerText = "";
    document.getElementById('resultRecCircle').classList.remove("error");
	  document.getElementById('resultDivCircle').style.display = "none";

	
}

function calculateAreaRing() {
	
	
	hideAllResults();
	let outerDiameter = parseFloat(document.getElementById('outerDiameterRing').value);
	let outerDiameterUnit = document.getElementById('outerDiameterUnitRing').value;
	let borderWidth = parseFloat(document.getElementById('borderWidthRing').value);
	let borderUnit = document.getElementById('borderWidthUnitRing').value;
	
	let priceUnit = document.getElementById('priceUnitRing').value;
	let resultDiv = document.getElementById("resultDivRing");
	let resultElement = document.getElementById('resultRing');
	resultDiv.style.display = "block"; 
	let unitOptions = document.getElementById('unitOptionsRing');
    let unitTable = document.getElementById('unitTableRing');
	let pricePerUnit=document.getElementById('priceRing').value || 0;
	let quantity=document.getElementById('quantityRing').value || 1;
	
	if (!outerDiameter || !borderWidth) {
		resultElement.innerText = "Please enter values for diameter  and border width";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}

    const outerDiameterInFeet = outerDiameter * (unitConversionsToFeet[outerDiameterUnit] || 1);
    const borderWidthInFeet = borderWidth * (unitConversionsToFeet[borderUnit] || 1);
    const outerRadiusInFeet = outerDiameterInFeet / 2;
    const innerRadiusInFeet = (outerDiameterInFeet - borderWidthInFeet) / 2;

    const areaInFeet = Math.PI * (Math.pow(outerRadiusInFeet, 2) - Math.pow(innerRadiusInFeet, 2));

    const totalAreaInFeet = areaInFeet * quantity;
	 let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);

    let totalCost = 0;

    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }

	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodyRing');
	document.getElementById('ringHeader').scrollIntoView()

  
}


function calculateAreaTriEdge() {

	hideAllResults();
	let edge1 = parseFloat(document.getElementById('lengthEdge1TriEdge').value);
	let edge2 = parseFloat(document.getElementById('lengthEdge2TriEdge').value);
	let edge3= parseFloat(document.getElementById('lengthEdge3TriEdge').value);
	let edgeUnit1 = document.getElementById('edge1LengthUnitTriEdge').value;
	let edgeUnit2 = document.getElementById('edge2LengthUnitTriEdge').value;
	let edgeUnit3 = document.getElementById('edge3LengthUnitTriEdge').value;

	
	let priceUnit = document.getElementById('priceUnitTriEdge').value;
	let resultDiv = document.getElementById("resultDivTriEdge");
	let resultElement = document.getElementById('resultTriEdge');
	resultDiv.style.display = "block"; 
	let unitOptions = document.getElementById('unitOptionsTriEdge');
    let unitTable = document.getElementById('unitTableTriEdge');
	let pricePerUnit=document.getElementById('priceTriEdge').value || 0;
	let quantity=document.getElementById('quantityTriEdge').value || 1;
	
	if (!edge1 || !edge2 || !edge3) {
		resultElement.innerText = "Please enter values for edge1,edge2 and edge3";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}


    const edge1InFeet = edge1 * (unitConversionsToFeet[edgeUnit1] || 1);
    const edge2InFeet = edge2 * (unitConversionsToFeet[edgeUnit2] || 1);
    const edge3InFeet = edge3 * (unitConversionsToFeet[edgeUnit3] || 1);

    // Calculate the semi-perimeter (s) of the triangle
    const s = (edge1InFeet + edge2InFeet + edge3InFeet) / 2;

    // Calculate the area using Heron's formula
    const areaInFeet = Math.sqrt(s * (s - edge1InFeet) * (s - edge2InFeet) * (s - edge3InFeet));

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;
	 let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);

    let totalCost = 0;

    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }

	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodyTriEdge');
	document.getElementById('headerTriEdge').scrollIntoView()

   
}

function calculateAreaTriangle() {

	hideAllResults();
	let base = parseFloat(document.getElementById('baseTriangle').value);
	let height = parseFloat(document.getElementById('heightTriangle').value);
	let baseUnit = document.getElementById('baseUnitTriangle').value;
	let heightUnit = document.getElementById('heightUnitTriangle').value;
	
	let priceUnit = document.getElementById('priceUnitTriangle').value;
	let resultDiv = document.getElementById("resultDivTriangle");
	let resultElement = document.getElementById('resultTriangle');
	resultDiv.style.display = "block"; 
	let unitOptions = document.getElementById('unitOptionsTriangle');
    let unitTable = document.getElementById('unitTableTriangle');
	let pricePerUnit=document.getElementById('priceTriangle').value || 0;
	let quantity=document.getElementById('quantityTriangle').value || 1;
	
	if (!base || !height ) {
		resultElement.innerText = "Please enter values for base and height";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}

    const baseInFeet = base * (unitConversionsToFeet[baseUnit] || 1);
    const heightInFeet = height * (unitConversionsToFeet[heightUnit] || 1);
    const areaInFeet = 0.5 * baseInFeet * heightInFeet;
    const totalAreaInFeet = areaInFeet * quantity;

  	let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);
    let totalCost = 0;

    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }

	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodyTriangle');
	document.getElementById('headerTriangle').scrollIntoView()
}

function calculateAreaTrapezoid() {

	hideAllResults();
	let base1 = parseFloat(document.getElementById('base1Trapezoid').value);
	let base2= parseFloat(document.getElementById('base2Trapezoid').value);
	let height= parseFloat(document.getElementById('heightTrapezoid').value);
	let base1Unit = document.getElementById('base1UnitTrapezoid').value;
	let base2Unit = document.getElementById('base2UnitTrapezoid').value;
	let heightUnit = document.getElementById('heightUnitTrapezoid').value;
	
	let priceUnit = document.getElementById('priceUnitTrapezoid').value;
	let resultDiv = document.getElementById("resultDivTrapezoid");
	let resultElement = document.getElementById('resultTrapezoid');
	resultDiv.style.display = "block"; 
	let unitOptions = document.getElementById('unitOptionsTrapezoid');
    let unitTable = document.getElementById('unitTableTrapezoid');
	let pricePerUnit=document.getElementById('priceTrapezoid').value || 0;
	let quantity=document.getElementById('quantityTrapezoid').value || 1;
	
	if (!base1 || !base2 || !height ) {
		resultElement.innerText = "Please enter values for base1,base2 and height";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}

    const base1InFeet = base1 * (unitConversionsToFeet[base1Unit] || 1);
    const base2InFeet = base2 * (unitConversionsToFeet[base2Unit] || 1);
    const heightInFeet = height * (unitConversionsToFeet[heightUnit] || 1);
    const areaInFeet = 0.5 * (base1InFeet + base2InFeet) * heightInFeet;

    const totalAreaInFeet = areaInFeet * quantity;
	let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);

    let totalCost = 0;

    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }

	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodyTrapezoid');
	document.getElementById('headerTrapezoid').scrollIntoView()

   
}

function calculateAreaSector() {
	hideAllResults();
	let radius = parseFloat(document.getElementById('radiusSector').value);
	let angle= parseFloat(document.getElementById('angleSector').value);
	let radiusUnit = document.getElementById('radiusUnitSector').value;
	let angleUnit = document.getElementById('angleUnitSector').value;
	
	
	let priceUnit = document.getElementById('priceUnitSector').value;
	let resultDiv = document.getElementById("resultDivSector");
	let resultElement = document.getElementById('resultSector');
	resultDiv.style.display = "block"; 
	let unitOptions = document.getElementById('unitOptionsSector');
    let unitTable = document.getElementById('unitTableSector');
	let pricePerUnit=document.getElementById('priceSector').value || 0;
	let quantity=document.getElementById('quantitySector').value || 1;
	
	if (!radius || !angle  ) {
		resultElement.innerText = "Please enter values for radius and angle";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}


    const radiusInFeet = radius * (unitConversionsToFeet[radiusUnit] || 1);
    // Convert angle from degrees to radians if it's in degrees
    let angleInRadians = angle;
    if (angleUnit === "degree") {
        angleInRadians = angle * (Math.PI / 180);  // Convert degree to radian
    }
    const areaInFeet = (angleInRadians / (2 * Math.PI)) * Math.PI * radiusInFeet * radiusInFeet;
    const totalAreaInFeet = areaInFeet * quantity;
	let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);
    let totalCost = 0;

    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }
	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodySector');
	document.getElementById('headerSector').scrollIntoView()

}

function calculateAreaParallelogram() {
	hideAllResults();
	let base = parseFloat(document.getElementById('baseParallelogram').value);
	let height= parseFloat(document.getElementById('heightParallelogram').value);
	let baseUnit = document.getElementById('baseUnitParallelogram').value;
	let heightUnit = document.getElementById('heightUnitParallelogram').value;
	
	
	let priceUnit = document.getElementById('priceUnitParallelogram').value;
	let resultDiv = document.getElementById("resultDivParallelogram");
	let resultElement = document.getElementById('resultParallelogram');
	resultDiv.style.display = "block"; 
	let unitOptions = document.getElementById('unitOptionsParallelogram');
    let unitTable = document.getElementById('unitTableParallelogram');
	let pricePerUnit=document.getElementById('priceParallelogram').value || 0;
	let quantity=document.getElementById('quantityParallelogram').value || 1;
	
	if (!base || !height  ) {
		resultElement.innerText = "Please enter values for base and height";
		resultElement.classList.add("error");
		unitOptions.style.display = "none";
		return;
	}

    const baseInFeet = base * (unitConversionsToFeet[baseUnit] || 1);
    const heightInFeet = height * (unitConversionsToFeet[heightUnit] || 1);

    const areaInFeet = baseInFeet * heightInFeet;

    const totalAreaInFeet = areaInFeet * quantity;
	let areaInSelectedUnit = totalAreaInFeet * (conversionToOtherUnits[priceUnit] || 1);
    let totalCost = 0;

    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        totalCost = areaInSelectedUnit * pricePerUnit;
    }
	let priceUnitInTitleCase=convertToTitleCase(priceUnit);
	resultElement.innerText = `Total Area: ${areaInSelectedUnit.toFixed(2)} ${priceUnit}\nTotal Cost: $${totalCost.toFixed(2)}`;
	resultElement.classList.remove("error");
	unitOptions.style.display = "block";
	unitTable.style.display = "none"; 
	fillUnitTable(totalAreaInFeet,'unitResultBodyParallelogram');
	document.getElementById('headerParellelogram').scrollIntoView()

  
}

 function clearFieldsParallelogram() {
    document.getElementById('baseParallelogram').value = "";
	document.getElementById('heightParallelogram').value = "";	
    document.getElementById('quantityParallelogram').value = "1";
    document.getElementById('priceParallelogram').value = "0";
    document.getElementById('baseUnitParallelogram').selectedIndex = 0;
	document.getElementById('heightUnitParallelogram').selectedIndex = 0;
	document.getElementById('priceUnitParallelogram').selectedIndex = 0;	
    document.getElementById('resultParallelogram').innerText = "";
    document.getElementById('resultParallelogram').classList.remove("error");
	document.getElementById('resultDivParallelogram').style.display = "none";	
}

 function clearFieldsSector() {
    document.getElementById('radiusSector').value = "";
	document.getElementById('angleSector').value = "";	
    document.getElementById('quantitySector').value = "1";
    document.getElementById('priceSector').value = "0";
    document.getElementById('radiusUnitSector').selectedIndex = 0;
	document.getElementById('angleUnitSector').selectedIndex = 0;
	document.getElementById('priceUnitSector').selectedIndex = 0;	
    document.getElementById('resultSector').innerText = "";
    document.getElementById('resultSector').classList.remove("error");
	document.getElementById('resultDivSector').style.display = "none";	
}



 function clearFieldsTrapezoid() {
    document.getElementById('base1Trapezoid').value = "";
	document.getElementById('base2Trapezoid').value = "";
	document.getElementById('heightTrapezoid').value = "";
	
    document.getElementById('quantityTrapezoid').value = "1";
    document.getElementById('priceTrapezoid').value = "0";
    document.getElementById('base1UnitTrapezoid').selectedIndex = 0;
	 document.getElementById('base2UnitTrapezoid').selectedIndex = 0;
	document.getElementById('heightUnitTrapezoid').selectedIndex = 0;
	document.getElementById('priceUnitTrapezoid').selectedIndex = 0;
	
    document.getElementById('resultTrapezoid').innerText = "";
    document.getElementById('resultTrapezoid').classList.remove("error");
	document.getElementById('resultDivTrapezoid').style.display = "none";
	
}



 function clearFieldsTriangle() {
    document.getElementById('baseTriangle').value = "";
	document.getElementById('heightTriangle').value = "";
    document.getElementById('quantityTriangle').value = "1";
    document.getElementById('priceTriangle').value = "0";
    document.getElementById('baseUnitTriangle').selectedIndex = 0;
	document.getElementById('heightUnitTriangle').selectedIndex = 0;
	document.getElementById('priceUnitTriangle').selectedIndex = 0;
	
    document.getElementById('resultTriangle').innerText = "";
    document.getElementById('resultTriangle').classList.remove("error");
	document.getElementById('resultDivTriangle').style.display = "none";
	
}



 function clearFieldsTriEdge() {
    document.getElementById('lengthEdge1TriEdge').value = "";
	document.getElementById('lengthEdge2TriEdge').value = "";
	document.getElementById('lengthEdge3TriEdge').value = "";
    document.getElementById('quantityTriEdge').value = "1";
    document.getElementById('priceTriEdge').value = "0";
    document.getElementById('edge1LengthUnitTriEdge').selectedIndex = 0;
	document.getElementById('edge2LengthUnitTriEdge').selectedIndex = 0;
	document.getElementById('edge3LengthUnitTriEdge').selectedIndex = 0;
	document.getElementById('priceUnitTriEdge').selectedIndex = 0;
    document.getElementById('resultTriEdge').innerText = "";
    document.getElementById('resultTriEdge').classList.remove("error");
	document.getElementById('resultDivTriEdge').style.display = "none";
	
}


 function clearFieldsRing() {
    document.getElementById('outerDiameterRing').value = "";
	document.getElementById('borderWidthRing').value = "";
    document.getElementById('quantityRing').value = "1";
    document.getElementById('priceRing').value = "0";
    document.getElementById('outerDiameterUnitRing').selectedIndex = 0;
	document.getElementById('borderWidthUnitRing').selectedIndex = 0;
	document.getElementById('priceUnitRing').selectedIndex = 0;
    document.getElementById('resultRing').innerText = "";
    document.getElementById('resultRing').classList.remove("error");
	document.getElementById('resultDivRing').style.display = "none";
	
}


function hideAllResults(){
	 document.getElementById('resultDivRec').style.display = "none";
	 document.getElementById('resultDivRecBorder').style.display = "none";
	 document.getElementById('resultDivCircle').style.display = "none";
	 document.getElementById('resultDivRing').style.display = "none";
	 document.getElementById('resultDivTriEdge').style.display = "none";
	 document.getElementById('resultDivTriangle').style.display = "none";
	 document.getElementById('resultDivTrapezoid').style.display = "none";
	 document.getElementById('resultDivSector').style.display = "none";
	 document.getElementById('resultDivParallelogram').style.display = "none";
}


 function fillUnitTable(areaInFeet,unitResultBodyElement) {
       const tbody = document.getElementById(unitResultBodyElement);
       tbody.innerHTML = "";
		for (let unit in conversionToOtherUnits) {	
			//let unitInTitleCase=convertToTitleCase(unit);
			let value = areaInFeet * conversionToOtherUnits[unit];
			let row = `<tr><td>${value.toFixed(2)}</td><td nowrap>${unit}</td></tr>`;
			tbody.innerHTML += row;
		}
}

 function toggleUnitTable(resultTable) {	 
			let table = document.getElementById(resultTable);
            table.style.display = table.style.display === 'none' ? 'table' : 'none';
        }


function convertToTitleCase(str) {
  if (!str) {
      return ""
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
}

/*
function calculateSquareFootage(length, lengthUnit, width, widthUnit, quantity, pricePerUnit, priceUnit) {


    // Ensure units are converted to lowercase for uniformity
    lengthUnit = lengthUnit.toLowerCase();
    widthUnit = widthUnit.toLowerCase();
    priceUnit = priceUnit.toLowerCase();

    // Convert length and width to feet using the conversion factor
    const lengthInFeet = length * (unitConversionsToFeet[lengthUnit] || 1);
    const widthInFeet = width * (unitConversionsToFeet[widthUnit] || 1);

    // Calculate square footage for a single unit
    const areaPerUnitInFeet = lengthInFeet * widthInFeet;

    // Calculate the total area using the quantity of units
    const totalAreaInFeet = areaPerUnitInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
	const areaInMiles = totalBorderAreaInFeet * conversionToOtherUnits["square miles"];
	const areaInKilometers = totalBorderAreaInFeet * conversionToOtherUnits["square kilometers"];


    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            length: length,
            lengthUnit: lengthUnit,
            width: width,
            widthUnit: widthUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
		squareMiles:areaInMiles,
		squareKilometers:areaInKilometers,
        totalCost: totalCost
    };
	var divResultHtml=generateRectangleResult(totalAreaInFeet,areaInAcres,areaInSquareYards,areaInSquareInches,areaInSquareMeters,areaInSquareCentimeters,areaInMiles,areaInKilometers,totalCost);
	
	document.getElementById("rectangleresultdiv").innerHTML = divResultHtml;
	document.getElementById("rectangleresultdiv").style.display = "block";

}






function calculateRectangleBorderSquareFootage(outerLength, lengthUnit, outerWidth, widthUnit, borderWidth, borderUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet (for length, width, and border)
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304,    // 1 square foot = 929.0304 square centimeters
		"miles": 1 / 27878400 // 1 square foot = 2.78784e-8 square miles
    };

    // Ensure units are converted to lowercase for uniformity
    lengthUnit = lengthUnit.toLowerCase();
    widthUnit = widthUnit.toLowerCase();
    borderUnit = borderUnit.toLowerCase();
    priceUnit = priceUnit.toLowerCase();

    // Convert outerLength, outerWidth, and borderWidth to feet using the conversion factor
    const outerLengthInFeet = outerLength * (unitConversionsToFeet[lengthUnit] || 1);
    const outerWidthInFeet = outerWidth * (unitConversionsToFeet[widthUnit] || 1);
    const borderWidthInFeet = borderWidth * (unitConversionsToFeet[borderUnit] || 1);

    // Calculate inner length and width by subtracting border width from outer dimensions
    const innerLengthInFeet = outerLengthInFeet - 2 * borderWidthInFeet;
    const innerWidthInFeet = outerWidthInFeet - 2 * borderWidthInFeet;

    // Calculate the area of the outer rectangle and inner rectangle
    const outerAreaInFeet = outerLengthInFeet * outerWidthInFeet;
    const innerAreaInFeet = innerLengthInFeet * innerWidthInFeet;

    // Calculate the area of the border by subtracting inner area from outer area
    const borderAreaInFeet = outerAreaInFeet - innerAreaInFeet;

    // Calculate the total area using the quantity of units
    const totalBorderAreaInFeet = borderAreaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalBorderAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalBorderAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalBorderAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalBorderAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalBorderAreaInFeet * conversionToOtherUnits["square centimeters"];
	const areaInMiles = totalBorderAreaInFeet * conversionToOtherUnits["miles"];


    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalBorderAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalBorderAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalBorderAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalBorderAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalBorderAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalBorderAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            outerLength: outerLength,
            lengthUnit: lengthUnit,
            outerWidth: outerWidth,
            widthUnit: widthUnit,
            borderWidth: borderWidth,
            borderUnit: borderUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalBorderAreaInFeet: totalBorderAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
		squareMiles:areaInMiles,
        totalCost: totalCost
    };
}



function calculateCircleSquareFootage(diameter, diameterUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet for diameter and area
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304    // 1 square foot = 929.0304 square centimeters
    };

    // Convert diameter to feet using the conversion factor
    diameterUnit = diameterUnit.toLowerCase();  // Ensure unit is lowercase
    const diameterInFeet = diameter * (unitConversionsToFeet[diameterUnit] || 1);

    // Calculate the radius in feet
    const radiusInFeet = diameterInFeet / 2;

    // Calculate the area of the circle (Area = π * r^2)
    const areaInFeet = Math.PI * Math.pow(radiusInFeet, 2);

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];

    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            diameter: diameter,
            diameterUnit: diameterUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
        totalCost: totalCost
    };
}




function calculateRingSquareFootage(outerDiameter, borderWidth, outerDiameterUnit, borderUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet for diameter and area
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304    // 1 square foot = 929.0304 square centimeters
    };

    // Convert outer diameter and border width to feet using the conversion factor
    outerDiameterUnit = outerDiameterUnit.toLowerCase();  // Ensure unit is lowercase
    borderUnit = borderUnit.toLowerCase();  // Ensure unit is lowercase
    const outerDiameterInFeet = outerDiameter * (unitConversionsToFeet[outerDiameterUnit] || 1);
    const borderWidthInFeet = borderWidth * (unitConversionsToFeet[borderUnit] || 1);

    // Calculate the inner radius and outer radius in feet
    const outerRadiusInFeet = outerDiameterInFeet / 2;
    const innerRadiusInFeet = (outerDiameterInFeet - borderWidthInFeet) / 2;

    // Calculate the area of the ring (Area = π * (Outer Radius^2 - Inner Radius^2))
    const areaInFeet = Math.PI * (Math.pow(outerRadiusInFeet, 2) - Math.pow(innerRadiusInFeet, 2));

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];

    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            outerDiameter: outerDiameter,
            outerDiameterUnit: outerDiameterUnit,
            borderWidth: borderWidth,
            borderUnit: borderUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
        totalCost: totalCost
    };
}




function calculateTriangleAreaWithEdges(edge1, edge2, edge3, edgeUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet for edges and area
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304    // 1 square foot = 929.0304 square centimeters
    };

    // Convert the edge lengths to feet using the conversion factor
    edgeUnit = edgeUnit.toLowerCase();  // Ensure unit is lowercase
    const edge1InFeet = edge1 * (unitConversionsToFeet[edgeUnit] || 1);
    const edge2InFeet = edge2 * (unitConversionsToFeet[edgeUnit] || 1);
    const edge3InFeet = edge3 * (unitConversionsToFeet[edgeUnit] || 1);

    // Calculate the semi-perimeter (s) of the triangle
    const s = (edge1InFeet + edge2InFeet + edge3InFeet) / 2;

    // Calculate the area using Heron's formula
    const areaInFeet = Math.sqrt(s * (s - edge1InFeet) * (s - edge2InFeet) * (s - edge3InFeet));

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];

    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            edge1: edge1,
            edge2: edge2,
            edge3: edge3,
            edgeUnit: edgeUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
        totalCost: totalCost
    };
}



function calculateTriangleAreaWithBaseAndHeight(base, height, baseUnit, heightUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet for base and height
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304    // 1 square foot = 929.0304 square centimeters
    };

    // Convert the base and height to feet using the conversion factor
    baseUnit = baseUnit.toLowerCase();  // Ensure unit is lowercase
    heightUnit = heightUnit.toLowerCase();  // Ensure unit is lowercase

    const baseInFeet = base * (unitConversionsToFeet[baseUnit] || 1);
    const heightInFeet = height * (unitConversionsToFeet[heightUnit] || 1);

    // Calculate the area using the formula (1/2) * base * height
    const areaInFeet = 0.5 * baseInFeet * heightInFeet;

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];

    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            base: base,
            height: height,
            baseUnit: baseUnit,
            heightUnit: heightUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
        totalCost: totalCost
    };
}




function calculateTrapezoidAreaWithBasesAndHeight(base1, base2, height, base1Unit, base2Unit, heightUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet for base1, base2, and height
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304    // 1 square foot = 929.0304 square centimeters
    };

    // Convert the base1, base2, and height to feet using the conversion factor
    base1Unit = base1Unit.toLowerCase();  // Ensure unit is lowercase
    base2Unit = base2Unit.toLowerCase();  // Ensure unit is lowercase
    heightUnit = heightUnit.toLowerCase();  // Ensure unit is lowercase

    const base1InFeet = base1 * (unitConversionsToFeet[base1Unit] || 1);
    const base2InFeet = base2 * (unitConversionsToFeet[base2Unit] || 1);
    const heightInFeet = height * (unitConversionsToFeet[heightUnit] || 1);

    // Calculate the area of the trapezoid using the formula (1/2) * (Base1 + Base2) * Height
    const areaInFeet = 0.5 * (base1InFeet + base2InFeet) * heightInFeet;

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];

    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            base1: base1,
            base2: base2,
            height: height,
            base1Unit: base1Unit,
            base2Unit: base2Unit,
            heightUnit: heightUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
        totalCost: totalCost
    };
}



function calculateSectorArea(radius, angle, radiusUnit, angleUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet for radius
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304    // 1 square foot = 929.0304 square centimeters
    };

    // Convert the radius to feet using the conversion factor
    radiusUnit = radiusUnit.toLowerCase();  // Ensure unit is lowercase
    angleUnit = angleUnit.toLowerCase();    // Ensure unit is lowercase
    const radiusInFeet = radius * (unitConversionsToFeet[radiusUnit] || 1);

    // Convert angle from degrees to radians if it's in degrees
    let angleInRadians = angle;
    if (angleUnit === "degree") {
        angleInRadians = angle * (Math.PI / 180);  // Convert degree to radian
    }

    // Calculate the area of the sector using the formula: (θ / 2π) * π * r^2
    const areaInFeet = (angleInRadians / (2 * Math.PI)) * Math.PI * radiusInFeet * radiusInFeet;

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];

    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            radius: radius,
            angle: angle,
            radiusUnit: radiusUnit,
            angleUnit: angleUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
        totalCost: totalCost
    };
}





function calculateParallelogramArea(base, height, baseUnit, heightUnit, quantity, pricePerUnit, priceUnit) {
    // Define conversion rates to feet for base and height
    const unitConversionsToFeet = {
        "feet": 1,
        "yards": 3,
        "inches": 1 / 12,
        "miles": 5280,
        "meters": 3.28084,
        "kilometers": 3280.84,
        "centimeters": 0.0328084
    };

    // Conversion factors to convert square feet to other units
    const conversionToOtherUnits = {
        "acres": 1 / 43560,                // 1 acre = 43,560 square feet
        "square feet": 1,
        "square yards": 1 / 9,             // 1 square yard = 9 square feet
        "square inches": 144,              // 1 square foot = 144 square inches
        "square meters": 0.092903,         // 1 square foot = 0.092903 square meters
        "square centimeters": 929.0304    // 1 square foot = 929.0304 square centimeters
    };

    // Convert the base and height to feet using the conversion factor
    baseUnit = baseUnit.toLowerCase();  // Ensure unit is lowercase
    heightUnit = heightUnit.toLowerCase(); // Ensure unit is lowercase
    const baseInFeet = base * (unitConversionsToFeet[baseUnit] || 1);
    const heightInFeet = height * (unitConversionsToFeet[heightUnit] || 1);

    // Calculate the area of the parallelogram in square feet
    const areaInFeet = baseInFeet * heightInFeet;

    // Calculate the total area for the given quantity
    const totalAreaInFeet = areaInFeet * quantity;

    // Convert the total area to other units
    const areaInAcres = totalAreaInFeet * conversionToOtherUnits["acres"];
    const areaInSquareYards = totalAreaInFeet * conversionToOtherUnits["square yards"];
    const areaInSquareInches = totalAreaInFeet * conversionToOtherUnits["square inches"];
    const areaInSquareMeters = totalAreaInFeet * conversionToOtherUnits["square meters"];
    const areaInSquareCentimeters = totalAreaInFeet * conversionToOtherUnits["square centimeters"];

    // Initialize total cost to be 0
    let totalCost = 0;

    // Validate pricePerUnit and priceUnit
    if (pricePerUnit != null && !isNaN(pricePerUnit) && pricePerUnit > 0) {
        // Convert the total area to the unit of price (square feet, square meters, etc.)
        let totalAreaInCorrectUnit = totalAreaInFeet; // Default is square feet

        if (priceUnit === "square yards") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square yards"];
        } else if (priceUnit === "square inches") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square inches"];
        } else if (priceUnit === "square meters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square meters"];
        } else if (priceUnit === "square centimeters") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["square centimeters"];
        } else if (priceUnit === "acres") {
            totalAreaInCorrectUnit = totalAreaInFeet * conversionToOtherUnits["acres"];
        }

        // Calculate the total cost based on quantity and price per unit
        totalCost = totalAreaInCorrectUnit * pricePerUnit;
    }

    // Return the result with input values and all calculations
    return {
        inputValues: {
            base: base,
            height: height,
            baseUnit: baseUnit,
            heightUnit: heightUnit,
            quantity: quantity,
            pricePerUnit: pricePerUnit,
            priceUnit: priceUnit
        },
        totalAreaInFeet: totalAreaInFeet,
        acres: areaInAcres,
        squareYards: areaInSquareYards,
        squareInches: areaInSquareInches,
        squareMeters: areaInSquareMeters,
        squareCentimeters: areaInSquareCentimeters,
        totalCost: totalCost
    };
}
*/


