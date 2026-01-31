const courses = [
  { code: "CSE 110", name: "Introduction to Programming", credits: 2, completed: true },
  { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: true },
  { code: "CSE 121", name: "Programming Building Blocks", credits: 2, completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
  { code: "CSE 210", name: "Programming with Classes", credits: 2, completed: false },
  { code: "WDD 231", name: "Frontend Web Development I", credits: 2, completed: false },
  { code: "CSE 111B", name: "Introduction to Databases", credits: 2, completed: true }
];

const container = document.getElementById("courses");
const creditOutput = document.getElementById("credits");
const buttons = document.querySelectorAll(".filters button");

function displayCourses(list) {
  container.innerHTML = "";

  list.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} Credits</p>
    `;

    container.appendChild(card);
  });

  const total = list.reduce((sum, c) => sum + c.credits, 0);
  creditOutput.textContent = `Total Credits: ${total}`;
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    if (filter === "wdd") displayCourses(courses.filter(c => c.code.startsWith("WDD")));
    else if (filter === "cse") displayCourses(courses.filter(c => c.code.startsWith("CSE")));
    else displayCourses(courses);
  });
});

displayCourses(courses);
