let newNote = ""


function addNotes(){
	$("#jquery-addnotes-form").submit(function(event){
		event.preventDefault()
		newNote = $("#addnotes-new").val()

		localStorage.setItem("newNotes", newNote)
		$("ul").prepend(
			`
			<li>
			<span class = "saved-notes-new">${newNote}</span>
			<button class = "saved-notes-delete">
			<span class="delete-button">Remove</span>
			</button>
			</li>
			`
			)
		$("#addnotes-new").val("")
	})
	
}



//Fetch data from localStorage

let savedNote = localStorage.getItem("newNotes")

if(savedNote){
	//newNote = savedNote	
	$("ul").prepend(
	`
			<li>
			<span class = "saved-notes-new">${savedNote}</span>
			<button class = "saved-notes-delete">
			<span class="delete-button">Remove</span>
			</button>
			</li>
			`

	)
}

function deleteNotes() {
	$(document).on( "click", ".saved-notes-delete", function () {
		$(this).closest("li").remove()
		localStorage.removeItem("newNotes")
	})
}

addNotes()
deleteNotes()