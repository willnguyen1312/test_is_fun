/* eslint-disable */
/*
  eslint fp/no-unused-expression: 0,
  fp/no-nil: 0,
  better/explicit-return: 0
*/
// import { data } from '../data';
// Happy input
const data = [
  {
    role: "admin",
    email: "admin1",
  },
  {
    role: "admin",
    email: "admin2",
  },
  {
    role: "normal",
    email: "normal1",
  },
  {
    role: "normal",
    email: "normal2",
  },
];
import { getAdminEmails, getEmail, filterAdmin } from "../sample";

// @ts-ignore
// expect.addSnapshotSerializer({
//   test: val => val.email && val.role,
//   print: val => `"Role: ${val.role} - Email: ${val.email}"`,
// });

describe("Sample", () => {
  it("Should return email of admin", () => {
    expect(getAdminEmails(data)).toMatchSnapshot();
  });

  it("Should return email", () => {
    expect(getEmail(data)).toMatchSnapshot();
  });

  it("Should filter admin", () => {
    expect(filterAdmin(data)).toMatchSnapshot();
  });
});
