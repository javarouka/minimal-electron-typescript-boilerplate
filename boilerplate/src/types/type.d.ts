type Nullable<T> = T | null;

interface AppDomain {}

declare interface Window {
    domain: AppDomain;
}
