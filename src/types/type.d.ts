interface BackendInterface {
    readDir(): string[];
}

declare interface Window {
    backend: BackendInterface;
}
