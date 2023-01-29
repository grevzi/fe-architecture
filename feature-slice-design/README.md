# Feature slice design

### Definitions:

[ layer ] -> [ slice (module) ] -> [ segment ]

### Layers:

- app
- processes
- pages
- widgets
- features
- entities
- shared

Each layer include inside `slices`/`modules`. 
Each slice have `segments` inside:
- UI
- model
- lib
- config
- api
- constants

## Layer usages

| Layer     | Can use                                                      | Can be used by                                            |
|-----------|--------------------------------------------------------------|-----------------------------------------------------------|
| app       | `processes` `pages` `widgets` `features` `entities` `shared` | .                                                         |
| processes | `pages` `widgets` `features` `entities` `shared`             | `app`                                                     |
| pages     | `widgets` `features` `entities` `shared`                     | `app` `processes`                                         |
| widgets   | `features` `entities` `shared`                               | `app` `processes` `pages`                                 |
| features  | `entities` `shared`                                          | `app` `processes` `pages` `widgets`                       |
| entities  | `shared`                                                     | `app` `processes` `pages` `widgets` `features`            |
| shared    | .                                                            | `app` `processes` `pages` `widgets` `features` `entities` |


## Principles
- Layers are for grouping lover layers 
- Layers are zones of responsibility. Lower layer is more abstract and higher layer is more predmet 
- Layer give possibility to make a data flow linear and avoid hidden connections between modules
- 

## Advantages

- Discoverability
- Adaptability
- Standartisation
- Scalability
- Framework-agnostic
- Explicitness and Control