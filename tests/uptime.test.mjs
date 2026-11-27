import test from 'node:test'
import assert from 'node:assert/strict'
import { UptimeLedger } from '../src/ledger.mjs'

test('UptimeLedger records checks and tracks incidents', () => {
  const ledger = new UptimeLedger()
  ledger.recordCheck('api-gateway', true, 42)
  ledger.recordCheck('auth-service', false, 510)
  assert.deepEqual(ledger.getSummary(), { total: 2, up: 1, down: 1 })
  assert.equal(ledger.listIncidents().length, 1)
})
