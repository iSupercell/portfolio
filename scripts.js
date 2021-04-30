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
sjmApp.dashNav = document.querySelector('.projectIndicator');
sjmApp.dashes = document.getElementsByClassName('dash');
sjmApp.previous = document.querySelector('.arrowLeft');
sjmApp.next = document.querySelector('.arrowRight');

// Storing project index number into variable
sjmApp.projectNum = 0;
sjmApp.totalProject = sjmApp.projects.length;

// Function when new project is switched into focus
sjmApp.currentProject = (focusProject) => {
    for (let project of sjmApp.projects) {
        project.classList.remove('show');
        project.classList.add('hide');
    };
    for (let dash of sjmApp.dashes) {
        dash.classList.remove('dashActive');
    };
    sjmApp.projects[focusProject].classList.toggle('hide');
    sjmApp.dashes[focusProject].classList.toggle('dashActive');
};

// Previous button function
sjmApp.back = () => {
    if (sjmApp.projectNum == 0) {
        sjmApp.projectNum = sjmApp.totalProject - 1;
    } else {
        sjmApp.projectNum--;
    };
    sjmApp.currentProject(sjmApp.projectNum);
};

// Next button function
sjmApp.forward = () => {
    if (sjmApp.projectNum == sjmApp.totalProject - 1) {
        sjmApp.projectNum = 0;
    } else {
        sjmApp.projectNum++;
    };
    sjmApp.currentProject(sjmApp.projectNum);
};

// Click event for previous and next buttons
sjmApp.previous.addEventListener('click', () => {
    sjmApp.back();
});

sjmApp.next.addEventListener('click', () => {
    sjmApp.forward();
});

// Dash Navigation function
sjmApp.dashNav.addEventListener('click', (e) => {
    const targetDash = e.target.closest('span');
    if (!targetDash) return;
    const dash = Array.from(sjmApp.dashNav.children)
    const targetIndex = dash.findIndex(currentDash => currentDash === targetDash);
    sjmApp.currentProject(targetIndex);
})

// Change project mockups to mobile version
sjmApp.smallScreen = window.matchMedia(`(max-width: 550px)`);
sjmApp.screen = window.matchMedia(`(max-width: 773px)`);

sjmApp.mockupChange = () => {
    const smallMockups = [
        `./assets/project01sm.png`,
        `./assets/project02sm.png`,
        `./assets/project03sm.png`,
        `./assets/project04sm.png`,
        `./assets/project05sm.png`
    ]
    const mobileMockups = [
        `./assets/project01m.png`,
        `./assets/project02m.png`,
        `./assets/project03m.png`,
        `./assets/project04m.png`,
        `./assets/project05m.png`
    ]
    const regularMockups = [
        `./assets/project01.png`,
        `./assets/project02.png`,
        `./assets/project03.png`,
        `./assets/project04.png`,
        `./assets/project05.png`
    ]

    for (let i = 0; i < sjmApp.totalProject; i++) {
        if (sjmApp.smallScreen.matches) {
            sjmApp.projects[i].children[0].src = smallMockups[i];
        } else if (sjmApp.screen.matches) {
            sjmApp.projects[i].children[0].src = mobileMockups[i];
        } else {
            sjmApp.projects[i].children[0].src = regularMockups[i];
        }
    }
}

// -------------------------------

// Contact form submit button
sjmApp.sendBtn = document.querySelector('.sendMessage');

sjmApp.submit = () => {
    sjmApp.sendBtn.addEventListener('click', () => {
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const message = document.getElementById('userMessage').value;
        const notice = document.querySelector('.notice');
        if (name && email && message == '') {
            notice.classList.remove('hide');
        }
    })
}

// Function to help initialize on page load
sjmApp.init = () => {
    sjmApp.submit();
    sjmApp.screen.addEventListener('change', () => {
        sjmApp.mockupChange();
    })
    sjmApp.smallScreen.addEventListener('change', () => {
        sjmApp.mockupChange();
    })
}

// Call init to start the app
sjmApp.init();