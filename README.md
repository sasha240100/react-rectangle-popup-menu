# react-rectangle-popup-menu
React rectangle popup menu library

![](./assets/record.gif)

### `<PopupMenu />`

```jsx
class Popup {
  render() {
    <PopupMenu>
    	// Content
    </PopupMenu>
  }
}
```

#### Parameters for `<PopupMenu />`

```
{
	width: ?number = 200,
	height: ?(number | 'auto') = 'auto', // If auto it's minimized to rows size
	direction: ?('top' | 'bottom' | 'left' | 'right') = 'top'
}

### `<PopupTable />`

```jsx
import FontAwesome from 'react-fontawesome';

const button = (<FontAwesome name="rocket" size="2x" />);

class Popup {
  render() {
    <PopupMenu width={190} direction="bottom" button={button}>
      <PopupTable rowItems={4}>
        <FontAwesome name="google-plus-square" size="2x" />
        <FontAwesome name="twitter-square" size="2x" />
        <FontAwesome name="google" size="2x" />
        <FontAwesome name="google" size="2x" />

        <FontAwesome name="facebook-official" size="2x" />
        <FontAwesome name="twitter-square" size="2x" />
        <FontAwesome name="spotify" size="2x" />
        <FontAwesome name="twitter-square" size="2x" />

        <FontAwesome name="google-plus-square" size="2x" />
        <FontAwesome name="google" size="2x" />
        <FontAwesome name="twitter-square" size="2x" />
      </PopupTable>
    </PopupMenu>
  }
}
```

#### Parameters for `<PopupTable />`

```
{
	// Items per row (used to generate normal width of placeholder)
	rowItems: ?number = 1
}
```

### `<PopupText />`
```jsx
class Popup {
  render() {
    <PopupMenu width={190} direction="bottom" button={button}>
      <PopupText>Some text</PopupText>
    </PopupMenu>
  }
}
```