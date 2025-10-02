(function () {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "croki90";
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

        function live(selector, event, callback, context) {
            // helper for enabling IE 8 event bindings
            function addEvent(el, type, handler) {
                if (el.attachEvent) el.attachEvent("on" + type, handler);
                else el.addEventListener(type, handler);
            }
            // matches polyfill
            this &&
                this.Element &&
                (function (ElementPrototype) {
                    ElementPrototype.matches =
                        ElementPrototype.matches ||
                        ElementPrototype.matchesSelector ||
                        ElementPrototype.webkitMatchesSelector ||
                        ElementPrototype.msMatchesSelector ||
                        function (selector) {
                            var node = this,
                                nodes = (node.parentNode || node.document).querySelectorAll(selector),
                                i = -1;
                            while (nodes[++i] && nodes[i] != node);
                            return !!nodes[i];
                        };
                })(Element.prototype);
            // live binding helper using matchesSelector
            function live(selector, event, callback, context) {
                addEvent(context || document, event, function (e) {
                    var found,
                        el = e.target || e.srcElement;
                    while (el && el.matches && el !== context && !(found = el.matches(selector))) el = el.parentElement;
                    if (found) callback.call(el, e);
                });
            }
            live(selector, event, callback, context);
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

        function innerHTMLContent(selector, content) {
            var el = document.querySelector(selector);
            if (el) {
                el.innerHTML = content;
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

        function toggleClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.toggle(cls);
            }
        }
        function removeClass(el, cls) {
            var el = document.querySelector(el);
            if (el) {
                el.classList.contains(cls) && el.classList.remove(cls);
            }
        }

        function scroll(click, selector) {
            click.addEventListener('click', function (event) {
                event.preventDefault(); // Prevent default behavior of the anchor tag
                var target = document.querySelector(selector);
                if (target) {
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.scrollY,
                        behavior: 'smooth'
                    });
                }
            });
        }

        var faqSectionAdding = `<div class="croki90-faq-container">
        <div class="croki90-Wrapper">
            <div class="croki90-Wrapper-inner" id="croki90-From-Page-faq">
                <div class="croki90-content croki90-content1">
                    <div class="croki90-header" index="1">
                        <div class="croki90-header-text">Course overview</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <div class="croki90-drop-down-text text-1">
                            The Diploma in Orthodontics & Dentofacial Orthopaedics delivers a comprehensive curriculum
                            suitable for all dentists, from those beginning their first orthodontic cases to experienced
                            practitioners looking to advance their skills. This programme provides essential
                            foundational knowledge alongside advanced techniques, empowering you to confidently begin
                            treating patients immediately and elevate your orthodontic expertise. Designed to fit the
                            needs of dentists worldwide, our innovative online learning platform paired with a Clinical
                            Simulation Kit and the LDi app ensures you gain both hands-on experience and theoretical
                            knowledge, all while fitting seamlessly into your busy schedule. With personalised 1:1 case
                            support from expert tutors and an emphasis on immediate practical application, this
                            programme will help you excel in providing safe and successful orthodontic treatments for
                            your patients from day one.
                        </div>
                        <div class="croki90-drop-down-text text-2">
                            The Diploma in Dental Implantology and Oral Surgery delivers a comprehensive curriculum
                            suitable for all dentists, from those beginning their first cases to experienced
                            practitioners looking to advance their skills. This programme provides essential
                            foundational knowledge alongside advanced techniques, empowering you to treat patients with
                            confidence as you elevate your implant surgical expertise. Our innovative online learning
                            platform paired with a Clinical Simulation Kit and the LDi app ensures you gain both
                            hands-on experience and theoretical knowledge, all while fitting seamlessly into your busy
                            schedule. With personalised 1:1 case support from expert tutors and an emphasis on clinical
                            practical application, this programme will help you excel in providing safe and successful
                            implant treatments for your patients from the start.
                        </div>
                        <div class="croki90-drop-down-text text-3">
                            The Diploma in Aesthetic & Restorative Dentistry offers a comprehensive curriculum designed
                            to enhance your clinical skills and help you excel with confidence in complex restorative
                            cases. Our innovative online learning platform, paired with a Clinical Simulation Kit and
                            the LDi app, ensures you gain both hands-on experience and theoretical knowledge, all while
                            fitting seamlessly into your busy schedule. With 1:1 case support from expert tutors,
                            alongside an immediate focus on practical application, you will elevate your practice and
                            deliver exceptional patient outcomes in the latest restorative techniques from the start.
                        </div>
                        <button class="see-more-btn" id="seeMoreBtn">Read more</button>
                    </div>
                </div>
                <div class="croki90-content croki90-content2">
                    <div class="croki90-header" index="2">
                        <div class="croki90-header-text">What's included</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <div class="croki90-feature-list">
                            <ul class="croki90-feature-items list-1 croki90-drop-down-text text-1">
                                <li>12-month online programme</li>
                                <li>EduQual-Accredited Level 7 Diploma qualification</li>
                                <li>Flexible 24/7 online learning through our innovative Virtual Learning Environment
                                </li>
                                <li>Comprehensive evidence-based orthodontic curriculum</li>
                                <li>Expert instruction from our world-leading faculty of orthodontic educators</li>
                                <li>Hands-on training in foundational and advanced orthodontic techniques</li>
                                <li>1:1 case support to help you apply new skills immediately</li>
                                <li>Membership in a community of like-minded UK dental professionals</li>
                            </ul>
                            <ul class="croki90-feature-items list-2 croki90-drop-down-text text-2">
                                <li>12-month online programme</li>
                                <li>UK-Accredited Level 7 Diploma qualification</li>
                                <li>Flexible 24/7 online learning through our innovative Virtual Learning Environment
                                </li>
                                <li>Comprehensive evidence-based surgical curriculum</li>
                                <li>Expert instruction from our world-leading faculty of implant educators</li>
                                <li>Hands-on training in foundational and advanced surgical techniques</li>
                                <li>1:1 case support to help you apply new skills immediately</li>
                                <li>Membership in a global community of like-minded dental professionals</li>
                            </ul>
                            <ul class="croki90-feature-items list-3 croki90-drop-down-text text-3">
                                <li>12 month online programme</li>
                                <li>EduQual-Accredited Level 7 Diploma qualification</li>
                                <li>Flexible 24/7 online learning through our innovative Virtual Learning Environment
                                </li>
                                <li>Comprehensive evidence-based clinical teaching</li>
                                <li>Expert tuition from our world-leading faculty of clinical educators</li>
                                <li>Hands-on training in advanced restorative techniques</li>
                                <li>1:1 case support from expert tutors to help you apply new skills immediately</li>
                                <li>Membership in a community of like-minded UK dental professionals</li>
                            </ul>

                        </div>

                        <!-- <div class="croki90-drop-down-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Aliquam similique nobis ducimus facilis expedita reiciendis ea explicabo provident placeat
                            officia impedit autem vitae, doloribus dicta. Ea dolorum temporibus sequi possimus./div&gt;
                        </div> -->
                    </div>
                </div>
                <div class="croki90-content croki90-content3">
                    <div class="croki90-header" index="3">
                        <div class="croki90-header-text">Pricing</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <div class="croki90-drop-down-text text-1">
                            Monthly Instalments: Secure your place with an initial payment of £575, covering the first module’s tuition. The remaining course fee can be spread over 12 monthly instalments of £785
                            <br><br>
                            Payment in full: Gain a 5% discount for single payment of full course fees, total £9,495.25
                        </div>

                        <div class="croki90-drop-down-text text-2">
                                                        Monthly Instalments: Secure your place with an initial payment of £575, covering the first module’s tuition. The remaining course fee can be spread over 12 monthly instalments of £785
                            <br><br>
                            Payment in full: Gain a 5% discount for single payment of full course fees, total £9,495.25
                        </div>

                        <div class="croki90-drop-down-text text-3">
                                                        Monthly Instalments: Secure your place with an initial payment of £575, covering the first module’s tuition. The remaining course fee can be spread over 12 monthly instalments of £785
                            <br><br>
                            Payment in full: Gain a 5% discount for single payment of full course fees, total £9,495.25
                        </div>
                    </div>

                </div>
                <div class="croki90-content croki90-content4">
                    <div class="croki90-header" index="4">
                        <div class="croki90-header-text">Entry requirements</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <div class="croki90-drop-down-text text-1">
                            <p>To enrol in the Diploma in Orthodontics and Dentofacial Orthopaedics course,
                                applicants must meet the following criteria:</p>
                            <ul class="croki90-requirements-list">
                                <li>Possess a primary dental qualification (e.g., BDS or equivalent).</li>
                                <li>Hold a minimum of one year's experience as a registered dental practitioner.
                                </li>
                            </ul>
                        </div>
                        <div class="croki90-drop-down-text text-2">
                            <p>To enrol in the Diploma in Dental Implantology and Oral Surgery course, applicants
                                must meet the following criteria:</p>
                            <ul class="croki90-requirements-list">
                                <li>Possess a primary dental qualification (e.g., BDS or equivalent).</li>
                                <li>Hold a minimum of one year's experience as a registered dental practitioner.
                                </li>
                            </ul>
                        </div>
                        <div class="croki90-drop-down-text text-3">
                            <p>To enrol in the Diploma in Aesthetic & Restorative Dentistry course, applicants must
                                meet the following criteria:</p>
                            <ul class="croki90-requirements-list">
                                <li>Possess a primary dental qualification (e.g., BDS or equivalent).</li>
                                <li>Hold a minimum of one year's experience as a registered dental practitioner.
                                </li>
                            </ul>
                        </div>
                        <button class="see-more-btn" id="seeMoreBtn">Read more</button>
                    </div>
                </div>
                <div class="croki90-content croki90-content5">
                    <div class="croki90-header" index="5">
                        <div class="croki90-header-text">Units</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <!-- Orthodontics Curriculum -->
                        <div class="croki90-drop-down-text text-1">
                            <ul class="croki90-curriculum-list">
                                <li>Principles of Orthodontic Assessment and Diagnosis</li>
                                <li>Treatment Planning and Essential Clinical Skills</li>
                                <li>Orthodontic Appliances</li>
                                <li>Advanced Clinical Skills in Orthodontics</li>
                                <li>Applied Principles of Orthodontics & Dentofacial Orthopaedics</li>
                                <li>Advanced Orthodontic Treatment</li>
                            </ul>
                        </div>

                        <!-- Implantology Curriculum -->
                        <div class="croki90-drop-down-text text-2">
                            <ul class="croki90-curriculum-list">
                                <li>Fundamentals of Implant Dentistry & Oral Surgery</li>
                                <li>Dental Implant Treatment Planning</li>
                                <li>Clinical Implant Surgery</li>
                                <li>Restorative Techniques in Implant Dentistry</li>
                                <li>Advanced Implant Dentistry</li>
                                <li>Oral Surgery in Clinical Practice</li>
                            </ul>
                        </div>

                        <!-- Aesthetic & Restorative Curriculum -->
                        <div class="croki90-drop-down-text text-3">
                            <ul class="croki90-curriculum-list">
                                <li>Foundations of Restorative Dentistry</li>
                                <li>Principles of Assessment and Diagnosis</li>
                                <li>Aesthetic Dental Restorations</li>
                                <li>Fundamental Clinical Skills</li>
                                <li>Complex and Multidisciplinary Treatment</li>
                                <li>Advanced Aesthetic & Restorative Dentistry</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div class="croki90-content croki90-content6">
                    <div class="croki90-header" index="6">
                        <div class="croki90-header-text">Practical training</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <div class="croki90-drop-down-text text-1">
                            All students receive a comprehensive Clinical Simulation Kit, complete with models
                            and equipment needed to perform the hands-on training exercises integrated
                            throughout the course. Through clinical demonstrations, virtual simulations, and
                            case scenarios, this Clinical Simulation Kit is instrumental in developing your
                            orthodontic skills. With the confidence gained from this practice you will quickly
                            feel ready to treat live patients using the techniques learned.
                        </div>
                        <div class="croki90-drop-down-text text-2">
                            All students receive a comprehensive Clinical Simulation Kit, complete with models
                            and equipment needed to perform the hands-on training exercises integrated
                            throughout the course. Through clinical demonstrations, virtual simulations, and
                            case scenarios, this Clinical Simulation Kit is instrumental in developing your
                            implant surgical skills. With the confidence gained from this practice you will
                            quickly feel ready to treat live patients using the techniques learned.
                        </div>
                        <div class="croki90-drop-down-text text-3">
                            All students receive a comprehensive Clinical Simulation Kit, complete with models
                            and equipment needed to perform the hands-on training exercises integrated
                            throughout the course. Through clinical demonstrations, virtual simulations, and
                            case scenarios, this practical kit is instrumental in developing your advanced
                            restorative practical skills. With the confidence gained from this practice you will
                            quickly feel ready to treat live patients using the techniques learned.
                        </div>
                        <button class="see-more-btn" id="seeMoreBtn">Read more</button>
                    </div>
                </div>
                <div class="croki90-content croki90-content7">
                    <div class="croki90-header" index="7">
                        <div class="croki90-header-text">Faculty</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <div class="croki90-drop-down-text text-1">
                            We are proud to present our teaching faculty, featuring some of the world’s most
                            respected educators and opinion leaders in the dental profession.
                            <div class="croki90-grid-table bordered">
                                <div>Dr. Nadia Ahmed (UK)</div>
                                <div>Dr. Lida Gamble (UK)</div>
                                <div>Dr. Stefano Carderi (Italy)</div>
                                <div>Dr. Eugenia Raffaelli (Italy)</div>
                                <div>Dr. Eslam Mansour (UK)</div>
                                <div>Prof. Dr. Angelo Cardarelli (Italy)</div>
                                <div>Dr. George Cheetham (UK)</div>
                                <div>Prof. Akram Alhuwaizi (Iraq)</div>
                                <div>Dr. Ahmed Hennawy (Egypt)</div>
                                <div>Dr. Gustavo Gameiro (Brazil)</div>
                                <div>Dr. Massimo D'Aversa (Italy)</div>
                                <div>Dr. Nazar Blazhkiv (Ukraine)</div>
                                <div>Dr. John Fagbemi (UK)</div>
                                <div>Dr. Rajesh Gyawali (Nepal)</div>
                                <div>Dr. Richard Moore (UK)</div>
                                <div>Dr. Rob Wood (UK)</div>
                                <div>Dr. Kyle Jennette (USA)</div>
                                <div>Dr. Rocio Deiros Cal (Spain)</div>
                                <div>Dr. Kim Ganga-Raju (UK)</div>
                                <div>Dr. Stefan Cloete (Guernsey)</div>
                                <div>Dr. Thomas Ziebura (Germany)</div>
                                <div>Mr. Tim Zoltie (UK)</div>
                                <div>Dr. Yehyun Kim (South Korea)</div>
                                <div>Dr. Elisa Praderi (Germany)</div>
                                <div>Dr. Filippo Cipriani (Italy)</div>
                                <div>Dr. Aiman Obeid (UAE)</div>
                                <div>Dr. Santiago Cobos Cobos (USA)</div>
                                <div>Dr. Jamal Giri (Nepal)</div>
                                <div>Dr. Lily Duffy (UK)</div>
                            </div>
                        </div>
                        <div class="croki90-drop-down-text text-2">
                            <div class="croki90-grid-table bordered">
                                <div>Dr. Richard Moore (UK)</div>
                                <div>Dr. Rocio Deiros Cal (Spain)</div>
                                <div>Dr. Amardip Kalsi (UK)</div>
                                <div>Dr. Alexander Müller-Busch (Germany)</div>
                                <div>Dr. Stefano Carderi (Italy)</div>
                                <div>Prof. Dr. Angelo Cardarelli (Italy)</div>
                                <div>Dr. Freya Smith-Jack (UK)</div>
                                <div>Mr. Tim Zoltie (UK)</div>
                                <div>Prof. James Field (UK)</div>
                                <div>Dr. Elisa Praderi (Germany)</div>
                                <div>Dr. Nate Lawson (USA)</div>
                                <div>Dr. George Cheetham (UK)</div>
                                <div>Dr. John Fagbemi (UK)</div>
                                <div>Dr. Kyle Jennette (USA)</div>
                                <div>Dr. Santiago Cobos Cobos (USA)</div>
                                <div>Dr. Jamal Giri (Nepal)</div>
                            </div>
                        </div>
                        <div class="croki90-drop-down-text text-3">
                            <div class="croki90-grid-table bordered">
                                <div>Dr. Amardip Kalsi (UK)</div>
                                <div>Dr. Hanan Elgendy (USA)</div>
                                <div>Dr. George Cheetham (UK)</div>
                                <div>Hugo Sousa (UK)</div>
                                <div>Dr. David Alleman (USA)</div>
                                <div>Dr. Larissa Zarjitsky (Brazil)</div>
                                <div>Dr. Davey Alleman (USA)</div>
                                <div>Prof. Dr. Marko Jakovac (Croatia)</div>
                                <div>Dr. Joan Gubau Mach (Spain)</div>
                                <div>Dr. Matt Nejad (USA)</div>
                                <div>Dr. Freya Smith-Jack (UK)</div>
                                <div>Dr. Rafael Beolchi (Brazil)</div>
                                <div>Beth Brown (UK)</div>
                                <div>Dr. Robert Chaffe (UK)</div>
                                <div>Prof. Dr. Angelo Cardarelli (Italy)</div>
                                <div>Mr. Tim Zoltie (UK)</div>
                                <div>Dr. Kyle Jennette (USA)</div>
                                <div>Dr. Nate Lawson (USA)</div>
                                <div>Prof. James Field (UK)</div>
                                <div>Dr. Martin von Sontagh (Austria)</div>
                                <div>Dr. Shea Bess (USA)</div>
                                <div>Dr. Richard Stevenson (USA)</div>
                                <div>Dr. Alexander Müller-Busch (Germany)</div>
                                <div>Dr. Ashok Ayer (Nepal)</div>
                            </div>
                        </div>
                        <button class="see-more-btn" id="seeMoreBtn">Read more</button>
                    </div>
                </div>
                <div class="croki90-content croki90-content8">
                    <div class="croki90-header" index="8">
                        <div class="croki90-header-text">Course reviews</div>
                        <div class="croki90-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-close">
                                <circle cx="10.952" cy="11.5936" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M10.9521 6.80566V16.6701" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                                <path d="M6.01978 11.7383H15.8842" stroke="white" stroke-width="2"
                                    stroke-miterlimit="10"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23"
                                fill="none" class="cro-icon-open">
                                <circle cx="11.1066" cy="11.7777" r="10.8934" fill="#00A9E0"></circle>
                                <path d="M6.07129 14.7397L11.1057 8.81589L16.1418 14.7397" stroke="white"
                                    stroke-width="2" stroke-miterlimit="10"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="croki90-drop-down">
                        <div class="croki90-drop-down-text text-1">
                            <div class="cro-review-item item-1">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">Stephen Johnson</div>
                                        <div class="cro-review-item-date">April 30, 2025</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2025/04/02211014/unnamed-7.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">I would fully recommend the PG Diploma in
                                        Orthodontics from LDi. The
                                        course is in depth and comprehensive, but delivered in a way that is convenient
                                        and adaptable to
                                        existing clinical and family life. The course gives confidence in all aspects of
                                        orthodontics, and will
                                        take aligner treatments and workflows to another level completely. Thanks LDi!
                                    </div>
                                </div>
                            </div>
                            <div class="cro-review-item item-2">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">May Bassett</div>
                                        <div class="cro-review-item-date">February 21, 2024</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2024/11/30113121/unnamed-2.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">I am thrilled to share my review of the Diploma
                                        in
                                        Orthodontics and Orthopedics, a program that has profoundly reshaped my career
                                        trajectory. Prior to
                                        enrolling, my practice primarily focused on short-term orthodontics for adults.
                                        However, since
                                        completing the course, I have expanded my scope to include a diverse range of
                                        patients, spanning
                                        conventional orthodontic treatments for both adults and children.

                                        I have particularly relished the orthopedic segment of the course, integrating
                                        these principles into
                                        practice by treating a broad spectrum of patients with functional appliances.
                                        Embracing high-quality
                                        orthodontics alongside orthopedic jaw development has enabled me to minimize the
                                        necessity for
                                        extraction orthodontics, a transformation I find immensely rewarding.

                                        The online case-based discussions have been exceptional, providing invaluable
                                        confidence as I embarked
                                        on my initial cases. The personalized 1:1 clinical advice has been instrumental
                                        in honing my skills.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="croki90-drop-down-text text-2">
                            <div class="cro-review-item item-1">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">Ben Kemsley</div>
                                        <div class="cro-review-item-date">April 30, 2025</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2025/04/02212426/unnamed-12.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">Learning with LDi has been one of the best
                                        decisions of my
                                        career. The opportunity to learn from some of the world's leading clinicians,
                                        without needing to take
                                        time away from the clinic is unparalleled and the supportive community of
                                        colleagues and tutors makes
                                        the experience a truly enjoyable one too!</div>
                                </div>
                            </div>
                            <div class="cro-review-item item-2">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">Dr. Fehmi Bora Saric</div>
                                        <div class="cro-review-item-date">April 30, 2024</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2025/04/02212759/unnamed-14.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">It is a wonderful program. It is a very
                                        valuable
                                        organization that has been thought trough in detail and worked with
                                        professionals. It has been very
                                        beneficial to me and my patients professionally. I recommend it to those who
                                        have the opportunity.</div>
                                </div>
                            </div>
                            <div class="cro-review-item item-3">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">Rafael Beolchi</div>
                                        <div class="cro-review-item-date">April 29, 2025</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2025/04/02210431/unnamed-5.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">A thriving and welcoming Dental community,
                                        where updated and
                                        science-based knowledge is shared amongst colleagues, breaking the traditional
                                        barriers of
                                        teacher-student.</div>
                                </div>
                            </div>
                        </div>
                        <div class="croki90-drop-down-text text-3">
                            <div class="cro-review-item item-1">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">Hadia Hanif</div>
                                        <div class="cro-review-item-date">July 1, 2024</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img decoding="async"
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2024/11/27093836/unnamed-6.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">Everything about this course is amazing. As a
                                        student of the Aesthetic
                                        and Restorative program, I think it's safe to say that taking this course was
                                        the best decision I took
                                        for upgrading my skills and knowledge and giving my career in dentistry a
                                        significant boost.
                                        The teachers are all experts in the field and extremely cooperative, so you know
                                        you're in good hands.
                                        It is, overall, a very interactive and collaborative experience, and it makes
                                        you get the most out of
                                        your learning. I think they're doing a commendable job making good dental
                                        education accessible to a wide
                                        audience worldwide.</div>
                                </div>
                            </div>
                            <div class="cro-review-item item-2">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">Haroon Dalili</div>
                                        <div class="cro-review-item-date">July 1, 2024</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2024/11/27013436/unnamed2.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">Opting for LDI for my Aesthetic and Restorative
                                        dentistry diploma has
                                        turned out to be one of the most significant career choices I have made. This is
                                        a perfect programme for
                                        anybody looking to enhance their clinical work, boost their confidence, and gain
                                        transformative career
                                        skills. Since enrolling in the Diploma in Aesthetic &amp; Restorative Dentistry,
                                        my knowledge of the
                                        subject has significantly expanded. The course has provided me with a solid
                                        foundation in aesthetic and
                                        restorative dentistry. Thanks to the expertise of world-renowned teachers in the
                                        field. I am thoroughly
                                        impressed with the exceptional quality and high standards of their teaching in
                                        each module. </div>
                                </div>
                            </div>
                            <div class="cro-review-item item-3">
                                <div class="cro-review-item-header">
                                    <div class="cro-review-item-header-left">
                                        <div class="cro-review-item-name">Dr. Rajesh Gyawali</div>
                                        <div class="cro-review-item-date">April 25, 2024</div>
                                    </div>
                                    <div class="cro-review-item-header-right">
                                        <img
                                            src="https://media.londondentalinstitute.com/wp-content/uploads/2025/04/02212028/unnamed-10.png">
                                    </div>
                                </div>
                                <div class="cro-review-item-body">
                                    <div class="cro-review-item-stars">
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                        <div class="cro-review-item-star star-1"></div>
                                    </div>
                                    <div class="cro-review-item-content">An ideal institution where we engage in
                                        teaching and learning alongside
                                        global experts and students, sharing knowledge and skills while progressing at
                                        our own pace and
                                        maintaining a balance with personal commitments.</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>`

        var newLogo_review = `<div class="croki90-logo-Reviews">
        <div class="croki90-logo-Reviews-wrapper">
            <div class="croki90-logo-Reviews-inner">
                <div class="croki90-logo-Reviews-left">
                    <div class="croki90-logo-Reviews-left-wrapper">
                        <div class="croki90-cart-logo-left-img-parent">
                            <img class="croki90-cart-logo-1"
                                src="https://vle.londondentalinstitute.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/amex.svg"
                                alt="">
                        </div>
                        <div class="croki90-cart-logo-left-img-parent">
                            <img class="croki90-cart-logo-2"
                                src="https://vle.londondentalinstitute.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/discover.svg"
                                alt="">
                        </div>
                        <div class="croki90-cart-logo-left-img-parent">
                            <img class="croki90-cart-logo-3"
                                src="https://vle.londondentalinstitute.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/visa.svg"
                                alt="">
                        </div>
                        <div class="croki90-cart-logo-left-img-parent">
                            <img class="croki90-cart-logo-4"
                                src="https://vle.londondentalinstitute.com/wp-content/plugins/woo-stripe-payment/assets/img/cards/mastercard.svg"
                                alt="">
                        </div>
                    </div>

                </div>
                <div class="croki90-logo-Reviews-right">
                    <div class="croki90-logo-Reviews-right-wrapper">
                        <div class="croki90-logo-google-img-parent">
                            <img class="cro-google-img" src="https://crp-clients-images.s3.af-south-1.amazonaws.com/London_Dental_Institute/Recipe+KI90+%7C+Registration+Course+Side+Panel+%7C+DESKTOP/cro-ldi-90_1.png" alt="">
                        </div>
                        <div class="croki90-Reviews-right-text-star">
                            <div class="croki90-Reviews-right-rating">
                                <div class="croki90-Reviews-right-text">
                                    Rated <span>4.9</span>
                                </div>
                            </div>
                            <div class="croki90-Reviews-right-star-icon">
                                <div class="croki90-Reviews-right-star-icon-wrapper">
                                    <div class="croki90-Reviews-right-star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                                            viewBox="0 0 16 15" fill="none">
                                            <path
                                                d="M7.95065 0.148926L10.0333 4.63346L14.9419 5.22837L11.3204 8.59488L12.2715 13.4471L7.95065 11.0432L3.62982 13.4471L4.58087 8.59488L0.959395 5.22837L5.86801 4.63346L7.95065 0.148926Z"
                                                fill="#FBBC04" />
                                        </svg>
                                    </div>
                                    <div class="croki90-Reviews-right-star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                                            viewBox="0 0 16 15" fill="none">
                                            <path
                                                d="M7.95065 0.148926L10.0333 4.63346L14.9419 5.22837L11.3204 8.59488L12.2715 13.4471L7.95065 11.0432L3.62982 13.4471L4.58087 8.59488L0.959395 5.22837L5.86801 4.63346L7.95065 0.148926Z"
                                                fill="#FBBC04" />
                                        </svg>
                                    </div>
                                    <div class="croki90-Reviews-right-star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                                            viewBox="0 0 16 15" fill="none">
                                            <path
                                                d="M7.95065 0.148926L10.0333 4.63346L14.9419 5.22837L11.3204 8.59488L12.2715 13.4471L7.95065 11.0432L3.62982 13.4471L4.58087 8.59488L0.959395 5.22837L5.86801 4.63346L7.95065 0.148926Z"
                                                fill="#FBBC04" />
                                        </svg>
                                    </div>
                                    <div class="croki90-Reviews-right-star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                                            viewBox="0 0 16 15" fill="none">
                                            <path
                                                d="M7.95065 0.148926L10.0333 4.63346L14.9419 5.22837L11.3204 8.59488L12.2715 13.4471L7.95065 11.0432L3.62982 13.4471L4.58087 8.59488L0.959395 5.22837L5.86801 4.63346L7.95065 0.148926Z"
                                                fill="#FBBC04" />
                                        </svg>
                                    </div>
                                    <div class="croki90-Reviews-right-star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                            viewBox="0 0 15 15" fill="none">
                                            <path
                                                d="M7.56003 0.148926L9.74985 4.86424L14.9111 5.48977L11.1032 9.02953L12.1032 14.1314L7.56003 11.6038L3.01683 14.1314L4.01683 9.02953L0.208984 5.48977L5.37021 4.86424L7.56003 0.148926Z"
                                                fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M9.74985 4.86424L7.56003 0.148926L5.37021 4.86424L0.208984 5.48977L4.01683 9.02953L3.01683 14.1314L7.56003 11.6038L12.1032 14.1314L11.1032 9.02953L14.9111 5.48977L9.74985 4.86424ZM12.8578 6.15691L9.1382 5.7061L7.56003 2.30784L5.98186 5.7061L2.26223 6.15691L5.00649 8.70797L4.28581 12.3849L7.56003 10.5632L10.8343 12.3848L10.1136 8.70797L12.8578 6.15691Z"
                                                fill="#FBBC04" />
                                            <path d="M8.46937 3.78627L7.56003 1.9676L6.19603 11.0609H8.46937V3.78627Z"
                                                fill="#FBBC04" />
                                            <path
                                                d="M7.56003 11.0609V1.9676L5.74136 5.60494L1.64936 6.0596L4.83203 8.78761L3.92269 12.8796L7.56003 11.0609Z"
                                                fill="#FBBC04" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="croki90-Reviews-right-Google-Reviews">
                                <div class="croki90-Reviews-right-text">
                                    On Google Reviews
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

        function membership() {
            waitForElement('.waf-course-registration-coures-detail .course-name strong', function () {
                var courseName = document.querySelector('.waf-course-registration-coures-detail .course-name strong').innerHTML
                if (
                    courseName.indexOf('Orthopaedics') > -1
                ) {
                    addClass('body', 'cro-faq-ortho');
                } else if (
                    courseName.indexOf('Diploma') > -1
                ) {
                    addClass('body', 'cro-faq-implant');
                } else if (
                    courseName.indexOf('Aesthetic') > -1
                ) {
                    addClass('body', 'cro-faq-aesthetic');
                }
            });


            waitForElement('.bb-elementor-content .elementor-section-boxed .elementor-container', function () {
                addClass("body", variation_name);
                addClass("body", 'cro-faq-step_3');
                if (!document.querySelector('.croki90-faq-container')) {
                    insertHtml('.bb-elementor-content .elementor-section-boxed .elementor-container', faqSectionAdding, "beforeend");
                }


            });

            // step-03/
            waitForElement('.checkout.woocommerce-checkout', function () {
                if (!document.querySelector('.croki90-logo-Reviews')) {
                    insertHtml('.checkout.woocommerce-checkout', newLogo_review, "afterend");
                }
            });
        }

        /* Variation Init */
        function init() {
            addClass("body", variation_name);

            // Setp-01/
            waitForElement('.waf-course-registration-form-wrapper', function () {
                if (!document.querySelector('.croki90-faq-container')) {
                    insertHtml('.waf-course-registration-form-wrapper', faqSectionAdding, "afterend");
                }
            });

            // step-02/
            waitForElement('section h2.elementor-heading-title', function () {
                document.querySelectorAll('section h2.elementor-heading-title').forEach(function (e) {
                    if (e.innerHTML.indexOf('What’s included') != -1) {
                        var parent = e.closest('section');
                        parent.classList.add('cro-t-whatInclude')
                    }


                    if (e.innerHTML.indexOf('What’s included') != -1 && window.location.href.includes('step-02')) {
                        addClass('body', 'cro-faq-step_2');
                        var parent = e.closest('section')
                        if (!document.querySelector('.croki90-faq-container')) {
                            parent.insertAdjacentHTML('beforebegin', faqSectionAdding)
                            // parent.classList.add('cro-t-whatInclude')
                            // insertHtml('.waf-course-registration-form-wrapper', faqSectionAdding, "afterend");
                        }
                    }
                })
            })






            // /membership-checkout/

            var currentURL = window.location.href;
            if (
                currentURL.indexOf('orthodontics-and-dentofacial-orthopaedics-registration') > -1
            ) {
                addClass('body', 'cro-faq-ortho');
            } else if (
                currentURL.indexOf('diploma-in-dental-implantology-oral-surgery-registration') > -1
            ) {
                addClass('body', 'cro-faq-implant');
            } else if (
                currentURL.indexOf('aesthetic-and-restorative-dentistry-registration') > -1
            ) {
                addClass('body', 'cro-faq-aesthetic');
            }

        }


        function even_handler() {
            live(".croki90-header", "click", function () {
                var openDropdown = document.querySelector(".croki90-content.croShow");
                var parent = this.closest(".croki90-content");

                // If clicked dropdown is already open, close it
                if (parent.classList.contains("croShow")) {
                    parent.classList.remove("croShow");
                    document.querySelector('body').classList.remove('removeButton')
                    document.querySelectorAll('.croki90-drop-down.removeButton').forEach(function (el) {
                        el.classList.remove('removeButton');
                    });
                } else {
                    // Close any open dropdown
                    if (openDropdown && openDropdown !== parent) {
                        openDropdown.classList.remove("croShow");
                        // croki90-drop-down removeButton
                        if (document.querySelector('.removeButton')) {
                            document.querySelector('body').classList.remove('removeButton')
                            document.querySelectorAll('.croki90-drop-down.removeButton').forEach(function (el) {
                                el.classList.remove('removeButton');
                            });
                        }


                    }
                    // Open clicked dropdown
                    parent.classList.add("croShow");
                }



            });

            live("button#seeMoreBtn", "click", function () {
                toggleClass("body", "removeButton");
                this.closest('.croki90-drop-down').classList.toggle('removeButton');

            });

        }


        /* Initialise variation */

        if (window.location.href.includes('/membership-checkout')) {
            membership();
        }

        if (!window.croKI_90) {
            // .waf-course-registration-step-name
            waitForElement('section h2.elementor-heading-title', init);
            even_handler();
            window.croKI_90 = true;
        }

    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();