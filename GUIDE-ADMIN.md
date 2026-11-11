# Mettre en route l'espace Admin

Une seule fois, environ 15 minutes.

## 1. Mettre le site sur GitHub
1. Créez un compte gratuit sur github.com.
2. Cliquez **New repository**, nommez-le `la-goutte-dencre`, puis **Create**.
3. Cliquez **uploading an existing file** et glissez tout le contenu du dossier du site (index.html, tattoo.html, visuals.html, cms.js, admin/, content/, uploads/, assets/, image-slot.js, .image-slots.state.json).
4. Cliquez **Commit changes**.

## 2. Relier Netlify à GitHub
1. Sur app.netlify.com, cliquez **Add new site → Import an existing project → GitHub**.
2. Choisissez le dépôt `la-goutte-dencre`, puis **Deploy** (aucun réglage à changer).

## 3. Activer la connexion par mot de passe
1. Dans Netlify, ouvrez votre site, puis **Site configuration → Identity → Enable Identity**.
2. Dans **Registration**, choisissez **Invite only** (personne d'autre ne peut s'inscrire).
3. Dans **Services → Git Gateway**, cliquez **Enable Git Gateway**.
4. Dans l'onglet **Identity**, cliquez **Invite users** et entrez votre e-mail (et celui de votre associé·e).
5. Ouvrez l'e-mail reçu, cliquez le lien, puis choisissez votre mot de passe.

## 4. Recevoir les demandes sur Gmail
Les boutons « Envoyer ma demande » (Tattoo et Visuals) envoient les formulaires à Netlify.
1. Dans Netlify : **Site configuration → Forms → Enable form detection**, puis redéployez une fois (**Deploys → Trigger deploy**).
2. **Forms → Form notifications → Add notification → Email notification**.
3. Événement : *New form submission*, e-mail : **lagouttedencre04@gmail.com**, formulaire : *Any form*. Enregistrez.
4. Faites un test depuis le site : la demande arrive dans Gmail (pensez à vérifier les spams la première fois).

## 5. Utiliser l'admin
- Cliquez **Admin** en bas d'une page du site, ou allez sur `votresite.netlify.app/admin/`.
- Connectez-vous avec votre e-mail et votre mot de passe.
- Modifiez, puis cliquez **Publier**. Le site est à jour en 1 à 2 minutes.

## Bon à savoir
- Les textes peuvent contenir `<em>…</em>` (italique) ou `<br>` (retour à la ligne) : gardez-les tels quels.
- Les vidéos doivent faire moins de 50 Mo si possible (mp4).
- Un champ laissé vide garde le contenu actuel du site.
