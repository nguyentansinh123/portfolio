// Interactive Tutorial System for Terminal Portfolio

const tutorialSteps = [
  {
    id: 0,
    title: "Welcome to the Interactive Tutorial! 🎓",
    content: `
<div style="color: #00ff00; margin-bottom: 10px;">
╔═══════════════════════════════════════════════════════════════╗
║           WELCOME TO YOUR TERMINAL PORTFOLIO TOUR             ║
╚═══════════════════════════════════════════════════════════════╝
</div>

<div style="margin-left: 20px;">
This interactive tutorial will guide you through all the features of this 
terminal portfolio. You'll learn by doing!

<span class="code-cyan">Available Commands During Tutorial:</span>
  • <span class="code-yellow">next</span> or <span class="code-yellow">n</span>     - Move to next step
  • <span class="code-yellow">prev</span> or <span class="code-yellow">p</span>     - Go back to previous step
  • <span class="code-yellow">skip</span>              - Skip current step
  • <span class="code-yellow">restart</span>           - Restart tutorial from beginning
  • <span class="code-yellow">exit</span>              - Exit tutorial

<span class="code-green">Type 'next' or 'n' to begin! 🚀</span>
</div>
    `,
    challenge: null,
    validation: null
  },
  {
    id: 1,
    title: "Step 1: Basic Navigation with 'ls' 📁",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 1/10: LIST DIRECTORY CONTENTS
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
The <span class="code-yellow">ls</span> command lists all files and folders in your current directory.

<span class="code-cyan">📝 What you'll see:</span>
  • <span class="code-blue">Directories/</span> - shown in blue with trailing slash
  • <span style="color: #b48ead;">file.md</span> - markdown files in purple
  • <span class="code-green">other files</span> - other files in green

<span class="code-green">✨ Try it now! Type: ls</span>
</div>
    `,
    challenge: "ls",
    validation: (cmd) => cmd.trim() === "ls",
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ Perfect! You can now see all the files and folders available.

Notice the different colors? That makes it easier to identify what's what!
Type 'next' to continue.
</div>
    `
  },
  {
    id: 2,
    title: "Step 2: Check Your Location with 'pwd' 🗺️",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 2/10: PRINT WORKING DIRECTORY
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
The <span class="code-yellow">pwd</span> command shows you where you currently are in the file system.

<span class="code-cyan">💡 Tip:</span> The ~ symbol means "home directory" - that's where you start!

<span class="code-green">✨ Try it! Type: pwd</span>
</div>
    `,
    challenge: "pwd",
    validation: (cmd) => cmd.trim() === "pwd",
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ Great! You're at /home/user - your home directory.

Your prompt always shows this: <span class="code-cyan">user@portfolio:~$</span>
Type 'next' to continue.
</div>
    `
  },
  {
    id: 3,
    title: "Step 3: Navigate with 'cd' 🚶",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 3/10: CHANGE DIRECTORY
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
The <span class="code-yellow">cd</span> command lets you move between directories.

<span class="code-cyan">📚 Common patterns:</span>
  • <span class="code-yellow">cd projects</span>  - enter the projects folder
  • <span class="code-yellow">cd ..</span>        - go up one level
  • <span class="code-yellow">cd ~</span>         - return to home directory

<span class="code-green">✨ Try it! Type: cd projects</span>
</div>
    `,
    challenge: "cd projects",
    validation: (cmd) => cmd.trim() === "cd projects",
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ Excellent! You're now in the projects directory.

Notice your prompt changed? It now shows: <span class="code-cyan">user@portfolio:~/projects$</span>
Type 'next' to continue.
</div>
    `
  },
  {
    id: 4,
    title: "Step 4: Read Files with 'cat' 📄",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 4/10: DISPLAY FILE CONTENTS
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
The <span class="code-yellow">cat</span> command displays the contents of a file.

First, let's see what files are here:
<span class="code-yellow">ls</span> to list files, then try reading one!

<span class="code-green">✨ Try it! Type: cat white-knight.md</span>
</div>
    `,
    challenge: "cat white-knight.md",
    validation: (cmd) => cmd.trim() === "cat white-knight.md",
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ Perfect! You just read about the White Knight project.

You can use <span class="code-yellow">cat</span> to read any file in the file system.
Type 'next' to continue.
</div>
    `
  },
  {
    id: 5,
    title: "Step 5: Go Back with 'cd ..' ⬆️",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 5/10: NAVIGATE UP A DIRECTORY
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
Let's go back to the home directory using <span class="code-yellow">cd ..</span>

<span class="code-cyan">💡 Remember:</span> 
  • <span class="code-yellow">..</span> means "parent directory" (one level up)
  • <span class="code-yellow">.</span> means "current directory"

<span class="code-green">✨ Try it! Type: cd ..</span>
</div>
    `,
    challenge: "cd ..",
    validation: (cmd) => cmd.trim() === "cd ..",
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ Nice! You're back at the home directory.

You can combine paths too: <span class="code-yellow">cd projects/</span> then <span class="code-yellow">cd ..</span> to go back.
Type 'next' to continue.
</div>
    `
  },
  {
    id: 6,
    title: "Step 6: Create Files with 'touch' ✏️",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 6/10: CREATE NEW FILES
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
The <span class="code-yellow">touch</span> command creates a new empty file.

Let's create a test file to experiment with!

<span class="code-cyan">📝 Usage:</span> <span class="code-yellow">touch filename.txt</span>

<span class="code-green">✨ Try it! Type: touch mytest.txt</span>
</div>
    `,
    challenge: "touch mytest.txt",
    validation: (cmd) => cmd.trim().startsWith("touch "),
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ File created! Try <span class="code-yellow">ls</span> to see your new file.

You can create any type of file: .txt, .md, .js, etc.
Type 'next' to continue.
</div>
    `
  },
  {
    id: 7,
    title: "Step 7: System Info with 'fastfetch' 💻",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 7/10: VIEW SYSTEM INFORMATION
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
The <span class="code-yellow">fastfetch</span> command displays detailed information about me, 
my projects, skills, and development environment.

This is like an interactive resume!

<span class="code-green">✨ Try it! Type: fastfetch</span>
</div>
    `,
    challenge: "fastfetch",
    validation: (cmd) => cmd.trim() === "fastfetch",
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ Cool, right? This shows my education, projects, skills, and tech stack!

This is the best way to get to know me quickly.
Type 'next' to continue.
</div>
    `
  },
  {
    id: 8,
    title: "Step 8: Search with 'grep' 🔍",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 8/10: SEARCH IN FILES
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
The <span class="code-yellow">grep</span> command searches for text within files.

<span class="code-cyan">📝 Usage:</span> <span class="code-yellow">grep "search term" filename</span>

Let's search for "React" in one of the project files!

<span class="code-green">✨ Try it! Type: grep "React" projects/white-knight.md</span>
</div>
    `,
    challenge: "grep",
    validation: (cmd) => cmd.trim().toLowerCase().startsWith("grep"),
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ Found it! grep highlights matches in the file.

This is super useful for finding specific technologies or keywords!
Type 'next' to continue.
</div>
    `
  },
  {
    id: 9,
    title: "Step 9: Download CV 📥",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 9/10: DOWNLOAD MY CV
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
Want to download my CV? Use the <span class="code-yellow">download cv</span> command!

This will download my resume as a PDF file.

<span class="code-green">✨ Try it! Type: download cv</span>
</div>
    `,
    challenge: "download cv",
    validation: (cmd) => cmd.trim() === "download cv",
    successMessage: `
<div style="color: #00ff00; margin-left: 20px;">
✅ CV download initiated!

You can check it out to learn more about my experience and education.
Type 'next' for the final step!
</div>
    `
  },
  {
    id: 10,
    title: "Step 10: Explore Portfolio & Projects 🌐",
    content: `
<div style="color: #00d7ff; margin-bottom: 10px;">
═══════════════════════════════════════════════════════════════
  STEP 10/10: PORTFOLIO & PROJECTS
═══════════════════════════════════════════════════════════════
</div>

<div style="margin-left: 20px;">
Ready to see the visual portfolio interface?

<span class="code-cyan">🎨 Navigation Commands:</span>
  • <span class="code-yellow">open portfolio</span> - View the modern portfolio website
  • <span class="code-yellow">open projects</span> - Browse all projects in detail

These commands take you to a beautiful web interface with more details!

<span class="code-green">✨ Try it! Type: open portfolio</span>
(or type 'next' to finish the tutorial)
</div>
    `,
    challenge: "optional",
    validation: null,
    successMessage: null
  },
  {
    id: 11,
    title: "🎉 Tutorial Complete!",
    content: `
<div style="color: #00ff00; margin-bottom: 10px;">
╔═══════════════════════════════════════════════════════════════╗
║                  TUTORIAL COMPLETED! 🎉                       ║
╚═══════════════════════════════════════════════════════════════╝
</div>

<div style="margin-left: 20px;">
<span class="code-green">Congratulations!</span> You've learned the essentials of this terminal portfolio!

<span class="code-cyan">📚 What you learned:</span>
  ✓ Navigate with <span class="code-yellow">ls</span>, <span class="code-yellow">cd</span>, and <span class="code-yellow">pwd</span>
  ✓ Read files with <span class="code-yellow">cat</span>
  ✓ Create files with <span class="code-yellow">touch</span>
  ✓ Search with <span class="code-yellow">grep</span>
  ✓ View system info with <span class="code-yellow">fastfetch</span>
  ✓ Download CV with <span class="code-yellow">download cv</span>
  ✓ Access portfolio with <span class="code-yellow">open portfolio</span>

<span class="code-cyan">🔍 More to explore:</span>
  • <span class="code-yellow">help</span> - See all available commands
  • <span class="code-yellow">mkdir</span> - Create directories
  • <span class="code-yellow">cp</span>, <span class="code-yellow">mv</span>, <span class="code-yellow">rm</span> - Copy, move, remove files
  • <span class="code-yellow">history</span> - View command history
  • <span class="code-yellow">clear</span> - Clear the terminal

<span class="code-yellow">💡 Tip:</span> Use ↑ and ↓ arrow keys to browse command history!

<span class="code-green">Happy exploring! 🚀</span>

Type <span class="code-yellow">tutorial restart</span> to take the tour again anytime.
</div>
    `,
    challenge: null,
    validation: null
  }
];

let currentStep = -1;
let tutorialActive = false;

export function initTutorial() {
  currentStep = 0;
  tutorialActive = true;
  return getTutorialStep(0);
}

export function getTutorialStep(stepId) {
  const step = tutorialSteps[stepId];
  if (!step) return null;
  
  currentStep = stepId;
  
  return `
<div class="tutorial-step">
  ${step.content}
</div>
  `;
}

export function handleTutorialCommand(command) {
  if (!tutorialActive) return null;
  
  const cmd = command.trim().toLowerCase();
  const currentStepData = tutorialSteps[currentStep];
  
  // Handle navigation commands
  if (cmd === 'next' || cmd === 'n') {
    if (currentStep < tutorialSteps.length - 1) {
      return getTutorialStep(currentStep + 1);
    } else {
      tutorialActive = false;
      return `<div class="code-yellow">Tutorial already completed! Type 'tutorial restart' to start over.</div>`;
    }
  }
  
  if (cmd === 'prev' || cmd === 'p') {
    if (currentStep > 0) {
      return getTutorialStep(currentStep - 1);
    } else {
      return `<div class="code-yellow">Already at the beginning of the tutorial.</div>`;
    }
  }
  
  if (cmd === 'skip') {
    if (currentStep < tutorialSteps.length - 1) {
      return getTutorialStep(currentStep + 1);
    }
  }
  
  if (cmd === 'restart') {
    return initTutorial();
  }
  
  if (cmd === 'exit') {
    tutorialActive = false;
    currentStep = -1;
    return `<div class="code-green">Tutorial exited. Type 'tutorial' to start again anytime!</div>`;
  }
  
  // Validate challenge commands
  if (currentStepData.validation) {
    if (currentStepData.validation(command)) {
      let output = currentStepData.successMessage || '';
      // Don't auto-advance for step 10 (optional step)
      if (currentStepData.challenge !== 'optional') {
        output += `\n<div class="code-cyan" style="margin-top: 10px;">Type 'next' to continue to the next step.</div>`;
      }
      return output;
    }
  }
  
  return null; // Let the command execute normally
}

export function isTutorialActive() {
  return tutorialActive;
}

export function exitTutorial() {
  tutorialActive = false;
  currentStep = -1;
}

export function getCurrentTutorialStep() {
  return currentStep;
}

export function restartTutorial() {
  return initTutorial();
}

// Quick help for tutorial commands
export function getTutorialHelp() {
  return `
<div class="code-cyan">
╔═══════════════════════════════════════════════════════════════╗
║                    INTERACTIVE TUTORIAL                       ║
╚═══════════════════════════════════════════════════════════════╝
</div>

<div style="margin-left: 20px;">
<span class="code-green">Learn by doing!</span> This interactive tutorial guides you through 
all the features of this terminal portfolio.

<span class="code-cyan">Commands:</span>
  • <span class="code-yellow">tutorial</span> or <span class="code-yellow">tutorial start</span>  - Start the interactive tutorial
  • <span class="code-yellow">tutorial restart</span>           - Restart from beginning

<span class="code-cyan">During the tutorial:</span>
  • <span class="code-yellow">next</span> or <span class="code-yellow">n</span>      - Next step
  • <span class="code-yellow">prev</span> or <span class="code-yellow">p</span>      - Previous step
  • <span class="code-yellow">skip</span>           - Skip current step
  • <span class="code-yellow">exit</span>           - Exit tutorial

<span class="code-green">Ready to begin? Type: tutorial</span>
</div>
  `;
}
