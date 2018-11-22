export interface Provider {
    analyze(code: string): Metrics
}