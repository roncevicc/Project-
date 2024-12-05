// Prikazuje kurseve sa 'localStorage'
function getCoursesFromStorage() {
    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    return courses;
}

function saveCourse(course) {
    const courses = getCoursesFromStorage();
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
}

// Prikazuje kurseve
function displayCourses(filterType = "all") {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Resetuje listu

    const courses = getCoursesFromStorage();
    const filteredCourses = filterType === "all" ? courses : courses.filter(course => course.type.toLowerCase() === filterType.toLowerCase());

    filteredCourses.forEach(course => {
        const courseItem = document.createElement("div");
        courseItem.classList.add("course-item");
        courseItem.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Type:</strong> ${course.type}</p>
            <p><strong>Teacher:</strong> ${course.teacher}</p>
            <p>${course.description}</p>
            <p><strong>Mode:</strong> ${course.online ? "Online" : "Offline"}</p>
        `;
        courseList.appendChild(courseItem);
    });
}

// Dodavanje novog kursa
document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const courseName = document.getElementById("courseName").value;
    const courseType = document.getElementById("courseType").value;
    const teacherName = document.getElementById("teacherName").value;
    const description = document.getElementById("description").value;
    const isOnline = document.getElementById("isOnline").checked;

    const newCourse = {
        name: courseName,
        type: courseType,
        teacher: teacherName,
        description: description,
        online: isOnline
    };

    // Sačuvaj kurs u localStorage
    saveCourse(newCourse);

    // Prikazivanje poruke o uspešnom dodavanju kursa
    alert("Course added successfully!");

    // Resetuj formu
    document.getElementById("addCourseForm").reset();

    // Prikaz novih kurseva
    displayCourses();
});

// Filtriranje kurseva
document.getElementById("filter-type").addEventListener("change", (e) => {
    displayCourses(e.target.value);
});

// Prikaz svih kurseva po učitavanju stranice
displayCourses();
