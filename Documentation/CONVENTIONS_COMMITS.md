
## Types de commits

| Type | Description |
|------|--------------|
| `feat:` | Nouvelle fonctionnalité |
| `fix:` | Correction de bug |
| `chore:` | Maintenance, config, setup, dépendances |
| `docs:` | Documentation ou README |
| `refactor:` | Réorganisation sans ajout de logique |
| `style:` | Formatage, indentation, ESLint, etc. |
| `test:` | Ajout ou modification de tests |

---

## Numérotation

état.sprint.module

Exemples :
| Commit | Signification |
|--------|----------------|
| `chore: 0.0.1` | Setup Java & Maven |
| `feat: 0.2` | Fonctionnalité principale du Sprint 2 |
| `fix: 0.3.2` | Correction secondaire du Sprint 3 |

### 1️ Premier nombre : État
- `0` → Développement interne (non publié / setup)
- `1` → Première version stable / production
- `2+` → Refactor ou refonte majeure (breaking changes)

### 2️ Deuxième nombre : Sprint ou cycle majeur
- Correspond à une **phase de développement complète**
- Exemples :
  - `0.0` → Phase de setup (outillage, config)
  - `0.1` → Sprint 1
  - `0.2` → Sprint 2
  - etc.

### 3️ Troisième nombre (optionnel) : Module / sous-étape
- Détaille une **sous-tâche ou sous-module** dans le sprint
- Exemple :
  - `0.0.1` → Installation Java & Maven
  - `0.0.2` → Setup Node & Vue
  - `0.0.3` → Setup GCP minimal
  - `0.0.4` → Documentation setup

---

## Bonnes pratiques

- 1 commit = 1 tâche identifiable
- Toujours un titre **court et descriptif**  
- Pas de “update” / “fix bug” flous  
- Utiliser le présent (“ajoute”, “corrige”, “crée”)  
- Faire un commit de doc (`docs:`) à chaque ajout de documentation  

---
