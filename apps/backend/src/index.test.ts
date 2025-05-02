import { describe, it, expect } from "vitest";
import request from "supertest";
import app from "./index";

describe("GET /health", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.text).toBe("OK");
  });
});
describe("GET /courses", () => {
  it("should return list of  courses", async () => {
    const res = await request(app).get("/courses");
    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({});
  });
});
