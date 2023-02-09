import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What you wanna add in your ToDo List?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you wanna add more in ToDo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Enter valid input");
    }
}
if (todos.length > 0) {
    console.log("Your ToDo List: \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("Nothing Found to add");
}
