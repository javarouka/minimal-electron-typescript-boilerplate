interface BackendInterface {
    readDir(): string[];
}

type Nullable<T> = T | null;

declare interface Window {
    backend: BackendInterface;
}
