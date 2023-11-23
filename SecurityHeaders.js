// Test for the presence of Content Security Policy (CSP) header
pm.test("Check for 'Content-Security-Policy' header", function () {
    pm.response.to.have.header('Content-Security-Policy');
});

// Test for the presence of Strict-Transport-Security (HSTS) header
pm.test("Check for 'Strict-Transport-Security' header", function () {
    pm.response.to.have.header('Strict-Transport-Security');
});

// Test for the presence of X-Content-Type-Options header
pm.test("Check for 'X-Content-Type-Options' header", function () {
    pm.response.to.have.header('X-Content-Type-Options');
});
