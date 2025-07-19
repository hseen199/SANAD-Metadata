# Metadata Schema

This document defines the JSON schema for bond metadata (metadata.json).

## Schema Fields

- **issuer**: string, the wallet address of the issuer.
- **recipient**: string, the wallet address of the recipient.
- **amount**: number, the bond amount in lamports.
- **maturityDate**: string, ISO-8601 date of bond maturity.
- **description**: string, bond agreement details.
- **createdAt**: string, ISO-8601 timestamp of creation.
