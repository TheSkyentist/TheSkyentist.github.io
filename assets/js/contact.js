(function () {
	'use strict';

	var EMAIL = 'hviding@mpia.de';
	var toast, toastTimer;

	function showToast(message) {
		if (!toast) {
			toast = document.createElement('div');
			toast.id = 'email-toast';
			toast.className = 'toast';
			toast.setAttribute('role', 'status');
			toast.setAttribute('aria-live', 'polite');
			document.body.appendChild(toast);
		}

		toast.textContent = message;
		toast.classList.add('visible');

		clearTimeout(toastTimer);
		toastTimer = setTimeout(function () {
			toast.classList.remove('visible');
		}, 2000);
	}

	function fallbackCopy(text) {
		var input = document.createElement('textarea');
		input.value = text;
		input.setAttribute('readonly', '');
		input.style.position = 'absolute';
		input.style.left = '-9999px';
		document.body.appendChild(input);
		input.select();

		try {
			document.execCommand('copy');
		} catch (err) {
			/* ignore */
		}

		document.body.removeChild(input);
	}

	function copyEmail() {
		if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(EMAIL).then(
				function () {
					showToast('Email copied to clipboard!');
				},
				function () {
					fallbackCopy(EMAIL);
					showToast('Email copied to clipboard!');
				}
			);
		} else {
			fallbackCopy(EMAIL);
			showToast('Email copied to clipboard!');
		}
	}

	document.addEventListener('DOMContentLoaded', function () {
		var triggers = document.querySelectorAll('.js-copy-email');
		for (var i = 0; i < triggers.length; i++) {
			triggers[i].addEventListener('click', copyEmail);
		}
	});
})();
