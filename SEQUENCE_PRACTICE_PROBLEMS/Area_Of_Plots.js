/* AREA OF PLOT IN ACRES */

function areaInAcres(){

	const plot = 25;
        const l = 60;
        const b = 40;

        let area = ((l * b));
        let newArea = ((area / 3));
        console.log (" AREA IN METERS = " + newArea);

        let areaOfNewPlot = ((newArea * plot));
	let areaInAcres = ((areaOfNewPlot / 4046.856));
        console.log (" AREA OF PLOT = " + areaInAcres);
}
	console.log (areaInAcres())