const CLI = require('./lib/cli.js');

const cli = new CLI();

cli.run();

class Component {
    constructor(text, priority, confirmAddTask) {
        this.text = text;
        this.priority = priority;
        this.confirmAddTask = confirmAddTask;
    }
}

class Header extends Component {
    constructor(text, priority, confirmAddTask) {
        super(text, priority, confirmAddTask)
    }
}

class TaskList extends Component {
    constructor(text, priority, confirmAddTask) {
        super(text, priority, confirmAddTask)
    }
}

class TaskListItem extends TaskList {
    constructor(text, priority, confirmAddTask) {
        super(text, priority, confirmAddTask);
    }
}