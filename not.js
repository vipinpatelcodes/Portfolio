document.addEventListener('DOMContentLoaded', function () {
    var MY_EMAIL = 'vipinpatelvp23@gmail.com';

    var form = document.getElementById('contactForm');
    var status = document.getElementById('contactStatus');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var name = form.elements['name'].value.trim();
        var email = form.elements['email'].value.trim();
        var message = form.elements['message'].value.trim();

        var subject = 'Portfolio message from ' + name;
        var body = message + '\n\n---\nName: ' + name + '\nEmail: ' + email;

        var gmail = 'https://mail.google.com/mail/?view=cm&fs=1' +
            '&to=' + encodeURIComponent(MY_EMAIL) +
            '&su=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(body);

        var mailto = 'mailto:' + MY_EMAIL +
            '?subject=' + encodeURIComponent(subject) +
            '&body=' + encodeURIComponent(body);

        status.className = 'contact__status ok';
        status.innerHTML = 'Select way to send email: ' +
            '<a href="' + gmail + '" target="_blank" rel="noopener">Gmail</a>' +
            ' or <a href="' + mailto + '">your email app</a>.' +
            '<br>Or send directly to: ' + MY_EMAIL;
    });
});