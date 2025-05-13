// This ensures the script runs after the DOM is fully loaded
jQuery(function($, undefined) {
    // Initialize the terminal
    $('#terminal').terminal(function(command, term) {
        // Normalize the command for easier processing (lowercase, trim whitespace)
        command = command.toLowerCase().trim();

        // Handle different commands
        if (command === 'help') {
	    term.echo('');
            term.echo("Available command: ");
            term.echo('  [[b;lime;]about]    - Learn more about me.');
            term.echo('  [[b;lime;]projects] - See my projects.');
            term.echo('  [[b;lime;]skills]   - My technical skills.');
            term.echo('  [[b;lime;]contact]  - How to get in touch.');
            term.echo('  [[b;lime;]social]   - My social media links.');
            term.echo('  [[b;lime;]clear]    - Clear the terminal screen.');
            term.echo('  [[b;lime;]help]     - Display this help message.\n');
        } else if (command === 'about') {
            // Customize this section with your information
            term.echo('\n[[b;white;]Hello! I\'m Aqil');
            term.echo('');
            term.echo('I am a passionate [Your Profession/Role], specializing in [Your Area of Expertise].');
            term.echo('I love [Your Hobby/Interest] and enjoy [Another Hobby/Interest].');
            term.echo('This terminal-style website is a fun way to showcase my work and learn new things.');
            term.echo('');
            term.echo('Type [[b;lime;]help] for a list of commands.\n');
        } else if (command === 'projects') {
            // Customize this section with your project details
            term.echo('\n[[b;white;]Here are some of my key projects:]');
            term.echo('');
            term.echo('  [[b;lime;]1. Project Alpha]: A [brief description]. [[u]Link to project page/repo]]');
            term.echo('  [[b;lime;]2. Project Beta]: [brief description]. [[u]Link to project page/repo]]');
            term.echo('  [[b;lime;]3. Project Gamma]: [brief description]. [[u]Link to project page/repo]]');
            term.echo('');
            term.echo('More projects can be found on my GitHub: [[u]https://github.com/your-github-username]]\n');
        } else if (command === 'skills') {
            // Customize this section with your skills
            term.echo('\n[[b;white;]My Technical Skills:]');
            term.echo('');
            term.echo('  [[b;yellow;]Programming Languages:] Python, JavaScript, [Another Language]');
            term.echo('  [[b;yellow;]Frameworks/Libraries:] React, Node.js, Flask, [Another Framework]');
            term.echo('  [[b;yellow;]Databases:] PostgreSQL, MongoDB, [Another Database]');
            term.echo('  [[b;yellow;]Tools & Technologies:] Git, Docker, AWS, [Another Tool]');
            term.echo('  [[b;yellow;]Concepts:] Web Development, API Design, Data Structures\n');
        } else if (command === 'contact') {
            // Customize this section with your contact info
            term.echo('\n[[b;white;]You can reach me via:]');
            term.echo('');
            term.echo('  [[b;lime;]Email:] your.email@example.com');
            term.echo('  [[b;lime;]LinkedIn:] [[u]https://www.linkedin.com/in/your-linkedin-profile/]]');
            term.echo('');
            term.echo('Feel free to send me a message!\n');
        } else if (command === 'social') {
            // Customize this section with your social media links
            term.echo('\n[[b;white;]My Social Media Links:]');
            term.echo('');
            term.echo('  [[b;lime;]GitHub:] [[u]https://github.com/your-github-username]]');
            term.echo('  [[b;lime;]LinkedIn:] [[u]https://www.linkedin.com/in/your-linkedin-profile/]]');
            term.echo('  [[b;lime;]Twitter (X):] [[u]https://twitter.com/your-twitter-handle]]');
            term.echo('  [[b;lime;]Personal Blog (if any):] [[u]https://your-blog.com]]');
            term.echo('');
            term.echo('Connect with me!\n');
        } else if (command === 'clear') {
            term.clear(); // Clear the terminal screen
        }
        else {
            // Default response for unrecognized commands
            term.echo('\nCommand not found: ' + command + '. Type [[b;lime;]help] for a list of commands.\n');
        }
    }, {
        // Terminal options
        greetings:"",
        name: 'web_shell', // Name of the terminal instance
        height: '100%', // Take full height of its container
        width: '100%',  // Take full width of its container
        prompt: '> ', // The actual prompt text will be handled by CSS :before

	onInit: function(term) {
		const welcomeMsg = '[[b;white;]Welcome\n]';
		const helpMsg = 'Type [[b;lime;]help] to get started\n';
		const welcomeTypingSpeed = 30;
		const helpTypingSpeed = 20;
		const pauseBetweenMsgs = 1000;

		term.echo(welcomeMsg, {
			typing: welcomeTypingSpeed,
			formatters: true
		});
		
		const welcomeDuration = welcomeMsg.length * welcomeTypingSpeed;

		setTimeout(() => {
			term.echo(helpMsg, {
				typing: helpTypingSpeed,
				formatters: true
			});
		}, welcomeDuration + pauseBetweenMsgs);
	}
    });

});
