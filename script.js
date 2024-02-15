<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
    new Vue({
        el: '#app',
        data: {
            newTask: '',
            tasks: [],
            showEditBox: false,
            editedTask: '',
            editedTaskIndex: -1
        },
        methods: {
            addTask: function() {
                if (this.newTask.trim()) {
                    this.tasks.push(this.newTask.trim());
                    this.newTask = '';
                }
            },
            editTask: function(index) {
                this.editedTaskIndex = index;
                this.editedTask = this.tasks[index];
                this.showEditBox = true;
            },
            saveEdit: function() {
                if (this.editedTask.trim()) {
                    this.$set(this.tasks, this.editedTaskIndex, this.editedTask.trim());
                    this.showEditBox = false;
                }
            },
            deleteTask: function(index) {
                this.tasks.splice(index, 1);
            },
            closeInput: function() {
                this.showEditBox = false;
            }
        }
    });
