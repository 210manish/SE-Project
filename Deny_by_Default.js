// Test for a 200 OK status code
pm.test("Status code is 200 OK", function () {
    pm.response.to.have.status(200);
});
