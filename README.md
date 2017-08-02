# html2any ReactNative Demo
> try to translate html into React Native Components

## Theory

use `html2any` to construct an AST of html string, then convert each node recursively into React Native Component.
For example, we translate `<p>` tag into `<Text style={styles.paragraph}>` with the prepared styles. Then decode the p tag' s content to avoid html entities mess up.

Example HTML

```html
<p>
  &amp;123
</p>
```

will be converted into structure below

```js
{
  name: 'p',
  attribues: {},
  children: '&amp;123',
}
```

Then we'll convert the ast to the following component

```js
<Text style={styles.paragraph}>
  &123
</Text>
```

👆 one more space in text content before `123`.
