document.addEventListener("DOMContentLoaded", () => {
	const form = document.querySelector("form");
	const todoInput = document.querySelector("#todo");
	const todos = document.querySelector("#todos");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const toDoText = todoInput.value.trim();

		if (toDoText !== "") {
			const toDoItem = createToDoItem(toDoText);
			todos.appendChild(toDoItem);
			todoInput.value = "";
			swal({
				title: "Good job!",
				text: "Your task has been added successfully",
				icon: "success",
				button: "Aww yiss!",
			});
		}
	});

	const createToDoItem = (text) => {
		const listItem = document.createElement("li");
		listItem.classList.add("list-style");
		const toDoTextSpan = document.createElement("span");
		toDoTextSpan.classList.add("span-list");
		toDoTextSpan.textContent = text;

		const deleteButton = document.createElement("button");
		deleteButton.textContent = "Delete";
		deleteButton.classList.add("deleteButton");
		deleteButton.addEventListener("click", () => {
			listItem.remove();
			swal({
				title: "Are you sure?",
				text: "Once deleted, you will not be able to recover this task!",
				icon: "warning",
				buttons: true,
				dangerMode: true,
			}).then((willDelete) => {
				if (willDelete) {
					swal("Poof! Your task has been deleted!", {
						icon: "success",
					});
				} else {
					swal("Your task is safe!");
				}
			});
		});

		listItem.appendChild(toDoTextSpan);
		listItem.appendChild(deleteButton);

		return listItem;
	};
});
