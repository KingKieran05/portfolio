document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "1";

    const skills = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.classList.contains("html") ? "85%" :
                                            entry.target.classList.contains("css") ? "80%" :
                                            entry.target.classList.contains("js") ? "65%" :
                                            entry.target.classList.contains("csharp") ? "70%" :
                                            "50%";
            }
        });
    });

    skills.forEach(skill => {
        skill.style.width = "0";
        observer.observe(skill);
    });
});
