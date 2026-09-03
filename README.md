# Molise Is — Landing page

Landing page statica di `moliseis.it`, costruita con Astro e CSS senza framework UI o JavaScript client-side.

**Motto:** Molise Is — L'inatteso che ti aspetta

## Stack

- Astro `^7.3.1`
- Node.js `22.12.0+`
- CSS nativo
- Output statico

## Brand

- Forest: `#087A55`
- Adriatic: `#176B87`
- Terra Cotta: `#B84E23`
- Ivory: `#F7F4EC`
- Stone: `#6B726D`
- Ink: `#17211C`
- Heading: Fraunces
- Body/UI: Lexend

## Avvio locale

Con `nvm`:

```bash
nvm use
npm install
npm run dev
```

In alternativa usa direttamente Node.js `22.12.0` o superiore.

## Build

```bash
npm run build
```

Il risultato statico viene generato in `dist/` e viene pubblicato tramite Cloudflare Workers Static Assets.

## Route

- `/` — landing page
- `/privacy-policy` — struttura predisposta per la privacy policy definitiva
- `/termini-e-condizioni` — struttura predisposta per i termini e condizioni definitivi

Le due pagine legali contengono soltanto placeholder editoriali e **non sono testi legali pronti alla pubblicazione**.

## Da completare prima della pubblicazione

- Testi legali definitivi per Privacy policy e Termini e condizioni.
- Verifica/aggiornamento dell'indirizzo email di contatto.
- Eventuale logo ufficiale al posto del wordmark/mark CSS del prototipo.
- Immagine Open Graph quando sarà disponibile un asset social definitivo.


## v0.2.1

- Corrette le destinazioni della navigazione nell'header.
- `L'app` porta ora alla sezione funzionalità.
- `Scopri` porta alla sezione editoriale.
- `Scarica l'app` porta alla CTA finale.
- Rimossi gli anchor intermedi nella hero che causavano scroll inattesi.
- I pulsanti store restano non interattivi finché non vengono impostati gli URL reali.

## v0.2.2

- Collegato il pulsante App Store alla pagina ufficiale di Molise Is.
- Collegato il pulsante Google Play alla pagina ufficiale di Molise Is.
- Aggiornato il testo della CTA download e rimossi gli stati disabilitati dei pulsanti store.
