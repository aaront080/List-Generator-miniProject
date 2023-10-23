const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run();

class Component {
    constructor(text, priority, confirmAddTask) {
        this.text = text;
        this.priority = priority;
        this.confirmAddTask = confirmAddTask;
    }
render() {
    return `Child`
}

}

class Header extends Component {
    constructor(text, priority, confirmAddTask) {
        super(text, priority, confirmAddTask)
    }
    render() {
        return `<header class="header"><h1>Todo Today</h1><p>{DATE_HERE}</p></header>`
    }
}

class TaskList extends Component {
    constructor(text, priority, confirmAddTask) {
        super(text, priority, confirmAddTask)
    }
    render() {
        return`<ul class="tasks">{INNER_HTML}</ul>`
    }
}

class TaskListItem extends Component {
    constructor(text, priority, confirmAddTask) {
        super(text, priority, confirmAddTask);
    }
    render() {
        return `<li class="tasks-item">{INNER_HTML}</li>`
        if (priority===true) {
            this.priority = `tasks-item-priority`
        }
    }
}