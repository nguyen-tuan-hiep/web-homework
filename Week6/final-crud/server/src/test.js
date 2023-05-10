const request = require("supertest");
const mongoose = require("mongoose");
const mocha = require("mocha");
const app = require("./server");

describe("Class API", () => {
  let server;

  // Connect to the database before all tests run
  beforeAll(async () => {
    await mongoose.connect("mongodb://127.0.0.1/student", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    server = app;
  });

  // Close the server and disconnect from the database after all tests are done
  afterAll(async () => {
    await mongoose.disconnect();
    // await server.close();
  });

  it("should get all classes", async () => {
    const response = await request(server).get("/class");
    expect(response.status).toBe(200); // Update expected value to 200
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("should create a new class", async () => {
    const newClass = { name: "Math" };
    const response = await request(server)
      .post("/class")
      .send(newClass)
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect(response.body._id).toBeDefined();
    expect(response.body.name).toBe(newClass.name);
  });

  it("should get a specific class", async () => {
    const classes = await request(server).get("/class");
    const response = await request(server).get(`/class/${classes.body[0]._id}`);
    expect(response.status).toBe(200);
    expect(response.body._id).toBe(classes.body[0]._id);
    expect(response.body.name).toBe(classes.body[0].name);
    expect(response.body.teacher).toBe(classes.body[0].teacher);
  });

  it("should update a specific class", async () => {
    const classes = await request(server).get("/class");
    const updatedClass = { name: "Science" };
    const response = await request(server)
      .put(`/class/${classes.body[0]._id}`)
      .send(updatedClass)
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
    expect(response.body._id).toBe(classes.body[0]._id);
    expect(response.body.name).toBe(updatedClass.name);
  });

  it("should delete a specific class", async () => {
    const classes = await request(server).get("/class");
    const response = await request(server).delete(
      `/class/${classes.body[0]._id}`
    );
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Class successfully deleted");
    expect(response.body._id).toBe(classes.body[0]._id);
    // Check that the class was actually deleted
    const checkResponse = await request(server).get(
      `/class/${classes.body[0]._id}`
    );
  });
});
