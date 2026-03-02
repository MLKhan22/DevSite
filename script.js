// Configuration - EDIT THESE VALUES
const CONFIG = {
    githubUsername: 'MLKhan22', // Add your GitHub username here to fetch projects
    name: 'Minh Ly',
    title: 'Full Stack Developer',
    email: 'mly@udallas.edu',
    location: 'Dallas, TX',
    yearsOfExperience: '4+',
    projectsCompleted: '5+'
};

// Skills Data
const skills = [
  { name: "JavaScript", icon: "file-code", color: "text-yellow-400" },
  { name: "React", icon: "atom", color: "text-cyan-400" },
  { name: "PHP", icon: "code", color: "text-indigo-400" },
  { name: "SQL", icon: "database", color: "text-blue-400" },
  { name: "Next Axiom", icon: "layers", color: "text-emerald-400" },
  { name: "Compose", icon: "layout", color: "text-green-400" },
  { name: "Android Development", icon: "smartphone", color: "text-green-500" },
  { name: "Java", icon: "coffee", color: "text-red-400" },
  { name: "Python", icon: "terminal", color: "text-blue-400" },
  { name: "Unity", icon: "box", color: "text-gray-300" },
  { name: "Game Development", icon: "gamepad-2", color: "text-purple-400" },
  { name: "Blockchain / Smart Contracts", icon: "link", color: "text-orange-400" },
  { name: "Cybersecurity", icon: "shield", color: "text-red-500" },
  { name: "Bash Scripting", icon: "command", color: "text-gray-400" }
];

// Resume Timeline Data
const resumeData = [
    {
        type: "work", 
        title: "Software Developer", 
        company: "Paycom Payroll", 
        date: "2025 - 2026", 
        description: "Developed and maintained PHP-based features for the company’s CRM system, focusing on PHPStorm. Optimized SQL queries to improve system performance, implemented QA tests to ensure reliability, and ensured compliance with security standards for handling sensitive client data.", 
        skills: ["PHP", 
            "SQL", 
            "PHPStorm", 
            "QA Testing", 
            "Security Compliance"]
    },
    {
    type: "work",
    title: "Software Developer",
    company: "Trinoor LLC",
    date: "2021 - 2026",
    description: "Fixed bugs in Hitachi’s Enterprise Asset Suite Management using Compose and Next Axiom, enhanced user experience for TASHelix subapps, and developed a React build for Android. Collaborated with cross-functional teams to resolve production issues.",
    skills: [
      "Compose",
      "Next Axiom",
      "React JS",
      "Android Development",
      "Cross-Functional Collaboration"
    ]
  },
  {
    type: "work",
    title: "Software Developer",
    company: "WildChain",
    date: "2021 - 2022",
    description: "Built an NFT marketplace and website, wrote smart contracts in Cadence for the Flow blockchain, and prototyped contract functions using React JS. Focused on blockchain integration and user experience for decentralized applications.",
    skills: [
      "Cadence",
      "React JS",
      "Blockchain Development",
      "Smart Contracts",
      "Decentralized Apps"
    ]
  },
  {
    type: "work",
    title: "Research Assistant",
    company: "University of Dallas",
    date: "2019 - 2019",
    description: "Researched Barnette’s Conjecture in Graph Theory, developed a VR program using Unity for graph visualization, and implemented force-directed graph drawing algorithms. Focused on computational geometry and graph theory applications.",
    skills: [
      "Unity",
      "Graph Theory",
      "VR Development",
      "Computational Geometry",
      "Algorithm Design"
    ]
  },
  {
    type: "work",
    title: "Teaching Assistant",
    company: "University of Dallas",
    date: "2019 - 2019",
    description: "Designed and graded assignments for a class of 20 students using Bash scripts, provided weekly tutoring in Racket, and supported students in programming fundamentals.",
    skills: [
      "Bash Scripting",
      "Racket",
      "Educational Support",
      "Assignment Grading",
      "Tutoring"
    ]
  },
  {
    type: "education",
    title: "Master of Science in Cybersecurity",
    company: "University of Dallas",
    date: "2019 - 2021",
    description: "Focused on cybersecurity principles, network security, and ethical hacking. Relevant coursework included Cryptography, Network Security, and Cybersecurity Law.",
    skills: [
      "Cryptography",
      "Network Security",
      "Ethical Hacking",
      "Cybersecurity Law"
    ]
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "University of Dallas",
    date: "2017 - 2020",
    description: "Studied algorithms, software development, and data structures. Relevant coursework included Discrete Mathematics, Database Systems, and Operating Systems.",
    skills: [
      "Algorithms",
      "Data Structures",
      "Discrete Math",
      "Database Systems",
      "Operating Systems"
    ]
  }
];

// Typing Animation
const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Open Source Contributor'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextElement = document.getElementById('typedText');

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentText.length) {
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typeSpeed = 500;
    }

    setTimeout(typeText, typeSpeed);
}

// Populate Skills
function createSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';

    skills.forEach(skill => {
        const div = document.createElement('div');
        div.className = 'flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:scale-105 transition-transform';

        div.innerHTML = `
            <i data-lucide="${skill.icon}" class="w-8 h-8 ${skill.color}"></i>
            <span class="text-sm text-gray-600 dark:text-gray-300">${skill.name}</span>
        `;

        skillsGrid.appendChild(div);
    });

    // Apply Lucide icons AND preserve Tailwind colors
    lucide.createIcons({ 
        className: "lucide w-8 h-8" // this will be merged with your classes, including the color
    });
}

