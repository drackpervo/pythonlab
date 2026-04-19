import { Tutorial, Book, Quiz, Question, PlaygroundExample } from './types';

export const TUTORIALS: Tutorial[] = [
  {
    id: 'intro-python',
    title: 'Introduction à Python',
    level: 'Débutant',
    description: 'Les bases fondamentales : variables, typage dynamique, opérations arithmétiques et entrées utilisateur.',
    content: `
# Bienvenue dans l'univers Python !

Python est un langage de programmation **polyvalent**, **lisible** et **puissant**. Il est utilisé aussi bien pour le web que pour l'intelligence artificielle.

### 1. Variables et Typage Dynamique
En Python, vous n'avez pas besoin de déclarer le type d'une variable. Python le devine pour vous !

\`\`\`python
# Une chaîne de caractères (str)
nom = "Pythoniste"

# Un nombre entier (int)
score = 100

# Un nombre à virgule (float)
prix = 19.99

# Un booléen (bool)
est_pret = True
\`\`\`

### 2. Opérations de base
Vous pouvez manipuler les nombres très simplement :
*   \`+\`, \`-\`, \`*\`, \`/\` : Opérations classiques.
*   \`//\` : Division entière (ignore les virgules).
*   \`**\` : Puissance (ex: \`2**3\` vaut 8).
*   \`%\` : Modulo (le reste de la division).

### 3. Interaction avec l'utilisateur
La fonction \`input()\` permet de poser une question à l'utilisateur :
\`\`\`python
reponse = input("Comment t'appelles-tu ? ")
print(f"Heureux de te voir, {reponse} !")
\`\`\`

> **Conseil de progression :** Essayez toujours de donner des noms de variables explicites (ex: \`prix_total\` au lieu de \`pt\`) pour rendre votre code lisible par les autres !
`,
    codeExample: 'nom = "Pythoniste"\nprint(f"Bonjour {nom}!")'
  },
  {
    id: 'conditions',
    title: 'Conditions et Logique',
    level: 'Débutant',
    description: 'Maîtrisez la prise de décision avec if/else, les opérateurs de comparaison et la logique booléenne.',
    content: `
# La Logique Conditionnelle

Les programmes ne sont pas linéaires ; ils doivent prendre des décisions basées sur des données.

### 1. La structure If / Elif / Else
Le mot-clé \`elif\` est une contraction de "else if". Il permet de tester plusieurs conditions à la suite.

\`\`\`python
age = 18

if age < 13:
    print("Enfant")
elif age < 18:
    print("Adolescent")
else:
    print("Adulte")
\`\`\`

### 2. Opérateurs de Comparaison
*   \`==\` : Égalité (attention, ne pas confondre avec \`=\` qui est l'assignation).
*   \`!=\` : Différent de.
*   \`>\` , \`<\` , \`>=\` , \`<=\` : Supériorité et infériorité.

### 3. Logique Booléenne (and, or, not)
Vous pouvez combiner des conditions :
*   \`and\` : Vrai si **toutes** les conditions sont vraies.
*   \`or\` : Vrai si **au moins une** condition est vraie.
*   \`not\` : Inverse le résultat (Vrai devient Faux).

\`\`\`python
a = 10
b = 20
if a > 5 and b < 30:
    print("Les deux sont corrects !")
\`\`\`

> **Conseil de progression :** Utilisez des parenthèses dans les expressions complexes pour être certain de l'ordre d'évaluation !
`,
    codeExample: 'score = 85\nif score > 50:\n    print("Passé !")'
  },
  {
    id: 'loops',
    title: 'Boucles et Itérations',
    level: 'Débutant',
    description: 'Automatisez les tâches répétitives avec For, While, et apprenez à manipuler les fonctions range() et enumerate().',
    content: `
# Les Boucles : Automatisez tout !

En programmation, on ne répète jamais manuellement une action. On utilise des boucles.

### 1. La boucle For
Elle est utilisée pour itérer sur une **séquence** (liste, chaîne de caractères, ou plage de nombres).

\`\`\`python
# Utilisation de range(debut, fin, pas)
for i in range(1, 10, 2):
    print(i) # Affichera 1, 3, 5, 7, 9
\`\`\`

### 2. La boucle While
Elle continue tant qu'une condition est **vraie**. Attention à ne pas créer de boucle infinie !

\`\`\`python
energie = 3
while energie > 0:
    print("Je travaille...")
    energie -= 1
print("Repos obligatoire.")
\`\`\`

### 3. Contrôler les boucles
*   \`break\` : Arrête immédiatement la boucle.
*   \`continue\` : Saute l'itération actuelle et passe à la suivante.

\`\`\`python
for i in range(10):
    if i == 5:
        break # Stoppe tout à 5
    print(i)
\`\`\`

### 4. L'utilitaire enumerate()
Idéal pour obtenir à la fois l'index et la valeur d'une liste :
\`\`\`python
elements = ['Python', 'JS', 'Java']
for index, nom in enumerate(elements):
    print(f"N°{index} : {nom}")
\`\`\`

> **Conseil de progression :** Privilégiez la boucle \`for\` quand vous connaissez le nombre d'itérations à l'avance, et \`while\` quand vous attendez un événement particulier.
`,
    codeExample: 'for i in range(5):\n    print(f"Index: {i}")'
  },
  {
    id: 'functions-adv',
    title: 'Fonctions et Modules',
    level: 'Intermédiaire',
    description: 'Devenez plus flexible avec les arguments nommés (*args, **kwargs), les valeurs par défaut et les fonctions anonymes.',
    content: `
# Fonctions : Au-delà des bases

Les fonctions sont les briques de votre code. En Python, elles sont extrêmement flexibles.

### 1. Arguments par défaut
Vous pouvez définir une valeur par défaut si l'utilisateur ne fournit pas l'argument.

\`\`\`python
def saluer(nom, message="Bonjour"):
    print(f"{message}, {nom} !")

saluer("Alice") # Affiche : Bonjour, Alice !
saluer("Bob", "Salut") # Affiche : Salut, Bob !
\`\`\`

### 2. Arguments variables (*args et **kwargs)
*   \`*args\` : Permet de recevoir un nombre illimité d'arguments positionnels (sous forme de tuple).
*   \`**kwargs\` : Permet de recevoir un nombre illimité d'arguments nommés (sous forme de dictionnaire).

\`\`\`python
def additionner(*nombres):
    return sum(nombres)

print(additionner(1, 2, 3, 4, 5)) # Affiche 15
\`\`\`

### 3. Lambda : La fonction d'une ligne
Utile pour les opérations rapides, souvent utilisées avec \`map()\` ou \`filter()\`.

\`\`\`python
carre = lambda x: x**2
print(carre(5)) # Affiche 25
\`\`\`

### 4. Docstrings
Documentez toujours vos fonctions pour que les autres (et vous-même) comprennent leur rôle.

\`\`\`python
def factorielle(n):
    """Calcule la factorielle d'un nombre n de manière récursive."""
    if n == 0: return 1
    return n * factorielle(n-1)
\`\`\`

> **Conseil de progression :** Essayez de garder vos fonctions courtes (une fonction = une action précise).
`,
    codeExample: 'import random\nprint(random.randint(1, 100))'
  },
  {
    id: 'classes',
    title: 'Classes et POO',
    level: 'Avancé',
    description: 'Maîtrisez la Programmation Orientée Objet (POO) : classes, méthodes dunder, héritage et encapsulation.',
    content: `
# Programmation Orientée Objet (POO)

La POO permet d'organiser votre code en "objets" qui imitent le monde réel.

### 1. La Classe et l'Instance
Une **classe** est un plan (moule), une **instance** est l'objet créé à partir de ce plan.

\`\`\`python
class Robot:
    def __init__(self, nom):
        self.nom = nom # Attribut d'instance

    def dire_bonjour(self):
        print(f"Bip-boup, je suis {self.nom}")

r2d2 = Robot("R2-D2")
r2d2.dire_bonjour()
\`\`\`

### 2. L'Héritage
Vous pouvez créer une classe qui hérite des capacités d'une autre classe.

\`\`\`python
class Animal:
    def manger(self):
        print("Miam miam...")

class Chat(Animal): # Chat hérite de Animal
    def miauler(self):
        print("Miaou !")

mon_chat = Chat()
mon_chat.manger() # Méthode héritée
mon_chat.miauler() # Méthode propre
\`\`\`

### 3. Méthodes Dunder (Magiques)
Ce sont des méthodes qui commencent et finissent par \`__\`. Elles permettent de définir des comportements spéciaux.
*   \`__init__\` : Initialisation de l'objet.
*   \`__str__\` : Définit ce qui s'affiche avec \`print()\`.

### 4. Encapsulation (Privé vs Public)
En Python, on utilise un souligné \`_\` devant un attribut pour indiquer qu'il est "privé" par convention.

> **Conseil de progression :** La POO est puissante pour les gros projets. Pour les petits scripts, restez simple avec des fonctions !
`,
    codeExample: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\np = Point(10, 20)\nprint(f"X: {p.x}")'
  },
  {
    id: 'data-structures',
    title: 'Structures de Données',
    level: 'Intermédiaire',
    description: 'Explorez en profondeur les Listes, Tuples, Dictionnaires et Sets pour stocker vos données.',
    content: `
# Manipuler les Données

Stocker une information simple est facile, mais gérer des collections de données demande de choisir le bon outil.

### 1. Les Listes (\`list\`) : Ordonnées et Modifiables
C'est le couteau-suisse de Python.
\`\`\`python
nombres = [1, 2, 3]
nombres.append(4) # Ajout
print(nombres[0]) # Accès via index
\`\`\`

### 2. Les Tuples (\`tuple\`) : Immobiles
Comme une liste, mais **on ne peut pas les modifier** après création. Ils sont plus rapides.
\`\`\`python
coordonnees = (48.8566, 2.3522)
\`\`\`

### 3. Les Dictionnaires (\`dict\`) : Clé-Valeur
Le moyen le plus rapide de retrouver une donnée précise sans parcourir tout le tableau.
\`\`\`python
user = {"nom": "Alice", "age": 30}
print(user["nom"])
\`\`\`

### 4. Les Sets (\`set\`) : Unicité totale
Une collection d'éléments **uniques** et sans ordre précis.
\`\`\`python
doublons = {1, 2, 2, 3, 3}
print(doublons) # Affichera {1, 2, 3}
\`\`\`

> **Conseil de progression :** Utilisez un dictionnaire dès que vous devez associer deux informations ensemble !
`,
    codeExample: 'scores = {"Alice": 10, "Bob": 15}\nprint(scores["Bob"])'
  },
  {
    id: 'error-handling',
    title: 'Gestion des Erreurs',
    level: 'Intermédiaire',
    description: 'Apprenez à rendre votre code robuste face aux imprévus avec try/except.',
    content: `
# Gérer les exceptions

Un bon développeur ne prévoit pas seulement que tout marche, il prévoit aussi ce qui pourrait rater.

### 1. Le bloc Try / Except
Empêche votre programme de s'arrêter brutalement en cas d'erreur.

\`\`\`python
try:
    nombre = int(input("Donnez un chiffre : "))
    resultat = 10 / nombre
except ZeroDivisionError:
    print("Oups, on ne peut pas diviser par zéro !")
except ValueError:
    print("Veuillez entrer un nombre valide.")
else:
    print(f"Réussite ! Résultat : {resultat}")
finally:
    print("Nettoyage des ressources terminé.")
\`\`\`

### 2. Lever ses propres erreurs
Vous pouvez forcer une erreur si une condition de votre logique n'est pas remplie.

\`\`\`python
def verifier_age(age):
    if age < 0:
        raise ValueError("L'âge ne peut pas être négatif")
\`\`\`

> **Conseil de progression :** Ne faites pas de try/except trop large. Ciblez précisément le code qui peut échouer.
`,
    codeExample: 'try:\n    x = 1 / 0\nexcept:\n    print("Erreur !")'
  },
  {
    id: 'file-handling',
    title: 'Gestion des Fichiers',
    level: 'Avancé',
    description: 'Apprenez à lire, écrire et organiser des fichiers sur votre disque dur.',
    content: `
# Lire et Écrire des fichiers

Interagir avec le système de fichiers est crucial pour la plupart des applications.

### 1. Ouverture avec "with"
C'est la méthode de référence car elle ferme le fichier automatiquement, même en cas d'erreur.

\`\`\`python
# Écriture
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("Apprendre Python est passionnant !")

# Lecture
with open("note.txt", "r") as f:
    contenu = f.read()
    print(contenu)
\`\`\`

### 2. Modes d'ouverture
*   \`"r"\` : Lecture seule.
*   \`"w"\` : Écriture (écrase le contenu existant).
*   \`"a"\` : Ajout (ajoute à la fin du fichier).

### 3. Travailler avec JSON
Pour stocker des données complexes de manière structurée.

\`\`\`python
import json
data = {"score": 100, "pseudo": "DarkPython"}
json_str = json.dumps(data)
\`\`\`

> **Conseil de progression :** Utilisez toujours l'encodage 'utf-8' lors de l'ouverture de fichiers texte pour éviter les bugs d'accents !
`,
    codeExample: 'with open("test.txt", "w") as f:\n    f.write("Hello World")'
  },
  {
    id: 'best-practices',
    title: 'Bonnes Pratiques (PEP 8)',
    level: 'Débutant',
    description: 'Apprenez à écrire du code propre, lisible et conforme aux standards de la communauté Python.',
    content: `
# Écrire du code "Pythonique"

Python a été conçu pour être lu par des humains. Le document **PEP 8** définit les règles de style suivies par tous les développeurs pro.

### 1. Le Nommage
*   **Variables et Fonctions :** Utilisez le \`snake_case\` (ex: \`mon_score_final\`).
*   **Classes :** Utilisez le \`PascalCase\` (ex: \`UtilisateurAdmin\`).
*   **Constantes :** Utilisez le \`UPPER_SNAKE_CASE\` (ex: \`PI_VALEUR\`).

### 2. L'Espacement
*   Utilisez **4 espaces** par niveau d'indentation (évitez les tabulations).
*   Laissez deux lignes vides entre vos fonctions globales.
*   Laissez une ligne vide entre les méthodes d'une classe.

### 3. La Lisibilité (Zen de Python)
Tapez \`import this\` dans une console Python pour lire les principes du langage. Retenez surtout :
*   "La lisibilité compte."
*   "Le plat est préférable à l'imbriqué."
*   "Si l'implémentation est difficile à expliquer, c'est une mauvaise idée."

> **Conseil de progression :** Utilisez un outil comme \`Flake8\` ou \`Black\` pour formater votre code automatiquement !
`,
    codeExample: '# Mauvais :\ndef fonc(x,y):return x+y\n\n# Bon :\ndef additionner(nombre_a, nombre_b):\n    return nombre_a + nombre_b'
  },
  {
    id: 'venv-pip',
    title: 'Environnements et PIP',
    level: 'Intermédiaire',
    description: 'Gérez vos dépendances et isolez vos projets avec les environnements virtuels.',
    content: `
# Gérer ses projets comme un Pro

Dans le monde réel, chaque projet Python peut avoir besoin de versions différentes de bibliothèques.

### 1. PIP : L'installateur de paquets
Permet d'ajouter des bibliothèques externes depuis le dépôt officiel (PyPI).
\`\`\`bash
pip install requests  # Pour faire des appels web
pip install pandas    # Pour la science des données
\`\`\`

### 2. Environnements Vitual (venv)
Imaginez un bac à sable isolé pour votre projet.
\`\`\`bash
# Création
python -m venv mon_env

# Activation (Windows)
mon_env\\Scripts\\activate

# Activation (Mac/Linux)
source mon_env/bin/activate
\`\`\`

### 3. Fichier requirements.txt
Pour partager votre projet, listez toutes vos dépendances dans ce fichier.
\`\`\`bash
pip freeze > requirements.txt
# Puis pour un autre développeur :
pip install -r requirements.txt
\`\`\`

> **Conseil de progression :** Prenez l'habitude de créer un environnement virtuel dès que vous commencez un nouveau projet !
`,
    codeExample: 'pip install requests\nimport requests\nr = requests.get("https://google.com")'
  }
];

