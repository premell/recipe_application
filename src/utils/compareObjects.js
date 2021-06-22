import {flattenObject } from "./flattenObject"

export const compareObjects = (ob1, ob2) =>{

	const flatOb1 = flattenObject(ob1)
	const flatOb2 = flattenObject(ob2)

	let match = true

	Object.keys(flatOb1).map(function(key1, index1) {
		if(flatOb2[key1] !== flatOb1[key1]) {
			match = false 
		}
	});
	return match
}
