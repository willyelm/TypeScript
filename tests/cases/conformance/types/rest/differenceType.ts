type A = 'a';
type B = 'b';
type C = 'c';
type AB = A | B;
let nothing: A - 'a';
let none: AB - 'a' | 'b';
let over: 'a' - 'a' | 'b';
let under: 'a' | 'b' - 'a';
let partial: 'a' | 'b' - 'b' | 'd';
let empty: AB - AB;
let nope: string - string;
let nope2: 'a' | 'b' - string;
let nope3: string - 'a' | 'b';

type Abcd = { a; b; c; d }

function f<T,U extends keyof Abcd> (t: T, u: U) {
    let tsubu: T - U;
    return tsubu;
}

const x = f<'a' | 'b', 'b' | 'd'>('a', 'b');
