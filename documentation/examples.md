# Examples

This page will list a few common cases (bi-directional data binding, state-lift and injection, styling) and provides snippets for each of the three langauges. 

## Use case: two-way data binding (e.g. form input binding)

#### React
```jsx
// React

import { useState } from 'react';

export default function PlayerName (props) {
    
    let [ name, setName ] = useSate("Amos");
    
    return (
        <input type="text" placeholder="Input Name" value={name} onInput={(e) => setName(e.target.value)} />
    )
}
```

#### Svelte
```html
<!-- Svelte -->

<script>
    let name;
</script>
<input bind:value={name} type="text" placeholder="Input Name" />
```

#### Svelte
```html
<!-- Vue -->

<script>
    export default {
        data() {
            return {
                name: "Amos"
            }
        }
    }
</script>
<input :value="name" type="text" placeholder="Input Name" />
```