// Fetch GitHub Repositories
// Fetch GitHub Repositories and render featured projects
async function fetchGitHubRepos(username) {
    const projectsGrid = document.getElementById('projectsGrid');
    const projectsLoading = document.getElementById('projectsLoading');
    const projectsError = document.getElementById('projectsError');

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        if (!response.ok) throw new Error('Network response was not ok');

        const repos = await response.json();
        const FEATURED_REPO_NAMES = ['YTSheets','DungeonCrawler', '8-bit-DBZ']; // Add your featured repo names here
        const featuredRepos = repos.filter(repo => FEATURED_REPO_NAMES.includes(repo.name)).slice(0, 3); // Ensure we only take the specified repos
        // Clear any previous cards
        projectsGrid.innerHTML = '';

        if (featuredRepos.length === 0) {
            projectsError.classList.remove('hidden');
            projectsLoading.classList.add('hidden');
            return;
        }

        // Populate the grid
        featuredRepos.forEach(repo => {
            const card = createProjectCard(repo);
            projectsGrid.appendChild(card);
        });

        // Show the grid and hide loading spinner
        projectsGrid.classList.remove('hidden');
        projectsLoading.classList.add('hidden');
        projectsError.classList.add('hidden');

    } catch (error) {
        console.error(error);
        projectsLoading.classList.add('hidden');
        projectsError.classList.remove('hidden');
    }
}

// Render projects to the grid
function renderProjects(projects, isGithub = false) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projects.map((proj, i) => createProjectCard(proj, i, isGithub)).join('');
    lucide.createIcons(); // refresh icons
}

// Create Project Card HTML
function createProjectCard(repo) {
    // Create card container
    const card = document.createElement('div');
    card.className = `
        project-card p-6 rounded-2xl 
        bg-gray-50 dark:bg-gray-800/70
        border border-gray-200 dark:border-gray-700
        transition-all duration-300
        hover:translate-y-1 hover:shadow-lg
    `;

    // Project name
    const name = document.createElement('h3');
    name.className = `
        text-lg font-semibold mb-2 
        text-gray-900 dark:text-white
    `;
    name.textContent = repo.name;

    // Project description
    const desc = document.createElement('p');
    desc.className = `
        text-gray-700 dark:text-gray-300 text-sm
    `;
    desc.textContent = repo.description || "No description provided.";

    // Project link
    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = "_blank";
    link.className = `
        mt-4 inline-block text-primary dark:text-secondary 
        font-medium hover:underline
    `;
    link.textContent = "View on GitHub";

    // Append children to card
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(link);

    return card;
}

const placeholderProjects = [
    {
        name: 'E-Commerce Platform',
        category: 'Web App',
        description: 'Full-stack e-commerce solution with real-time inventory management and payment processing.',
        tags: ['React', 'Node.js', 'Stripe', 'MongoDB']
    },
    {
        name: 'Task Management API',
        category: 'Backend',
        description: 'RESTful API for task management with authentication, real-time updates, and team collaboration features.',
        tags: ['Express', 'PostgreSQL', 'JWT', 'Socket.io']
    },
    {
        name: 'Portfolio Generator',
        category: 'Tool',
        description: 'CLI tool to generate beautiful developer portfolios from GitHub repositories and resume data.',
        tags: ['Python', 'Jinja2', 'GitHub API']
    }
];

// Populate Resume Timeline
function populateResume() {
    const timeline = document.getElementById('resumeTimeline');
    timeline.innerHTML = resumeData.map((item, index) => `
        <div class="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 reveal" style="transition-delay: ${index * 0.1}s">
            <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 class="text-lg font-bold">${item.title}</h3>
                    <span class="text-sm text-primary font-medium">${item.date}</span>
                </div>
                <p class="text-gray-600 dark:text-gray-400 font-medium mb-2">${item.company}</p>
                <p class="text-gray-600 dark:text-gray-400 mb-4">${item.description}</p>
                <div class="flex flex-wrap gap-2">
                    ${item.skills.map(skill => `<span class="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Theme Toggle
function initTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Mobile Menu
function initMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
    
    // Close menu when clicking links
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg', 'bg-white/80', 'dark:bg-gray-900/80');
        } else {
            navbar.classList.remove('shadow-lg', 'bg-white/80', 'dark:bg-gray-900/80');
        }
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('submitBtn');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        submitBtn.innerHTML = '<div class="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = '<span>Send Message</span><i data-lucide="send" class="w-4 h-4"></i>';
            submitBtn.disabled = false;
            success.classList.remove('hidden');
            lucide.createIcons();
            
            setTimeout(() => {
                success.classList.add('hidden');
            }, 5000);
        }, 1500);
    });
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Email copied to clipboard!');
    });
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Download Resume (placeholder)
function downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Ly_Resume.pdf'; // path to your resume
    link.download = 'Ly_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast('Resume download started!');
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    createSkillsGrid();
    populateResume();
    fetchGitHubRepos(CONFIG.githubUsername);
    initTheme();
    initMobileMenu();
    initScrollAnimations();
    initNavbar();
    initContactForm();
    
    // Update static content
    document.getElementById('typedName').textContent = CONFIG.name;
    
    // Update stats
    document.getElementById('yearsExp').textContent = CONFIG.yearsOfExperience;
    document.getElementById('projectsCount').textContent = CONFIG.projectsCompleted;
});
