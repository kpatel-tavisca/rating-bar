## Usage
To use element:

```html
<!-- Linear Rating Bar -->
<orxe-rating-bar rating="7" label="Location"></orxe-rating-bar>

<!-- Donut Rating Bar -->
<orxe-rating-donut rating="8" label="Location"></orxe-rating-donut>

```
## Purpose

To provide custom components for **Linear** and **Donut Rating Bars**
Both components except **Rating** and **Label**.
**Rating** is out of **10**
**Label** is needed as display property for **Linear Rating Bar** and is needed for **Screen Readers** to describe the displayed **Graphics** in both the components.
For design specs please refer [Rating Bars 0.2](https://tavisca.atlassian.net/wiki/spaces/ORXE3/pages/666374721/Rating+Bars+0.2)

## Development
The component will comply with the [Custom Elements specification](https://w3c.github.io/webcomponents/spec/custom/ "https://w3c.github.io/webcomponents/spec/custom/").

## Constructor
`orxe-rating-bar` custom web component was created by extending `TranslationClass` from **@orxe-culture/lit** which extends `LitElement`. The Web Component syntax is:

```js

@customElement('orxe-rating-bar')
export  default  class  OrxeRatingBar  extends  TranslationClass{  
	...  
}

```
`orxe-rating-donut` custom web component was created by extending `OrxeRatingBar` class.
```js

@customElement('orxe-rating-donut')
export  default  class  OrxeRatingDonut extends  OrxeRatingBar {  
	...  
}

```

## Properties
_orxe-rating-bar_

|**Name** |**Attribute**|**Access Modifier**|**Description**                                                      |**Type**|**Default**|
|---------|-------------|-------------------|---------------------------------------------------------------------| ------ |-----------|
| Rating  | `rating`    |         public    | Value represented by the rating bar                                 | Number |   `0`     |
| Label   | `label`     |         public    | Displayed for Linear Bar and used for `Screen Readers` in both Bars | String |   `''`    |

_orxe-rating-donut_
|**Name**        |**Attribute**      |**Access Modifier**|**Description**                                                      |**Type**|**Default**|
|----------------|-------------------|-------------------|---------------------------------------------------------------------| ------ |-----------|
| Rating         | `rating`          |         public    | Available through `inheritance` from `orxe-rating-bar`              | Number |   `0`     |
| Label          | `label`           |         public    | Available through `inheritance` from `orxe-rating-bar`              | String |   `''`    |
| Container Size | `CONTAINER_WIDTH` |         CONSTANT  | Specifies the size of Donut Container                               | Number |   `40`    |
| Stroke Width   | `STROKE_WIDTH`    |         CONSTANT  | Specifies the width of Stoke of Donut `Circle`                      | Number |   `4`     |

## Methods
_orxe-rating-bar_
|**Name**          | **Signature**                  | **Access Modifier**|**Description**                                                                                                          |
|------------------|--------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------|
| `getRatingColor` | `getRatingColor() : String {}` | Public             | Returns a `String` representation of CSS `var()`  with CSS Variables for `COLOR` code as per the Rating                 |
| `getStyleProps`  | `getStyleProps(): StyleInfo {}`| Public             | Uses `getRatingColor` to get appropriate `COLOR` for the rating bar and returns `background: linear-gradient(...)` style|

_orxe-rating-donut_
|**Name**          | **Signature**                  | **Access Modifier**|**Description**                                                                                                          |
|------------------|--------------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------|
| `getDonutProps`  | `getDonutProps() {}`           | Public             | Returns an object with `normalizedRadius`,`circumference`,`offset` properties for `circle`                              |
| `getRatingColor` |  `getRatingColor() : String {}`| Public             | Available through `inheritance` from `orxe-rating-bar`                                                                  |


## Styling

`Track Stroke Colors`
| **Custom Property**   | **Description**           | **Default**                |
|---------------------  |------------------------   |----------------------------|
| `--rating-excellent`  | `8.5 <= rating <= 10`     | `--primary`, `#238738`     |
| `--rating-great`      | `7 <= rating < 8.5`       | `--rating-great`, `#67AB04`|
| `--rating-average`    | `5 <= rating < 7`         | `--warning`, `#D99B22`     |
| `--rating-poor`       | `3 <= rating < 5`         |  `--rating-poor`, `#D97322`|
| `--rating-bad`        | `1 <= rating < 3`         | `--error`, `#D9222A`       |
| `--rating-track-color`| Base color for no `rating`| `--separator-01`, `#E1E6ED`|

| **Custom Property**      | **Description**                                              | **Default**                            |
|--------------------------|--------------------------------------------------------------|----------------------------------------|
| `font-family`            | Font family for the texts                                    | `--primary-font-family`, `sans-serif`  |
| `color`                  | Font color for the texts                                     |  `--primary-text`, `#242C38`           |
|`font-weight`             | Font weight for the texts                                    | `--font-weight-semi-bold`, `600`       |
|`--rating-donut-font-size`| Font size for rating text in donut bar, Cannot be overridden | `1.4rem`                               |
| `--rating-bar-font-size` | Font size for rating text in linear bar, Cannot be overridde | `1.6rem`                               |

## ADA Compliance
Graphics will be announced as `Graphic` by `Screen Readers` along with its description provided by `aria-label`.
The description is combination of `label` and `rating` property.



## Test Scenarios

 1. `rating` and `label` should be updated correctly.

2. Different `rating`  `COLOR` should be correctly displayed as per design docs

| **Rating Range**| **CSS Color Variable** | **Default Value** |
|-----------------|------------------------|-------------------|
| `8.5-10.0`      | `--rating-excellent`   | `#238738`         |
| `7.0-8.5`       | `--rating-great`       | `#67AB04`         |
| `5.0-7.0`       | `--rating-average`     | `#D99B22`         |
| `3.0-5.0`       | `--rating-poor`        | `#D97322`         |
| `1.0-3.0`       | `--rating-bad`         | `#D9222A`         |
| Any other Value | `--separator-01`       | `#E1E6ED`         |


