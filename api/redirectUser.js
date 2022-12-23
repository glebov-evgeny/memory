export default async function redirectUser(context, cookies) {
  const currentUser = cookies.get('user').split(':')[2].split('"')[1];
  if (currentUser === process.env.ADMIN_SITE) {
    context.push('/admin');
  } else {
    context.push('/account');
  }
}
