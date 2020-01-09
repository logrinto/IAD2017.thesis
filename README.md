[![Build Status](https://travis-ci.org/logrinto/IAD2017.thesis.svg?branch=master)](https://travis-ci.org/logrinto/IAD2017.thesis)

# IAD2017 Thesis

## Installation tl;dr

```sh
yarn
yarn develop
# or
yarn build
```

---

<details>
<summary>Aufgabestellung</summary>

* [Aufgabestellung](https://signalwerk.github.io/IAD.LAB.DOC/thesis/)
* Entwicklung in eigenem Branch & fortwährend push (= Backup)
* push to `master` von Zeit zu Zeit (Empfehlung)
* Abgabe digital auf [Repository](https://github.com/logrinto/IAD2017.thesis)

</details>

<details>
<summary>Installation</summary>

* [Node installieren (Version **10** – 12)](https://nodejs.org/en/)
  * Kennt ihr [nvm](https://github.com/nvm-sh/nvm#installation-and-update)?
* [yarn installieren](https://yarnpkg.com/lang/en/docs/install/#mac-stable)
  * Kennt ihr [brew](https://brew.sh/)? `brew install yarn`
  * sonst: `curl -o- -L https://yarnpkg.com/install.sh | bash`

</details>

<details>
<summary>Vorbereiten</summary>

* [Repository klonen](https://github.com/logrinto/IAD2017.thesis)
* Bitte Submodule initialisieren (Terminal `git submodule update --init`)
* Branch erstellen (`{{vorname}}`)
* Beispiel von `sites/example/src/pages/-example/` kopieren
  * Zielpfad: `sites/example/src/pages/IAD2017--{{vorname}}/`

</details>

<details>
<summary>1st Steps</summary>

* edit `.../IAD2017--{{vorname}}/index.md`
* `path: "/posts/2020/example/"` ändern in
  * `path: "/posts/2020/{{vorname}}/"`
* später könnt ihr `{{vorname}}` durch einen sinnvollen [slug](https://prettylinks.com/2018/03/url-slugs/) ersetzen

</details>

<details>
<summary>Starten</summary>

* im Verzeichnis: `yarn` ausführen (für installation) nicht `npm install`!!
* im Verzeichnis: `npm run start` ausführen
* öffne [http://localhost:8000/](http://localhost:8000/)
* öffne [http://localhost:8000/posts/2020/{{vorname}}/](http://localhost:8000/posts/2020/{{vorname}}/)

</details>

<details>
<summary>Probleme</summary>

* URL wurde angepasst aber wird nicht angezeigt → erneut `npm run start`
* Bilder aktualisieren nicht → `/sites/example/.cache` löschen & `npm run start`

</details>
