$(document).ready(function () {
    $("#taskForm").submit(function (event) {
        event.preventDefault();
        const taskName = $("#taskInput").val();
        if (taskName) {
            const taskItem = $("<li></li>").text(taskName);
            taskItem.click(function () {
                $(this).toggleClass("completed");
            });
            $("#taskList").append(taskItem);
            $("#taskInput").val('');
        }
    });
});
