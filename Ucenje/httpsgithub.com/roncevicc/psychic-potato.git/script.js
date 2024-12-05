






const courseForm = document.getElementById('course-form');
const coursesContainer = document.getElementById('courses-container');
const isOnlineCheckbox = document.getElementById('is-online');
const scheduleInput = document.getElementById('schedule');

// Kreiraj niz za čuvanje kurseva
let courses = [];

// Funkcija za prikaz kurseva
function displayCourses() {
    coursesContainer.innerHTML = '';  // Očisti prethodne kurseve

    // Kreiraj kartice za svaki kurs
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');

        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Type:</strong> ${course.type}</p>
            <p><strong>Teacher:</strong> ${course.teacher}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            ${course.online ? `<p><strong>Schedule:</strong> ${course.schedule}</p>` : ''}
        `;

        coursesContainer.appendChild(courseCard);
    });
}

// Funkcija za dodavanje kursa
courseForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('course-name').value.trim();
    const type = document.getElementById('course-type').value.trim();
    const teacher = document.getElementById('course-teacher').value.trim();
    const description = document.getElementById('course-description').value.trim();
    const online = isOnlineCheckbox.checked;
    const schedule = scheduleInput.value;

    // Validacija unosa
    if (!name || !type || !teacher || !description) {
        alert('Please fill in all fields');
        return;
    }

    // Kreiranje novog kursa
    const newCourse = {
        name,
        type,
        teacher,
        description,
        online,
        schedule: online ? schedule : null,
    };

    // Dodavanje kursa u niz
    courses.push(newCourse);

    // Ažuriranje prikaza kurseva
    displayCourses();

    // Resetovanje forme
    courseForm.reset();
    scheduleInput.style.display = 'none'; // Sakrij input za datum ako kurs nije online
});

// Funkcija za prikazivanje inputa za datum kad je kurs online
isOnlineCheckbox.addEventListener('change', function() {
    if (isOnlineCheckbox.checked) {
        scheduleInput.style.display = 'inline-block'; // Prikazivanje inputa za datum
    } else {
        scheduleInput.style.display = 'none'; // Sakrij datum input
    }
});






const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", function () {
    window.location.href = "login.html"; // Vraća korisnika na login stranicu
});





document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Sprečava da stranica bude osvežena prilikom slanja forme

    // Prikupljanje podataka sa forme
    let courseName = document.getElementById("courseName").value;
    let courseType = document.getElementById("courseType").value;
    let teacherName = document.getElementById("teacherName").value;
    let description = document.getElementById("description").value;
    let isOnline = document.getElementById("isOnline").checked ? "Online" : "Offline";

    // Kreiranje novog kursa u HTML-u
    let courseList = document.getElementById("courseList");  // Pretpostavljamo da postoji div ili ul za kurseve
    let newCourse = document.createElement("div");
    newCourse.classList.add("course");
    newCourse.innerHTML = `
        <h3>${courseName}</h3>
        <p><strong>Type:</strong> ${courseType}</p>
        <p><strong>Teacher:</strong> ${teacherName}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Status:</strong> ${isOnline}</p>
    `;
    courseList.appendChild(newCourse);

    // Čišćenje forme nakon unosa
    document.getElementById("addCourseForm").reset();
});







document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Sprečava osvežavanje stranice prilikom slanja forme

    // Preuzimanje podataka iz forme
    let courseName = document.getElementById("courseName").value;
    let courseType = document.getElementById("courseType").value;
    let teacherName = document.getElementById("teacherName").value;
    let description = document.getElementById("description").value;
    let isOnline = document.getElementById("isOnline").checked ? "Online" : "Offline";

    // Kreiramo HTML sadržaj za novi kurs
    let courseList = document.getElementById("courseList");
    let newCourse = document.createElement("div");
    newCourse.classList.add("course");

    newCourse.innerHTML = `
        <div class="course-header">
            <h3>${courseName}</h3>
            <span class="course-type">${courseType}</span>
        </div>
        <p><strong>Teacher:</strong> ${teacherName}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Status:</strong> <span class="${isOnline.toLowerCase()}">${isOnline}</span></p>
    `;

    // Dodajemo kurs u listu kurseva na Home stranici
    courseList.appendChild(newCourse);

    // Resetujemo formu nakon dodavanja kursa
    document.getElementById("addCourseForm").reset();
});







document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Sprečava osvežavanje stranice prilikom slanja forme

    // Preuzimanje podataka iz forme
    let courseName = document.getElementById("courseName").value;
    let courseType = document.getElementById("courseType").value;
    let teacherName = document.getElementById("teacherName").value;
    let description = document.getElementById("description").value;
    let isOnline = document.getElementById("isOnline").checked ? "Online" : "Offline";

    // Kreiramo HTML sadržaj za novi kurs
    let courseList = document.getElementById("courseList");
    let newCourse = document.createElement("div");
    newCourse.classList.add("course");

    newCourse.innerHTML = `
        <div class="course-header">
            <h3>${courseName}</h3>
            <span class="course-type">${courseType}</span>
        </div>
        <p><strong>Teacher:</strong> ${teacherName}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Status:</strong> <span class="${isOnline.toLowerCase()}">${isOnline}</span></p>
    `;

    // Dodajemo kurs u listu kurseva na Home stranici
    courseList.appendChild(newCourse);

    // Resetujemo formu nakon dodavanja kursa
    document.getElementById("addCourseForm").reset();
});

















document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Sprečava osvežavanje stranice prilikom slanja forme

    // Preuzimanje podataka iz forme
    let courseName = document.getElementById("courseName").value;
    let courseType = document.getElementById("courseType").value;
    let teacherName = document.getElementById("teacherName").value;
    let description = document.getElementById("description").value;
    let isOnline = document.getElementById("isOnline").checked ? "Online" : "Offline";

    // Kreiramo HTML sadržaj za novi kurs
    let courseList = document.getElementById("courseList");
    let newCourse = document.createElement("div");
    newCourse.classList.add("course");

    newCourse.innerHTML = `
        <div class="course-header">
            <h3>${courseName}</h3>
            <span class="course-type">${courseType}</span>
        </div>
        <p><strong>Teacher:</strong> ${teacherName}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Status:</strong> <span class="${isOnline.toLowerCase()}">${isOnline}</span></p>
    `;

    // Dodajemo kurs u listu kurseva na Home stranici
    courseList.appendChild(newCourse);

    // Resetujemo formu nakon dodavanja kursa
    document.getElementById("addCourseForm").reset();
});













// Funkcija za učitavanje kurseva iz localStorage
function loadCourses() {
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = "";

    courses.forEach((course, index) => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-item");
        courseItem.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Type:</strong> ${course.type}</p>
            <p><strong>Teacher:</strong> ${course.teacher}</p>
            <p>${course.description}</p>
            <p><strong>Status:</strong> ${course.online ? "Online" : "Offline"}</p>
            <button onclick="deleteCourse(${index})">Delete</button>
            <button onclick="editCourse(${index})">Edit</button>
        `;
        courseList.appendChild(courseItem);
    });
}

