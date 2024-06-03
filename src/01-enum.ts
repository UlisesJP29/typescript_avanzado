export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
   CUSTOMER = "customer",
}

export type User = {
  userName: string;
  roles: ROLES;
}


const nicoUser: User = {
   userName: 'nicobytes',
   roles: ROLES.SELLER
}
