//bu dosya icine context leri import ederek buradan kullanima acacagim, cagirdigim yerlerde providerlar icin artik export etigim objelerin isimlerini ve obje cagirdigim icin default olmadigi icin parantez ciinde cagirmam gerekir.
/* import SiteContext, { useSite } from "./SiteContext2";
import AuthContext, { useAuth } from "./AuthContext2";

export { SiteContext, useSite, AuthContext, useAuth }; */
//yada
export {default as SiteContext,useSite } from "./SiteContext2";
export { default as AuthContext, useAuth } from "./AuthContext2";