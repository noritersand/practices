{
  let gender: string | undefined | null;

  gender = '1';
  gender = undefined;
  gender = null;

  const n = 1;
  gender = n.toString();

  let o: any;

  if (typeof o !== 'undefined') {
    console.log('## ', o.a); // XXX test code
  }


}
