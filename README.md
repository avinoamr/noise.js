noise.js
========

A javascript random-noise generation and sampling utility. It uses a simple
implementation of bilinear interpolation to sample a random 3D data array. 
Generaly in computer graphics its advised to use texture sampling in a shader
program but it's sometimes inconivient or impossible: for example, if we wish
to modify the geometry based on this noise texture (Geometry shaders are not 
current supported in WebGL). 


#### Usage

Download the `noise.js` file and include it in your page. Next, you can 
create a Noise object::

```javascript
var n = new Noise( 16, 16, 16 );
```

This creates a 16x16x16 noise data array with random data. The three 
constructor arguments are `width`, `height` and `depth`.

Finally, you can sample the noise for a specific point with the value
being interpolated with its neighboring points::

```javascript
n.sample(  0,  0,  0  ); // 0.9284072476439178
n.sample(  0,  0,  1  ); // 0.3728323532268405
n.sample(  0,  0, .5  ); // 0.6506198004353791
```

See the example that demonstrates how to use this library in practice to
generate a 500x500 image of random noise.
