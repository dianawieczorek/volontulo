import { Organization } from './organization/organization.model';

export interface User {
  email: string,
  firstName: string,
  isAdministrator: boolean,
  lastName: string,
  organizations: Array<Organization>,
  phoneNo: string;
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  phoneNo: string,
}
