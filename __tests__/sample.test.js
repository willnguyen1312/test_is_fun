/*
  eslint fp/no-unused-expression: 0,
  fp/no-nil: 0,
  better/explicit-return: 0
*/
import { data } from '../data';
import { getAdminEmails, getEmail, filterAdmin } from '../sample';

// @ts-ignore
// expect.addSnapshotSerializer({
//   test: val => val.email && val.role,
//   print: val => `"Role: ${val.role} - Email: ${val.email}"`,
// });

describe('', () => {
  it('Should return email of admin', () => {
    expect(getAdminEmails(data)).toMatchSnapshot();
  });

  it('Should return email', () => {
    expect(getEmail(data)).toMatchSnapshot();
  });

  it('Should filter admin', () => {
    expect(filterAdmin(data)).toMatchSnapshot();
  });
});
