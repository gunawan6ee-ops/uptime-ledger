export class UptimeLedger {
  constructor() { this.checks = [] }
  recordCheck(service, ok, latencyMs = 0) {
    const entry = { service, ok: Boolean(ok), latencyMs, ts: new Date().toISOString() }
    this.checks.push(entry)
    return entry
  }
  listIncidents() { return this.checks.filter((c) => !c.ok) }
  getSummary() {
    const total = this.checks.length
    const down = this.listIncidents().length
    return { total, up: total - down, down }
  }
}
