export let fileSystem = {
  '~': {
    type: 'directory',
    children: {
      projects: {
        type: 'directory',
        children: {
          'portfolio.md': { 
            type: 'file', 
            content: 'This terminal portfolio was built with React and styled to look like a terminal with a Lazy Git theme.'
          },
          'e-commerce.md': { 
            type: 'file', 
            content: '# E-commerce Platform\n\nA complete online store solution built with:\n- React\n- Node.js\n- MongoDB\n- Shopify API integration'
          },
          'blog-app.md': { 
            type: 'file', 
            content: '# Personal Blog\n\nA feature-rich blogging platform with:\n- Next.js\n- GraphQL\n- PostgreSQL\n- Authentication and authorization'
          }
        }
      },
      about: {
        type: 'directory',
        children: {
          'bio.md': { 
            type: 'file', 
            content: '# About Me\n\nI am a passionate developer with experience in full-stack web development, focusing on React, Node.js, and modern JavaScript.'
          },
          'education.md': { 
            type: 'file', 
            content: '# Education\n\n- Bachelor of Computer Science, Example University\n- Various online courses on platforms like Udemy, Coursera, and freeCodeCamp'
          },
          'experience.md': { 
            type: 'file', 
            content: '# Experience\n\n## Senior Developer at Tech Corp\n- Led a team of 5 developers\n- Implemented CI/CD pipelines\n- Reduced loading times by 40%\n\n## Junior Developer at Startup Inc\n- Developed the company\'s main product\n- Worked directly with clients\n- Implemented agile methodologies'
          }
        }
      },
      skills: {
        type: 'directory',
        children: {
          'frontend.md': { 
            type: 'file', 
            content: '# Frontend Skills\n\n- HTML5, CSS3, JavaScript (ES6+)\n- React, Vue.js\n- Redux, Context API\n- Styled Components, Tailwind CSS\n- TypeScript'
          },
          'backend.md': { 
            type: 'file', 
            content: '# Backend Skills\n\n- Node.js, Express\n- Python, Django\n- RESTful APIs, GraphQL\n- MongoDB, PostgreSQL, MySQL\n- Firebase, AWS, Docker'
          },
          'tools.md': { 
            type: 'file', 
            content: '# Development Tools\n\n- Git, GitHub\n- VS Code, Vim\n- Webpack, Babel\n- Jest, React Testing Library\n- CI/CD pipelines'
          }
        }
      },
      cv: { 
        type: 'file', 
        content: 'Download my CV using the command: download cv'
      }
    }
  }
};
