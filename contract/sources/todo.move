module TodoList::todo_list {
    use std::string;
    use std::vector;
    use aptos_framework::account;
    use std::signer;

    struct TodoList has key {
        tasks: vector<Task>,
    }

    struct Task has store, drop {
        content: string::String,
        completed: bool,
    }

    public fun create_list(account: &signer) {
        move_to(account, TodoList { tasks: vector::empty() });
    }

    public entry fun add_task(account: &signer, content: string::String) acquires TodoList {
         let address_of_account = signer::address_of(account);
        let todo_list = borrow_global_mut<TodoList>(address_of_account);
        let task = Task {
            content,
            completed: false,
        };
        vector::push_back(&mut todo_list.tasks, task);
    }

    public entry fun complete_task(account: &signer, task_index: u64) acquires TodoList {
        let address_of_account = signer::address_of(account);
        let todo_list = borrow_global_mut<TodoList>(address_of_account);
        let task = vector::borrow_mut(&mut todo_list.tasks, task_index);
        task.completed = true;
    }

    public entry fun remove_task(account: &signer, task_index: u64) acquires TodoList {
         let address_of_account = signer::address_of(account);
        let todo_list = borrow_global_mut<TodoList>(address_of_account);
        vector::remove(&mut todo_list.tasks, task_index);
    }
}