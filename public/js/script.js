/**
 * @function getSunTime
 * @desc Retrieves the hour (24H base) for today's Sun rise/set. This is an *oversimplified* lookup table based on Tokyo Sunrise/Sunset:
 *       https://gml.noaa.gov/grad/solcalc/table.php?lat=35.7&lon=139.77&year=2021
 * @param {}
 * @returns {object} {sunrise: number, sunset: number} - the hour of Sun rise/set (eg. {06, 18})
 * @todo dynamically determine the actual sunrise given the user's local geolocation [[LOW PRIORITY]]
 *       https://stackoverflow.com/questions/18949074/calculating-sunrise-sunset-times-in-javascript/22460637
 */
function getSunTime() {
	let rise = 07; // JAN (0) default
	let set = 16;

	switch ((new Date()).getMonth()) {
		case 1, 2, 10, 11:
			rise = 06;
			set = 17;
			break;
		case 3, 4, 8, 9:
			rise = 05;
			set = 18;
			break;
		case 5, 6, 7:
			rise = 04;
			set = 19;
			break;
	}

	return ({
		rise,
		set
	});
}

/**
 * @function isDayTime()
 * @desc Query today's sunrise & sunset and determine if the current hour is during the day time hours.
 * @param {}
 * @returns {boolean} 
 */
function isDayTime() {
	let hour = (new Date()).getHours();

	return (hour >= getSunTime().rise && hour <= getSunTime().set);
}

/**
 * @function isStorageEnabled
 * @desc Checks if localStorage and thus cookies are allowed to be stored on local system
 * @param {}
 * @return {boolean} cookieEnabled
 */
function isStorageEnabled() {
	let cookieEnabled = true;

	try {
		localStorage.setItem('checkMyCookie', 'true');
	} catch (e) {
		// Assuming that cookies are disabled since localStorage is disabled.
		// console.log("Cookies are disabled.");
		cookieEnabled = false;
	}

	return (cookieEnabled);
}

/**
 * @function isUserColorPrefDark
 * @desc Check if user has a DARK theme prefered.
 * LOGIC:
 *   Assume user don't prefer DARK.
 *   Check if the browser supports 'prefers-color-scheme' MediaQuery.
 *   Check if 'prefers-color-scheme' MediaQuery equals 'dark'.
 *   If there is something wrong:
 *   Display error message in the console.
 *   Set isDark variable to `0` (which can evaluate as FALSE, 
 *   but provides context to the calling function of an error).
 * @param {}
 * @return {boolean} isDark - Returns `0` if not supported
 * @todo Check if `0` or `false`
 */
function isUserColorPrefDark() {
	let isDark = false;

	try {
		if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				isDark = true;
			}
		}
	} catch (err) {
		console.log("Browser does NOT support `prefers-color-scheme` MediaQuery.");
		isDark = 0;
	}

	return (isDark);
}

/**
 * @function evalString
 * @desc Converts `val` from string based on type: string | number | boolean
 * @param {string} val - string to evaluate
 * @return {object} val - returns a boolean if true|false; number of integer; otherwise original string;
 */
function evalString(val) {
	if (val.length > 0) {
		// is Number?
		if (!isNaN(val)) {
			val = parseFloat(val);
		} else {
			// is Bool?
			switch (val.toLowerCase()) {
				case 'true':
					val = true;
					break;
				case 'false':
					val = false;
					break;
			}
		}
	}

	return (val);
}

/**
 * @function setCookie
 * @desc stores a cookie on the root(/) of website. If error, logs to console.
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#directives
 * @param {string} cKey - name of the key
 * @param {string} cVal - value to set on key
 * @param {number} [cDays=30] - days to keep the cookie. Default: 30
 * @example `setCookie("theme", 'night');` Sets a cookie theme=night for 30 days expiry.
 * @return {void} 
 */
function setCookie(cKey, cVal, cDays = 30) {
	let date = new Date();
	date.setTime(date.getTime() + (cDays * 24 * 60 * 60 * 1000));
	let expires = date.toUTCString();
	let domain = (document.domain == "localhost" ? "localhost" : "blog.richiebartlett.com"); // test or main servers?

	cKey = cKey.trim();
	cVal = cVal.trim();

	console.log("setCookie( Key: '" + cKey + "', Val: '" + cVal + "', Days: '" + cDays + "');");
	if (isStorageEnabled()) {
		cVal = escape(cVal);
		document.cookie = cKey + '=' + cVal + ';' + 'Expires=' + expires + ';Path=/;Secure;SameSite=lax;Domain=' + domain;
	} else {
		throw new Error("Cookies are disabled.");
	}
}

