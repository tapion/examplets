import { interval } from 'rxjs';
import { map} from 'rxjs/operators';

const observable = interval(1000);
const observable2 = observable.pipe( map(x => Math.random()));

const subscription = observable2.subscribe(x => console.log(x));

setTimeout(() => {subscription.unsubscribe()}, 4000);