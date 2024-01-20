import moment from 'moment';

export const dateLikeUbuntu = () => {
  return moment().format('D MMM hh:mm');
};
