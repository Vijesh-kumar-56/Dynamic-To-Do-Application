<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Resume</title>
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* ----- RESET & GLOBAL ----- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Roboto, system-ui, sans-serif;
        }

        body {
            background: #eef2f7;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 2rem 1rem;
            transition: background 0.3s ease;
        }

        /* dark mode body */
        body.dark {
            background: #1e2630;
        }

        /* ----- RESUME CARD ----- */
        .resume-card {
            max-width: 1000px;
            width: 100%;
            background: #ffffff;
            border-radius: 32px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.06);
            overflow: hidden;
            transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        body.dark .resume-card {
            background: #2a333f;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        /* ----- TOP BAR (theme toggle) ----- */
        .top-bar {
            display: flex;
            justify-content: flex-end;
            padding: 1.2rem 2rem 0.2rem 2rem;
        }

        .theme-toggle {
            background: none;
            border: none;
            font-size: 1.6rem;
            color: #2c3e50;
            cursor: pointer;
            transition: transform 0.2s ease, color 0.2s ease;
            padding: 0.4rem 0.8rem;
            border-radius: 40px;
            background: #f0f4fa;
        }

        body.dark .theme-toggle {
            color: #f1c40f;
            background: #3a4553;
        }

        .theme-toggle:hover {
            transform: scale(1.1);
        }

        /* ----- LAYOUT: 2 columns ----- */
        .resume-grid {
            display: grid;
            grid-template-columns: 34% 66%;
        }

        /* ----- LEFT COLUMN (sidebar) ----- */
        .sidebar {
            background: #f7faff;
            padding: 2rem 1.8rem;
            transition: background 0.3s ease;
        }

        body.dark .sidebar {
            background: #1f2833;
        }

        .avatar {
            text-align: center;
            margin-bottom: 1.8rem;
        }

        .avatar img {
            background: #dfeaf5;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #3498db;
            box-shadow: 0 8px 14px rgba(52, 152, 219, 0.2);

        }

        .avatar h2 {
            margin-top: 0.8rem;
            font-size: 1.7rem;
            font-weight: 600;
            color: #1e2b39;
            letter-spacing: -0.5px;
        }

        body.dark .avatar h2 {
            color: #ecf0f1;
        }

        .avatar .title {
            color: #3498db;
            font-weight: 500;
            font-size: 1rem;
            background: rgba(52, 152, 219, 0.12);
            display: inline-block;
            padding: 0.2rem 1.2rem;
            border-radius: 30px;
            margin-top: 0.2rem;
        }

        /* sidebar sections */
        .info-section {
            margin: 2rem 0 1.8rem 0;
        }

        .info-section h3 {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #4a5b6e;
            border-bottom: 2px solid rgba(52, 152, 219, 0.2);
            padding-bottom: 0.5rem;
            margin-bottom: 1.2rem;
            font-weight: 600;
        }


        body.dark .info-section h3 {
            color: #b0c4de;
            border-bottom-color: #3498db80;
        }

        body.dark .lang-item {
            color: white;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            margin-bottom: 1rem;
            color: #1e2b39;
            font-size: 0.95rem;
        }

        body.dark .info-item {
            color: #d6e2f0;
        }

        .info-item i {
            width: 22px;
            color: #3498db;
            font-size: 1.1rem;
            text-align: center;
        }

        .skill-tag {
            display: inline-block;
            background: #e9f0fa;
            padding: 0.25rem 1rem;
            border-radius: 30px;
            font-size: 0.85rem;
            font-weight: 500;
            margin: 0.2rem 0.2rem;
            color: #1e2b39;
            transition: 0.2s;
        }

        body.dark .skill-tag {
            background: #2c3d52;
            color: #e0edfa;
        }

        .skill-tag:hover {
            background: #3498db;
            color: white;
            transform: scale(1.02);
        }

        .lang-item {
            display: flex;
            justify-content: space-between;
            padding: 0.4rem 0;
            border-bottom: 1px dashed #dce6f0;
            font-size: 0.95rem;
        }

        body.dark .lang-item {
            border-bottom-color: #3f5066;
        }

        .lang-item span:last-child {
            color: #3498db;
            font-weight: 500;
        }

        /* ----- RIGHT COLUMN (content) ----- */
        .main-content {
            padding: 2rem 2rem 2rem 1.8rem;
            background: white;
            transition: background 0.3s ease;
        }

        body.dark .main-content {
            background: #2a333f;
        }

        .main-content h3 {
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #3498db;
            margin-top: 1.6rem;
            margin-bottom: 0.8rem;
            border-bottom: 2px solid #eef2f7;
            padding-bottom: 0.4rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        body.dark .main-content h3 {
            color: #5dade2;
            border-bottom-color: #3d5068;
        }

        .main-content h3 i {
            font-size: 1.1rem;
        }

        .main-content h3:first-of-type {
            margin-top: 0;
        }

        .edu-item{
            height: 140px;
            margin-bottom: 1.4rem;
        }
        .exp-item{
            height: 140px;
            margin-bottom: 1.4rem;
            background-color: #b0c4de;
            border-radius: 20px;
            text-align: center;
            cursor: pointer;

        }

        .exp-item:hover {
            transform: scale(0.95);
            color: white;
        }

        .exp-item h4 {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1e2b39;
        }

        body.dark .exp-item h4 {
            color: #fafafa;
        }

        .exp-item .sub {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            color: #4d627a;
            font-size: 0.9rem;
            margin: 0.2rem 0 0.4rem 0;
        }

        body.dark .exp-item .sub {
            color: whitesmoke;
        }

        .exp-item p {
            color: #2c3e50;
            font-size: 0.95rem;
            line-height: 1.5;
            margin-top: 0.3rem;
        }

        body.dark .exp-item p {
            color: whitesmoke;
        }

        .edu-item h4 {
            font-weight: 600;
            color: #1e2b39;
        }

        body.dark .edu-item h4 {
            color: #ecf0f1;
        }

        .edu-item .meta {
            color: #4d627a;
            font-size: 0.9rem;
        }

        body.dark .edu-item .meta {
            color: #b6c8dd;
        }

        /* ----- CONTACT FORM (interactive) ----- */
        .contact-form {
            margin-top: 1.8rem;
            background: #f8fcff;
            padding: 1.2rem 1.5rem;
            border-radius: 20px;
            transition: background 0.3s ease;
        }

        body.dark .contact-form {
            background: #1f2a36;
        }

        .contact-form h4 {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 1rem;
            color: #1e2b39;
            margin-bottom: 0.8rem;
        }

        body.dark .contact-form h4 {
            color: #e0edfa;
        }

        .form-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
            margin-bottom: 0.8rem;
        }

        .form-row input {
            flex: 1 1 130px;
            padding: 0.6rem 1rem;
            border: 1px solid #dce4ed;
            border-radius: 40px;
            font-size: 0.9rem;
            background: white;
            transition: 0.2s;
        }

        body.dark .form-row input {
            background: #2d3a4a;
            border-color: #44586e;
            color: #ecf0f1;
        }

        

        .form-row input:focus {
            outline: none;
            border-color: #3498db;
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        .form-row button {
            background: #3498db;
            border: none;
            color: white;
            padding: 0.6rem 1.8rem;
            border-radius: 40px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s, transform 0.1s;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .form-row button:hover {
            background: #2176ae;
        }

        .form-row button:active {
            transform: scale(0.96);
        }

        #formFeedback {
            margin-top: 0.5rem;
            font-size: 0.9rem;
            font-weight: 500;
            color: #27ae60;
            min-height: 1.5rem;
        }

        body.dark #formFeedback {
            color: #58d68d;
        }

        .error-feedback {
            color: #e74c3c !important;
        }

        /* ----- responsive ----- */
        @media (max-width: 750px) {
            .resume-grid {
                grid-template-columns: 1fr;
            }

            .sidebar {
                padding: 1.8rem;
            }

            .main-content {
                padding: 1.8rem;
            }

            .top-bar {
                padding: 1rem 1.5rem 0 1.5rem;
            }
        }

        @media (max-width: 480px) {
            .avatar img {
                width: 100px;
                height: 100px;
            }

            .form-row input {
                flex: 1 1 100%;
            }

            .form-row button {
                width: 100%;
                justify-content: center;
            }
        }

        /* small extras */
        .separator {
            height: 2px;
            background: linear-gradient(90deg, #3498db40, #3498db, #3498db40);
            margin: 1.2rem 0 0.8rem 0;
            border-radius: 10px;
        }

        .badge-icon {
            background: #3498db10;
            padding: 0.2rem 0.8rem;
            border-radius: 30px;
            font-size: 0.75rem;
            color: #3498db;
            font-weight: 600;
        }


        .section-icon {
            margin-right: 8px;
        }

        .profile-image {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #3498db;
            box-shadow: 0 8px 14px rgba(52, 152, 219, 0.2);
            background: #dfeaf5;
        }

        .profile-text {
            color: #2c3e50;
            line-height: 1.6;
            margin-bottom: 1.2rem;
        }

        body.dark .profile-text {
            color: rgb(203, 202, 202);
        }

        .contact-link {
            color: inherit;
            text-decoration: none;
        }

        .contact-link:hover {
            text-decoration: underline;
        }

        .theme-actions {
            display: flex;
            gap: 0.5rem;
        }

        .legacy-inline-1 {
            display: flex;
            gap: 0.5rem;
        }

        .legacy-inline-2 {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            background: #d4e4f7;
            margin: 0 auto;
            border: 4px solid #3498db;
        }

        .legacy-inline-3 {
            font-size: 110px;
            color: #2c3e50;
        }

        .legacy-inline-4 {
            width: 130px;
            height: 130px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #3498db;
            box-shadow: 0 8px 14px rgba(52, 152, 219, 0.2);
        }

        .legacy-inline-5 {
            color: #2c3e50;
            line-height: 1.6;
            margin-bottom: 1.2rem;
        }

        /* ----- PRINT ----- */
        @media print {
            body {
                background: white !important;
                padding: 0;
            }

            .resume-card {
                max-width: none;
                box-shadow: none;
                border-radius: 0;
            }

            .top-bar,
            .contact-form {
                display: none;
            }

            .resume-grid {
                grid-template-columns: 32% 68%;
            }

            .sidebar {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }
    </style>
</head>

<body>

    <div class="resume-card" id="resumeCard">
        <!-- top bar with theme toggle -->
        <div class="top-bar">
            <div class="theme-actions">
                <button class="theme-toggle" id="printResume" aria-label="Print resume" title="Print resume">
                    <i class="fas fa-print"></i>
                </button>
                <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode" title="Toggle dark mode">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>

        <!-- main grid -->
        <div class="resume-grid">
            <!-- LEFT SIDEBAR -->
            <aside class="sidebar">
                <div class="avatar">
                    <!-- using a placeholder avatar (Font Awesome user-circle) -->
                    <!-- <div
                        class="legacy-inline-2">
                       <i class="fas fa-user-circle" class="legacy-inline-3"></i>
                    </div> -->
                    <img src="vijay.jpg.jpg" alt="Vijesh Kumar" class="profile-image">
                    <h2>Vijesh Kumar</h2>
                    <span class="title">Frontend Developer · CS Undergraduate</span>
                </div>

                <div class="info-section">
                    <h3><i class="fas fa-address-card section-icon"></i> Contact</h3>
                    <div class="info-item"><i class="fas fa-phone-alt"></i> 03473515338 </div>
                    <div class="info-item"><i class="fas fa-envelope"></i> <a href="mailto:chohanvijay738@gmail.com"
                            class="contact-link">chohanvijay738@gmail.com</a></div>
                    <div class="info-item"><i class="fas fa-map-marker-alt"></i> Pakistan, Karachi</div>
                    <div class="info-item"><i class="fab fa-linkedin"></i> <a
                            href="https://www.linkedin.com/in/vijeshkumar" target="_blank" rel="noopener"
                            class="contact-link">linkedin.com/in/vijeshkumar</a></div>
                    <div class="info-item"><i class="fab fa-github"></i> <a href="https://github.com/vijeshkumar"
                            target="_blank" rel="noopener" class="contact-link">github.com/vijeshkumar</a></div>
                </div>

                <div class="info-section">
                    <h3><i class="fas fa-code"></i> Skills</h3>
                    <div>
                        <span class="skill-tag">HTML5</span>
                        <span class="skill-tag">CSS3</span>
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">C++</span>
                        <span class="skill-tag">Python</span>
                        <span class="skill-tag">Git & GitHub</span>
                        <span class="skill-tag">Responsive Design</span>
                        <span class="skill-tag">UI/UX Basics</span>
                    </div>
                </div>

                <div class="info-section">
                    <h3><i class="fas fa-globe"></i> Languages</h3>
                    <div class="lang-item"><span>English</span> <span>Good</span></div>
                    <div class="lang-item"><span>Urdu</span> <span>Fluent</span></div>
                    <div class="lang-item"><span>Sindhi</span> <span>Fluent</span></div>
                </div>
            </aside>

            <!-- RIGHT MAIN CONTENT -->
            <main class="main-content">
                <!-- Profile -->
                <h3><i class="fas fa-user"></i> Profile</h3>
                <p class="profile-text">Computer Science undergraduate and aspiring Frontend Developer with hands-on
                    experience in HTML, CSS, JavaScript, C++, and Python. Interested in building responsive,
                    user-friendly websites and continuously improving frontend development skills.</p>

                <!-- Projects -->
                <h3><i class="fas fa-code"></i> Projects</h3>

                <div class="exp-item">
                    <h4>YouTube Clone</h4>
                    <div class="sub"><span>HTML · CSS · JavaScript</span> <span>Personal Project</span></div>
                    <p>Built a responsive YouTube-inspired interface with a navigation bar, video layout, and reusable
                        styling components.
                    </p>

                </div>

                <div class="exp-item">
                    <h4>BMI Calculator</h4>
                    <div class="sub"><span>HTML · CSS · JavaScript</span> <span>Personal Project</span></div>
                    <p>Created an interactive BMI calculator with user input, JavaScript calculations, and conditional
                        result handling.</p>
                    <a href="http://127.0.0.1:5502/project2-BMI-Calculator.html" target="_blank" rel="noopener noreferrer">Visit BMI Calculator</a>
                </div>

                <div class="exp-item">
                    <h4>Responsive Landing Page</h4>
                    <div class="sub"><span>HTML · CSS</span> <span>Personal Project</span></div>
                    <p>Designed a mobile-friendly landing page using responsive layouts, navigation, hero content, and
                        call-to-action elements.
                    </p>

                    <a href="http://127.0.0.1:5501/task1.html" target="_blank" rel="noopener noreferrer">Visit Responsive Landing Page</a>
                </div>

                <div class="exp-item">
                    <h4>Interactive Resume</h4>
                    <div class="sub"><span>HTML · CSS · JavaScript</span> <span>Personal Project</span></div>
                    <p>Developed this interactive resume with dark mode, responsive design, form validation, and a clean
                        user interface.</p>

                        <a href="http://127.0.0.1:5500/resume.html" target="_blank" rel="noopener noreferrer">Resume</a>
                </div>


                <!-- Education -->
                <h3><i class="fas fa-graduation-cap"></i> Education</h3>
                <div class="edu-item">
                    <h4>BS Computer Science</h4>
                    <div class="meta">Muhammad Ali Jinnah University · Expected Graduation: 2028</div>
                </div>

                <div class="edu-item">
                    <h4>Frontend Development</h4>
                    <div class="meta">Currently learning HTML, CSS, JavaScript & responsive web development</div>
                </div>



                <!-- interactive form (JavaScript) -->
                <div class="contact-form" id="contactForm">
                    <h4><i class="fas fa-paper-plane"></i> Quick message</h4>
                    <div class="form-row">
                        <input type="text" id="nameInput" placeholder="Your name" aria-label="Your name">
                        <input type="email" id="emailInput" placeholder="Email address" aria-label="Email address">
                        <button id="sendBtn"><i class="fas fa-envelope"></i> Send</button>
                    </div>
                    <div id="formFeedback"></div>
                </div>
            </main>
        </div>
    </div>

    <script>
        (function () {
            "use strict";

            // ----- DARK MODE TOGGLE -----
            const themeToggle = document.getElementById('themeToggle');
            const printResume = document.getElementById('printResume');
            const body = document.body;

            // ----- PRINT RESUME -----
            printResume.addEventListener('click', function () {
                window.print();
            });
            const icon = themeToggle.querySelector('i');

            // load preference from localStorage
            if (localStorage.getItem('theme') === 'dark') {
                body.classList.add('dark');
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                // default light
                body.classList.remove('dark');
                icon.classList.add('fa-moon');
                icon.classList.remove('fa-sun');
            }

            themeToggle.addEventListener('click', function () {
                body.classList.toggle('dark');
                const isDark = body.classList.contains('dark');
                // toggle icon
                if (isDark) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                    localStorage.setItem('theme', 'dark');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                    localStorage.setItem('theme', 'light');
                }
            });

            // ----- CONTACT FORM (interactive) -----
            const nameInput = document.getElementById('nameInput');
            const emailInput = document.getElementById('emailInput');
            const sendBtn = document.getElementById('sendBtn');
            const feedback = document.getElementById('formFeedback');

            function validateEmail(email) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            }

            function showFeedback(message, isError = false) {
                feedback.textContent = message;
                feedback.classList.remove('error-feedback');
                if (isError) {
                    feedback.classList.add('error-feedback');
                } else {
                    feedback.classList.remove('error-feedback');
                }
                // auto clear after 5s
                if (window.feedbackTimeout) clearTimeout(window.feedbackTimeout);
                window.feedbackTimeout = setTimeout(() => {
                    feedback.textContent = '';
                    feedback.classList.remove('error-feedback');
                }, 5000);
            }

            function handleSend() {
                const name = nameInput.value.trim();
                const email = emailInput.value.trim();

                if (!name) {
                    showFeedback('✏️ Please enter your name.', true);
                    nameInput.focus();
                    return;
                }
                if (!email) {
                    showFeedback('📧 Please enter your email address.', true);
                    emailInput.focus();
                    return;
                }
                if (!validateEmail(email)) {
                    showFeedback('⚠️ Please enter a valid email address.', true);
                    emailInput.focus();
                    return;
                }

                // success simulation
                showFeedback(`✅ Thanks ${name}! Your message was sent (demo).`, false);
                // clear inputs (optional)
                nameInput.value = '';
                emailInput.value = '';
            }

            sendBtn.addEventListener('click', handleSend);

            // press Enter in any input triggers send
            nameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });
            emailInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });

            // small extra: focus effect on theme toggle accessible
            console.log('Resume with interactive theme & contact form ready.');
        })();
    </script>

</body>

</html>
