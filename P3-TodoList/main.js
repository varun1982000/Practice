function addTask() {
      const input = document.getElementById("taskInput");
      const task = input.value.trim();
      if (task === "") return;

      const li = document.createElement("li");
      li.innerHTML = `${task} <span class="remove" onclick="this.parentElement.remove()">❌</span>`;
      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }