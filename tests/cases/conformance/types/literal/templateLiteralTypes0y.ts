// @strict: true
// @declaration: true

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type D100000 = `${Digits}_${Digits}_${Digits}_${Digits}_${Digits}`;

const x: D100000 = "1_2_3";
const y: D100000 = "1_2_3_4_55";

type N = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type PartExt = '-sunny' | '-rainy' | '-snowy' | '-cloudy' | '-foggy' | '-dark' | '' // ...
type PartVar = '-var1' | '-var2' | '-var3' | '-var4' | '-var5' | '-var6' | '-var7' | ''
type PartSpecial = '-special' | ''
type TypeItem = `item-${N}${N}${N}${PartExt}${PartVar}${PartSpecial}`