const getWelcomeMessage = () => {
  const asciiArt = `
                     - \`
                    .o+\`
                   \`ooo/
                  \`+oooo:
                 \`+oooooo:
                 -+oooooo+:
               \`/:-:++oooo+:
              \`/++++/+++++++:
             \`/++++++++++++++:
            \`/+++ooooooooooooo/\`
           ./ooosssso++osssssso+\`
          .oossssso-  \`\`\`\`/ossssss+\`
         -osssssso.      :ssssssso.
        :osssssss/        osssso+++.
       /ossssssss/        +ssssooo/-
     \`/ossssso+/:-        -:/+osssso+-
    \`+sso+:- \`                \`.-/+oso:
   \`++:.                           \`-/+/
   .\`                                 \`/
`;
  return `
    <div class="welcome-container">
      <pre class="ascii-art">${asciiArt}</pre>
      <div class="welcome-message">
        <h2>Welcome to my portfolio!</h2>
        <p>This is a terminal-based portfolio.</p>
        <p>🎓 <span class="code-yellow">New here? Type 'tutorial' for an interactive guide!</span></p>
        <p>Type 'help' to see all available commands.</p>
      </div>
    </div>
  `;
};

export default getWelcomeMessage;
