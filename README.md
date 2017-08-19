# html2any ReactNative Demo
> try to translate html into React Native Components

![demo](https://raw.githubusercontent.com/huozhi/html2any-rn-demo/master/public/html2any-rn-demo.png)

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
