function skillsMember() {
    var memberSkills = {
        "member1": ["HTML", "CSS", "JavaScript"],
        "member2": ["Python", "Django", "Flask"],
        "member3": ["Java", "Spring", "Hibernate"],
        // Add more members and their skills here
    };

    var memberName = document.getElementById("memberName").value;
    var skillsDiv = document.getElementById("skills");

    if (memberSkills[memberName]) {
        skillsDiv.innerHTML = "<h2>Skills of " + memberName + "</h2>";
        var skillsList = document.createElement("ul");
        memberSkills[memberName].forEach(function(skill) {
            var listItem = document.createElement("li");
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
        });
        skillsDiv.appendChild(skillsList);
    } else {
        skillsDiv.innerHTML = "<h2>No skills found for " + memberName + "</h2>";
    }
}