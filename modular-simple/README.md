# Simple modular architecture

### Layers:

[ pages ] -> [ modules ] -> [ components ] -> [ UI ]

## Principles
- Thin pages just with modules triggering
- All logic inside modules
- Use oneway dataflow. Only UPPER LAYER can import lover layer and not in the opposite way.
- Every module is independent and can't import logic from another module. Communication between modules only on the pages layer 

## Advantages

- Isolated modules with PUBLIC API
- Oneway data flow `page-module-component-ui`
- Re-usability using layers
- Flexibility
- Thin pages. All logic inside modules

## Disadvantages

- Not clear enough when move code in components when in modules
- What to do when one module should be used inside another module? Ok, use them in pages layer but what if we have the same logic on different pages?
- Where keep the business entities for example `Product`, `Article`, `User` etc.
- Invisible relations on the global level like global `store`, `helpers`, `constants` will continue to appear.

## When to use

- App has solid modules
- For middle complexity sites and portals