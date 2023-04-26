describe("users requests", () => {
    it("gets a list of users", () => {
      cy.request("GET", "https://jsonplaceholder.typicode.com/posts").then((response) => {
        console.log(response);
        expect(response.status).to.eq(200);
        expect(response.body).length.to.be.greaterThan(1);
        expect(response.body[1].title).to.eq("qui est esse");
    })
    })
    it("gets a user wih param", () => {
        cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1?userId=1").then((response) => {
          console.log(response);
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('title', 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        })
        })
    it("post a new user", () => {
        body = {
            title: "foo",
            body: "bar",
            userId: 102
        };
        cy.request("POST", "https://jsonplaceholder.typicode.com/posts", body).then((response) => {
          console.log(response);
          expect(response.body).to.have.property('userId', 102);
      })
      })
})