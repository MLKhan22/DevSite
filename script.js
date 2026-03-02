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
    company: "Trinoor LLC",
    date: "2021 - 2025",
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
  },
  {
    type: "project",
    title: "YTSheets",
    description: "Generated sheet music from YouTube piano tutorials using a neural network trained in Python with TensorFlow. Designed a system for labeling image data for training.",
    skills: [
      "Python",
      "TensorFlow",
      "Neural Networks",
      "Image Labeling",
      "Machine Learning"
    ]
  },
  {
    type: "project",
    title: "8-Bit DBZ",
    description: "Developed a platformer game for iOS in Swift using sprites from Dragon Ball Z. Implemented physics for collision detection and object interactions.",
    skills: [
      "Swift",
      "Game Development",
      "Physics Simulation",
      "Sprite Animation",
      "iOS Development"
    ]
  },
  {
    type: "project",
    title: "Pokemon Ranger Battle",
    description: "Recreated the battling mechanics of the Pokemon Ranger series for the Nintendo DS using Java. Implemented computational geometry for path detection and sprite animations.",
    skills: [
      "Java",
      "Computational Geometry",
      "Sprite Animation",
      "Game Mechanics",
      "Pathfinding"
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
function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card p-4 rounded-xl bg-white dark:bg-gray-700 shadow-lg border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-xl group cursor-pointer">
            <div class="flex flex-col items-center gap-2">
                <i data-lucide="${skill.icon}" class="w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform"></i>
                <span class="text-sm font-medium">${skill.name}</span>
            </div>
        </div>
    `).join('');
}

// Fetch GitHub Repositories
async function fetchGitHubRepos() {
    const loading = document.getElementById('projectsLoading');
    const grid = document.getElementById('projectsGrid');
    const error = document.getElementById('projectsError');
    
    if (!CONFIG.githubUsername) {
        // Show placeholder projects if no username configured
        loading.classList.add('hidden');
        grid.classList.remove('hidden');
        grid.innerHTML = placeholderProjects.map((project, index) => createProjectCard(project, index)).join('');
        lucide.createIcons();
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/${CONFIG.githubUsername}/repos?sort=updated&per_page=6`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const repos = await response.json();
        loading.classList.add('hidden');
        
        if (repos.length === 0) {
            error.classList.remove('hidden');
            return;
        }
        
        grid.innerHTML = repos.map((repo, index) => createProjectCard(repo, index, true)).join('');
        grid.classList.remove('hidden');
        lucide.createIcons();
    } catch (err) {
        console.error('Error fetching repos:', err);
        loading.classList.add('hidden');
        error.classList.remove('hidden');
    }
}

// Create Project Card HTML
function createProjectCard(project, index, isGithub = false) {
    const delay = index * 0.1;
    
    if (isGithub) {
        return `
            <div class="project-card glass p-6 rounded-2xl reveal" style="transition-delay: ${delay}s">
                <div class="flex items-start justify-between mb-4">
                    <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <i data-lucide="folder" class="w-5 h-5 text-primary"></i>
                    </div>
                    <div class="flex gap-2">
                        <span class="flex items-center gap-1 text-yellow-400 text-sm">
                            <i data-lucide="star" class="w-4 h-4"></i>
                            ${project.stargazers_count}
                        </span>
                        <span class="flex items-center gap-1 text-blue-400 text-sm">
                            <i data-lucide="git-branch" class="w-4 h-4"></i>
                            ${project.forks_count}
                        </span>
                    </div>
                </div>
                <h3 class="text-lg font-bold mb-2">${project.name}</h3>
                <p class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">${project.description || 'No description available'}</p>
                <div class="flex items-center justify-between mt-auto">
                    <span class="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">${project.language || 'N/A'}</span>
                    <a href="${project.html_url}" target="_blank" class="text-sm text-primary hover:underline flex items-center gap-1">
                        View <i data-lucide="external-link" class="w-3 h-3"></i>
                    </a>
                </div>
            </div>
        `;
    }
    
    return `
        <div class="project-card glass p-6 rounded-2xl reveal" style="transition-delay: ${delay}s">
            <div class="flex items-start justify-between mb-4">
                <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <i data-lucide="folder" class="w-5 h-5 text-primary"></i>
                </div>
                <span class="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs">${project.category}</span>
            </div>
            <h3 class="text-lg font-bold mb-2">${project.name}</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => `<span class="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700">${tag}</span>`).join('')}
            </div>
            <div class="flex items-center justify-between">
                <a href="#" class="text-primary hover:underline text-sm">Learn more →</a>
            </div>
        </div>
    `;
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
    showToast('Resume download coming soon!');
}

// Initialize all
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    populateSkills();
    populateResume();
    fetchGitHubRepos();
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
