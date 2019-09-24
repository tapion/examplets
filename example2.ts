import { interval } from 'rxjs';
import { map} from 'rxjs/operators';

const observable = interval(1000).pipe( map(x => Math.random()));

const s1 = observable.subscribe(x => console.log("[obs1]:" + x));
const s2 = observable.subscribe(x => console.log("[obs2]:" + x));

setTimeout(() => {
    s1.unsubscribe();
    s2.unsubscribe();
}, 4000);