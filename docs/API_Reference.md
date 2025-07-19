# API Reference

This document describes the smart contract API.

## createBond

Creates a new bond on-chain.

### Parameters

- `issuer`: string, issuer wallet address.
- `recipient`: string, recipient wallet address.
- `amount`: number, bond amount.
- `maturityDate`: string, ISO-8601 date.

### Example (TypeScript)

```ts
await program.rpc.createBond(
  issuer,
  recipient,
  new BN(amount),
  maturityDate,
  { accounts: { bondAccount, systemProgram: SystemProgram.programId } }
);
```
