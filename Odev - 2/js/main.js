document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addButton = document.getElementById("liveToastBtn");
    const taskList = document.getElementById("list");
    const successToast = document.querySelector(".toast.success");
    const errorToast = document.querySelector(".toast.error");

    // Sayfa Yüklendiğinde Önceki Verileri Getir
    loadTasks();

    // Ekleme
    function newElement() {
        const taskValue = taskInput.value.trim();
        if (taskValue === "") {
            showErrorToast("Listeye boş ekleme yapamazsınız!");
            return;
        }

        const listItem = document.createElement("li");
        listItem.textContent = taskValue;
        taskList.appendChild(listItem);

        saveTask(taskValue); // Local Storage'a kaydet
        showSuccessToast("Listeye eklendi.");
        taskInput.value = "";
    }

    // Silme
    taskList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.remove();
            removeTask(event.target.textContent); // Local Storage'dan sil
            showSuccessToast("Görev silindi.");
        }
    });

    // Local Storage'dan Yapılacakları Getir
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.forEach(task => {
            const listItem = document.createElement("li");
            listItem.textContent = task;
            taskList.appendChild(listItem);
        });
    }

    // Local Storage'a Kaydet
    function saveTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Local Storage'dan Sil
    function removeTask(task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Toast Mesajları
    function showSuccessToast(message) {
        successToast.querySelector(".toast-body").textContent = message;
        successToast.classList.remove("hide");
        setTimeout(() => successToast.classList.add("hide"), 4000);
    }

    function showErrorToast(message) {
        errorToast.querySelector(".toast-body").textContent = message;
        errorToast.classList.remove("hide");
        setTimeout(() => errorToast.classList.add("hide"), 4000);
    }

    addButton.addEventListener("click", newElement);
});
