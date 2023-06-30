import moment from 'moment';
export function formatTime( timestamp ){
    return  moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
}
export function formatTime1( timestamp ){
    return moment(timestamp).format('MMMM Do YYYY');
}
const ABC = ['ádasd'];
export default ABC;
// export function age(x)