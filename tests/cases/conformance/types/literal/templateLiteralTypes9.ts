// @strict: true
// @declaration: true

type N = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

type LazyTemplateLiteralType1 = `${N}_${N}_${N}_${N}_${N}${N}_${N}`;

const x: LazyTemplateLiteralType1 = "1_2_3";
const y: LazyTemplateLiteralType1 = "1_2_3_4_55_6";

type ExtractSecondDigit<T extends LazyTemplateLiteralType1> = T extends `${N}_${infer Result}_${N}_${N}_${N}${N}_${N}` ? Result : never;
type ExtractedSecondDigit = ExtractSecondDigit<"1_2_3_4_55_6"> // "2"
"3" satisfies ExtractedSecondDigit // error
"2" satisfies ExtractedSecondDigit // correct

type PartExt = '-sunny' | '-rainy' | '-snowy' | '-cloudy' | '-foggy' | '-dark' // ...
type PartVar = '-var1' | '-var2' | '-var3' | '-var4' | '-var5' | '-var6' | '-var7' | '-var8' | ''
type PartSpecial = '-special' | ''
type TypeItem = `item-${N}${N}${N}${PartExt}${PartVar}${PartSpecial}`