var config = {
    about: `I received my BA in Physics and Mathematics from Yeshiva University in 2020 and his MA in Physics in 2021. David started his PhD research
            at Texas A&M University in 2022 and has been working with the NSF-funded MUSES collaboration to adapt nuclear matter equation of state models
            based on chiral effective field theory into a new cyberinfrastructure which will provide the scientific community novel tools to answer
            critical interdisciplinary questions in nuclear astrophysics. David is also working on developing finite-temperature microscopic optical model
            potentials beyond the mean-field approximation based on chiral two-body and three-body potentials.`,

    about_skills: [
        {
            title: "Programming Languages & Tools",
            skills: [
                "C++",
                "Python",
                "Fortran",
                "Linux",
                "Git",
                "High-Performance Computing",
                "Docker",
                "Kubernetes"
            ]
        },
        {
            title: "Computational Methods",
            skills: [
                "Machine Learning",
                "Normalizing Flows",
                "Time Series Analysis",
                "Renormalization Group (RG)",
                "Markov Chain Monte Carlo"
            ]
        },
        {
            title: "Physics Areas",
            skills: [
                "Nuclear Many-Body Theory",
                "Chiral Effective Field Theory",
                "Nuclear Thermodynamics",
                "Neutron Stars",
                "Core-collapse Supernovae"
            ]
        }
    ],

    research_intro: `
        <p>
            My research sits at the intersection of nuclear many-body theory, nuclear astrophysics, and
            scientific computing. I use microscopic nuclear interactions grounded in chiral effective
            field theory to study nuclear matter across the temperatures and densities found in laboratory
            experiments and extreme astrophysical environments.
        </p>
        <p>
            A central goal of my work is to connect fundamental nuclear theory with calculations that can
            be used in larger simulations and compared with observable phenomena. This requires a combination
            of many-body methods, high-performance computing, and modern computational techniques.
        </p>`,

    research_topics: [
        {
            title: "Nuclear matter and equations of state",
            description: "As part of the NSF-funded MUSES collaboration, I work to adapt nuclear-matter equations of state based on chiral effective field theory for a shared cyberinfrastructure. This makes microscopic predictions more accessible for applications involving neutron stars, core-collapse supernovae, and other dense-matter systems.",
            figure: "./images/effective-mass.png",
            caption: "A representative equation-of-state or dense-matter figure."
        },
        {
            title: "Finite-temperature optical potentials",
            description: "I also develop microscopic optical-model potentials at finite temperature beyond the mean-field approximation. Starting from chiral two- and three-body interactions, this work connects the underlying nuclear force with the propagation of nucleons through hot nuclear matter.",
            figure: "./images/effective-mass.png",
            caption: "A representative optical-potential or self-energy figure."
        }
    ],

    publications: [
        {
            status: "Published",
            year: 2025,
            title: "Building neutron stars with the MUSES calculation engine",
            authors: "M. R. Pelicer, N. Cruz-Camacho, C. Conde-Ocazionez, D. Friedenberg, et al.",
            venue: "Physical Review D 111, 103037",
            summary: "Add a short summary of your contribution to this publication.",
            tags: ["Neutron Stars", "Equation of State", "MUSES", "Chiral EFT"],
            figure: "./images/effective-mass.png",
            caption: "Placeholder figure — replace with a figure from this publication.",
            paper_url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.111.103037",
            arxiv_url: "https://arxiv.org/abs/2502.07902",
            doi: "10.1103/PhysRevD.111.103037"
        },
        {
            status: "Under Review",
            year: 2026,
            title: "Studying the QCD Matter produced in Heavy-Ion Collisions using the MUSES Calculation Engine",
            authors: "J. Jahan, K. P. Pala, Y. Yang, ..., D. Friedenberg, et al.",
            venue: "arXiv:2606.26326",
            summary: "Add a short summary of your contribution to this publication.",
            tags: ["Heavy-Ion Collisions", "QCD Matter", "MUSES", "Scientific Computing"],
            figure: "./images/effective-mass.png",
            caption: "Placeholder figure — replace with a figure from this preprint.",
            arxiv_url: "https://arxiv.org/abs/2606.26326",
            doi: "10.48550/arXiv.2606.26326"
        },
        {
            status: "In Progress",
            year: 2026,
            title: "Nucleon self-energies in hot, dense nuclear matter from chiral effective field theory",
            authors: "D. Friedenberg and J. W. Holt",
            venue: "Manuscript in preparation",
            summary: "Add a short summary of your contribution to this project.",
            tags: ["Nucleon Self-Energies", "Finite Temperature", "Chiral EFT", "Many-Body Theory"],
            figure: "./images/effective-mass.png",
            caption: "Placeholder figure — replace with a figure from this project."
        }
    ],

    portfolio: [
        ["./images/card-oss-contrib.png", "https://github.com/happysnaker/qq-ai-bot", "qq-ai-bot", "Self-hosted QQ ↔ AI bot scaffold with OneBot 11 / NapCat / LLOneBot, ACP-compatible agents, persistent sessions, progress streaming, and a Docker demo."],
        ["./images/card-go-service-starter.png", "https://github.com/happysnaker/go-service-starter", "go-service-starter", "Production-minded Go HTTP service starter with health endpoints, structured logging, graceful shutdown, and Docker."],
        ["./images/card-backend-checklist.png", "https://github.com/happysnaker/backend-engineer-checklist", "backend-engineer-checklist", "Practical roadmap for Go, Java, distributed systems, databases, networking, and observability."],
        ["./images/card-oss-contrib.png", "https://github.com/github/docs/pulls?q=is%3Apr+author%3Ahappysnaker", "Open-source contributions", "Recent docs and engineering contributions across GitHub Docs, Docker Docs, OpenTelemetry, Prometheus, chi, and Vue docs."]
    ],

    work: [
        ["2026 — Present", "<br>Open-source builder",
            "<p><strong>Independent engineering work</strong></p>" +
            "<p>Package practical backend assets and learning material for public reuse, including starters, checklists, notes, and documentation improvements.</p>" +
            "<p>Emphasis: clean service structure, operational clarity, and reusable engineering patterns.</p>"
        ],
        ["2026 — Present", "<br>Documentation contributor",
            "<p><strong>OSS engineering contributions</strong></p>" +
            "<p>Actively contribute small but real fixes, behavior clarifications, and developer-experience improvements across urfave/cli, chi, GitHub Docs, Docker Docs, OpenTelemetry Go, Prometheus, and Vue docs.</p>" +
            "<p>Focus on accuracy, developer experience, and making complex systems easier to understand.</p>"
        ]
    ],

    others: [
        ["2026-06", "Packaged go-service-starter", "Published a production-minded Go HTTP service starter with docs, Docker support, health endpoints, and graceful shutdown."],
        ["2026-06", "Published backend-engineer-checklist", "Built a shareable backend growth checklist covering languages, databases, distributed systems, networking, and observability."],
        ["2026-06", "Ongoing OSS contributions", "Opened pull requests for GitHub Docs, Docker Docs, OpenTelemetry Go, Prometheus, chi, and Vue docs."],
        ["2026-06", "Technical writing", "Maintain a personal technical site with notes on backend engineering, Java/Go, and systems topics."]
    ],

    url: [
        "./images/Cassiopeia-A.webp",
        "./images/David_Friedenberg.jpg",
        "./images/work-bk.png",
        "./images/4.jpg"
    ]
}
