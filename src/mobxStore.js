


export function createMobxStore(){
	return {
		currentlyEdited: {name:"Pancakes", id: "V1StGXR8_Z5jdHi6B-myT", 
		categories:[
			"Main course"
		],},
		setCurrentlyEdited(recipe){
			this.currentlyEdited = recipe
		},
		removeCurrentlyEdited(recipe){
			this.currentlyEdited = []
		},
		showEdit:false,
		setShowEdit(){
			this.showEdit = true
		},
		setHideEdit(){
			this.showEdit = false
		}
	}
}
