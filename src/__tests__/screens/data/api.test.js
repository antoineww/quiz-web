import api, { getQuestions } from "../../../data/api";

describe("function 'api'; axios ", () => {
  it("should be function", () => {
    expect(typeof api).toBe("function");
  });
});

describe("function 'getQuestions' ", () => {
  it("should be fuction", () => {
    expect(typeof getQuestions).toBe("function");
  });

  it("should return Promise from 'get' method; mocked resovle", async () => {
    const response = await getQuestions();

    const { data } = response;
    const { id, status, results } = data;

    expect(id).toEqual("MY MOCK AXIOS GET DATA!!!");
    expect(status).toEqual(200);
    expect(Array.isArray(results)).toBe(true);
  });
});
