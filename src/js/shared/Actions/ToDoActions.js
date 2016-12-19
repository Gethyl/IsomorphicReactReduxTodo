
export const AddItem = (item) => ({
	type: "ADD_ITEM",
	item: item
})

export const DeleteItem = (id) => ({
	type: "DELETE_ITEM",
	itemId: id
})

export const EditIconClicked = (id) => ({
	type: "EDIT_ICON_CLICKED",
	itemId: id,
	editItem: true
})

export const EditItem = (id,editedText) => ({
	type: "EDIT_ITEM",
	itemId: id,
	editItem: false,
	item:editedText
})

export const CompleteItem = (id, completedFlag) => ({
	type: "COMPLETED_ITEM",
	itemId: id,
	completed:completedFlag
})