/**
 * @function getCookie
 * @desc Retrieves all stored cookies for site.
 * @param {}
 * @return {object} myCookie
 * @example `let myTheme = getCookie().theme;` If "theme" is a stored cookie, the object value will be returned.
 */
function getCookie() {
	let myCookie = document.cookie.split(';');

	myCookie = myCookie.map(cookie => cookie.split('='))
	.reduce((accumulator, [key, value]) => ({
		...accumulator,
			[key.trim()]: evalString(decodeURIComponent(value))
		}), {});

	return myCookie;
}

/**
 * @function setTheme
 * @desc This tool sets the whole theme of the Web site. `color` is limited to `colorOption`.
 *       Check if the Theme color passed is available in valid Theme colorOptions.
 *       Save Theme color in cookie, to recall pref when visiting again.
 *       If Theme color is "auto" then use Auto mode, which set "day" mode from
 *       getSunTime().rise ~ getSunTime().set, otherwise "night" mode.
 *       Otherwise the theme color will be the color that passed to the function.
 * @param {string} color - The desired color theme
 * @return {void}
 */
function setTheme(color) {
	let hour;
	const colorOption = ['day', 'night', 'auto'];

	if (colorOption.includes(color)) {

		try {
			setCookie("theme", color);
		} catch (e) {
			console.log("Couldn't save user pref: theme = " + color);
		}

		if (color == 'auto') {
			hour = (new Date()).getHours();
			color = isDayTime() ? 'day' : 'night';
		}

		document.querySelector('html').dataset.theme = color;
		// changeHeroImageTheme(color);
	}
}

/**
 * @function themeListenerSetup
 * @desc Sets an EventListener on all available theme options in Style switcher Tray.
 * @param {}
 * @return {void}
 */
function themeListenerSetup(themes) {
	for (let theme in themes) {
		if (theme !== 'length') {
			themes[theme].onchange = function (e) {
				setTheme(e.target.value);
				// if (!isMobileScreen()) themeTrayToggle(); // don't toggle theme tray on mobile device
			}
		}
	}
}

function initSiteTheme(themes) {
	/**
	 * Theme init.
	 *       Theme selection:
	 *         1) Check cookie
	 *         2) If no cookie, run isUserColorPrefDark()
	 *         3) If no pref, keep at "auto" theme
	 * 
	 * Do we have a cookie? (That overrides userPref?)
	 */
	let themeStyle = getCookie().theme;
	if (typeof themeStyle == "undefined") {
		//no cookie; now read UserPref
		switch (isUserColorPrefDark()) {
			case 0: // no support
				themeStyle = 'auto';
				break;
			case true: // dark mode preferred
				themeStyle = 'night';
				console.log("Honoring user's dark mode preference.");
				break;
			case false: // day mode preferred
				themeStyle = 'day';
				console.log("Honoring user's day mode preference.");
				break;
		}
	} else {
		console.log("Found previous 'theme' cookie. Overriding defaults & extending cookie life.");
	}

	for (let theme in themes) {
		if (theme !== 'length') {
			if (themes[theme].value == themeStyle) {
				themes[theme].setAttribute('checked', 'true');
				break;
			}
		}
	}

	setTheme(themeStyle);
}

/**
 * @function onTopNavbar
 * @desc Toggles "inTop" class to "NavBar" section in all pages in the Website.
 *       `inTop` class changes the navBar to display a shadow when user scrolls down.
 *       `tipnav` class hides the background on navBar when at top of `tips.html` page.
 * @param {}
 * @return {void}
 */
function onTopNavbar() {
	let navBar = document.getElementsByClassName('header')[0];
  navBar.classList.toggle('inTop', window.scrollY == 0);
}

function toggleAccordionItem() {
	const accordionItems = document.getElementsByClassName('accordionItem');

	for (let item = 0; item < accordionItems.length; item++) {
		accordionItems[item].addEventListener('click', function () {
			this.classList.toggle('active')
		})
	}
}

function webAppOnScroll(e) {
	onTopNavbar();
	// toTopButton();
}

function webAppOnload(e) {
	var themes = document.getElementsByClassName('themeSwitcher');

	if (window.scrollY == 0) {
		document.getElementsByClassName('header')[0].classList.add('inTop');
	}

	themeListenerSetup(themes);
	initSiteTheme(themes);
}

window.onload = webAppOnload;
window.onscroll = webAppOnScroll;

toggleAccordionItem();