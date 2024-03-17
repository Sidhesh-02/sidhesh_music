// Simulating dynamic data (replace this with real data)
const dynamicData = {
    name: "Sidhesh Bankar",
    role: "Fullstack Developer",
    bio: "Passionate about full-stack development, DevOps, and the fascinating world of machine learning. A desire to make a impact using technical skills to make a positive difference in the world.",
    interests: "Chess | Music Prouction | Exploring Technologies & Frameworks",
    projects: [
        {
            title: "Music Portfolio",
            description: "Created a music portfolio website using HTML, CSS, Tailwind CSS, Javascript, and Alpine.js. Implemented audio experiences with interactive media players. Seamlessly integrated social media. Optimized for accessibility and SEO, amplifying the reach and impact of musical artistry. Embraced innovative technologies to build a website that reflects the unique sound and vision of the artist.",
            link: "/public/index.html"
        },
    ],
    currentWork: "Currently working on exciting web projects and learning new things.",
    inquiries: "Open to freelance opportunities. Feel free to reach out!",
    twitterLink: "https://twitter.com/johndoe",
    companyLink: "https://example.com",
};

// Function to update HTML content
function updateContent() {
    document.getElementById("name").textContent = dynamicData.name;
    document.getElementById("role").textContent = dynamicData.role;
    document.getElementById("bio").textContent = dynamicData.bio;
    document.getElementById("interests").textContent = dynamicData.interests;
    
    // Update projects
    const project = dynamicData.projects[0]; // Displaying the first project as an example
    document.getElementById("projectTitle").textContent = project.title;
    document.getElementById("projectDescription").textContent = project.description;
    document.getElementById("projectLink").href = project.link;
    
    document.getElementById("currentWork").textContent = dynamicData.currentWork;
    document.getElementById("inquiries").textContent = dynamicData.inquiries;
    
    document.getElementById("twitterLink").href = dynamicData.twitterLink;
    
    document.getElementById("copyright").textContent = `Copyright © ${new Date().getFullYear()} - ${
        new Date().getFullYear() + 1
    }`;
}

// Call the updateContent function when the page is fully loaded
document.addEventListener('DOMContentLoaded', updateContent);

