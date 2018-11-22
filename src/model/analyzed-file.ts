export class AnalyzedFile {
    
    private metrics: Metrics;

    constructor(private path: string) {
        this.metrics = {};
    }

    public addMetrics(metrics: Metrics) {
        Object.assign(this.metrics, metrics);
    }

    public getPath(): string {
        return this.path;
    }

    public getMetrics(): Metrics {
        return this.metrics;
    }

}