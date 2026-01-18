document.addEventListener("DOMContentLoaded", () => {
  const feedbackBody = document.getElementById("feedback-body");

  const feedbackList = [
    { name: "Alicia Tan", email: "alicia.tan@imail.sunway.edu.my", course: "Business Analytics", gender: "Female", school: "Sunway Business School", rating: "Excellent", type: "Lecturer", message: "The lecturer explained concepts clearly and gave helpful examples.", date: "2025-03-12" },
    { name: "Bryan Lim", email: "bryan.lim@imail.sunway.edu.my", course: "Computer Science", gender: "Male", school: "Faculty of Engineering and Technology", rating: "Good", type: "Course Content", message: "Appreciate the hands-on lab sessions and supportive environment.", date: "2025-03-14" },
    { name: "Chloe Wong", email: "chloe.wong@imail.sunway.edu.my", course: "Psychology", gender: "Female", school: "Faculty of Arts and Social Sciences", rating: "Average", type: "Facilities", message: "Could improve class scheduling, but overall a good experience.", date: "2025-03-15" },
    { name: "Darren Lee", email: "darren.lee@imail.sunway.edu.my", course: "Engineering", gender: "Male", school: "Faculty of Engineering and Technology", rating: "Excellent", type: "Lecturer", message: "Great teamwork and learning atmosphere!", date: "2025-03-16" },
    { name: "Evelyn Goh", email: "evelyn.goh@imail.sunway.edu.my", course: "Life Sciences", gender: "Female", school: "Faculty of Medical and Life Sciences", rating: "Good", type: "Course Content", message: "Loved the interactive lessons and peer discussions.", date: "2025-03-18" },
    { name: "Farah Azmi", email: "farah.azmi@imail.sunway.edu.my", course: "Hospitality Management", gender: "Female", school: "School of Hospitality and Tourism Management", rating: "Excellent", type: "Facilities", message: "Assignments were challenging but rewarding.", date: "2025-03-19" },
    { name: "George Tan", email: "george.tan@imail.sunway.edu.my", course: "Accounting", gender: "Male", school: "Sunway Business School", rating: "Good", type: "Lecturer", message: "Appreciated the helpful teaching assistants!", date: "2025-03-20" },
    { name: "Hannah Lim", email: "hannah.lim@imail.sunway.edu.my", course: "Education", gender: "Female", school: "School of Education", rating: "Average", type: "Course Content", message: "More examples during lectures would be helpful.", date: "2025-03-21" },
    { name: "Ian Chow", email: "ian.chow@imail.sunway.edu.my", course: "Mathematics", gender: "Male", school: "School of Mathematical Sciences", rating: "Excellent", type: "Lecturer", message: "Excellent module delivery and structure.", date: "2025-03-22" },
    { name: "Jasmine Ho", email: "jasmine.ho@imail.sunway.edu.my", course: "Arts", gender: "Female", school: "Faculty of Arts and Social Sciences", rating: "Good", type: "Facilities", message: "The lecturer made complex topics easy to understand.", date: "2025-03-23" },
    { name: "Kelvin Ong", email: "kelvin.ong@imail.sunway.edu.my", course: "Business Analytics", gender: "Male", school: "Sunway Business School", rating: "Excellent", type: "Course Content", message: "Loved the blended learning approach.", date: "2025-03-25" },
    { name: "Lina Teh", email: "lina.teh@imail.sunway.edu.my", course: "Computer Science", gender: "Female", school: "Faculty of Engineering and Technology", rating: "Good", type: "Lecturer", message: "Would appreciate more feedback on coursework.", date: "2025-03-26" },
    { name: "Marcus Tan", email: "marcus.tan@imail.sunway.edu.my", course: "Psychology", gender: "Male", school: "Faculty of Arts and Social Sciences", rating: "Excellent", type: "Course Content", message: "Fun and engaging class!", date: "2025-03-28" },
    { name: "Nadia Rahman", email: "nadia.rahman@imail.sunway.edu.my", course: "Life Sciences", gender: "Female", school: "Faculty of Medical and Life Sciences", rating: "Good", type: "Facilities", message: "The lecturer encouraged participation, which I loved!", date: "2025-03-29" },
    { name: "Oliver Ng", email: "oliver.ng@imail.sunway.edu.my", course: "Engineering", gender: "Male", school: "Faculty of Engineering and Technology", rating: "Excellent", type: "Lecturer", message: "Well-structured module and practical assignments.", date: "2025-03-30" },
    { name: "Priscilla Low", email: "priscilla.low@imail.sunway.edu.my", course: "Hospitality Management", gender: "Female", school: "School of Hospitality and Tourism Management", rating: "Good", type: "Course Content", message: "More group projects would make it more engaging.", date: "2025-04-01" },
    { name: "Qayyum Arif", email: "qayyum.arif@imail.sunway.edu.my", course: "Accounting", gender: "Male", school: "Sunway Business School", rating: "Excellent", type: "Lecturer", message: "The coursework load was reasonable and fair.", date: "2025-04-02" },
    { name: "Rachel Ong", email: "rachel.ong@imail.sunway.edu.my", course: "Mathematics", gender: "Female", school: "School of Mathematical Sciences", rating: "Good", type: "Facilities", message: "Slides were well-prepared and detailed.", date: "2025-04-03" },
    { name: "Samuel Goh", email: "samuel.goh@imail.sunway.edu.my", course: "Education", gender: "Male", school: "School of Education", rating: "Excellent", type: "Course Content", message: "Clear instructions and timely feedback from lecturers.", date: "2025-04-05" },
    { name: "Tina Lee", email: "tina.lee@imail.sunway.edu.my", course: "Arts", gender: "Female", school: "Faculty of Arts and Social Sciences", rating: "Good", type: "Lecturer", message: "Overall, a great learning experience!", date: "2025-04-06" }
  ];

  feedbackList.forEach((fb) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${fb.name}</td>
      <td>${fb.email}</td>
      <td>${fb.course}</td>
      <td>${fb.gender}</td>
      <td>${fb.school}</td>
      <td>${fb.rating}</td>
      <td>${fb.type}</td>
      <td>${fb.message}</td>
      <td>${fb.date}</td>
    `;
    feedbackBody.appendChild(row);
  });
});
