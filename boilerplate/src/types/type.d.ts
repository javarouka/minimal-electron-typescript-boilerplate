type Nullable<T> = T | null;

interface AppDomain {}
interface API {}

declare interface Window {
    domain: AppDomain;
    api: API;
}
