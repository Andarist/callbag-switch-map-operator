const map = require('callbag-map');
const flatten = require('callbag-flatten');

const switchmap = mapper => source => flatten(map(mapper)(source))

/*
If I write the above without pipes, it'd be a bit impenetrable:
```js
const switchmap = (mapper, flattener = ((_, result) => result)) => source => flatten(
    map(orig => map(next => flattener(orig, next))(mapper(orig)))(source));
```
However, this is a straightforward generalization of the example given in `callbag-flatten`.

The nested pipes in this implementation are always used with provided sources, so the output of `switchmap` should be
readily usable in yet-more-nested pipes.
*/

module.exports = switchmap;
