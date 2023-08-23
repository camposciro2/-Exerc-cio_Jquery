$(document).ready(function () {
    $("#taskForm").submit(function (event) {
        event.preventDefault();
        const taskName = $("#taskInput").val().trim();  // trim para remover espaços em branco

        if (taskName) {
            const taskItem = $("<li></li>").text(taskName);

            const deleteBtn = $("<button class='delete-btn'>X</button>");
            deleteBtn.click(function () {
                $(this).parent().remove();
            });

            taskItem.append(deleteBtn);

            taskItem.click(function (e) {
                if (!$(e.target).hasClass('delete-btn')) {
                    $(this).toggleClass("completed");
                }
            });

            $("#taskList").append(taskItem);
            $("#taskInput").val('');
        } else {
            alert("Por favor, insira uma tarefa válida.");
        }
    });
});
