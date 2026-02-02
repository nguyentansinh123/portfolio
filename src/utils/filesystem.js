export let fileSystem = {
  '~': {
    type: 'directory',
    children: {
      projects: {
        type: 'directory',
        children: {
          'white-knight.md': { 
            type: 'file', 
            content: '# White Knight\n\nWhite Knight is a secure, cloud-based document management system designed for handling legal documents such as NDAs. It enables users to upload, share, sign, and track documents with full version control and detailed activity logging.\n\n## Key Features\n- Digital signing and document revision history\n- Role-based access control for admins, providers, and users\n- In-app notifications and activity tracking\n- AI-powered legal assistant for quick guidance\n- Real Time Chat, Video Call\n\n## Technologies\nReact, TypeScript, Express, Node.js, AWS, DynamoDB, S3, IAM, Tailwind CSS, MongoDB, Cloudinary, Streamio, WebRTC\n\n## Github\nhttps://github.com/nguyentansinh123/NDA-Signing-Project'
          },
          'price-checking.md': { 
            type: 'file', 
            content: '# Price Checking\n\nA comprehensive web scraping application that collects and compares product data from major Australian supermarket chains like Coles, Woolworths, and IGA. This tool enables users to track price changes over time, compare prices across different retailers, and receive alerts for price drops on their favorite products.\n\n## Key Features\n- Product Search – Find items across multiple supermarkets simultaneously\n- Price Comparison – Compare prices between Coles, Woolworths, and IGA\n- Price History – Track price changes over time with interactive charts\n- Price Alerts – Get notifications when prices drop on watched items\n- Shopping List – Create and manage shopping lists optimized for best prices\n- Responsive Design – Access from any device with a mobile-friendly interface\n- Daily Updates – Automated scraping keeps prices current and accurate\n- Performance Optimization – Efficient data retrieval and storage systems\n\n## Technologies\nPython, BeautifulSoup, Selenium, React, Node.js, Express, MongoDB, Chart.js, AWS Lambda, Docker\n\n## Github\nhttps://github.com/nguyentansinh123/PriceChecking'
          },
          'cv-ai-builder.md': { 
            type: 'file', 
            content: '# CV AI Builder\n\nCV AI Builder Pro is a powerful and intuitive web application that helps users create professional CVs with the assistance of AI. The app features real-time updates, automatic saving, and subscription-based AI capabilities, all wrapped in a beautiful, user-friendly interface.\n\n## Key Features\n- Authentication – Secure login using Clerk\n- AI Assistance – OpenAI integration to auto-generate text and suggestions\n- Multiple CVs – Create, preview, edit, and delete multiple CV forms\n- Auto-save – Automatically saves inputs to PostgreSQL every 1.5 seconds of inactivity\n- Image Upload – Upload profile pictures using Vercel Blob\n- Subscription Management – Stripe integration with webhooks for upgrades\n- Real-time Preview – Live CV preview as you type\n- Customizable Templates – Adjust CV colors, image borders, and layouts\n- PDF Export – Download your CV in PDF format\n- Dark Mode – Toggle light/dark themes for better UX\n\n## Technologies\nNext.js, TypeScript, ShadCN/UI, Prisma, PostgreSQL, Clerk, Stripe, OpenAI API, Vercel Blob, Vercel\n\n## Github\nhttps://github.com/nguyentansinh123/CV-AI-Builder'
          },
          'portfolio.md': { 
            type: 'file', 
            content: '# Terminal Portfolio\n\nThis terminal portfolio was built with React and styled to look like a terminal with a Lazy Git theme. It features both a terminal interface and a modern portfolio website interface.\n\n## Features\n- Terminal emulation with common Linux commands\n- File system simulation with markdown rendering\n- Project showcase with detailed descriptions\n- Portfolio website with responsive design\n- Contact form integration\n- Smooth animations and transitions\n\n## Technologies\nReact, React Router, CSS, JavaScript, Vite'
          },
          'school-microservices.md': {
            type: 'file',
            content: '# School Microservices Management System\n\nA comprehensive, distributed educational management platform built with Java 21 and Spring Boot 3.5. This project showcases a modern microservices architecture designed for scalability, high-performance, and maintainability in educational institutions.\n\n## System Architecture\n\nThe system is composed of 5 specialized microservices and a centralized API Gateway:\n\n### Services\n- API Gateway (Port 4004) - Spring Cloud Gateway with JWT validation\n- Auth Service (Port 4000) - User authentication and authorization with RSA-signed JWT\n- Student Service (Port 4001) - Student profiles, attendance, enrollment management\n- Course Service (Port 4003) - Course management, teacher assignments, schedules\n- Analytics Service (Port 4010) - Real-time dashboard and reporting\n\n## Key Features\n\n### Advanced Security\n- RSA-Signed JWT tokens with public/private key encryption\n- Role-Based Access Control (RBAC) with granular permissions\n- API Gateway security with custom JWT validation filter\n- Method-level security annotations\n\n### Communication Patterns\n- **Synchronous**: gRPC for high-performance RPC between services\n- **Asynchronous**: Apache Kafka for event-driven architecture\n- Event streaming for user creation, attendance, enrollment events\n\n### Core Capabilities\n- Student and guardian management\n- Automated email notifications to parents\n- Course enrollment and scheduling\n- Attendance tracking with alerts\n- Real-time analytics and reporting\n- Teacher assignments and grading\n\n## Technologies\n\n### Backend Stack\n- Java 21\n- Spring Boot 3.5.x\n- Spring Cloud Gateway\n- Spring Security with JWT\n- Spring Data JPA\n- Spring Kafka\n- gRPC & Protocol Buffers\n\n### Infrastructure\n- PostgreSQL (Database per service)\n- Apache Kafka (Event streaming)\n- Docker & Docker Compose\n- Maven\n\n### Additional Libraries\n- Spring Mail + Thymeleaf (Email templates)\n- SpringDoc OpenAPI (API documentation)\n- JUnit & Mockito (Testing)\n- Logback (Logging)\n\n## Architecture Highlights\n\n- **Database Per Service**: Each microservice manages its own PostgreSQL database\n- **Centralized Entry Point**: API Gateway provides unified access\n- **Event-Driven**: Kafka enables asynchronous communication\n- **High-Performance RPC**: gRPC for synchronous service calls\n- **JWT Security**: RSA-signed tokens for secure authentication\n- **Auto-scaling Ready**: Designed for containerized deployment\n\n## Project Complexity\n\n- 5 independent microservices\n- 3 communication protocols (REST, gRPC, Kafka)\n- Multiple databases with proper isolation\n- Comprehensive testing (Unit, Integration, API, Kafka, gRPC)\n- Production-ready with Docker deployment\n- Swagger/OpenAPI documentation\n\n## GitHub\nhttps://github.com/nguyentansinh123/school_microservices'
          }
        }
      },
      about: {
        type: 'directory',
        children: {
          'bio.md': { 
            type: 'file', 
            content: '# About Me\n\nHey! My Name is Sinh, I am a 21 years old Software Developer in Sydney. I like to build full-stack apps, brew strong coffee, and learn new tricks while coding.'
          },
          'education.md': { 
            type: 'file', 
            content: '# Education\n\n## Bachelor of computer science (Oct 2022 - Dec 2025)\nCurrently in my last semester studying a Bachelor of Computer Science at the University of Wollongong (UOW), Wollongong campus.\n\n## CS50\'s Introduction to Computer Science (2021)\nI took part in the online course CS50\'s Introduction to Computer Science by Harvard University.'
          },
          'experience.md': { 
            type: 'file', 
            content: '# Experience\n\n## Internship at Sample Assist (August 2024 - June 2025)\nI work as a Full Stack Developer, building applications with TypeScript and React on the frontend, and Express with AWS on the backend.'
          }
        }
      },
      skills: {
        type: 'directory',
        children: {
          'technologies.md': { 
            type: 'file', 
            content: '# Technologies I have worked with\n\n## Programming Languages\n- JavaScript\n- TypeScript\n- V\n- Python\n- Java\n- Go\n\n## Frontend\n- React\n- Sass\n- Tailwind CSS\n- UI Kits\n\n## Backend\n- Express\n- Spring Boot\n\n## Databases\n- MongoDB\n- PostgreSQL\n- MySQL\n- Amazon DynamoDB\n\n## Cloud & DevOps\n- Docker\n- AWS\n- Apache Kafka'
          }
        }
      },
      contact: {
        type: 'directory',
        children: {
          'github.md': { 
            type: 'file', 
            content: '# GitHub Profile\n\nFind more of my repositories at https://github.com/nguyentansinh123'
          },
          'linkedin.md': { 
            type: 'file', 
            content: '# LinkedIn Profile\n\nConnect with me professionally at https://www.linkedin.com/in/sinh-nguyen-93a9b2216/'
          }
        }
      },
      'README.md': { 
        type: 'file', 
        content: '# Welcome to my portfolio\n\nThis is a terminal-based portfolio that showcases my projects and skills. Feel free to explore using standard terminal commands.\n\n## Available commands\nType `help` to see all available commands.\n\nFor a more visual experience, you can also visit my portfolio website by clicking the "View My Portfolio" button or typing `open portfolio`.'
      },
      cv: { 
        type: 'file', 
        content: 'Download my CV using the command: download cv'
      }
    }
  }
};
