const sjmApp = {}

// Mobile Nav Codes

// Storing element for easy access
sjmApp.mobileBtn = document.querySelector('.menu i');
sjmApp.mobileMenu = document.querySelector('.mobileNav');

// A function to group all the toggles
sjmApp.toggle = () => {
    sjmApp.mobileMenu.classList.toggle('activeMenu');
    sjmApp.mobileBtn.classList.toggle('fa-bars');
    sjmApp.mobileBtn.classList.toggle('fa-times');
}

// Mobile menu click event function
sjmApp.mobileBtn.addEventListener('click', () => {
    sjmApp.toggle();
});

sjmApp.mobileMenu.addEventListener('click', () => {
    sjmApp.toggle();
})


// -------------------------------


// Project Slideshow Codes

// Storing elements for easy access
sjmApp.projects = document.getElementsByClassName('project');
sjmApp.dashes = document.getElementsByClassName('dash');
sjmApp.previous = document.querySelector('.arrowLeft');
sjmApp.next = document.querySelector('.arrowRight');

// Storing project index number into variable
sjmApp.projectNum = 0;
sjmApp.totalProject = sjmApp.projects.length;

// Function when new project is switched into focus
sjmApp.currentProject = () => {
    for (let project of sjmApp.projects) {
        project.classList.remove('show');
        project.classList.add('hide');
    };
    for (let dash of sjmApp.dashes) {
        dash.classList.remove('dashActive');
    };
    sjmApp.projects[sjmApp.projectNum].classList.toggle('hide');
    sjmApp.dashes[sjmApp.projectNum].classList.toggle('dashActive');
};

// Previous button function
sjmApp.back = () => {
    if (sjmApp.projectNum == 0) {
        sjmApp.projectNum = sjmApp.totalProject - 1;
    } else {
        sjmApp.projectNum--;
    };
    sjmApp.currentProject();
};

// Next button function
sjmApp.forward = () => {
    if (sjmApp.projectNum == sjmApp.totalProject - 1) {
        sjmApp.projectNum = 0;
    } else {
        sjmApp.projectNum++;
    };
    sjmApp.currentProject();
};

// Click event for previous and next buttons
sjmApp.previous.addEventListener('click', () => {
    sjmApp.back();
});

sjmApp.next.addEventListener('click', () => {
    sjmApp.forward();
});


// -------------------------------


// Contact form submit button
sjmApp.sendBtn = document.querySelector('.sendMessage');

sjmApp.submit = () => {
    sjmApp.sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('contactForm');
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const message = document.getElementById('userMessage').value;
        const notice = document.querySelector('.notice');
        const warning = document.querySelector('.emptyNotice');
        form.reset();
        if (name && email && message !== '') {
            notice.classList.remove('hide');
        } else {
            warning.classList.remove('hide');
        }
    })
}


// Function to help initialize on page load
sjmApp.init = () => {
    sjmApp.currentProject();
    sjmApp.back();
    sjmApp.forward();
    sjmApp.submit();
}

// Call init to start the app
sjmApp.init();