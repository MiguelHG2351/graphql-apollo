# Fragment

Los fragment ayudan a no repetir el mismo patrón en querys que requieren los mismos datos

```graphql

fragment data on Character {
  id
  race
}

```

# nombrar datos

```graphql

query {
  ids: getCharacters {
    id
    ...data
}

```

se puede enumerar el nombre de cada query para saber que datos alamacena
con un spread operator se puede iterar todo el fragment

# Enums

Dan un Valor constante, representa en los tipos de datos de las variables