export const BOOKS: Book[] = [
  {
    id: 'python-crash-course',
    title: "Python Crash Course",
    author: "Eric Matthes",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81vm6uA+YTL._AC_UL600_SR600,600_.jpg",
    description: "Le guide le plus vendu pour apprendre Python rapidement. Idéal pour les débutants complets.",
    link: "https://nostarch.com/pythoncrashcourse2e"
  },
  {
    id: 'automate-boring',
    title: "Automate the Boring Stuff",
    author: "Al Sweigart",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71Y8R43E3FL._AC_UL600_SR600,600_.jpg",
    description: "Le guide pratique incontournable pour automatiser vos tâches quotidiennes avec Python.",
    link: "https://automatetheboringstuff.com/"
  },
  {
    id: 'fluent-python',
    title: "Fluent Python",
    author: "Luciano Ramalho",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81-p6YF-W1L._AC_UL600_SR600,600_.jpg",
    description: "L'ouvrage de référence pour maîtriser les mécanismes avancés et le code 'pythonique'.",
    link: "https://www.fluentpython.com/"
  },
  {
    id: 'think-python',
    title: "Think Python 2e",
    author: "Allen B. Downey",
    coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81zD+Z0jWpL._AC_UL600_SR600,600_.jpg",
    description: "Une excellente introduction à l'informatique à travers le langage Python.",
    link: "https://greenteapress.com/wp/think-python-2e/"
  },
  {
    id: 'un-zeste-de-python',
    title: "Un zeste de Python",
    author: "Zeste de Savoir",
    coverUrl: "https://picsum.photos/seed/python/600/800",
    description: "Un tutoriel complet et progressif pour apprendre Python 3, de l'installation aux concepts avancés.",
    link: "https://zestedesavoir.com/tutoriels/2514/un-zeste-de-python/"
  }
];

