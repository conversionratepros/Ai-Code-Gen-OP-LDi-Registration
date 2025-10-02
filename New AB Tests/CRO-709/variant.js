(function () {
	try {
		/* main variables */
		var debug = 0;
		var variation_name = "cro-LDI-233";
		var currentUrl = window.location.pathname;
		/* all Pure helper functions */

		function waitForElement(selector, trigger) {
			var interval = setInterval(function () {
				if (
					document &&
					document.querySelector(selector) &&
					document.querySelectorAll(selector).length > 0
				) {
					clearInterval(interval);
					trigger();
				}
			}, 50);
			setTimeout(function () {
				clearInterval(interval);
			}, 15000);
		}

		function insertHtml(selector, content, position) {
			var el = document.querySelector(selector);
			if (!position) {
				position = "afterend";
			}
			if (el && content) {
				el.insertAdjacentHTML(position, content);
			}
		}

		function innerChildContent(selector, childNumber, content) {
			var el = document.querySelector(selector);
			if (el.hasChildNodes()) {
				el.childNodes[childNumber].textContent = content;
			}
		}

		function addClass(el, cls) {
			var el = document.querySelector(el);
			if (el) {
				el.classList.add(cls);
			}
		}

		var steps = [
			{
				id: "cro-t-54-step-1",
				urlKeyword: "-registration", // Unique keyword for step 1
			},
			{
				id: "cro-t-54-step-2",
				urlKeyword: "-registration-step-02", // Unique keyword for step 2
			},
			{
				id: "cro-t-54-step-3",
				urlKeyword: "membership-checkout", // Unique keyword for step 3
			},
		];

		function addingHTML() {
			// updating the timer text
			innerChildContent('#membership_countdown_container', 0, '');

			if (!document.querySelector('.cro-t-54-timerText')) {
				insertHtml('#membership_countdown_container', '<div class="cro-t-54-timerText">You are registering for the <b></b> starting on: </div>', 'afterbegin');
			}

			document.querySelector('#membership_countdown_container').closest('section').classList.add('cro-t-54-timerSection');

			waitForElement('h1.elementor-heading-title', function () {
				document.querySelectorAll('h1.elementor-heading-title').forEach(function (e) {
					if (e.innerHTML.includes('Registration')) {
						e.closest('section').classList.add('cro-t-54-topHeading');
					}

					if (e.innerHTML.includes('Plan Selection')) {
						e.closest('section').classList.add('cro-t-54-topHeading');
					}

					if (e.innerHTML.includes('Payment')) {
						e.closest('section').classList.add('cro-t-54-topHeading');
					}
				})
			});

			waitForElement('h2.elementor-heading-title', function () {
				document.querySelectorAll('h2.elementor-heading-title').forEach(function (e) {
					if (e.innerHTML.includes('What\’s included')) {
						e.closest('section').classList.add('cro-t-54-whatsInclude');
					}
				})
			});

			waitForElement('.elementor-widget-wrap.elementor-element-populated>div:nth-child(2) h1', function () {
				var courseHeader = document.querySelector(".elementor-widget-wrap.elementor-element-populated > div:nth-child(2) h1");
				var croHeader = document.querySelector(".cro-t-54-timerText b");

				if (croHeader) {
					croHeader.textContent = courseHeader.textContent;
				}
			});
		}

		var stepHtml = `<section class="cro-t-54-progress-tracker">
		<div class="cro-t-54-progress-tracker-wrapper">
		<div class="cro-t-54-sortline cro-left"></div>
					<div class="cro-t-54-step" id="cro-t-54-step-1">
				<div class="cro-t-54-circle">1</div>
				
			</div>
			<div class="cro-t-54-line"></div>
			<div class="cro-t-54-step" id="cro-t-54-step-2">
				<div class="cro-t-54-circle">2</div>
				
			</div>
			<div class="cro-t-54-line"></div>
			<div class="cro-t-54-step" id="cro-t-54-step-3">
				<div class="cro-t-54-circle">3</div>
				
			</div>
			<div class="cro-t-54-sortline cro-right"></div>
		</div>
    	</section>`;


		function checkoutPage() {
			waitForElement('html body.cro-t-54-step-3 .cro-t-54-topHeading .elementor-widget-wrap.elementor-element-populated>div:nth-child(1) h1', function () {
				var contentHeading = document.querySelector('html body.cro-LDI-233 .cro-t-54-topHeading .elementor-widget-wrap.elementor-element-populated>div:nth-child(2) h1').innerText;
				if (!document.querySelector('.cro-t-54-timerText')) {
					insertHtml('html body.cro-t-54-step-3 .cro-t-54-topHeading .elementor-widget-wrap.elementor-element-populated>div:nth-child(1) h1', '<div class="cro-t-54-timerText">You are registering for the <b>' + contentHeading + '</b> starting on: <b>31 January 2025</b></div>', 'afterend');
				}
			});




			// document.querySelector('#membership_countdown_container').closest('section').classList.add('cro-t-54-timerSection');

			waitForElement('h1.elementor-heading-title', function () {
				document.querySelectorAll('h1.elementor-heading-title').forEach(function (e) {
					if (e.innerHTML.includes('Registration')) {
						e.closest('section').classList.add('cro-t-54-topHeading');
					}

					if (e.innerHTML.includes('Plan Selection')) {
						e.closest('section').classList.add('cro-t-54-topHeading');
					}

					if (e.innerHTML.includes('Payment')) {
						e.closest('section').classList.add('cro-t-54-topHeading');
					}
				})
			});

			waitForElement('h2.elementor-heading-title', function () {
				document.querySelectorAll('h2.elementor-heading-title').forEach(function (e) {
					if (e.innerHTML.includes('What\’s included')) {
						e.closest('section').classList.add('cro-t-54-whatsInclude');
					}
				})
			});

			waitForElement('.elementor-widget-wrap.elementor-element-populated>div:nth-child(2) h1', function () {
				var courseHeader = document.querySelector(".elementor-widget-wrap.elementor-element-populated > div:nth-child(2) h1");
				var croHeader = document.querySelector(".cro-t-54-timerText b");

				if (croHeader) {
					croHeader.textContent = courseHeader.textContent;
				}
			});
		}


		function init() {
			addClass('body', variation_name);
			waitForElement('#membership_countdown_container', addingHTML);

			if (window.location.href.includes('membership-checkout/')) {
				console.log('working')
				checkoutPage();
			}

			// Inject the progress tracker HTML if not already present
			if (!document.querySelector('.cro-t-54-progress-tracker')) {
				insertHtml('#content .bb-elementor-content .elementor', stepHtml, 'afterbegin');
				console.log("Progress tracker HTML added.");
			}

			// Find the current step index
			var currentStepIndex = steps.findIndex((step) => {
				// Use a regular expression for exact matching
				const regex = new RegExp(`${step.urlKeyword}(/|$)`); // Match the keyword followed by '/' or end of string
				const match = regex.test(currentUrl);
				console.log(`Checking step ${step.id}: ${step.urlKeyword} - Current URL: ${currentUrl} - Match: ${match}`);
				return match;
			});

			if (currentStepIndex === -1) {
				console.log("No matching step found");
				console.log("Current URL:", currentUrl); // Log the actual URL for debugging
				// return; // Exit if no matching step
			}

			// Iterate through the steps and update classes dynamically
			steps.forEach((step, index) => {
				const stepElement = document.getElementById(step.id);

				if (stepElement) {
					if (index === currentStepIndex) {
						// Add 'current' class for the active step
						// console.log(`Adding class: cro-t-54-step-${index + 1}`);
						document.body.classList.add(`cro-t-54-step-${index + 1}`);
						stepElement.classList.add("current");
					} else if (index < currentStepIndex) {
						// Add 'completed' class for previous steps
						stepElement.classList.add("completed");
					} else {
						// Remove 'current' and 'completed' classes for future steps
						stepElement.classList.remove("current", "completed");
					}
				}
			});

		}

		if (!window.cro_t_54) {
			waitForElement('#content .bb-elementor-content .elementor', init);
			window.cro_t_54 = true;
		}
	} catch (e) {
		if (debug) console.log(e, "error in Test" + variation_name);
	}
})();