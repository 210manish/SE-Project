// Test if the 'Set-Cookie' header is present and contains a specific cookie
pm.test("Check for 'session_id' cookie in 'Set-Cookie' header", function () {
    pm.response.to.have.header('Set-Cookie');
    pm.expect(pm.response.headers.get('Set-Cookie')).to.include('PHPSESSID');
});


pm.test("session_id cookie is set to a valid value", function() {
    var session_id = pm.cookies.get('PHPSESSID');
    pm.expect(session_id).to.exist.and.to.be.a('string').and.to.have.lengthOf(32);
});