import { User, ROLES } from './01-enum';
const currentUser: User = {
  userName: 'nicobites',
  roles: ROLES.CUSTOMER
}


export const checkAdminRole = () => {
  if(currentUser.roles === ROLES.ADMIN){
    return true;
  }
  return false;
}

const rta = checkAdminRole();
console.log(rta);

export const checkRole = (role1:string, role2:string) => {
  if(currentUser.roles === role1){
    return true;
  }else if(currentUser.roles === role2){
    return true;
  }
  return false;
}


const rta2 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log('chekRole',rta2)


export const checkRoleV2 = (roles: string[]) => {
  if(roles.includes(currentUser.roles)){
    return true;
  }
  return false;
}


const rta3 = checkRoleV2([ROLES.ADMIN, ROLES.SELLER]);
console.log('chekRole',rta3)

export const checkRoleV3 = (...roles: string[]) => {
  if(roles.includes(currentUser.roles)){
    return true;
  }
  return false;
}


const rta4 = checkRoleV3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log('chekRole',rta4)
