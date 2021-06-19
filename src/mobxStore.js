export function createMobxStore(){
	return {
		currentlyEdited: {name:"Pancakes"},
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
