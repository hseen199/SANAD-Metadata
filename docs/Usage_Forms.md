# Using Bond Forms

The forms for sender and receiver are static HTML files located under `public/forms/`.

## Accessing Forms

- Sender (AR): `/forms/bond_form_sender.html`
- Sender (EN): `/forms/bond_form_sender_en.html`
- Receiver (AR): `/forms/bond_form_receiver.html`
- Receiver (EN): `/forms/bond_form_receiver_en.html`

## Query Parameters

Populate the form fields via URL query string:
```
?issuer=IssuerName&recipient=RecipientName&amount=1000&maturityDate=2025-12-31
```