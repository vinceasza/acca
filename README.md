#Static

1. Delete repo files from directory (rm -rf .git README.md)
2. Must run on a server - see <a href="https://www.apachefriends.org/index.html">XAMPP</a>
3. Install <a href="http://gulpjs.com/">Gulp</a> globally.
4. Navigate to the `assets` folder on the command line and run `$ npm install` (this will download the node_modules folder required for Gulp
5. Once installed run `$ gulp` - This will now watch for changes and compile automatically

##Sass Mixins

###Media Queries

Assuming a 'mobile first' build process. Override element styles based on that specific element, rather than 'mobile, tablet, desktop' etc. This will create a more flexible and fluid layout rather than having several major break-points.

```scss
.element {
  width: 100%;

  @include mq(600) {
    width: 50%;
  }
}
```

Compiles to:

```scss
.element {
  width: 100%;
}

@media (min-width: 600px) {
  .element {
    width: 50%;
  }
}
```

Variables also include max and height, rather than the defaults, min and width.

```scss
.element {
  @include mq(600, max, height) {
    width: 100%;
  }
}
```

###Font Icons

Declare your icons in `variables.scss` like so:

````scss
$icons: (
  "facebook": "\e900",
  "twitter": "\e90f"
);
````

Asign before or after, the icon name, then any further stylings inside the curly brackets.

````scss
.facebook-icon {
  @include icon(before, facebook) {
    color: #000;
  };
}
````

Compiles to:

```scss
.facebook-icon:before {
  content: "\e900";
  color: #000;
}
```
Or add `icon-` followed by the icon name as a class to any element. This will create a `before` inside the element. Only use `<i></i>` for self-contained icons.

````html
<i class="icon-facebook"></i>
````

###Retina

Start with a normal resolution base, then override with retina. For example:

```scss
.element {
  background-image: url('logo.png');

  @include retina {
    background-image: url('logo@2x.png');
  }
}
```

###Clearfix

```scss
.element {
  @include clearfix();
}
```

###RGBA Background

RGBA background color with solid colour fallback. Also converts hex to rgb so you can use SASS variables.

```scss
  @include rgba-background($alpha, 0.5);
```

##Misc

###Ellipsis/Line Clamping

````html
<div class="product-description" data-max-lines="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
````

Renders as:

````
Lorem ipsum dolor sit
amet, consectetur adipi...
````

###Placeholder

```scss
form {
  input, textarea {
    &::-webkit-input-placeholder, &.placeholdersjs {
      color: $text;
    }
  }
}
```