const user = {
  address: {
    street: 'xx街道',
    getNum() {
      return '80号';
    },
  },
};
const street = user && user.address && user.address.street;
const num =
  user && user.address && user.address.getNum && user.address.getNum();
console.log(street, num);

{
  const street = user?.address?.street;
  console.log(street);
  const num = user?.address?.getNum?.();
  console.log(num);
}
