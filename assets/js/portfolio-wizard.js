  // Track all wizard states
  const wizards = {};

  // Auto-initialize wizard objects by scanning DOM
  document.querySelectorAll('.wizard').forEach(wizardEl => {
    const wizardId = wizardEl.getAttribute('data-wizard');
    const steps = wizardEl.querySelectorAll('.modal-section').length;

    wizards[wizardId] = { currentStep: 1, totalSteps: steps };

    updateWizardStep(wizardId); // init
  });

  function nextStep(wizardId) {
    const wizard = wizards[wizardId];
    if (wizard.currentStep < wizard.totalSteps) {
      wizard.currentStep++;
      updateWizardStep(wizardId);
    }
  }

  function previousStep(wizardId) {
    const wizard = wizards[wizardId];
    if (wizard.currentStep > 1) {
      wizard.currentStep--;
      updateWizardStep(wizardId);
    }
  }

  function updateWizardStep(wizardId) {
    const wizard = wizards[wizardId];

    // Hide all sections
    document.querySelectorAll(`#wizardSteps-${wizardId} .modal-section`)
      .forEach(section => section.classList.remove('active'));

    // Show current section
    const activeSection = document.querySelector(
      `#wizardSteps-${wizardId} .modal-section[data-section="${wizard.currentStep}"]`
    );
    activeSection.classList.add('active');

    // Get step title from section <h3>
    // const stepTitle = activeSection.querySelector('h3').textContent;

    // ✅ Use data-title instead of <h3>
    const stepTitle = activeSection.getAttribute('data-title');

    // Update footer info
    document.getElementById(`currentStep-${wizardId}`).textContent = `Step ${wizard.currentStep}`;
    document.getElementById(`stepTitle-${wizardId}`).textContent = stepTitle;

    // Update buttons
    const prevBtn = document.getElementById(`prevBtn-${wizardId}`);
    const nextBtn = document.getElementById(`nextBtn-${wizardId}`);

    prevBtn.disabled = wizard.currentStep === 1;
    nextBtn.disabled = wizard.currentStep === wizard.totalSteps;

    nextBtn.textContent = wizard.currentStep === wizard.totalSteps ? 'Finished ✓' : 'Next →';
  }




// old one static //

// Close modal when clicking outside //


  // window.onclick = function(event) {
  //     if (event.target.classList.contains('modal')) {
  //         event.target.style.display = 'none';
  //         document.body.style.overflow = 'auto';
  //     }
  // }



  // Wizard functionality //


  // let currentWizardStep = 1;
  // const totalSteps = 5;
  // const stepTitles = {
  //     1: 'Project Overview',
  //     2: 'Challenges & Previous State',
  //     3: 'Solutions & Improvements',
  //     4: 'Wireframing & High-Fidelity Mockups',
  //     5: 'Key Results & Impact'
  //     6: 'Key Results & Impact'
  // };

  // function nextStep() {
  //     if (currentWizardStep < totalSteps) {
  //         currentWizardStep++;
  //         updateWizardStep();
  //     }
  // }

  // function previousStep() {
  //     if (currentWizardStep > 1) {
  //         currentWizardStep--;
  //         updateWizardStep();
  //     }
  // }

  // function updateWizardStep() {

  //     // Hide all sections 

  //     document.querySelectorAll('.modal-section').forEach(section => {
  //         section.classList.remove('active');
  //     });

  //     // Show current section

  //     document.querySelector(`[data-section="${currentWizardStep}"]`).classList.add('active');

  //     // Update progress indicators
  //     document.querySelectorAll('.progress-step').forEach((step, index) => {
  //         const stepNumber = index + 1;
  //         step.classList.remove('active', 'completed');
          
  //         if (stepNumber === currentWizardStep) {
  //             step.classList.add('active');
  //         } else if (stepNumber < currentWizardStep) {
  //             step.classList.add('completed');
  //         }
  //     });

  //     // Update progress lines
  //     document.querySelectorAll('.progress-line').forEach((line, index) => {
  //         const lineNumber = index + 1;
  //         line.classList.remove('completed');
          
  //         if (lineNumber < currentWizardStep) {
  //             line.classList.add('completed');
  //         }
  //     });

  //     // Update navigation info
  //     document.getElementById('currentStep').textContent = `Step ${currentWizardStep}`;
  //     document.getElementById('stepTitle').textContent = stepTitles[currentWizardStep];

  //     // Update button states
  //     const prevBtn = document.getElementById('prevBtn');
  //     const nextBtn = document.getElementById('nextBtn');

  //     prevBtn.disabled = currentWizardStep === 1;
  //     nextBtn.disabled = currentWizardStep === totalSteps;

  //     if (currentWizardStep === totalSteps) {
  //         nextBtn.textContent = 'Finished ✓';
  //     } else {
  //         nextBtn.textContent = 'Next →';
  //     }
  // }