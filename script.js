//selections
let tasks = $(".tasksBox");
// console.log(tasks);
let addBtn = $("#btnAdd");
// console.log(addBtn);
let task = $("#taskInput");
// console.log(task);

//events
addBtn.click(function() {

    //create Element
    let newDiv = $("<div class=\"task\"></div>")
    let newText = $("<input class=\"taskText\" type=\"text\" value=\""+task.val()+"\" readonly>");
    let doneBtn = $(`<button class="done">Done</button>`);
    let delBtn = $(`<button class="delete">Delete</button>`);

    newDiv.append(newText);
    newDiv.append(doneBtn);
    newDiv.append(delBtn);
    tasks.append(newDiv);
    //done button
    doneBtn.click(function() {

        $(this).parent().toggleClass("TaskDone");
        // console.log("xD");
    });

    //delete button
    delBtn.click(function() {

        $(this).parent().remove();
    });
});