// Funkcija za dodavanje novog kursa
document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let courseName = document.getElementById("courseName").value;
    let courseType = document.getElementById("courseType").value;
    let teacherName = document.getElementById("teacherName").value;
    let description = document.getElementById("description").value;
    let isOnline = document.getElementById("isOnline").checked;
    
    const newCourse = { name: courseName, type: courseType, teacher: teacherName, description: description, online: isOnline };
    
    const courses = JSON.parse(localStorage.getItem("courses")) || [];
    courses.push(newCourse);
    localStorage.setItem("courses", JSON.stringify(courses));

    loadCourses();  // Osvježavanje liste kurseva
});

// Funkcija za brisanje kursa
function deleteCourse(index) {
    const courses = JSON.parse(localStorage.getItem("courses"));
    courses.splice(index, 1);  // Brišemo kurs sa odgovarajuće pozicije
    localStorage.setItem("courses", JSON.stringify(courses));

    loadCourses();  // Osvježavanje liste kurseva
}

// Funkcija za editovanje kursa
function editCourse(index) {
    const courses = JSON.parse(localStorage.getItem("courses"));
    const course = courses[index];

    // Prepunjavamo formu sa podacima kursa koji želimo da izmenimo
    document.getElementById("courseName").value = course.name;
    document.getElementById("courseType").value = course.type;
    document.getElementById("teacherName").value = course.teacher;
    document.getElementById("description").value = course.description;
    document.getElementById("isOnline").checked = course.online;

    // Menjamo dugme u formi na "Update" za ažuriranje kursa
    document.getElementById("addCourseForm").onsubmit = function(event) {
        event.preventDefault();

        course.name = document.getElementById("courseName").value;
        course.type = document.getElementById("courseType").value;
        course.teacher = document.getElementById("teacherName").value;
        course.description = document.getElementById("description").value;
        course.online = document.getElementById("isOnline").checked;

        courses[index] = course;
        localStorage.setItem("courses", JSON.stringify(courses));
        
        loadCourses();  // Osvježavanje liste kurseva
    };
}

loadCourses();  // Učitavanje kurseva prilikom učitavanja stranice












document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Sprečava osvežavanje stranice

    const email = document.getElementById("email").value;
    if (!email.includes('@')) {
        alert("Email mora sadržati '@'.");
        return;
    }

    // Ostatak koda za dodavanje kursa
});
