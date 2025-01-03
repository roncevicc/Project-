// Example course data for displaying added courses
const courses = [
    { name: "JavaScript Basics", type: "Programming", teacher: "John Doe", online: true, description: "Learn JS from scratch." },
    { name: "HTML & CSS", type: "Design", teacher: "Jane Smith", online: false, description: "Build beautiful websites." },
    // Add more example courses if needed
];

document.getElementById("addCourseForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from reloading the page on submit

    // Retrieve values from the form
    const courseName = document.getElementById("courseName").value;
    const courseType = document.getElementById("courseType").value;
    const teacherName = document.getElementById("teacherName").value;
    const description = document.getElementById("description").value;
    const isOnline = document.getElementById("isOnline").checked ? "Online" : "Offline";

    // Create a new course object and add it to the courses array
    const newCourse = {
        name: courseName,
        type: courseType,
        teacher: teacherName,
        online: isOnline === "Online",
        description: description
    };
    courses.push(newCourse);  // Push new course to courses array

    // Display the new course on the page
    const courseList = document.getElementById("course-list");
    const courseItem = document.createElement("div");
    courseItem.classList.add("course-item");
    courseItem.innerHTML = `
        <h3>${newCourse.name}</h3>
        <p><strong>Type:</strong> ${newCourse.type}</p>
        <p><strong>Teacher:</strong> ${newCourse.teacher}</p>
        <p>${newCourse.description}</p>
        <p><strong>Mode:</strong> ${newCourse.online ? "Online" : "Offline"}</p>
    `;
    courseList.appendChild(courseItem);

    // Optionally reset the form after submission
    document.getElementById("addCourseForm").reset();
});
