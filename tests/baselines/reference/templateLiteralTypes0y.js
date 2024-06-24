//// [tests/cases/conformance/types/literal/templateLiteralTypes0y.ts] ////

//// [templateLiteralTypes0y.ts]
type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type D100000 = `${Digits}_${Digits}_${Digits}_${Digits}_${Digits}`;

const x: D100000 = "1_2_3";
const y: D100000 = "1_2_3_4_55";

type N = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type PartExt = '-sunny' | '-rainy' | '-snowy' | '-cloudy' | '-foggy' | '-dark' | '' // ...
type PartVar = '-var1' | '-var2' | '-var3' | '-var4' | '-var5' | '-var6' | '-var7' | ''
type PartSpecial = '-special' | ''
type TypeItem = `item-${N}${N}${N}${PartExt}${PartVar}${PartSpecial}`

//// [templateLiteralTypes0y.js]
"use strict";
var x = "1_2_3";
var y = "1_2_3_4_55";


//// [templateLiteralTypes0y.d.ts]
type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type D100000 = `${Digits}_${Digits}_${Digits}_${Digits}_${Digits}`;
declare const x: D100000;
declare const y: D100000;
type N = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type PartExt = '-sunny' | '-rainy' | '-snowy' | '-cloudy' | '-foggy' | '-dark' | '';
type PartVar = '-var1' | '-var2' | '-var3' | '-var4' | '-var5' | '-var6' | '-var7' | '';
type PartSpecial = '-special' | '';
type TypeItem = `item-${N}${N}${N}${PartExt}${PartVar}${PartSpecial}`;
