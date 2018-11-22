export interface Provider {
    analyze(code: string, path: string): Metrics
}