export const QUIZZES: Quiz[] = [
  // --- DÉBUTANT (1-20) ---
  {
    id: 'syntax-1',
    title: 'Syntaxe de base',
    level: 'Débutant',
    description: 'Structure, commentaires et indentation.',
    questions: [
      { id: 'q1', text: 'Comment commence un commentaire sur une ligne ?', options: ['//', '/*', '#', '--'], correctAnswer: 2, explanation: 'Le symbole # est utilisé pour les commentaires simples.' },
      { id: 'q2', text: 'Comment définit-on un bloc de code ?', options: ['Accolades {}', 'Parenthèses ()', 'Indentation', 'Mots-clés end'], correctAnswer: 2, explanation: 'Python utilise l\'espacement (indentation) pour définir la structure.' },
      { id: 'q3', text: 'Quelle est l\'extension standard d\'un fichier Python ?', options: ['.pt', '.py', '.python', '.exe'], correctAnswer: 1, explanation: 'Les scripts Python utilisent l\'extension .py.' },
      { id: 'q4', text: 'Python est un langage...', options: ['Compilé', 'Interprété', 'Bas niveau', 'Uniquement pour le web'], correctAnswer: 1, explanation: 'Python est principalement un langage interprété (via un bytecode).' },
      { id: 'q5', text: 'Comment écrire un commentaire multi-lignes ?', options: ['##', '//', '""" chaîne """', '/* */'], correctAnswer: 2, explanation: 'Bien que ce soit techniquement une chaîne de caractères, les triples guillemets sont utilisés pour les commentaires multi-lignes.' },
      { id: 'q6', text: 'L\'indentation en Python est-elle obligatoire ?', options: ['Non, optionnelle', 'Oui, pour la structure', 'Seulement pour les boucles', 'Seulement pour les fonctions'], correctAnswer: 1, explanation: 'L\'indentation remplace les accolades des autres langages.' },
      { id: 'q7', text: 'Lequel est un mot-clé réservé en Python ?', options: ['integer', 'string', 'pass', 'array'], correctAnswer: 2, explanation: 'pass est un mot-clé utilisé comme espace réservé.' }
    ]
  },
  {
    id: 'variables-types',
    title: 'Variables et Types de base',
    level: 'Débutant',
    description: 'Assignation, int, float, str.',
    questions: [
      { id: 'q1', text: 'Comment assigner 5 à x ?', options: ['x := 5', 'let x = 5', 'x = 5', 'set x 5'], correctAnswer: 2, explanation: '= est l\'opérateur d\'assignation.' },
      { id: 'q2', text: 'Quel type est "123" ?', options: ['int', 'str', 'float', 'list'], correctAnswer: 1, explanation: 'Tout texte entre guillemets est une chaîne de caractères (str).' },
      { id: 'q3', text: 'Quel est le résultat de type(3.14) ?', options: ['<class \'int\'>', '<class \'float\'>', '<class \'num\'>', '<class \'str\'>'], correctAnswer: 1, explanation: '3.14 est un nombre à virgule flottante.' },
      { id: 'q4', text: 'Lequel est un nom de variable valide ?', options: ['2variable', 'my-var', 'my_var', 'import'], correctAnswer: 2, explanation: 'Les variables peuvent contenir des underscores mais ne peuvent pas commencer par un chiffre ou être des mots-clés.' },
      { id: 'q5', text: 'Comment déclarer une variable constante par convention ?', options: ['const x = 10', 'VALEUR = 10', 'x = constant(10)', 'readonly x = 10'], correctAnswer: 1, explanation: 'En Python, on utilise des majuscules pour indiquer qu\'une variable ne devrait pas être modifiée.' },
      { id: 'q6', text: 'Quel type est True ?', options: ['str', 'int', 'bool', 'None'], correctAnswer: 2, explanation: 'True et False appartiennent au type bool (booléen).' },
      { id: 'q7', text: 'Peut-on changer le type d\'une variable après sa création ?', options: ['Oui (typage dynamique)', 'Non (typage statique)', 'Seulement via conversion', 'Seulement pour les nombres'], correctAnswer: 0, explanation: 'Python est dynamiquement typé, une variable peut changer de type.' }
    ]
  },
  {
    id: 'numbers-math',
    title: 'Nombres et Mathématiques',
    level: 'Débutant',
    description: 'Opérateurs arithmétiques.',
    questions: [
      { id: 'q1', text: 'Quel est le résultat de 10 // 3 ?', options: ['3.33', '3', '1', '4'], correctAnswer: 1, explanation: '// est la division entière.' },
      { id: 'q2', text: 'Quel opérateur donne le reste d\'une division (modulo) ?', options: ['/', '//', '%', '&'], correctAnswer: 2, explanation: '% est le modulo.' },
      { id: 'q3', text: 'Comment écrire 2 à la puissance 3 ?', options: ['2 ^ 3', '2 * 3', '2 ** 3', 'pow(2, 3, 2)'], correctAnswer: 2, explanation: '** est l\'opérateur de puissance.' },
      { id: 'q4', text: 'Quel est le résultat de 2 + 3 * 4 ?', options: ['20', '14', '24', '15'], correctAnswer: 1, explanation: 'La multiplication est prioritaire sur l\'addition (3*4=12, 12+2=14).' },
      { id: 'q5', text: 'Que retourne 10 / 2 en Python 3 ?', options: ['5', '5.0', '2', 'Error'], correctAnswer: 1, explanation: 'La division simple / retourne toujours un float.' },
      { id: 'q6', text: 'Comment arrondir 3.7 au nombre entier le plus proche ?', options: ['int(3.7)', 'math.floor(3.7)', 'round(3.7)', 'abs(3.7)'], correctAnswer: 2, explanation: 'round() arrondit à l\'entier le plus proche.' },
      { id: 'q7', text: 'Comment obtenir la valeur absolue de -5 ?', options: ['abs(-5)', 'val(-5)', 'positive(-5)', 'math.abs(-5)'], correctAnswer: 0, explanation: 'abs() est une fonction intégrée.' }
    ]
  },
  {
    id: 'strings-1',
    title: 'Chaînes de caractères I',
    level: 'Débutant',
    description: 'Manipulation basique des chaînes.',
    questions: [
      { id: 'q1', text: 'Comment obtenir la longueur d\'une chaîne s ?', options: ['s.length()', 's.size()', 'len(s)', 'length(s)'], correctAnswer: 2, explanation: 'len() est la fonction universelle pour la taille.' },
      { id: 'q2', text: 'Comment concaténer deux chaînes a et b ?', options: ['a . b', 'a + b', 'concat(a, b)', 'a & b'], correctAnswer: 1, explanation: 'Le signe + fusionne deux chaînes.' },
      { id: 'q3', text: 'Comment obtenir le premier caractère d\'une chaîne s ?', options: ['s[0]', 's(0)', 's.first()', 's[1]'], correctAnswer: 0, explanation: 'L\'indexation commence à 0.' },
      { id: 'q4', text: 'Comment vérifier si "py" est dans s ?', options: ['s.contains("py")', '"py" in s', 'contains("py", s)', 's.find("py")'], correctAnswer: 1, explanation: 'Le mot-clé \"in\" vérifie la présence d\'une sous-chaîne.' },
      { id: 'q5', text: 'Quelle méthode supprime les espaces au début et à la fin ?', options: ['trim()', 'strip()', 'clean()', 'clear()'], correctAnswer: 1, explanation: 'strip() nettoie les bords d\'une chaîne.' },
      { id: 'q6', text: 'Comment transformer une chaîne en liste de mots ?', options: ['s.split()', 'list(s)', 's.toList()', 's.items()'], correctAnswer: 0, explanation: 'split() découpe par défaut selon les espaces.' }
    ]
  },
  {
    id: 'lists-basics',
    title: 'Listes : Les Bases',
    level: 'Débutant',
    description: 'Création et accès simple.',
    questions: [
      { id: 'q1', text: 'Quel est l\'index du premier élément d\'une liste ?', options: ['1', '0', '-1', 'A'], correctAnswer: 1, explanation: 'Python commence à compter à partir de 0.' },
      { id: 'q2', text: 'Comment ajouter "pomme" à la fin de la liste L ?', options: ['L.add("pomme")', 'L.push("pomme")', 'L.append("pomme")', 'append(L, "pomme")'], correctAnswer: 2, explanation: 'append() est la méthode standard.' },
      { id: 'q3', text: 'Comment supprimer le dernier élément d\'une liste ?', options: ['L.pop()', 'L.remove()', 'L.delete()', 'del L[-1]'], correctAnswer: 0, explanation: 'pop() retire et renvoie le dernier élément.' },
      { id: 'q4', text: 'L = [1, 2, 3]. Que vaut L * 2 ?', options: ['[2, 4, 6]', '[1, 2, 3, 1, 2, 3]', '[1, 2, 3, 2]', 'Error'], correctAnswer: 1, explanation: 'L\'opérateur * répète la liste.' },
      { id: 'q5', text: 'Comment trier une liste L en place ?', options: ['sort(L)', 'L.sorted()', 'L.sort()', 'L.order()'], correctAnswer: 2, explanation: 'L.sort() modifie la liste originale.' },
      { id: 'q6', text: 'Comment insérer "x" à l\'index 1 ?', options: ['L.add(1, "x")', 'L.insert(1, "x")', 'L[1] = "x"', 'insert(L, 1, "x")'], correctAnswer: 1, explanation: 'insert(index, element) permet l\'insertion précise.' }
    ]
  },
  {
    id: 'boolean-logic',
    title: 'Logique Booléenne',
    level: 'Débutant',
    description: 'True, False, and, or, not.',
    questions: [
      { id: 'q1', text: 'Résultat de True and False ?', options: ['True', 'False', 'None', 'Error'], correctAnswer: 1, explanation: '"and" demande que les deux soient vrais.' },
      { id: 'q2', text: 'Résultat de True or False ?', options: ['True', 'False', 'None', 'Error'], correctAnswer: 0, explanation: '"or" demande qu\'au moins l\'un soit vrai.' },
      { id: 'q3', text: 'Que fait l\'opérateur not ?', options: ['Invertit le booléen', 'Annule la condition', 'Vérifie l\'égalité', 'Ne fait rien'], correctAnswer: 0, explanation: 'not True devient False.' },
      { id: 'q4', text: 'Résultat de complexité: (True or False) and not False ?', options: ['True', 'False', 'None', 'Error'], correctAnswer: 0, explanation: '(True or False) est True. not False est True. True and True est True.' },
      { id: 'q5', text: 'Quel est le résultat de bool(0) ?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 1, explanation: '0 est considéré comme Falsy en Python.' },
      { id: 'q6', text: 'Quel est le résultat de bool("False") ?', options: ['True', 'False', 'Error', 'None'], correctAnswer: 0, explanation: 'Une chaîne non vide est toujours True.' }
    ]
  },
  {
    id: 'conditions-if',
    title: 'Conditions If',
    level: 'Débutant',
    description: 'Prise de décision.',
    questions: [
      { id: 'q1', text: 'Quel mot-clé pour "sinon si" ?', options: ['else if', 'elseif', 'elif', 'elsif'], correctAnswer: 2, explanation: 'elif est la contraction de else if.' },
      { id: 'q2', text: 'Quelle est la syntaxe correcte pour un if ?', options: ['if x > 5', 'if (x > 5):', 'if x > 5:', 'if x > 5 then'], correctAnswer: 2, explanation: 'Le deux-points : est obligatoire.' },
      { id: 'q3', text: 'Peut-on avoir un if sans else ?', options: ['Oui', 'Non', 'Seulement dans une fonction', 'Seulement avec pass'], correctAnswer: 0, explanation: 'Le else est optionnel.' },
      { id: 'q4', text: 'Comment vérifier si x est entre 10 et 20 inclus ?', options: ['10 <= x <= 20', 'x >= 10 and x <= 20', 'x in range(10, 21)', 'Toutes les réponses'], correctAnswer: 3, explanation: 'Python permet le chaînage des comparaisons et d\'autres méthodes.' },
      { id: 'q5', text: 'L\'indentation après un if doit être de...', options: ['Au moins 1 espace', 'Exactement 4 espaces', 'Une tabulation', 'N\'importe quel espacement constant'], correctAnswer: 3, explanation: 'Bien que 4 espaces soient recommandés par la PEP 8, tout espacement constant fonctionne.' },
      { id: 'q6', text: 'Que se passe-t-il si la condition d\'un if est une liste vide [] ?', options: ['C\'est True', 'C\'est False', 'C\'est une erreur', 'C\'est None'], correctAnswer: 1, explanation: 'Les collections vides sont équivalentes à False.' }
    ]
  },
  {
    id: 'loops-for',
    title: 'Boucles For',
    level: 'Débutant',
    description: 'Itérer sur des séquences.',
    questions: [
      { id: 'q1', text: 'range(5) génère des nombres jusqu\'à...', options: ['4', '5', '6', 'Indéfini'], correctAnswer: 0, explanation: 'La borne supérieure de range est exclue.' },
      { id: 'q2', text: 'Comment sortir prématurément d\'une boucle ?', options: ['exit', 'stop', 'break', 'return'], correctAnswer: 2, explanation: 'break interrompt la boucle actuelle.' },
      { id: 'q3', text: 'Comment passer à l\'itération suivante sans finir la boucle ?', options: ['next', 'skip', 'continue', 'pass'], correctAnswer: 2, explanation: 'continue saute le reste du bloc de la boucle.' },
      { id: 'q4', text: 'Quel est le résultat de range(2, 10, 2) ?', options: ['[2, 4, 6, 8, 10]', '[2, 4, 6, 8]', '[2, 3, 4, 5, 6, 7, 8, 9]', '[0, 2, 4, 6, 8]'], correctAnswer: 1, explanation: 'Start=2, Stop=10, Step=2.' },
      { id: 'q5', text: 'L\'instruction else après une boucle for s\'exécute...', options: ['Si la boucle se finit normalement', 'Si on fait un break', 'À chaque itération', 'Jamais'], correctAnswer: 0, explanation: 'Le bloc else s\'exécute si aucun break n\'a été rencontré.' },
      { id: 'q6', text: 'Comment itérer sur les clés d\'un dictionnaire d ?', options: ['for x in d.keys():', 'for x in d:', 'Les deux sont valables', 'for x in d.all():'], correctAnswer: 2, explanation: 'Par défaut, itérer sur un dictionnaire itère sur ses clés.' }
    ]
  },
  {
    id: 'loops-while',
    title: 'Boucles While',
    level: 'Débutant',
    description: 'Répétition sous condition.',
    questions: [
      { id: 'q1', text: 'Une boucle while s\'arrête quand sa condition devient...', options: ['True', 'False', '0', 'None'], correctAnswer: 1, explanation: 'Tant que c\'est vrai, ça tourne.' },
      { id: 'q2', text: 'Comment créer une boucle infinie ?', options: ['while 1:', 'while True:', 'Toutes les réponses', 'while loop:'], correctAnswer: 2, explanation: 'Toute valeur "Truthful" maintient la boucle.' },
      { id: 'q3', text: 'Quelle instruction évite une erreur dans une boucle vide ?', options: ['nothing', 'empty', 'pass', 'wait'], correctAnswer: 2, explanation: 'pass est une opération nulle.' },
      { id: 'q4', text: 'Une boucle while peut-elle contenir un else ?', options: ['Oui', 'Non', 'Seulement avec for', 'Seulement si elle échoue'], correctAnswer: 0, explanation: 'Comme le for, else s\'exécute si aucun break n\'est utilisé.' },
      { id: 'q5', text: 'Peut-on imbriquer des boucles while ?', options: ['Oui', 'Non', 'Maximum 3 niveaux', 'Seulement avec des listes'], correctAnswer: 0, explanation: 'On peut imbriquer des boucles à volonté.' },
      { id: 'q6', text: 'Comment interrompre une boucle while infinie au clavier ?', options: ['Ctrl+C', 'Ctrl+V', 'Alt+F4', 'Esc'], correctAnswer: 0, explanation: 'SIGINT interrompt le processus.' }
    ]
  },
  {
    id: 'tuples-basics',
    title: 'Tuples : Introduction',
    level: 'Débutant',
    description: 'Séquences immuables.',
    questions: [
      { id: 'q1', text: 'Quelle est la principale différence d\'un tuple par rapport à une liste ?', options: ['Il est plus rapide', 'Il est immuable', 'Il n\'accepte que des entiers', 'Il utilise des {}'], correctAnswer: 1, explanation: 'Un tuple ne peut pas être modifié après sa création.' },
      { id: 'q2', text: 'Comment déclare-t-on un tuple ?', options: ['[1, 2]', '{1, 2}', '(1, 2)', '<1, 2>'], correctAnswer: 2, explanation: 'Les parenthèses définissent un tuple.' },
      { id: 'q3', text: 'Comment créer un tuple avec un seul élément "x" ?', options: ['("x")', 'tuple("x")', '("x",)', '["x"]'], correctAnswer: 2, explanation: 'La virgule est nécessaire pour lever l\'ambiguïté avec les parenthèses de priorité.' },
      { id: 'q4', text: 'Un tuple peut-il contenir des listes ?', options: ['Oui', 'Non', 'Seulement si elles sont vides', 'Seulement des entiers'], correctAnswer: 0, explanation: 'Les tuples peuvent contenir n\'importe quel objet.' },
      { id: 'q5', text: 'Comment concaténer deux tuples t1 et t2 ?', options: ['t1.append(t2)', 't1 + t2', 't1.merge(t2)', 'zip(t1, t2)'], correctAnswer: 1, explanation: 'Comme les chaînes et listes, + crée un nouveau tuple.' },
      { id: 'q6', text: 'Peut-on utiliser un tuple comme clé de dictionnaire ?', options: ['Oui', 'Non', 'Seulement s\'il contient des listes', 'Seulement s\'il est vide'], correctAnswer: 0, explanation: 'Comme ils sont immuables, les tuples sont hashables (s\'ils ne contiennent que des objets immuables).' }
    ]
  },
  {
    id: 'sets-basics',
    title: 'Sets (Ensembles)',
    level: 'Débutant',
    description: 'Valeurs uniques.',
    questions: [
      { id: 'q1', text: 'Quelle structure supprime les doublons automatiquement ?', options: ['list', 'tuple', 'set', 'dict'], correctAnswer: 2, explanation: 'Le set ne stocke que des valeurs uniques.' },
      { id: 'q2', text: 'Comment crée-t-on un set vide ?', options: ['{}', 'set()', '[]', '()'], correctAnswer: 1, explanation: '{} crée un dictionnaire vide, set() est nécessaire pour un ensemble vide.' },
      { id: 'q3', text: 'Comment ajouter un élément "x" à un set S ?', options: ['S.add("x")', 'S.append("x")', 'S.insert("x")', 'S.push("x")'], correctAnswer: 0, explanation: 'Les sets utilisent add() au lieu de append().' },
      { id: 'q4', text: 'Les sets sont-ils ordonnés ?', options: ['Oui', 'Non', 'Seulement si triés', 'Depuis Python 3.7'], correctAnswer: 1, explanation: 'Les sets sont des collections non ordonnées.' },
      { id: 'q5', text: 'Comment calculer l\'intersection de deux sets A et B ?', options: ['A | B', 'A & B', 'A ^ B', 'A - B'], correctAnswer: 1, explanation: '& est l\'opérateur d\'intersection.' },
      { id: 'q6', text: 'S = {1, 2, 3}. Quel est le résultat de S.remove(4) ?', options: ['Une erreur', 'Rien', 'None', 'False'], correctAnswer: 0, explanation: 'remove() lève une KeyError si l\'élément n\'existe pas (contrairement à discard()).' }
    ]
  },
  {
    id: 'dict-basics',
    title: 'Dictionnaires : Introduction',
    level: 'Débutant',
    description: 'Clés et Valeurs.',
    questions: [
      { id: 'q1', text: 'Comment accède-t-on à une valeur dans d = {"a": 1} ?', options: ['d[0]', 'd["a"]', 'd.get(0)', 'd.key(0)'], correctAnswer: 1, explanation: 'On accède par la clé entre crochets.' },
      { id: 'q2', text: 'Quelle méthode supprime une clé et retourne sa valeur ?', options: ['del', 'remove()', 'pop()', 'clear()'], correctAnswer: 2, explanation: 'pop(key) est parfait pour cela.' },
      { id: 'q3', text: 'Comment obtenir toutes les clés d\'un dictionnaire ?', options: ['d.keys()', 'd.all_keys()', 'd.list()', 'd.items()'], correctAnswer: 0, explanation: 'keys() retourne une vue sur les clés.' },
      { id: 'q4', text: 'Un dictionnaire peut-il avoir des clés dupliquées ?', options: ['Oui', 'Non', 'Seulement avec dict.multi()', 'Seulement si les valeurs diffèrent'], correctAnswer: 1, explanation: 'Chaque clé doit être unique.' },
      { id: 'q5', text: 'Comment fusionner d2 dans d1 ?', options: ['d1 + d2', 'd1.merge(d2)', 'd1.update(d2)', 'd1.append(d2)'], correctAnswer: 2, explanation: 'update() ajoute ou écrase les clés existantes.' },
      { id: 'q6', text: 'Les dictionnaires sont-ils ordonnés depuis Python 3.7 ?', options: ['Oui', 'Non', 'Seulement si triés', 'Uniquement les clés'], correctAnswer: 0, explanation: 'Ils maintiennent l\'ordre d\'insertion depuis v3.7.' }
    ]
  },
  {
    id: 'functions-intro',
    title: 'Fonctions : Définition',
    level: 'Débutant',
    description: 'Créer ses propres fonctions.',
    questions: [
      { id: 'q1', text: 'Quel mot-clé définit une fonction ?', options: ['func', 'define', 'def', 'function'], correctAnswer: 2, explanation: 'def est utilisé pour définir une fonction.' },
      { id: 'q2', text: 'Comment appeler une fonction f avec l\'argument x ?', options: ['call f(x)', 'f x', 'f(x)', 'x.f()'], correctAnswer: 2, explanation: 'La syntaxe standard utilise les parenthèses.' },
      { id: 'q3', text: 'Que retourne une fonction sans instruction return ?', options: ['0', 'False', 'None', 'Error'], correctAnswer: 2, explanation: 'Toute fonction Python retourne None par défaut.' },
      { id: 'q4', text: 'Où définit-on les paramètres facultatifs ?', options: ['Au début', 'À la fin', 'N\'importe où', 'Seulement avec *args'], correctAnswer: 1, explanation: 'Les arguments avec valeur par défaut suivent toujours les arguments positionnels obligatoires.' },
      { id: 'q5', text: 'Quelle docstring est recommandée ?', options: ['// commentaire', '# commentaire', '""" Texte """', '/* Texte */'], correctAnswer: 2, explanation: 'Les docstrings utilisent les triples guillemets juste sous la définition.' },
      { id: 'q6', text: 'Peut-on retourner plusieurs valeurs dans un return ?', options: ['Oui (via un tuple)', 'Non', 'Seulement avec des listes', 'Seulement avec yield'], correctAnswer: 0, explanation: 'return a, b renvoie un tuple (a, b).' }
    ]
  },
  {
    id: 'input-output',
    title: 'Entrées et Sorties',
    level: 'Débutant',
    description: 'print() et input().',
    questions: [
      { id: 'q1', text: 'Quel est le type retourné par input() par défaut ?', options: ['int', 'float', 'str', 'bool'], correctAnswer: 2, explanation: 'input() retourne toujours une chaîne (str).' },
      { id: 'q2', text: 'Comment afficher plusieurs variables dans print() ?', options: ['print(a + b)', 'print(a, b)', 'Les deux sont valables', 'print(a . b)'], correctAnswer: 2, explanation: 'On peut utiliser la concaténation ou la séparation par virgule.' },
      { id: 'q3', text: 'Quel est le caractère de fin par défaut de print() ?', options: ['\\t', 'Saut de ligne \\n', 'Espace', 'Rien'], correctAnswer: 1, explanation: 'print() rajoute un saut de ligne automatique (end="\\n").' },
      { id: 'q4', text: 'Comment empêcher print() de sauter une ligne ?', options: ['print(s, end="")', 'print(s, newline=False)', 'print.no_nl(s)', 'print(s, finish="")'], correctAnswer: 0, explanation: 'L\'argument end définit le suffixe.' },
      { id: 'q5', text: 'Comment afficher print("A", "B") séparé par un tiret ?', options: ['print("A-B")', 'print("A", "B", sep="-")', 'print("A", "B", dash=True)', 'print("A" + "-" + "B")'], correctAnswer: 1, explanation: 'L\'argument sep définit le séparateur.' },
      { id: 'q6', text: 'Quelle fonction lit une ligne depuis la console ?', options: ['read()', 'input()', 'scan()', 'get()'], correctAnswer: 1, explanation: 'input() est la méthode standard en Python 3.' }
    ]
  },
  {
    id: 'comparison-ops',
    title: 'Comparaisons',
    level: 'Débutant',
    description: '==, !=, <, >.',
    questions: [
      { id: 'q1', text: 'Quel opérateur vérifie l\'égalité ?', options: ['=', '==', '===', 'is'], correctAnswer: 1, explanation: '== est l\'égalité de valeur.' },
      { id: 'q2', text: 'Quel opérateur vérifie l\'identité (même objet en mémoire) ?', options: ['==', 'is', 'id', 'equals'], correctAnswer: 1, explanation: 'is compare les adresses mémoire.' },
      { id: 'q3', text: 'Quel opérateur pour "différent de" ?', options: ['<>', '!=', '!==', 'not =='], correctAnswer: 1, explanation: '!= est le standard en Python.' },
      { id: 'q4', text: 'Le résultat d\'une comparaison est toujours de quel type ?', options: ['int', 'str', 'bool', 'None'], correctAnswer: 2, explanation: 'Elle retourne soit True soit False.' },
      { id: 'q5', text: 'Résultat de 10 > 5 > 2 ?', options: ['True', 'False', 'Error', 'Unpredictable'], correctAnswer: 0, explanation: 'Python permet le chaînage direct des comparaisons.' },
      { id: 'q6', text: 'Est-ce que "Apple" < "banana" ?', options: ['Oui', 'Non', 'Error', 'Seulement le dimanche'], correctAnswer: 0, explanation: 'En ASCII/Unicode, les majuscules viennent avant les minuscules (elles ont une valeur numérique plus petite).' }
    ]
  },
  {
    id: 'list-methods',
    title: 'Méthodes de Listes',
    level: 'Débutant',
    description: 'append, remove, pop.',
    questions: [
      { id: 'q1', text: 'Comment ajouter un élément à la fin d\'une liste ?', options: ['add()', 'push()', 'append()', 'insert()'], correctAnswer: 2, explanation: 'append() rajoute à la fin.' },
      { id: 'q2', text: 'Comment vider entièrement une liste L ?', options: ['L.empty()', 'L.clear()', 'L.delete_all()', 'L.reset()'], correctAnswer: 1, explanation: 'clear() supprime tous les éléments.' },
      { id: 'q3', text: 'Quelle méthode compte les occurrences d\'un élément ?', options: ['count()', 'total()', 'sum()', 'find()'], correctAnswer: 0, explanation: 'L.count(x) retourne le nombre de x dans L.' },
      { id: 'q4', text: 'Comment trouver l\'index d\'un élément ?', options: ['L.find(x)', 'L.search(x)', 'L.index(x)', 'L.position(x)'], correctAnswer: 2, explanation: 'index() retourne l\'index de la première occurrence.' },
      { id: 'q5', text: 'Comment inverser une liste sur place ?', options: ['L.flip()', 'L.reverse()', 'L.invert()', 'reversed(L)'], correctAnswer: 1, explanation: 'reverse() modifie la liste originale.' },
      { id: 'q6', text: 'Quelle méthode retire un élément par sa valeur (la première trouvée) ?', options: ['pop()', 'delete()', 'remove()', 'kill()'], correctAnswer: 2, explanation: 'remove(valeur) cherche et supprime l\'élément.' }
    ]
  },
  {
    id: 'string-methods',
    title: 'Méthodes de Cordes',
    level: 'Débutant',
    description: 'upper, lower, replace.',
    questions: [
      { id: 'q1', text: 'Comment mettre une chaîne s en majuscules ?', options: ['s.toUpper()', 's.upper()', 'toUpperCase(s)', 's.caps()'], correctAnswer: 1, explanation: 's.upper() retourne la version majuscule.' },
      { id: 'q2', text: 'Comment remplacer "A" par "B" dans s ?', options: ['s.change("A", "B")', 's.replace("A", "B")', 's.swap("A", "B")', 'replace(s, "A", "B")'], correctAnswer: 1, explanation: 'replace() est la méthode dédiée.' },
      { id: 'q3', text: 'Comment vérifier si s commence par "Intro" ?', options: ['s.starts("Intro")', 's.startswith("Intro")', 's[0:5] == "Intro"', 'Les deux dernières sont valables'], correctAnswer: 3, explanation: 'startswith() est propre, mais le slicing fonctionne aussi.' },
      { id: 'q4', text: 'Comment vérifier si s ne contient que des chiffres ?', options: ['s.isnumeric()', 's.isdigit()', 's.isdecimal()', 'Toutes les réponses (nuances proches)'], correctAnswer: 3, explanation: 'Ces méthodes vérifient différents types de caractères numériques.' },
      { id: 'q5', text: 'Comment centrer une chaîne dans 20 caractères ?', options: ['s.center(20)', 's.middle(20)', 's.align("center", 20)', 'center(s, 20)'], correctAnswer: 0, explanation: 'center(width) rajoute des espaces sur les côtés.' },
      { id: 'q6', text: 'Quelle méthode met la première lettre en majuscule ?', options: ['s.firstUpper()', 's.capitalize()', 's.title()', 's.sentence()'], correctAnswer: 1, explanation: 'capitalize() pour la première lettre, title() pour chaque mot.' }
    ]
  },
  {
    id: 'math-module-basics',
    title: 'Le module Math',
    level: 'Débutant',
    description: 'Fonctions mathématiques.',
    questions: [
      { id: 'q1', text: 'Comment importer le module math ?', options: ['using math', 'include math', 'import math', 'from math'], correctAnswer: 2, explanation: 'import est le mot-clé standard.' },
      { id: 'q2', text: 'Comment calculer la racine carrée de x ?', options: ['math.sqrt(x)', 'sqrt(x)', 'math.root(x)', 'math.square(x)'], correctAnswer: 0, explanation: 'sqrt signifie Square Root.' },
      { id: 'q3', text: 'Comment obtenir le plus petit entier supérieur ou égal à x ?', options: ['math.floor(x)', 'math.ceil(x)', 'math.top(x)', 'int(x)'], correctAnswer: 1, explanation: 'ceil signifie Ceiling (plafond).' },
      { id: 'q4', text: 'Quelle fonction calcule le factoriel de n ?', options: ['math.fact(n)', 'math.factorial(n)', 'math.f(n)', 'factorial.math(n)'], correctAnswer: 1, explanation: 'math.factorial(n) est extrêmement performante.' },
      { id: 'q5', text: 'Comment calculer le cosinus de x (en radians) ?', options: ['math.cos(x)', 'math.cosinus(x)', 'cos(x)', 'math.trig.cos(x)'], correctAnswer: 0, explanation: 'Le module math inclut toutes les fonctions trigomométriques.' },
      { id: 'q6', text: 'Quelle constante représente le nombre d\'Euler ?', options: ['math.euler', 'math.e', 'math.exp()', 'math.log'], correctAnswer: 1, explanation: 'math.e vaut environ 2.718.' }
    ]
  },
  {
    id: 'none-type',
    title: 'Le type None',
    level: 'Débutant',
    description: 'L\'absence de valeur.',
    questions: [
      { id: 'q1', text: 'Que représente None ?', options: ['Zéro', 'Faux', 'Absence de valeur', 'Erreur'], correctAnswer: 2, explanation: 'None est l\'objet nul de Python.' },
      { id: 'q2', text: 'Comment vérifier si x est None ?', options: ['x == None', 'x is None', 'Les deux sont valables (mais is est préférable)', 'bool(x) == None'], correctAnswer: 2, explanation: '"is" est l\'idiome Pythonique pour comparer à l\'identité de None.' },
      { id: 'q3', text: 'Quelle est la valeur booléenne de None ?', options: ['True', 'False', 'None', 'Error'], correctAnswer: 1, explanation: 'None est toujours considéré comme Falsy.' },
      { id: 'q4', text: 'Que retourne une fonction qui n\'a pas de return ?', options: ['0', 'None', 'undefined', 'Null'], correctAnswer: 1, explanation: 'Python force un return None implicite.' },
      { id: 'q5', text: 'Peut-on additionner None + 1 ?', options: ['Oui (donne 1)', 'Non (TypeError)', 'Oui (donne None)', 'Seulement si casté'], correctAnswer: 1, explanation: 'None n\'est pas un nombre, l\'opération échouera.' },
      { id: 'q6', text: 'Quel est le type de None ?', options: ['<class \'None\'>', '<class \'NoneType\'>', '<class \'null\'>', '<class \'void\'>'], correctAnswer: 1, explanation: 'Il appartient à sa propre classe unique : NoneType.' }
    ]
  },
  {
    id: 'casting',
    title: 'Casting (Conversion)',
    level: 'Débutant',
    description: 'Changer le type d\'une donnée.',
    questions: [
      { id: 'q1', text: 'Comment convertir "10" en entier ?', options: ['integer("10")', 'int("10")', 'parse("10")', 'tonumber("10")'], correctAnswer: 1, explanation: 'int() effectue la conversion vers un entier.' },
      { id: 'q2', text: 'Comment convertir 5 en chaîne de caractères ?', options: ['str(5)', 'string(5)', '"5"', 'All of the above'], correctAnswer: 3, explanation: 'str() est la fonction explicite, mais les autres créent aussi des chaînes.' },
      { id: 'q3', text: 'Que donne float(10) ?', options: ['10', '10.0', '10.00', 'Error'], correctAnswer: 1, explanation: 'Le float rajoute toujours une partie décimale.' },
      { id: 'q4', text: 'Peut-on convertir "abc" en int ?', options: ['Oui', 'Non (ValueError)', 'Oui (donne 0)', 'Oui (donne un hash)'], correctAnswer: 1, explanation: 'La chaîne doit représenter un nombre valide.' },
      { id: 'q5', text: 'Comment convertir une liste de tuples en dictionnaire ?', options: ['dict(liste)', 'map(liste)', 'convert(liste)', 'list.to_dict()'], correctAnswer: 0, explanation: 'dict([(1, "a"), (2, "b")]) fonctionne parfaitement.' },
      { id: 'q6', text: 'Que donne int(3.9) ?', options: ['3', '4', '3.0', 'Error'], correctAnswer: 0, explanation: 'int() tronque la partie décimale (arrondit vers zéro).' }
    ]
  },

  // --- INTERMÉDIAIRE (21-40) ---
  {
    id: 'list-comprehension',
    title: 'Compréhension de Listes',
    level: 'Intermédiaire',
    description: 'Création concise de listes.',
    questions: [
      { id: 'q1', text: '[x*2 for x in range(3)] donne...', options: ['[0, 2, 4]', '[2, 4, 6]', '[0, 1, 2]', '[1, 2, 3]'], correctAnswer: 0, explanation: '[0*2, 1*2, 2*2] = [0, 2, 4].' },
      { id: 'q2', text: 'Peut-on ajouter un "if" dans une compréhension de liste ?', options: ['Oui, à la fin', 'Non', 'Seulement au début', 'Seulement avec else'], correctAnswer: 0, explanation: '[x for x in list if x > 0] est valide.' },
      { id: 'q3', text: 'Comment créer une liste de nombres pairs entre 0 et 10 ?', options: ['[x for x in range(11) if x % 2 == 0]', '[x*2 for x in range(6)]', 'Les deux sont valables', '[x for x in range(10) if x % 2 == 0]'], correctAnswer: 2, explanation: 'Il existe souvent plusieurs façons d\'écrire la même logique.' },
      { id: 'q4', text: 'Quel est l\'avantage principal de la compréhension ?', options: ['Plus de vitesse', 'Plus de lisibilité (code compact)', 'Moins de mémoire', 'Toutes les réponses'], correctAnswer: 1, explanation: 'Bien que parfois plus rapide, c\'est surtout prisé pour la clarté.' },
      { id: 'q5', text: 'Peut-on imbriquer des compréhensions de listes ?', options: ['Oui', 'Non', 'Seulement 2 niveaux', 'Seulement pour les matrices'], correctAnswer: 0, explanation: 'On peut faire des compréhensions imbriquées (ex: aplatir une matrice).' },
      { id: 'q6', text: 'Quelle est la syntaxe pour créer un dictionnaire par compréhension ?', options: ['{k: v for ...}', '[k: v for ...]', '(k: v for ...)', 'dict(k, v for ...)'], correctAnswer: 0, explanation: 'Syntaxe très proche des listes mais avec des accolades.' }
    ]
  },
  {
    id: 'args-kwargs',
    title: 'Args et Kwargs',
    level: 'Intermédiaire',
    description: 'Arguments variables.',
    questions: [
      { id: 'q1', text: 'Quel symbole pour les arguments positionnels variables ?', options: ['*', '**', '&', '@'], correctAnswer: 0, explanation: '*args récupère une liste d\'arguments.' },
      { id: 'q2', text: 'Quel symbole pour les arguments nommés variables ?', options: ['*', '**', '&', '@'], correctAnswer: 1, explanation: '**kwargs récupère un dictionnaire d\'arguments.' },
      { id: 'q3', text: 'Peut-on changer les noms "args" et "kwargs" ?', options: ['Oui, seul l\'astérisque compte', 'Non, c\'est obligatoire', 'Oui, mais seulement kwargs', 'Non, sauf pour les méthodes'], correctAnswer: 0, explanation: 'Ce sont des conventions, on pourrait écrire *mes_args.' },
      { id: 'q4', text: 'Dans quel ordre placer les arguments ?', options: ['def f(*args, **kwargs, normal)', 'def f(normal, *args, **kwargs)', 'def f(**kwargs, *args, normal)', 'Peu importe'], correctAnswer: 1, explanation: 'L\'ordre standard est : obligatoires, positionnels variables, puis nommés variables.' },
      { id: 'q5', text: 'À quoi sert le dépaquetage d\'arguments f(*ma_liste) ?', options: ['Passe chaque élément comme argument séparé', 'Passe la liste entière', 'Crée une copie', 'Supprime la liste'], correctAnswer: 0, explanation: 'L\'astérisque "étale" le contenu de la liste.' },
      { id: 'q6', text: 'args est de quel type à l\'intérieur de la fonction ?', options: ['list', 'tuple', 'dict', 'set'], correctAnswer: 1, explanation: 'Bien qu\'on puisse passer une liste, il est reçu comme un tuple immuable.' }
    ]
  },
  {
    id: 'exceptions-try',
    title: 'Gestion des Erreurs',
    level: 'Intermédiaire',
    description: 'Try, except, finally.',
    questions: [
      { id: 'q1', text: 'Quel bloc s\'exécute toujours, erreur ou pas ?', options: ['else', 'catch', 'finally', 'always'], correctAnswer: 2, explanation: 'finally est utilisé pour le nettoyage.' },
      { id: 'q2', text: 'Quel mot-clé capture une erreur spécifique ?', options: ['try', 'except', 'catch', 'error'], correctAnswer: 1, explanation: 'except ExceptionType: permet de cibler une erreur.' },
      { id: 'q3', text: 'Peut-on lever une erreur manuellement ?', options: ['throw Error()', 'raise Exception()', 'error.now()', 'fail()'], correctAnswer: 1, explanation: 'raise permet de déclencher une exception.' },
      { id: 'q4', text: 'Le bloc else après un try s\'exécute...', options: ['Si une erreur survient', 'Si aucune erreur ne survient', 'Tout le temps', 'Jamais'], correctAnswer: 1, explanation: 'Très utile pour séparer le code "sûr" du code "à risque".' },
      { id: 'q5', text: 'Quelle clause intercepte n\'importe quelle erreur ?', options: ['except:', 'except Error:', 'except *:', 'catch all:'], correctAnswer: 0, explanation: 'Un except nu (sans type) attrape tout (déconseillé).' },
      { id: 'q6', text: 'Comment obtenir le message d\'une erreur e ?', options: ['e.msg', 'str(e)', 'e.text', 'print(e)'], correctAnswer: 1, explanation: 'Convertir l\'exception en chaîne donne son message.' }
    ]
  },
  {
    id: 'file-read',
    title: 'Lecture de Fichiers',
    level: 'Intermédiaire',
    description: 'Manipulation de fichiers.',
    questions: [
      { id: 'q1', text: 'Quel mode pour lire un fichier texte ?', options: ['"w"', '"r"', '"a"', '"x"'], correctAnswer: 1, explanation: '"r" signifie Read.' },
      { id: 'q2', text: 'Pourquoi utiliser le bloc "with open(...) as f:" ?', options: ['Pour la vitesse', 'Pour fermer le fichier automatiquement', 'Pour lire plus vite', 'C\'est obligatoire'], correctAnswer: 1, explanation: 'Il gère la fermeture même si une erreur survient.' },
      { id: 'q3', text: 'Quelle méthode lit tout le contenu d\'un coup ?', options: ['f.read()', 'f.all()', 'f.get_content()', 'read(f)'], correctAnswer: 0, explanation: 'read() retourne une grande chaîne.' },
      { id: 'q4', text: 'Comment lire un fichier ligne par ligne efficacement ?', options: ['f.read_lines()', 'for line in f:', 'f.split("\\n")', 'while f.next():'], correctAnswer: 1, explanation: 'L\'objet fichier est son propre itérateur de lignes.' },
      { id: 'q5', text: 'Quel mode écrase le fichier s\'il existe ?', options: ['"r"', '"a"', '"w"', '"x"'], correctAnswer: 2, explanation: '"w" (Write) recrée le fichier de zéro.' },
      { id: 'q6', text: 'Quel mode ajoute du contenu à la fin du fichier ?', options: ['"w"', '"a"', '"r"', '"append"'], correctAnswer: 1, explanation: '"a" (Append) préserve l\'existant.' }
    ]
  },
  {
    id: 'lambda-functions',
    title: 'Fonctions Lambda',
    level: 'Intermédiaire',
    description: 'Fonctions anonymes.',
    questions: [
      { id: 'q1', text: 'Une lambda peut-elle contenir plusieurs lignes de code ?', options: ['Oui', 'Non', 'Seulement avec return', 'Seulement via import'], correctAnswer: 1, explanation: 'Une lambda est limitée à une seule expression.' },
      { id: 'q2', text: 'Quelle est la syntaxe d\'une lambda qui double x ?', options: ['lambda x: x*2', 'def(x): x*2', 'x => x*2', 'lambda(x) { return x*2 }'], correctAnswer: 0, explanation: 'Syntaxe épurée sans parenthèses obligatoires autour de l\'argument.' },
      { id: 'q3', text: 'Où utilise-t-on souvent les lambdas ?', options: ['Dans sorted(), map(), filter()', 'Pour les classes', 'Pour remplacer def', 'Partout'], correctAnswer: 0, explanation: 'Elles sont idéales comme arguments de fonctions d\'ordre supérieur.' },
      { id: 'q4', text: 'Une lambda a-t-elle besoin d\'un return explicite ?', options: ['Oui', 'Non (implicite)', 'Seulement pour les nombres', 'Seulement si nommée'], correctAnswer: 1, explanation: 'L\'expression est retournée automatiquement.' },
      { id: 'q5', text: 'Peut-on donner un nom à une lambda ?', options: ['Oui via assignation f = lambda...', 'Non', 'Seulement via le décorateur @name', 'Oui via def lambda'], correctAnswer: 0, explanation: 'On peut l\'assigner à une variable, mais def est alors préférable.' },
      { id: 'q6', text: 'Une lambda peut-elle avoir plusieurs arguments ?', options: ['Oui (lambda x, y: x+y)', 'Non, un seul', 'Seulement avec *args', 'Seulement 2'], correctAnswer: 0, explanation: 'On peut passer autant d\'arguments que voulu.' }
    ]
  },
  {
    id: 'enumerate-fun',
    title: 'Enumerate',
    level: 'Intermédiaire',
    description: 'Index et valeurs.',
    questions: [
      { id: 'q1', text: 'Que retourne enumerate() ?', options: ['Une liste', 'Un tuple d\'index/valeur', 'Un itérable de tuples (index, valeur)', 'Seulement l\'index'], correctAnswer: 2, explanation: 'Pratique pour avoir l\'index dans une boucle for.' },
      { id: 'q2', text: 'Comment commencer l\'index à 1 au lieu de 0 ?', options: ['enumerate(L, start=1)', 'enumerate(L) + 1', 'enumerate(L, 1)', 'Les options 1 et 3 sont valables'], correctAnswer: 3, explanation: 'On peut passer le début de l\'index en second argument.' },
      { id: 'q3', text: 'enumerate() charge-t-il tout en mémoire ?', options: ['Oui', 'Pas immédiatement (c\'est un générateur)', 'Seulement pour les listes', 'Seulement pour les dicts'], correctAnswer: 1, explanation: 'Il produit les valeurs une par une.' },
      { id: 'q4', text: 'Quelle syntaxe de boucle est courante avec enumerate ?', options: ['for i in enumerate(L):', 'for i, val in enumerate(L):', 'for val, i in enumerate(L):', 'for (i, val) range(enumerate(L)):'], correctAnswer: 1, explanation: 'Le dépaquetage immédiat est très lisible.' },
      { id: 'q5', text: 'Peut-on utiliser enumerate sur une chaîne de caractères ?', options: ['Oui', 'Non', 'Seulement avec list()', 'Seulement si elle est vide'], correctAnswer: 0, explanation: 'Comme toute séquence, une chaîne est énumérable.' },
      { id: 'q6', text: 'Quel est l\'équivalent sans enumerate ?', options: ['for i in range(len(L)): val = L[i]', 'for val in L: i = L.index(val)', 'Les deux, mais moins efficaces/propres', 'Il n\'y a pas d\'équivalent'], correctAnswer: 2, explanation: 'enumerate() évite d\'avoir à gérer l\'index manuellement.' }
    ]
  },
  {
    id: 'zip-function',
    title: 'Fonction Zip',
    level: 'Intermédiaire',
    description: 'Combiner des itérables.',
    questions: [
      { id: 'q1', text: 'Zip fusionne deux listes en...', options: ['Une seule liste plate', 'Une liste de tuples', 'Un dictionnaire', 'Une erreur'], correctAnswer: 1, explanation: 'Combine les éléments correspondants.' },
      { id: 'q2', text: 'Que se passe-t-il si les listes ont des tailles différentes ?', options: ['Erreur', 'Elle s\'arrête à la plus courte', 'Elle complète avec None', 'Elle boucle sur la plus courte'], correctAnswer: 1, explanation: 'Par défaut, zip s\'arrête dès qu\'un itérable est épuisé.' },
      { id: 'q3', text: 'Comment "dézipper" une liste de tuples ?', options: ['unzip(L)', 'zip(*L)', 'zip.reverse(L)', 'L.unzip()'], correctAnswer: 1, explanation: 'L\'astérisque permet de repasser les éléments comme arguments séparés.' },
      { id: 'q4', text: 'Peut-on zipper 3 listes ou plus ?', options: ['Oui', 'Non', 'Maximum 2', 'Seulement des puissances de 2'], correctAnswer: 0, explanation: 'Zip accepte un nombre illimité d\'itérables.' },
      { id: 'q5', text: 'Comment zipper en gardant les éléments de la plus longue liste ?', options: ['zip.all()', 'itertools.zip_longest()', 'zip(long=True)', 'full_zip()'], correctAnswer: 1, explanation: 'Cette fonction du module itertools remplace les manques par une valeur (None par défaut).' },
      { id: 'q6', text: 'Comment créer un dict à partir de deux listes de clés/valeurs ?', options: ['dict(zip(cles, valeurs))', 'zip(cles, valeurs).toDict()', '{cles: valeurs}', 'dict.zip(cles, valeurs)'], correctAnswer: 0, explanation: 'C\'est la méthode la plus propre et rapide.' }
    ]
  },
  {
    id: 'dict-advanced',
    title: 'Dictionnaires Avancés',
    level: 'Intermédiaire',
    description: 'Méthodes items(), keys(), values().',
    questions: [
      { id: 'q1', text: 'Quelle méthode pour itérer sur clés et valeurs simultanément ?', options: ['pair()', 'all()', 'items()', 'each()'], correctAnswer: 2, explanation: 'items() donne des tuples (clé, valeur).' },
      { id: 'q2', text: 'Comment obtenir une valeur sans risquer une KeyError ?', options: ['d[key]', 'd.get(key)', 'd.find(key)', 'd.val(key)'], correctAnswer: 1, explanation: 'get() retourne None (ou une valeur par défaut) si la clé manque.' },
      { id: 'q3', text: 'Comment définir une valeur par défaut au premier accès ?', options: ['d.default(key, val)', 'd.setdefault(key, val)', 'd.init(key, val)', 'd[key] = d[key] or val'], correctAnswer: 1, explanation: 'setdefault() écrit la valeur si la clé est absente et la retourne.' },
      { id: 'q4', text: 'Comment vider un dictionnaire ?', options: ['d = {}', 'd.clear()', 'Les deux sont valables', 'd.flush()'], correctAnswer: 2, explanation: 'clear() vide l\'objet en place, d={} réassigne la variable.' },
      { id: 'q5', text: 'Peut-on utiliser une liste comme clé ?', options: ['Oui', 'Non (TypeError)', 'Seulement si elle est courte', 'Seulement si elle contient des strings'], correctAnswer: 1, explanation: 'Une clé doit être immuable (hashable).' },
      { id: 'q6', text: 'Comment copier un dictionnaire d ?', options: ['d2 = d', 'd2 = d.copy()', 'd2 = dict(d)', 'Les options 2 et 3'], correctAnswer: 3, explanation: 'Assignation directe ne fait qu\'une référence, il faut copier explicitement.' }
    ]
  },
  {
    id: 'sets-ops',
    title: 'Opérations sur Sets',
    level: 'Intermédiaire',
    description: 'Union, intersection.',
    questions: [
      { id: 'q1', text: 'Résultat de {1, 2} | {2, 3} ?', options: ['{2}', '{1, 2, 3}', '{1, 3}', 'Erreur'], correctAnswer: 1, explanation: '| est l\'opérateur d\'union.' },
      { id: 'q2', text: 'Opérateur d\'intersection ?', options: ['&', '|', '^', '-'], correctAnswer: 0, explanation: '& retourne les éléments communs.' },
      { id: 'q3', text: 'Opérateur de différence symétrique ?', options: ['&', '|', '^', '-'], correctAnswer: 2, explanation: '^ donne les éléments présents dans l\'un ou l\'autre mais pas dans les deux.' },
      { id: 'q4', text: 'Comment vérifier si A est inclus dans B ?', options: ['A in B', 'A.issubset(B)', 'A < B', 'Les deux dernières sont valables'], correctAnswer: 3, explanation: '< est un raccourci pour issubset.' },
      { id: 'q5', text: 'Comment retirer un élément sans erreur s\'il n\'existe pas ?', options: ['S.remove(x)', 'S.discard(x)', 'S.pop(x)', 'S.delete(x)'], correctAnswer: 1, explanation: 'discard() est silencieux si l\'élément est absent.' },
      { id: 'q6', text: 'Peut-on stocker une liste dans un set ?', options: ['Oui', 'Non', 'Seulement si castée', 'Seulement vide'], correctAnswer: 1, explanation: 'Les éléments d\'un set doivent être hashables (immuables).' }
    ]
  },
  {
    id: 'global-v-local',
    title: 'Scopes : Global vs Local',
    level: 'Intermédiaire',
    description: 'La portée des variables.',
    questions: [
      { id: 'q1', text: 'Comment modifier une variable globale dans une fonction ?', options: ['global x', 'import x', 'static x', 'self.x'], correctAnswer: 0, explanation: 'Le mot-clé global est requis pour la réassignation.' },
      { id: 'q2', text: 'Qu\'est-ce que le scope LEGB ?', options: ['Local, Enclosing, Global, Built-in', 'List, Every, Group, Big', 'Logical, Easy, Great, Best', 'C\'est une marque de jouets'], correctAnswer: 0, explanation: 'Définit l\'ordre de recherche d\'une variable.' },
      { id: 'q3', text: 'Comment modifier une variable du scope parent (non globale) ?', options: ['global x', 'outer x', 'nonlocal x', 'parent x'], correctAnswer: 2, explanation: 'nonlocal est utilisé dans les fonctions imbriquées (closures).' },
      { id: 'q4', text: 'Une variable définie dans un if est-elle locale au bloc if ?', options: ['Oui', 'Non (elle appartient à la fonction/module)', 'Seulement si elle est indentée', 'Seulement avec let'], correctAnswer: 1, explanation: 'Python n\'a pas de block scope pour les structures if/for.' },
      { id: 'q5', text: 'Quelle fonction liste toutes les variables locales ?', options: ['vars()', 'locals()', 'dir()', 'env()'], correctAnswer: 1, explanation: 'locals() retourne un dictionnaire du scope local.' },
      { id: 'q6', text: 'Que se passe-t-il si on lit une variable globale sans le mot-clé global ?', options: ['Erreur', 'Ça fonctionne', 'Elle vaut None', 'On lit une copie'], correctAnswer: 1, explanation: 'La lecture est toujours permise, seul l\'écriture nécessite global.' }
    ]
  },
  {
    id: 'modules-pkg',
    title: 'Modules et Packages',
    level: 'Intermédiaire',
    description: 'Organisation du code.',
    questions: [
      { id: 'q1', text: 'Quel fichier rend un dossier "package" (avant Python 3.3) ?', options: ['main.py', '__init__.py', 'setup.py', 'module.py'], correctAnswer: 1, explanation: '__init__.py initialise le package.' },
      { id: 'q2', text: 'Comment importer la fonction f du module m ?', options: ['import m.f', 'from m import f', 'include m.f', 'using m.f'], correctAnswer: 1, explanation: 'Syntaxe standard pour extraire un membre.' },
      { id: 'q3', text: 'Que contient la variable __name__ si le script est lancé directement ?', options: ['"__main__"', '"module"', '"script"', '"root"'], correctAnswer: 0, explanation: 'Cela permet de créer des scripts réutilisables en import.' },
      { id: 'q4', text: 'Où Python cherche-t-il les modules importés ?', options: ['Dans le dossier courant', 'Dans PYTHONPATH', 'Dans les dossiers d\'installation', 'Toutes les réponses'], correctAnswer: 3, explanation: 'Python suit un ordre de recherche défini par sys.path.' },
      { id: 'q5', text: 'Comment recharger un module importé sans redémarrer l\'interpréteur ?', options: ['reload(m)', 'importlib.reload(m)', 'import m force', 'm.refresh()'], correctAnswer: 1, explanation: 'La fonction reload se trouve dans le module importlib.' },
      { id: 'q6', text: 'Qu\'est-ce qu\'un namespace package ?', options: ['Un package avec plusieurs noms', 'Un package réparti sur plusieurs dossiers physiques', 'Un package système', 'Un package vide'], correctAnswer: 1, explanation: 'Introduit en Python 3.3, il ne nécessite pas de __init__.py.' }
    ]
  },
  {
    id: 'datetime-mod',
    title: 'Module Datetime',
    level: 'Intermédiaire',
    description: 'Dates et Heures.',
    questions: [
      { id: 'q1', text: 'Comment obtenir la date actuelle ?', options: ['now()', 'datetime.now()', 'date.today()', 'time.current()'], correctAnswer: 1, explanation: 'datetime.now() donne la date et l\'heure précises.' },
      { id: 'q2', text: 'Quelle méthode formate un objet datetime en chaîne ?', options: ['strftime()', 'strptime()', 'format()', 'toString()'], correctAnswer: 0, explanation: 'strftime = String Format Time.' },
      { id: 'q3', text: 'Quelle méthode crée un objet datetime à partir d\'une chaîne ?', options: ['strftime()', 'strptime()', 'parse()', 'toDate()'], correctAnswer: 1, explanation: 'strptime = String Parse Time.' },
      { id: 'q4', text: 'Comment obtenir seulement l\'année d\'un objet dt ?', options: ['dt.getYear()', 'dt.year', 'dt.y', 'year(dt)'], correctAnswer: 1, explanation: 'year est un attribut de l\'objet datetime.' },
      { id: 'q5', text: 'Quel module gère les fuseaux horaires depuis Python 3.9 ?', options: ['pytz', 'timezone', 'zoneinfo', 'time'], correctAnswer: 2, explanation: 'zoneinfo est maintenant inclut dans la librairie standard.' },
      { id: 'q6', text: 'Comment calculer la différence entre deux dates ?', options: ['dt1 - dt2', 'diff(dt1, dt2)', 'dt1.compare(dt2)', 'timedelta(dt1, dt2)'], correctAnswer: 0, explanation: 'La soustraction donne un objet timedelta.' }
    ]
  },
  {
    id: 'random-mod',
    title: 'Module Random',
    level: 'Intermédiaire',
    description: 'Aléatoire.',
    questions: [
      { id: 'q1', text: 'Fonction pour un entier entre a et b inclus ?', options: ['random()', 'randrange()', 'randint()', 'uniform()'], correctAnswer: 2, explanation: 'randint(a, b) inclut les deux bornes.' },
      { id: 'q2', text: 'Comment choisir un élément au hasard dans une liste ?', options: ['random.select()', 'random.choice()', 'random.pick()', 'random.get()'], correctAnswer: 1, explanation: 'choice() est parfait pour les tirages au sort.' },
      { id: 'q3', text: 'Comment mélanger une liste en place ?', options: ['random.shuffle()', 'random.mix()', 'random.sort(random=True)', 'list.shuffle()'], correctAnswer: 0, explanation: 'shuffle() modifie directement la liste fournie.' },
      { id: 'q4', text: 'Quelle fonction donne un flottant entre 0.0 et 1.0 ?', options: ['random.float()', 'random.random()', 'random.val()', 'random.uniform(0, 1)'], correctAnswer: 1, explanation: 'random.random() est la base du module.' },
      { id: 'q5', text: 'Comment obtenir plusieurs éléments uniques au hasard ?', options: ['random.choices()', 'random.sample()', 'random.many()', 'random.take()'], correctAnswer: 1, explanation: 'sample(liste, k) garantit que les k éléments sont différents.' },
      { id: 'q6', text: 'Que fait random.seed(42) ?', options: ['Crée 42 nombres', 'Définit une base pour rendre l\'aléatoire reproductible', 'Empêche l\'aléatoire', 'Accélère le module'], correctAnswer: 1, explanation: 'Le "seed" (graine) permet de fixer la séquence de nombres.' }
    ]
  },
  {
    id: 'f-strings',
    title: 'F-Strings',
    level: 'Intermédiaire',
    description: 'Formatage moderne.',
    questions: [
      { id: 'q1', text: 'Comment formater f"Salut {nom}" ?', options: ['Formatage %', '.format()', 'f-string', 'Template string'], correctAnswer: 2, explanation: 'Introduit en Python 3.6, c\'est le plus rapide.' },
      { id: 'q2', text: 'Peut-on appeler une fonction dans une f-string ?', options: ['Oui', 'Non', 'Seulement si elle retourne une string', 'Seulement via eval()'], correctAnswer: 0, explanation: 'f"Score: {get_score()}" est valide.' },
      { id: 'q3', text: 'Comment arrondir 3.14159 à 2 décimales dans une f-string ?', options: ['{pi:.2f}', '{pi:2}', '{pi.round(2)}', '{round(pi, 2)}'], correctAnswer: 0, explanation: 'Le format :.2f spécifie 2 chiffres après la virgule.' },
      { id: 'q4', text: 'Comment afficher des accolades littérales dans une f-string ?', options: ['\\{ \\}', '{{ }}', '[{ }]', '{! { }'], correctAnswer: 1, explanation: 'On double les accolades pour les échapper.' },
      { id: 'q5', text: 'Les f-strings sont évaluées à quel moment ?', options: ['À la compilation', 'À l\'exécution (runtime)', 'À l\'écriture du code', 'Jamais'], correctAnswer: 1, explanation: 'Elles sont recalculées chaque fois que la ligne est exécutée.' },
      { id: 'q6', text: 'Quelle expression affiche le nom et la valeur d\'une variable x (Python 3.8+) ?', options: ['f"{x=}"', 'f"{x?}"', 'f"val(x)"', 'f"{x.repr()}"'], correctAnswer: 0, explanation: 'f"{x=}" affiche "x=valeur", idéal pour le debug.' }
    ]
  },
  {
    id: 'json-processing',
    title: 'Traitement JSON',
    level: 'Intermédiaire',
    description: 'Sérialisation.',
    questions: [
      { id: 'q1', text: 'Quelle fonction transforme un dict en chaîne JSON ?', options: ['json.parse()', 'json.dumps()', 'json.stringify()', 'json.load()'], correctAnswer: 1, explanation: 'dumps() pour "dump string".' },
      { id: 'q2', text: 'Quelle fonction lit un fichier JSON ?', options: ['json.load()', 'json.loads()', 'json.read()', 'json.get()'], correctAnswer: 0, explanation: 'load() (sans "s") prend un objet fichier en argument.' },
      { id: 'q3', text: 'Quelle fonction analyse une chaîne de caractères JSON ?', options: ['json.decode()', 'json.loads()', 'json.load()', 'json.parse()'], correctAnswer: 1, explanation: 'loads() signifie "load string".' },
      { id: 'q4', text: 'Comment rendre le JSON indenté et lisible (pretty print) ?', options: ['indent=4', 'pretty=True', 'space=4', 'format="json"'], correctAnswer: 0, explanation: 'La méthode dumps accepte un argument indent.' },
      { id: 'q5', text: 'Peut-on sérialiser un objet Python personnalisé directement en JSON ?', options: ['Oui', 'Non (il faut un encodeur personnalisé)', 'Oui avec @json', 'Seulement les classes'], correctAnswer: 1, explanation: 'JSON ne supporte nativement que les types de base (dict, list, int...).' },
      { id: 'q6', text: 'Quel type Python correspond à "null" en JSON ?', options: ['False', 'None', '0', '""'], correctAnswer: 1, explanation: 'Le module json convertit null en None.' }
    ]
  },
  {
    id: 'collections-mod',
    title: 'Module Collections',
    level: 'Intermédiaire',
    description: 'Structures de données spéciales.',
    questions: [
      { id: 'q1', text: 'Lequel compte les occurrences d\'une liste ?', options: ['deque', 'namedtuple', 'Counter', 'defaultdict'], correctAnswer: 2, explanation: 'Counter est un dictionnaire spécialisé pour le comptage.' },
      { id: 'q2', text: 'Quelle structure permet des ajouts rapides aux deux extrémités ?', options: ['list', 'tuple', 'deque', 'heap'], correctAnswer: 2, explanation: 'Double Ended Queue (deque) est optimisée pour cela.' },
      { id: 'q3', text: 'Lequel évite les KeyError en créant une valeur par défaut ?', options: ['Counter', 'defaultdict', 'safe_dict', 'auto_dict'], correctAnswer: 1, explanation: 'On lui passe une "factory" (ex: int, list).' },
      { id: 'q4', text: 'Que permet namedtuple ?', options: ['Donner un nom aux index d\'un tuple', 'Changer la valeur d\'un tuple', 'Trier un tuple', 'Crypter un tuple'], correctAnswer: 0, explanation: 'Plus lisible : p.x au lieu de p[0].' },
      { id: 'q5', text: 'Quelle classe de collections se souvient de l\'ordre des clés ?', options: ['OrderedDict', 'NormalDict', 'SortedDict', 'IndexDict'], correctAnswer: 0, explanation: 'Utile avant Python 3.7 (désormais le dict de base le fait).' },
      { id: 'q6', text: 'Comment obtenir les n éléments les plus fréquents avec Counter ?', options: ['c.top(n)', 'c.most_common(n)', 'c.head(n)', 'c.first(n)'], correctAnswer: 1, explanation: 'most_common() retourne une liste de tuples.' }
    ]
  },
  {
    id: 'math-adv',
    title: 'Mathématiques Intermédiaires',
    level: 'Intermédiaire',
    description: 'Log, Trig, Constantes.',
    questions: [
      { id: 'q1', text: 'Quelle constante donne 3.14159... ?', options: ['math.p', 'math.pi', 'math.circle', 'math.tau'], correctAnswer: 1, explanation: 'Accès simple via le module math.' },
      { id: 'q2', text: 'Quelle fonction calcule le logarithme naturel (base e) ?', options: ['math.log()', 'math.ln()', 'math.log10()', 'math.exp()'], correctAnswer: 0, explanation: 'math.log(x) est le log naturel.' },
      { id: 'q3', text: 'Comment calculer le PGCD de deux nombres ?', options: ['math.gcd()', 'math.pgcd()', 'math.div()', 'math.common()'], correctAnswer: 0, explanation: 'GCD = Greatest Common Divisor.' },
      { id: 'q4', text: 'Quelle fonction vérifie si deux nombres sont proches ?', options: ['math.isclose()', 'math.near()', 'math.approx()', 'math.equals()'], correctAnswer: 0, explanation: 'Utile pour comparer des flottants avec une tolérance.' },
      { id: 'q5', text: 'math.pow(x, y) retourne quel type ?', options: ['int', 'float', 'complex', 'Decimal'], correctAnswer: 1, explanation: 'Contrairement à x**y, math.pow() convertit toujours en float.' },
      { id: 'q6', text: 'Comment calculer le produit d\'une itération ?', options: ['math.sum()', 'math.prod()', 'math.mul()', 'math.calc()'], correctAnswer: 1, explanation: 'math.prod(iterable) multiplie tous les éléments.' }
    ]
  },
  {
    id: 'itertools-basics',
    title: 'Module Itertools',
    level: 'Intermédiaire',
    description: 'Fonctions itératives puissantes.',
    questions: [
      { id: 'q1', text: 'Quelle fonction itère à l\'infini ?', options: ['count()', 'cycle()', 'repeat()', 'Toutes les réponses'], correctAnswer: 3, explanation: 'Ces trois fonctions sont des itérateurs infinis.' },
      { id: 'q2', text: 'Lequel génère toutes les combinaisons possibles sans répétition ?', options: ['permutations()', 'combinations()', 'product()', 'accumulate()'], correctAnswer: 1, explanation: 'combinations(iterable, r) génère des groupes non ordonnés.' },
      { id: 'q3', text: 'Comment faire un produit cartésien de listes ?', options: ['itertools.product()', 'itertools.zip()', 'itertools.chain()', 'itertools.combine()'], correctAnswer: 0, explanation: 'Équivalent à des boucles for imbriquées.' },
      { id: 'q4', text: 'Quelle fonction aplatit plusieurs itérables en un seul ?', options: ['itertools.chain()', 'itertools.flat()', 'itertools.merge()', 'itertools.link()'], correctAnswer: 0, explanation: 'chain([1, 2], [3, 4]) -> 1, 2, 3, 4.' },
      { id: 'q5', text: 'Comment grouper des éléments consécutifs identiques ?', options: ['itertools.cluster()', 'itertools.groupby()', 'itertools.sort()', 'itertools.split()'], correctAnswer: 1, explanation: 'Nécessite souvent que les données soient déjà triées.' },
      { id: 'q6', text: 'Que fait islice(L, 2, 5) ?', options: ['Coupe la liste physiquement', 'Crée un itérateur du 3ème au 5ème élément', 'Copie la liste', 'Supprime les éléments'], correctAnswer: 1, explanation: 'L\'équivalent du slicing pour les itérateurs.' }
    ]
  },
  {
    id: 'os-module',
    title: 'Module OS',
    level: 'Intermédiaire',
    description: 'Système de fichiers.',
    questions: [
      { id: 'q1', text: 'Comment lister les fichiers d\'un dossier ?', options: ['os.ls()', 'os.listdir()', 'os.files()', 'os.walk()'], correctAnswer: 1, explanation: 'listdir() retourne une liste de noms.' },
      { id: 'q2', text: 'Comment créer un dossier ?', options: ['os.mkdir()', 'os.new_dir()', 'os.create()', 'os.path.make()'], correctAnswer: 0, explanation: 'mkdir pour "make directory".' },
      { id: 'q3', text: 'Comment vérifier si un fichier existe ?', options: ['os.exists()', 'os.path.exists()', 'os.file.check()', 'os.path.isfile()'], correctAnswer: 1, explanation: 'Fonction fondamentale pour la sécurité.' },
      { id: 'q4', text: 'Comment joindre des chemins de manière multi-plateforme ?', options: ['a + "/" + b', 'os.path.join(a, b)', 'os.merge(a, b)', 'pathlib.join(a, b)'], correctAnswer: 1, explanation: 'Gère automatiquement les slash ou backslash.' },
      { id: 'q5', text: 'Quelle fonction parcourt récursivement une arborescence ?', options: ['os.listdir()', 'os.walk()', 'os.scan()', 'os.tree()'], correctAnswer: 1, explanation: 'Génère les noms de fichiers dans une structure de répertoire.' },
      { id: 'q6', text: 'Comment supprimer un fichier ?', options: ['os.remove()', 'os.delete()', 'os.rmdir()', 'os.kill()'], correctAnswer: 0, explanation: 'remove() pour les fichiers, rmdir() pour les dossiers vides.' }
    ]
  },
  {
    id: 'slicing',
    title: 'Slicing (Découpage)',
    level: 'Intermédiaire',
    description: 'Extraire des sous-parties.',
    questions: [
      { id: 'q1', text: 'Que fait list[:: -1] ?', options: ['Prend tout', 'Supprime tout', 'Inverse la liste', 'Saute un élément sur deux'], correctAnswer: 2, explanation: 'Technique pythonique pour inverser une séquence.' },
      { id: 'q2', text: 'Comment prendre les 3 premiers éléments ?', options: ['L[3]', 'L[:3]', 'L[0,3]', 'L.take(3)'], correctAnswer: 1, explanation: 'Le début est implicitement 0.' },
      { id: 'q3', text: 'Comment prendre tout sauf le dernier élément ?', options: ['L[:-1]', 'L[0:-2]', 'L.pop()', 'L[1:]'], correctAnswer: 0, explanation: 'L\'index négatif part de la fin.' },
      { id: 'q4', text: 'Que donne "Python"[1:3] ?', options: ['"Py"', '"yt"', '"yth"', '"y"'], correctAnswer: 1, explanation: 'Prend l\'index 1 et 2 ("y" et "t").' },
      { id: 'q5', text: 'Le slicing d\'une liste crée-t-il une copie ?', options: ['Oui', 'Non (c\'est une vue)', 'Seulement pour les strings', 'Seulement si modifié'], correctAnswer: 0, explanation: 'Le slice génère une nouvelle liste.' },
      { id: 'q6', text: 'Comment prendre un élément sur deux ?', options: ['L[::1]', 'L[::2]', 'L[2:]', 'L[1:2]'], correctAnswer: 1, explanation: 'Le troisième paramètre est le pas (step).' }
    ]
  },

  // --- AVANCÉ (41-50) ---
  {
    id: 'generators',
    title: 'Générateurs',
    level: 'Avancé',
    description: 'Yield et itération paresseuse.',
    questions: [
      { id: 'q1', text: 'Quel mot-clé transforme une fonction en générateur ?', options: ['yield', 'return', 'next', 'break'], correctAnswer: 0, explanation: 'yield garde l\'état de la fonction entre les appels.' },
      { id: 'q2', text: 'Combien de fois peut-on appeler yield dans une fonction ?', options: ['Une seule fois', 'Autant de fois qu\'on veut', 'Maximum 10', 'Zéro'], correctAnswer: 1, explanation: 'Chaque appel suspend le générateur.' },
      { id: 'q3', text: 'L\'expression (x*x for x in range(10)) est un...', options: ['Tuple par compréhension', 'Générateur par compréhension', 'Erreur', 'Set'], correctAnswer: 1, explanation: 'Les parenthèses créent un générateur efficient en mémoire.' },
      { id: 'q4', text: 'Quelle méthode avance manuellement le générateur ?', options: ['next()', 'next_val()', 'step()', 'avance()'], correctAnswer: 0, explanation: 'next() déclenche l\'exécution jusqu\'au prochain yield.' },
      { id: 'q5', text: 'Quel état est conservé par un générateur ?', options: ['Les variables locales', 'Le pointeur d\'instruction', 'La pile d\'appels', 'Toutes les réponses'], correctAnswer: 3, explanation: 'C\'est une forme de coroutine.' },
      { id: 'q6', text: 'Que se passe-t-il si on itère sur un générateur épuisé ?', options: ['Il redémarre', 'Il lève StopIteration (silencieusement dans un for)', 'Erreur critique', 'Il renvoie None'], correctAnswer: 1, explanation: 'Un générateur ne peut être parcouru qu\'une seule fois.' }
    ]
  },
  {
    id: 'decorators',
    title: 'Décorateurs',
    level: 'Avancé',
    description: 'Modifier le comportement des fonctions.',
    questions: [
      { id: 'q1', text: 'Quel symbole précède un décorateur ?', options: ['!', '#', '@', '$'], correctAnswer: 2, explanation: '@decorator_name est la syntaxe standard.' },
      { id: 'q2', text: 'Un décorateur peut-il modifier les arguments d\'une fonction ?', options: ['Oui', 'Non', 'Seulement le premier', 'Seulement les strings'], correctAnswer: 0, explanation: 'Le décorateur peut intercepter et modifier les arguments avant l\'appel.' },
      { id: 'q3', text: 'Pourquoi utilise-t-on @functools.wraps(f) ?', options: ['Pour la performance', 'Pour préserver l\'identité et la docstring de f', 'Pour crypter le code', 'Pour gérer les erreurs'], correctAnswer: 1, explanation: 'Sans cela, f.__name__ deviendrait le nom de la fonction interne du décorateur.' },
      { id: 'q4', text: 'Peut-on décorer une classe entière ?', options: ['Oui', 'Non', 'Seulement en Python 2', 'Seulement via héritage'], correctAnswer: 0, explanation: 'Le décorateur reçoit alors la classe et peut la modifier ou la remplacer.' },
      { id: 'q5', text: 'Lequel est un décorateur intégré à Python ?', options: ['@staticmethod', '@classmethod', '@property', 'Toutes les réponses'], correctAnswer: 3, explanation: 'Ce sont les décorateurs de classe les plus courants.' },
      { id: 'q6', text: 'Comment s\'épellent les décorateurs qui acceptent des arguments ?', options: ['Décorateurs complexes', 'Fabriques de décorateurs', 'Méta-décorateurs', 'Décorateurs de second ordre'], correctAnswer: 1, explanation: 'Ce sont des fonctions qui renvoient un décorateur.' },
      { id: 'q7', text: 'Quel est le premier argument reçu par une méthode @classmethod ?', options: ['self', 'cls', 'obj', 'None'], correctAnswer: 1, explanation: 'Python passe automatiquement la classe (souvent nommée cls) en premier argument.' },
      { id: 'q8', text: 'Quelle est la particularité d\'une @staticmethod ?', options: ['Elle ne reçoit ni self ni cls automatiquement', 'Elle est plus rapide que self', 'Elle est privée', 'Elle ne peut pas être héritée'], correctAnswer: 0, explanation: 'Elle se comporte comme une fonction normale placée dans le namespace de la classe.' },
      { id: 'q9', text: 'Dans quel ordre sont exécutés plusieurs décorateurs empilés ?', options: ['De haut en bas', 'De bas en haut (le plus proche de la fonction d\'abord)', 'Aléatoirement', 'Selon l\'ordre alphabétique'], correctAnswer: 1, explanation: 'L\'exécution s\'enroule de l\'intérieur vers l\'extérieur.' },
      { id: 'q10', text: 'Quel décorateur permet de définir une méthode accessible comme un simple attribut ?', options: ['@getter', '@property', '@attribute', '@access'], correctAnswer: 1, explanation: '@property transforme une méthode sans argument en propriété calculée.' },
      { id: 'q11', text: 'Comment définir un setter pour une @property nommée "p" ?', options: ['@p.set', '@p.setter', '@setter.p', '@property.setter(p)'], correctAnswer: 1, explanation: 'La syntaxe exacte est @nom_de_methode.setter.' },
      { id: 'q12', text: 'Comment se comporte une @property si aucune méthode "setter" n\'est définie ?', options: ['Elle est en lecture seule', 'Elle génère une erreur au lancement', 'Elle autorise tout changement', 'Elle est privée'], correctAnswer: 0, explanation: 'Tenter de modifier la valeur lèvera une AttributeError.' },
      { id: 'q13', text: 'Quelle propriété permet d\'accéder à la fonction originale via @functools.wraps ?', options: ['__original__', '__wrapped__', '__func__', '__base__'], correctAnswer: 1, explanation: 'wraps ajoute l\'attribut __wrapped__ pointant vers la fonction d\'origine.' },
      { id: 'q14', text: 'Un décorateur peut-il être implémenté via une classe ?', options: ['Oui, via la méthode __call__', 'Non, seulement via des fonctions', 'Seulement via métaclasses', 'Uniquement en Python 3.12+'], correctAnswer: 0, explanation: 'L\'instance de classe devient alors l\'objet appelable remplaçant la fonction.' },
      { id: 'q15', text: 'Que devient f() si son décorateur oublie l\'instruction "return wrapper" ?', options: ['Elle garde son comportement', 'Elle devient None', 'Elle boucle à l\'infini', 'Elle s\'auto-détruit'], correctAnswer: 1, explanation: 'Python renvoie None par défaut si un return manque, remplaçant ainsi f.' },
      { id: 'q16', text: 'Peut-on utiliser un décorateur uniquement pour "enregistrer" une fonction sans la modifier ?', options: ['Oui', 'Non', 'Seulement pour les API', 'Seulement via import'], correctAnswer: 0, explanation: 'Le décorateur peut simplement ajouter la fonction à une liste de plugins et renvoyer la fonction originale intacte.' },
      { id: 'q17', text: 'Comment définir une méthode de suppression pour une @property nommée "age" ?', options: ['@age.delete', '@age.deleter', '@delete.age', '@property.deleter(age)'], correctAnswer: 1, explanation: 'La syntaxe est @nom_methode.deleter.' },
      { id: 'q18', text: 'Si j\'appelle une @classmethod depuis une instance, quel argument est passé à "cls" ?', options: ['L\'instance elle-même', 'La classe de l\'instance', 'None', 'Une erreur est levée'], correctAnswer: 1, explanation: 'Python trouve automatiquement la classe, même si l\'appel vient d\'une instance.' },
      { id: 'q19', text: 'Quelle est la principale différence d\'accès entre une méthode normale et une @property ?', options: ['Une property s\'appelle avec .p()', 'Une property s\'accède sans parenthèses .p', 'Une property est plus lente', 'Une property est privée'], correctAnswer: 1, explanation: 'Elle simule un attribut, donc les parenthèses d\'appel sont inutiles.' },
      { id: 'q20', text: 'Une @staticmethod peut-elle accéder aux attributs de classe via "self" ?', options: ['Non, elle ne reçoit pas self', 'Oui, toujours', 'Seulement en Python 2', 'Seulement si elle est publique'], correctAnswer: 0, explanation: 'Contrairement aux méthodes d\'instance, statique ne reçoit ni self ni cls.' },
      { id: 'q21', text: 'Quel décorateur permet de créer des propriétés dont la valeur est calculée une seule fois (mise en cache) ?', options: ['@property.memoize', '@functools.cached_property', '@static.property', '@lazy_property'], correctAnswer: 1, explanation: 'Inclus dans functools, il transforme une méthode en propriété dont le résultat est stocké après le premier calcul.' }
    ]
  },
  {
    id: 'inheritance-adv',
    title: 'Héritage Avancé',
    level: 'Avancé',
    description: 'Super(), MRO.',
    questions: [
      { id: 'q1', text: 'Comment appeler le constructeur de la classe parente ?', options: ['parent.__init__()', 'super().__init__()', 'this.__init__()', 'base()'], correctAnswer: 1, explanation: 'super() trouve le parent correct via le MRO.' },
      { id: 'q2', text: 'Que signifie MRO ?', options: ['Main Root Object', 'Method Resolution Order', 'Multiple Resource Operator', 'Module Run Optimization'], correctAnswer: 1, explanation: 'C\'est l\'algorithme utilisé par Python pour trouver une méthode dans l\'héritage multiple.' },
      { id: 'q3', text: 'Peut-on hériter de plusieurs classes à la fois ?', options: ['Oui', 'Non', 'Seulement 2', 'Seulement via des interfaces'], correctAnswer: 0, explanation: 'Python supporte totalement l\'héritage multiple.' },
      { id: 'q4', text: 'Qu\'est-ce que le problème du diamant ?', options: ['Une erreur de syntaxe', 'Un conflit d\'héritage multiple quand deux parents ont le même ancêtre', 'Une lenteur d\'exécution', 'Un plugin coûteux'], correctAnswer: 1, explanation: 'Python le résout gracieusement via l\'algorithme C3.' },
      { id: 'q5', text: 'Quelle fonction permet de voir l\'ordre de résolution des méthodes d\'une classe ?', options: ['Classe.mro()', 'Classe.order()', 'repr(Classe)', 'vars(Classe)'], correctAnswer: 0, explanation: 'Cela retourne une liste des classes parentes dans l\'ordre de recherche.' },
      { id: 'q6', text: 'Comment forcer l\'utilisation d\'une classe parente spécifique ?', options: ['GrandParent.__init__(self)', 'super(Parent, self).__init__()', 'C\'est impossible', 'Via un décorateur'], correctAnswer: 0, explanation: 'On peut appeler la méthode de classe du parent en passant explicitement self.' }
    ]
  },
  {
    id: 'context-managers',
    title: 'Context Managers',
    level: 'Avancé',
    description: 'Le bloc "with".',
    questions: [
      { id: 'q1', text: 'Quelles méthodes dunder implémentent un context manager ?', options: ['__init__, __del__', '__enter__, __exit__', '__start__, __end__', '__open__, __close__'], correctAnswer: 1, explanation: 'Permet la gestion automatique des ressources.' },
      { id: 'q2', text: 'Quel mot-clé active un context manager ?', options: ['with', 'use', 'using', 'open'], correctAnswer: 0, explanation: 'Le bloc with garantit le nettoyage de l\'objet.' },
      { id: 'q3', text: 'Que se passe-t-il si une exception survient dans le bloc with ?', options: ['Elle est ignorée', '__exit__ est quand même appelé', 'Le programme crash immédiatement', 'Le fichier reste ouvert'], correctAnswer: 1, explanation: '__exit__ reçoit l\'exception et peut décider de la propager ou non.' },
      { id: 'q4', text: 'Quel module aide à créer des context managers rapidement ?', options: ['contextlib', 'manager', 'with_tools', 'sys'], correctAnswer: 0, explanation: 'Offre notamment le décorateur @contextmanager.' },
      { id: 'q5', text: 'Peut-on utiliser plusieurs context managers dans une seule ligne ?', options: ['Oui, séparés par une virgule', 'Non', 'Seulement 2', 'Seulement au pluriel'], correctAnswer: 0, explanation: 'with A() as a, B() as b: est valide.' },
      { id: 'q6', text: 'Que doit retourner __enter__ ?', options: ['L\'objet à utiliser', 'True/False', 'None', 'L\'erreur'], correctAnswer: 0, explanation: 'L\'objet retourné est assigné à la variable après le "as".' }
    ]
  },
  {
    id: 'dunder-methods',
    title: 'Méthodes Dunder (Magiques)',
    level: 'Avancé',
    description: '__str__, __repr__, __len__.',
    questions: [
      { id: 'q1', text: 'Quelle méthode définit l\'affichage "user-friendly" d\'un objet ?', options: ['__repr__', '__format__', '__str__', '__print__'], correctAnswer: 2, explanation: '__str__ est pour les humains, __repr__ pour le débug.' },
      { id: 'q2', text: 'Quelle méthode permet d\'utiliser l\'objet comme une fonction ?', options: ['__exec__', '__call__', '__run__', '__func__'], correctAnswer: 1, explanation: 'objet() déclenche __call__.' },
      { id: 'q3', text: 'Quelle méthode définit le comportement de "==" ?', options: ['__equal__', '__eq__', '__same__', '__compare__'], correctAnswer: 1, explanation: '__eq__ pour Equal.' },
      { id: 'q4', text: 'Comment s\'appelle la méthode pour l\'accès aux attributs inexistants ?', options: ['__getattr__', '__get__', '__missing__', '__unknown__'], correctAnswer: 0, explanation: 'Intercepté quand l\'attribut normal n\'est pas trouvé.' },
      { id: 'q5', text: 'Quelle méthode définit le comportement de "in" ?', options: ['__has__', '__contains__', '__in__', '__search__'], correctAnswer: 1, explanation: '__contains__ doit renvoyer un booléen.' },
      { id: 'q6', text: 'Que fait __repr__ de différent de __str__ ?', options: ['Rien', 'Il est censé être une représentation non ambiguë pour le débugger', 'Il est plus rapide', 'Il est privé'], correctAnswer: 1, explanation: 'Idéalement, eval(repr(obj)) == obj.' }
    ]
  },
  {
    id: 'property-decorator',
    title: '@property',
    level: 'Avancé',
    description: 'Gestion des attributs.',
    questions: [
      { id: 'q1', text: '@property transforme une méthode en...', options: ['Variable globale', 'Attribut en lecture seule', 'Statique', 'Générateur'], correctAnswer: 1, explanation: 'Permet d\'accéder à une méthode comme à un attribut.' },
      { id: 'q2', text: 'Comment définir un "setter" pour une propriété "age" ?', options: ['@age.setter', '@setter.age', '@property.set(age)', 'def set_age(self, val):'], correctAnswer: 0, explanation: 'Syntaxe @name.setter.' },
      { id: 'q3', text: 'Peut-on supprimer une propriété via un "deleter" ?', options: ['Oui via @name.deleter', 'Non', 'Seulement pour les listes', 'Seulement via __del__'], correctAnswer: 0, explanation: 'Permet de gérer le nettoyage lors de del obj.name.' },
      { id: 'q4', text: 'Quel est le bénéfice principal de @property ?', options: ['Vitesse', 'Encapsulation (valider les données lors de l\'accès/modification)', 'Moins de code', 'Sécurité'], correctAnswer: 1, explanation: 'Idéal pour garder une API propre tout en ajoutant de la logique.' },
      { id: 'q5', text: 'Une méthode décorée par @property prend-elle des arguments ?', options: ['Non (seulement self)', 'Oui', 'Seulement un entier', 'Seulement via *args'], correctAnswer: 0, explanation: 'Comme c\'est un "getter", elle ne prend pas d\'argument supplémentaire.' },
      { id: 'q6', text: 'Peut-on utiliser @property sur des méthodes de classe ?', options: ['Non (seulement instance)', 'Oui', 'Seulement avec @classmethod', 'Seulement en Python 3.10+'], correctAnswer: 1, explanation: 'Bien que rare, c\'est techniquement possible en combinant les décorateurs.' }
    ]
  },
  {
    id: 'meta-programming',
    title: 'Métaclasses Introduction',
    level: 'Avancé',
    description: 'Classes qui créent des classes.',
    questions: [
      { id: 'q1', text: 'Par défaut, quelle est la métaclasse de toute classe Python ?', options: ['object', 'type', 'Class', 'MainMeta'], correctAnswer: 1, explanation: 'type est à la fois une fonction et une métaclasse.' },
      { id: 'q2', text: 'Comment spécifier une métaclasse personnalisée ?', options: ['metaclass=MaMeta', 'meta MaMeta:', 'MaMeta(Classe):', '@metaclass(MaMeta)'], correctAnswer: 0, explanation: 'On le met dans la définition de classe: class A(metaclass=M).' },
      { id: 'q3', text: 'Quelle méthode de métaclasse crée physiquement l\'objet classe ?', options: ['__init__', '__new__', '__call__', '__create__'], correctAnswer: 1, explanation: '__new__ reçoit les arguments nécessaires pour construire la classe.' },
      { id: 'q4', text: 'Quand une métaclasse est-elle exécutée ?', options: ['À l\'import du module (quand la classe est définie)', 'À l\'instanciation de l\'objet', 'À chaque appel de méthode', 'Jamais'], correctAnswer: 0, explanation: 'Elle intervient lors de la "création" de la classe elle-même.' },
      { id: 'q5', text: 'Quel est le but d\'une métaclasse ?', options: ['Contrôler la création et le comportement des classes', 'Sécuriser le code', 'Accélérer Python', 'Remplacer l\'héritage'], correctAnswer: 0, explanation: 'C\'est l\'outil ultime de personnalisation POO.' },
      { id: 'q6', text: 'Peut-on utiliser __init_subclass__ comme alternative simple ?', options: ['Oui (depuis Python 3.6)', 'Non', 'Seulement pour les petits projets', 'Seulement pour les plugins'], correctAnswer: 0, explanation: 'Permet de personnaliser les classes enfants sans métaclasse complexe.' }
    ]
  },
  {
    id: 'asyncio-basics',
    title: 'Asyncio : Les bases',
    level: 'Avancé',
    description: 'Programmation asynchrone.',
    questions: [
      { id: 'q1', text: 'Quel mot-clé attend la fin d\'une coroutine ?', options: ['wait', 'pause', 'await', 'stop'], correctAnswer: 2, explanation: 'await suspend l\'exécution jusqu\'au résultat.' },
      { id: 'q2', text: 'Quelle fonction lance la boucle d\'événements principale (Asyncio) ?', options: ['run()', 'asyncio.run()', 'asyncio.start()', 'asyncio.main()'], correctAnswer: 1, explanation: 'Méthode recommandée en Python 3.7+.' },
      { id: 'q3', text: 'Comment définit-on une coroutine ?', options: ['def async f():', 'async def f():', 'coroutine def f():', 'def f() async:'], correctAnswer: 1, explanation: 'async def crée un objet coroutine.' },
      { id: 'q4', text: 'Peut-on utiliser await à l\'extérieur d\'une fonction async ?', options: ['Non (SyntaxError)', 'Oui', 'Seulement dans le module principal', 'Seulement avec un import'], correctAnswer: 0, explanation: 'await doit être dans un contexte asynchrone.' },
      { id: 'q5', text: 'Quel objet représente un résultat futur qui n\'est pas encore prêt ?', options: ['Promise', 'Future', 'Task', 'Awaitable'], correctAnswer: 1, explanation: 'Les Futures sont au coeur de l\'asynchrone.' },
      { id: 'q6', text: 'Comment exécuter plusieurs coroutines en parallèle ?', options: ['asyncio.gather()', 'asyncio.all()', 'asyncio.run_parallel()', 'asyncio.parallelize()'], correctAnswer: 0, explanation: 'gather() attend que toutes soient finies et renvoie les résultats.' }
    ]
  },
  {
    id: 'recursion-limit',
    title: 'Récursion',
    level: 'Avancé',
    description: 'Fonctions qui s\'appellent elles-mêmes.',
    questions: [
      { id: 'q1', text: 'Quelle erreur survient si la récursion est trop profonde ?', options: ['InfiniteError', 'StackOverflow', 'RecursionError', 'DeepError'], correctAnswer: 2, explanation: 'Python a une limite de sécurité par défaut.' },
      { id: 'q2', text: 'Quelle est la limite de récursion par défaut (environ) ?', options: ['100', '1000', '10000', 'Illimitée'], correctAnswer: 1, explanation: 'Souvent fixée à 1000 pour éviter les crashs systèmes.' },
      { id: 'q3', text: 'Comment désactiver la limite de récursion ?', options: ['On ne peut pas (c\'est risqué)', 'sys.setrecursionlimit(0)', 'sys.setrecursionlimit(9**9)', 'Option 1 ou 3'], correctAnswer: 3, explanation: 'Prudence : une pile infinie fera planter le processus.' },
      { id: 'q4', text: 'Qu\'est-ce que l\'optimisation des appels terminaux (TCO) ?', options: ['Une technique pour économiser la pile', 'Pas supportée nativement en Python', 'Les deux', 'Un module tiers'], correctAnswer: 2, explanation: 'Python ne supporte pas le TCO pour garder des traces de pile claires.' },
      { id: 'q5', text: 'Une boucle while est-elle généralement préférable à la récursion en Python ?', options: ['Oui (plus de performance et pas de limite de pile)', 'Non', 'Seulement pour les calculs mathématiques', 'Seulement si elle est courte'], correctAnswer: 0, explanation: 'En Python, l\'approche itérative est souvent plus sûre.' },
      { id: 'q6', text: 'Comment transformer un algo récursif en itératif ?', options: ['En utilisant une pile personnalisée (stack)', 'C\'est impossible', 'En utilisant une classe', 'Via un décorateur'], correctAnswer: 0, explanation: 'N\'importe quel algorithme récursif peut être écrit avec une boucle et une pile.' }
    ]
  },
  {
    id: 'garbage-collection',
    title: 'Gestion de la Mémoire',
    level: 'Avancé',
    description: 'Garbage Collector.',
    questions: [
      { id: 'q1', text: 'Quel mécanisme principal Python utilise-t-il ?', options: ['Manuel', 'Comptage de références', 'Tracing seulement', 'Il n\'en a pas'], correctAnswer: 1, explanation: 'Python compte les références et utilise un GC pour les cycles.' },
      { id: 'q2', text: 'Comment forcer le passage du Garbage Collector ?', options: ['gc.collect()', 'gc.run()', 'os.clean()', 'sys.free()'], correctAnswer: 0, explanation: 'Le module gc permet de gérer manuellement le cycle.' },
      { id: 'q3', text: 'Qu\'est-ce que les "cycles de références" ?', options: ['Des boucles infinies', 'Deux objets qui se pointent mutuellement', 'Une erreur de pointeur', 'Une structure optimisée'], correctAnswer: 1, explanation: 'Le GC est nécessaire pour libérer ces objets car leur compteur ne tombe jamais à zéro.' },
      { id: 'q4', text: 'Que fait "import gc; gc.disable()" ?', options: ['Désactive le comptage de références', 'Désactive le ramasse-miettes cyclique', 'Supprime tous les objets', 'Plante Python'], correctAnswer: 1, explanation: 'Le comptage de références continue, mais les cycles ne seront plus nettoyés.' },
      { id: 'q5', text: 'Lequel est un "Weak Reference" ?', options: ['Une référence qui n\'empêche pas la suppression par le GC', 'Une référence brisée', 'Une variable locale', 'Un alias'], correctAnswer: 0, explanation: 'Utile pour les caches sans créer de fuites mémoires.' },
      { id: 'q6', text: 'Quel module permet de voir le nombre de références d\'un objet ?', options: ['sys.getrefcount()', 'gc.count()', 'id()', 'memoryview()'], correctAnswer: 0, explanation: 'Attention, l\'appel lui-même rajoute une référence temporaire.' }
    ]
  }
];

export const PLAYGROUND_EXAMPLES: PlaygroundExample[] = [
  {
    id: 'hello-world',
    title: 'Hello Python',
    description: 'Le point de départ classique pour tout développeur.',
    code: 'print("Bonjour depuis PythonLab !")\nname = "Apprenant"\nprint(f"Prêt pour coder, {name} ?")'
  },
  {
    id: 'fibonacci',
    title: 'Suite de Fibonacci',
    description: 'Générer une suite de nombres où chaque nombre est la somme des deux précédents.',
    code: 'def fibonacci(n):\n    a, b = 0, 1\n    result = []\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result\n\nprint(fibonacci(10))'
  },
  {
    id: 'list-comp',
    title: 'Compréhension de Listes',
    description: 'Une manière élégante et concise de créer des listes en Python.',
    code: '# Créer une liste de carrés des nombres pairs\nsquares = [x**2 for x in range(10) if x % 2 == 0]\nprint(f"Carrés des pairs : {squares}")'
  },
  {
    id: 'decorators-demo',
    title: 'Démo Décorateur',
    description: 'Voyez comment un décorateur peut ajouter du comportement à une fonction.',
    code: 'def debug(func):\n    def wrapper(*args, **kwargs):\n        print(f"Appel de {func.__name__} avec {args}")\n        return func(*args, **kwargs)\n    return wrapper\n\n@debug\ndef addition(a, b):\n    return a + b\n\nprint(f"Résultat : {addition(5, 7)}")'
  },
  {
    id: 'context-mgr',
    title: 'Gestionnaire de Contexte',
    description: 'Créez vos propres context managers avec __enter__ et __exit__.',
    code: 'class TempFileSimulation:\n    def __enter__(self):\n        print("Ouverture de la ressource...")\n        return self\n    \n    def __exit__(self, exc_type, exc_val, exc_tb):\n        print("Fermeture automatique sécurisée.")\n\nwith TempFileSimulation():\n    print("Traitement en cours dans le bloc...")'
  },
  {
    id: 'generators',
    title: 'Générateurs',
    description: 'Produisez des valeurs de manière paresseuse (lazy) pour économiser la mémoire.',
    code: 'def compte_a_rebours(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor nombre in compte_a_rebours(5):\n    print(nombre)\nprint("Lancement !")'
  },
  {
    id: 'lambda-map',
    title: 'Lambda & Map',
    description: 'Utilisation de fonctions anonymes pour transformer des données.',
    code: 'prix_ht = [10, 25, 40, 100]\nprix_ttc = list(map(lambda x: x * 1.2, prix_ht))\nprint(f"HT : {prix_ht}")\nprint(f"TTC (TVA 20%) : {prix_ttc}")'
  },
  {
    id: 'args-kwargs-demo',
    title: 'Args & Kwargs',
    description: 'Gérez un nombre variable d\'arguments dans vos fonctions.',
    code: 'def demo_arguments(*args, **kwargs):\n    for i, arg in enumerate(args):\n        print(f"Positionnel {i}: {arg}")\n    for k, v in kwargs.items():\n        print(f"Nommé {k}: {v}")\n\ndemo_arguments("A", "B", ville="Paris", score=100)'
  },
  {
    id: 'set-ops',
    title: 'Opérations sur Sets',
    description: 'Manipulation efficace d\'ensembles uniques.',
    code: 'amateurs_python = {"Alice", "Bob", "Charlie"}\namateurs_js = {"Bob", "David", "Charlie"}\n\ncommuns = amateurs_python & amateurs_js\ntous = amateurs_python | amateurs_js\nprint(f"Fans des deux : {communs}")\nprint(f"Total fans uniques : {tous}")'
  },
  {
    id: 'decorators-adv',
    title: 'Décorateurs avec Arguments',
    description: 'Créez des décorateurs qui acceptent des paramètres de configuration.',
    code: 'def repete(n):\n    def decorateur(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorateur\n\n@repete(3)\ndef salue(nom):\n    print(f"Salut {nom} !")\n\nsalue("Python")'
  },
  {
    id: 'abstract-base-classes',
    title: 'Classes Abstraites',
    description: 'Définissez des interfaces strictes avec le module abc.',
    code: 'from abc import ABC, abstractmethod\n\nclass Forme(ABC):\n    @abstractmethod\n    def aire(self):\n        pass\n\nclass Carre(Forme):\n    def __init__(self, cote):\n        self.cote = cote\n    def aire(self):\n        return self.cote ** 2\n\nc = Carre(5)\nprint(f"Aire du carré : {c.aire()}")'
  },
  {
    id: 'itertools-demo',
    title: 'Module Itertools',
    description: 'Outils puissants pour manipuler les itérateurs.',
    code: 'from itertools import cycle, islice\n\ncouleurs = cycle(["Rouge", "Vert", "Bleu"])\npremier_six = list(islice(couleurs, 6))\nprint(f"Cycle infini limité à 6 : {premier_six}")'
  }
];
